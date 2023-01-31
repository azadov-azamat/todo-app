import React from 'react'
import CreateTodo from "./component/create-todo"
import ListTodo from "./component/list-todo"
import "./index.css"
import CountItems from "./component/count-items";

function App() {

    return (
        <div className="flex flex-col w-full h-screen items-center justify-center border border-black">
           <div className="w-[687px] h-auto">
               <h1 className="my-5 text-center text-3xl font-bold">
                   MY TO DO LIST
               </h1>
               <CreateTodo/>
               <CountItems/>
               <ListTodo/>
           </div>
        </div>
    );
}

export default App;
