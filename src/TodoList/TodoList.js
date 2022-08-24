import '../Todo/Todo.css'
import React from 'react';
import { async } from '@firebase/util';
import {db} from '../firebase-config';
import {uid} from 'uid';
import {set, ref, onValue, update, remove} from 'firebase/database';
import {useState, useEffect} from 'react'

function TodoList({user}) {
    const [todo , setTodo] = useState("");
    const [classes , setClass] = useState("");
    const [todos , setTodos] = useState([]);
    const [isUpdate , setIsEdit] = useState(false);
    const [tempUuid, setTempUuid] = useState("");
    
    const handleTodo =  (e) => {
        setTodo(e.target.value)
    }

    // read
    useEffect(() => {
        onValue(ref(db), (snapshot) => { 
            setTodos([]);   
            const data = snapshot.val();
            if(data !== null){
                Object.values(data).map(todo => {
                    return setTodos((oldArray) => [...oldArray, todo]);
                })
            }
        })
    }, [])
    
    // update
    const handleUpdate = (ev, todo) => {
        const list = document.querySelector('li');
        setIsEdit(true)
        setTempUuid(todo.uuid)
        setTodo(todo.todo)
        ev.target.classList.toggle('checked')
        // ev.target.tagName.classList.toggle('checked');
        if(!ev.target.classList.contains('checked')){
            setClass("")
            console.log('contains')
        } else {
            setClass('checked')
            console.log('Not contains')
        }

       
    }

    const write = (e) => {
        if((e.type ==='keydown' && e.keyCode === 13 && todo !== "") || (e.type === 'click' && todo !== "")){
            const uuid = uid();
            set(ref(db, `/${uuid}`),{   
                todo,
                classes,
                uuid,
            })
            setTodo("");
        }
    }

    const handleDel = (ev) => { 
        if(isUpdate){
            update(ref(db, `/${tempUuid}`), {
                todo,
                classes,
                uuid: tempUuid,
            })
        } 
        alert("item saved")
        setTodo("");
        setIsEdit(false)
    }

    const close = (todo) => {
        remove(ref(db, `/${todo.uuid}`))
    }

    return (
        <section className="section-todo ">
            <h1 className="primary-heading text-7xl text-center">Todo List</h1>
            <h2 className='user-name mt-10 ml-10'>Hello {user}</h2>
            <div className="flex justify-center items-center m-20">
                <input value={todo} onKeyDown={(e) => write(e)} onChange={handleTodo} className="todo-input" type="text" />
                <button  onClick={(e) => write(e)} className='btn-submit'>Enter</button>
            </div>
            <div className="todo-list">
                <ul className='list'>
                {todos.map((todo, i) => {
                return <>
                        <div className='todo-item' >
                            <li className={`item ${todo.classes}`} onClick={(ev) => handleUpdate(ev,todo)} key={i} >{todo.todo}</li>
                            <button onClick={() => close(todo)} className='btn-delete'>&#10006;</button>
                            <button onClick={(ev) => handleDel(ev)} className='btn-update'>Save</button>
                            {/* {console.log(todo.classes)} */}
                        </div>   
                        </>
                    })}
                </ul>
            </div>
        </section>
    )
}

export default TodoList;