import React, {useState} from 'react';
import { GoPlusCircle} from "react-icons/go";
import Todo from './Todo';

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

const [todos, setTodos] = useState(['learn how to walk', 'stop drinkoing reign'])

  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h3 className={style.heading}>To-Do App </h3>
        <form className={style.form}>
          <input className={style.input} type='text' placeholder='add a task ..'/>
          <button className={style.button}><GoPlusCircle size={30} /></button>
        </form>

        <ul>
          {todos.map((todo, index)=> (
            <Todo key={index} todo={todo}/>
          ))}
          <Todo />
        </ul>
        <p className={style.count}>You have 2 todos</p>
      </div>
    </div>
  );
}

export default App;
