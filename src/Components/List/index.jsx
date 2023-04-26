import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Item from "../Item";


const List = () => {
    const list = useSelector(state => state.task);
    const [lista, setLista] = useState(list);

    useEffect(() => {
        setLista(list);
    }, [list]);

    return (
        <div className='ul-style'>
            <ul className='sm:px-36 xl:px-64 items-center pb-5'>
                {lista.map(item => <Item key={item.id} {...item} />)}
            </ul>
        </div>
    );
};

export default List;
