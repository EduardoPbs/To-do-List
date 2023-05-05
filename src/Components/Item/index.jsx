import { useDispatch } from "react-redux";
import {
    CheckIcon,
    CheckCircleIcon,
    XMarkIcon,
    PencilIcon,
} from "@heroicons/react/24/solid";
import { changeFav, delItem, changeItem } from "../../store/reducers/task";
import { memo, useState } from "react";

const Item = ({ id, title, fav }) => {
    const dispatch = useDispatch();
    const [editMode, setEditMode] = useState(false);
    const [newValue, setNewValue] = useState(title);

    const titleComponent = (
        <>{fav ? <s className='text-gray-500'>{title}</s> : title}</>
    );

    return (
        <li className='li-style'>
            <div className='flex justify-around h-full items-center'>
                {fav ? 
                    <CheckCircleIcon
                        className='interactive-button w-16 h-16 sm:w-14 sm:h-14 text-blue-400 -ml-1'
                        onClick={() => dispatch(changeFav(id))}
                    />
                 : 
                    <CheckIcon
                        className='interactive-button w-12 h-12 sm:w-10 sm:h-10 text-gray-500 hover:text-blue-500'
                        onClick={() => dispatch(changeFav(id))}
                    />
                }
                <div className='w-full px-10 py-4'>
                    <span className='font-bold text-xl break-all'>
                        {editMode ? 
                            <input
                                type='text'
                                value={newValue}
                                onChange={e => setNewValue(e.target.value)}
                                className='px-2 py-6 w-full rounded-lg outline-none bg-slate-200 shadow-inner focus:ring-2 duration-300 font-normal'
                            />
                         : titleComponent
                        }
                    </span>
                </div>

                <div className='flex flex-col'>
                    {editMode ? 
                        <CheckCircleIcon
                            className='interactive-button w-9 h-9 mt-1 ml-1 hover:text-blue-400'
                            onClick={() => {
                                setEditMode(false);
                                dispatch(changeItem(
                                    {id, item: { title: newValue }, fav}
                                ));
                            }}
                        />
                     : 
                        <PencilIcon
                            className='interactive-button w-8 h-8 mt-2 ml-1 hover:text-zinc-600'
                            onClick={() => setEditMode(true)}
                        />
                    }
                    <XMarkIcon
                        className='interactive-button w-11 h-11 hover:text-red-600 mb-2 mt-4'
                        onClick={() => dispatch(delItem(id))}
                    />
                </div>
            </div>
        </li>
    );
};

export default memo(Item);
