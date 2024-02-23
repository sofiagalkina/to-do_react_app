import React, {useState, useEffect} from 'react';
import { GoPlusCircle} from "react-icons/go";
import Todo from './Todo';
import {db} from './firebase';
import {query, collection, onSnapshot, updateDoc, doc, addDoc, deleteDoc} from 'firebase/firestore';
import { GoPlus } from "react-icons/go";


const style = {
  bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#854f6c] to-[#fbe4d8]`,
  container: `bg-slate-100 max-w-[600px] w-full m-auto rounded-md shadow-xl p-4`,
  heading: `text-5xl text-center text-gray-800 `,
  form: `flex justify-between`,
  input: `border p-2 w-full text-xl`,
  button: ` ml-2`,
  count: `text-center p-2`,
  

}


function App() {

const [todos, setTodos] = useState([]);
const [input, setInput] = useState('');

// create todo
const createTodo = async (e) => {
  e.preventDefault(e)
  if (input === ''){
    alert('enter a valid task')
    return
  }
  await addDoc(collection(db, 'todos'),{
    text: input,
    completed: false,

  })
  setInput('')

};



//read todo
useEffect(()=> {
  const q = query(collection(db, 'todos'))
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    let todosArr = []
    querySnapshot.forEach((doc) => {
      todosArr.push({...doc.data(), id: doc.id})
    });
    setTodos(todosArr)
  })
  return () => unsubscribe()
}, [])


// update todo 
const toggleComplete = async (todo) => {
    await updateDoc(doc(db, 'todos', todo.id),{
      completed: !todo.completed
    })
}


// delete todo
const deleteTodo = async (id) => {
  await deleteDoc(doc(db, 'todos', id))
}





  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h3 className={style.heading}>To-Do App </h3>
        <form onSubmit={createTodo} className={style.form}>
          <input value={input} onChange={(e) => setInput(e.target.value)} className={style.input} type='text' placeholder='add a task ...'/>
          <button className={style.button}><GoPlusCircle size={30} /></button>
        </form>

        <ul className={style.ul}>
          {todos.map((todo, index)=> (
            <Todo key={index} todo={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo}/>
          ))}
           
        </ul>
        <p className={style.count}>{`You have ${todos.length} tasks `}</p>
      </div>
    </div>
  );
}

export default App;
