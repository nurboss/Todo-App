import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo, completeTodo, removeTodo, updateTodo } from '../redux/reduchers';
import TodoItem from './TodoItem';

const mapStateToProps = (state) => {
    return {
        todo: state,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (obj) => dispatch(addTodo(obj)),
        removeTodo: (id) => dispatch(removeTodo(id)),
        updateTodo: (obj) => dispatch(updateTodo(obj)),
        completeTodo: (id) => dispatch(completeTodo(id)),
        
    }
}


const DisplayTodo = (props) => {
    const [ sort, setSort] = useState("active")
    return (
        <div className='displaytodo'>
            <div className="buttons">
                <button onClick={() => setSort("active")}>Active</button>
                <button onClick={() => setSort("completed")}>Completed</button>
                <button onClick={() => setSort("all")}>All</button>
            </div>          
            <ul>
                {
                    props.todo.length > 0 && sort === "active" ?
                    props.todo.map(item => {
                        return(
                            item.completed === false &&
                            <TodoItem
                            key={item.id}
                            item ={item}
                            removeTodo={props.removeTodo}
                            updateTodo={props.updateTodo}
                            completeTodo={props.completeTodo}
                            ></TodoItem>
                        )
                    }) : null}
                    {
                    props.todo.length > 0 && sort === "completed" ?
                    props.todo.map(item => {
                        return(
                            item.completed === true &&
                            <TodoItem
                            key={item.id}
                            item ={item}
                            removeTodo={props.removeTodo}
                            updateTodo={props.updateTodo}
                            completeTodo={props.completeTodo}
                            ></TodoItem>
                        )
                    }) : null}
                    {
                    props.todo.length > 0 && sort === "all" ?
                    props.todo.map(item => {
                        return(
                            <TodoItem
                            key={item.id}
                            item ={item}
                            removeTodo={props.removeTodo}
                            updateTodo={props.updateTodo}
                            completeTodo={props.completeTodo}
                            ></TodoItem>
                        )
                    }) : null}

            </ul>           
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodo);