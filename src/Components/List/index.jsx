import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { StarIcon } from "@heroicons/react/24/solid";
import { StarIcon as FillStarIcon } from "@heroicons/react/24/outline";
import Item from "../Item";


const List = () => {
    const list = useSelector(state => state.task);
    const [lista, setLista] = useState(list);
    const [ favList, setFavList] = useState(false);

    const handleFav = (favorite) => {
        favorite ? setFavList(!favList) : setFavList(!favList)
    }

    const itensFav = lista.filter(item => item.fav === true);

    useEffect(() => {
        setLista(list);
    }, [list]);

    return (
        <>
        <div 
            // className="bg-blue-400 px-3 py-2 text-white font-bold cursor-pointer rounded-xl mb-2"
            onClick={() => handleFav(favList)}
        >
            {favList ? 
                <div className='flex items-center interactive-button'>
                    <StarIcon className='w-10 h-10 mb-2 text-yellow-500 '/>
                    <span className="font-medium text-xl ">Complete</span>
                </div> 
                : <div className="flex items-center interactive-button">
                    <FillStarIcon className='w-10 h-10 mb-2 '/>
                    <span className="font-medium text-xl">Complete</span>
                </div>
            }
        </div>
        <div className='ul-style'>
            <ul className='sm:px-36 xl:px-64 items-center pb-5'>
                {   favList ?
                    itensFav.map(item => <Item key={item.id} {...item}/>)
                    : lista.map(item => <Item key={item.id} {...item} />)
                }
            </ul>
        </div>
        </>
    );
};

export default List;
