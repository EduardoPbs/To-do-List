import { useMemo, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { v4 as uuid } from "uuid";
import { addTodo } from "../store/reducers/task";

const Input = () => {
    const [title, setTitle] = useState("");
    const dispatch = useDispatch();
    const titleRef = useRef(null);

    const handleSumbmit = (e) => {
        e.preventDefault();
        dispatch(
            addTodo({
                id: uuid(),
                title: title,
                fav: false,
            })
        );

        setTitle("");
        titleRef.current.focus();
    };

    const element = useMemo(() => <ChevronRightIcon className='send-button' />, [])
    return (
        <form
            className='my-8 flex w-full sm:w-72'
            onSubmit={e => handleSumbmit(e)}
        >
            <input
                className='outline-none px-8 py-2 pl-5 pr-24 sm:rounded-lg text-justify w-full text-xl sm:text-lg focus:ring-2 duration-300'
                type='text'
                value={title}
                ref={titleRef}
                onChange={e => setTitle(e.target.value)}
                />
            <button>
                {element}
            </button>
        </form>
    );
};

export default Input;
