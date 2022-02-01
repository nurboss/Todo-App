import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../redux/reduchers';

const mapStateToProps = (state) => {
    return {
        todo: state,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (obj) => dispatch(addTodo(obj)),       
    }
}


const Todo = (props) => {
    const [ todo, setTodo] = useState("");

    

    const handleChange = (e) => {
    setTodo(e.target.value);
    }

    const add = () => {
        props.addTodo({
            id: Math.floor(Math.random()*1000),
            item: todo,
            completed: false
        }) 
        setTodo("");
    }
    return (
        <div className='addTodo' > 
            <input type="text" onChange={(e) =>  handleChange(e)} className='todo-input' 
            value={todo}
            />
            <button onClick={ () => add()} 
            className='add-btn'>Add</button>
            
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);