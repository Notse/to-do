// import './Todo.css'
// import React from 'react';
// import { async } from '@firebase/util';
// import {db} from '../firebase-config';
// import {uid} from 'uid';
// import {set, ref} from 'firebase/database';

// class Todo extends React.Component {

//     constructor(props) {
//         super(props); 
//         this.state = {
//            todoList: 'adat'
//           }
//     }

//     onKey = (e) => {
//         let input = document.querySelector('.todo-input').value;
//         let div = document.createElement("div");
//         let list = document.createElement("li")
//         let data = document.createTextNode(input);        
//         let todoList = document.querySelector('.list');
//         let button = document.createElement("button")
//         let close = document.createTextNode("\u00D7");
//         button.appendChild(close);
//         button.className = 'btn-delete';
//         list.className = "item"
//         div.className = 'todo-item'
//         const uuid = uid();
//         console.log(uuid)
       
//             if(e.type ==='keydown' && e.keyCode === 13 || e.type === 'click') {
//                 list.appendChild(data)
//                 div.appendChild(list)
//                 div.appendChild(button)
//                 todoList.appendChild(div)
//                 document.querySelector('.todo-input').value = ""
//                 let close = document.getElementsByClassName("btn-delete");
//                 for (let i = 0; i < close.length; i++) {
//                 close[i].onclick = () => {
//                     let div = close[i].parentElement;
//                     div.style.display = "none";
//                 }
//                 }
//                 set(ref(db, `/${uuid}`),{   
//                     todoList: input,
//                 })
//                 // this.setState({todoList: input})
//                 list.onclick = (ev) => {
//                     if (ev.target.tagName === 'LI') {
//                         ev.target.classList.toggle('checked');
//                     }
//                 }
//                 // this.PostData(input);
//             }
//     }

//     PostData = async(data) => {
//         // const res = await fetch("https://nikhil-55781-default-rtdb.asia-southeast1.firebasedatabase.app/notse.json",
//         // {
//         //     method: 'POST',
//         //     headers: {
//         //         'Content-Type':'application/json'
//         //     },
//         //     body:JSON.stringify({
//         //         todoList:data,
//         //     })
//         // })
//         // const todoref = firebase.database().ref('Todo');
//     }

//     getData = async() => {
//         const res = await fetch("https://nikhil-55781-default-rtdb.asia-southeast1.firebasedatabase.app/notse.json")
//         .then(res => res.json())
//         .then(data => console.log(data))
//     }

// render () {
//     this.getData();
//     return (
//         <section className="section-todo ">
//             <h1 className="primary-heading text-7xl text-center">Todo List</h1>
//             <h2 className='user-name mt-10 ml-10'>Hello Nikhil kumar</h2>
//             <div className="flex justify-center items-center m-20">
//                 <input onKeyDown={(e) => this.onKey(e)} className="todo-input" type="text" />
//                 <button  onClick={(e) => this.onKey(e)} className='btn-submit'>Enter</button>
//             </div>
//             <div className="todo-list">
//                 <ul className='list'></ul>
//             </div>
//         </section>
//     )
// }
// }

// export default Todo;