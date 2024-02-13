import React, {useState} from 'react';
import { GoPlusCircle} from "react-icons/go";
import Todo from './Todo';

const style = {
  bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#854f6c] to-[#fbe4d8]`,
  heading: `text-5xl`
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
      </div>
    </div>
  );
}

export default App;
