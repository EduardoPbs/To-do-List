import { useDispatch } from "react-redux";
import { CheckIcon, CheckCircleIcon, XMarkIcon, PencilIcon } from "@heroicons/react/24/solid";
import { changeFav, delItem } from "../../store/reducers/task";
import { memo } from "react";

const Item = ({ id, title, fav }) => {
    const dispatch = useDispatch();
    const favorite = () => dispatch(changeFav(id));
    const deleteItem = () => dispatch(delItem(id));

    return (
        <li className='li-style'>
            <div className='flex justify-around h-full items-center'>
                {fav ? 
                    <CheckCircleIcon
                        className='interactive-button w-16 h-16 sm:w-14 sm:h-14 text-blue-400 -ml-1'
                        onClick={() => favorite(id)}
                    />
                 :  <CheckIcon
                        className='interactive-button w-12 h-12 sm:w-10 sm:h-10 text-gray-500 hover:text-blue-500'
                        onClick={() => favorite(id)}
                    />
                }
                <div className='w-full px-10 py-4'>
                    <span className='font-bold text-xl break-all'>
                        {fav ? <s className='text-gray-500'>{title}</s> : title}
                    </span>
                </div>
                
                <div className='flex flex-col'>
                    <PencilIcon className='interactive-button w-8 h-8 mt-2 ml-1'/>

                    <XMarkIcon
                        className='interactive-button w-11 h-11 hover:text-red-600 mb-2 mt-4'
                        onClick={() => deleteItem(id)}
                    />
                </div>
            </div>
        </li>
    );
};

export default memo(Item);
