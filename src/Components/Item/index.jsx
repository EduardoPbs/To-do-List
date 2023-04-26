import { useDispatch } from "react-redux";
import { CheckIcon, CheckCircleIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { changeFav, delItem } from "../store/reducers/task";
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
                        className='interactive-button w-16 h-16 sm:w-11 sm:h-11 text-blue-400 -ml-1'
                        onClick={() => favorite(id)}
                    />
                 :  <CheckIcon
                        className='interactive-button w-12 h-12 sm:w-8 sm:h-8 text-gray-500 hover:text-blue-500'
                        onClick={() => favorite(id)}
                    />
                }
                <div className='w-full px-10 py-4'>
                    <span className='font-bold text-xl break-all'>
                        {fav ? <s className='text-gray-500'>{title}</s> : title}
                    </span>
                </div>

                <XMarkIcon
                    className='interactive-button w-11 h-11 hover:text-red-600'
                    onClick={() => deleteItem(id)}
                />
            </div>
        </li>
    );
};

export default memo(Item);
