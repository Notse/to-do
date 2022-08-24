import './App.css';
import {authentication} from './firebase-config';
import {signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import Todo from './Todo/Todo';
import TodoList from './TodoList/TodoList';
import {useState, useEffect} from 'react'

function App() {
  const [user, setUser] = useState("")
  const [uid, setUid] = useState("")
  const [state, setState] = useState("sign-in")

  const SignInGoogle = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(authentication , provider)
    .then((e) => {
        console.log(e.user)
        setUser(e.user.displayName)
        setState('home')
      })
      .catch((err) => {
        console.log(err)
      })
}

  return (
   <>
    { state === 'sign-in' ? <button onClick={SignInGoogle} className="w-80  bg-black  text-white  p-4 rounded-full sign-in">Sign-In With Google</button> : <TodoList user={user} />}
   </>
  );
}

export default App;
