import React, { useRef } from 'react';
import { AiFillEdit } from 'react-icons/ai';
import { IoCheckmarkDoneSharp, IoClose } from 'react-icons/io5';

const TodoItem = (props) => {
    const {item, completeTodo, removeTodo } = props;

    const inputRef = useRef(true);
    const changeFocus = () => {
        inputRef.current.disabled = false;
        inputRef.current.focus();
    }

    const update = (id,value,e) => {
        if(e.which === 13){
            props.updateTodo({id, item: value });
            inputRef.current.disabled = true;
        }
    }
    return (
            <li key={item.id} className='card'>
            <textarea ref={inputRef} disabled={inputRef} defaultValue={item.item} onKeyPress={(e) => update(item.id, inputRef.current.value, e)}/> {" "} 
           <div className="btn">
           <button title='Edit' onClick={() => changeFocus()}><AiFillEdit /></button>{" "}
            {
                item.completed === false && (<button title='Complete' style={{ color: "green"}} onClick={() => completeTodo(item.id)} > <IoCheckmarkDoneSharp /></button>)
            }
            <button title='Delete'  style={{ color: "red"}} onClick={() => removeTodo(item.id)}><IoClose /></button>{" "}
           </div>
           {item.completed && <span className='completed'>Done</span>}
            </li>
    );
};

export default TodoItem;