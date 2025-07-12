import React, {useState} from "react";
import "./styles.css";

export default function App(){
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState("");

const addTask = () =>{
    if(!input.trim()) return;
    setTasks([...tasks,input]);
    setInput("");
};

return(
    <div className="container">
        <h1> Lista de Tareas</h1>
        <div className="form">
            <input value="{input}" onChange={(e)=>setInput(e.target.value)} placeholder="Nueva Tarea" />
                <button onClick="{addTask}">Agregar</button>
        </div>
        <ul>
            {tasks.map((t,i)=>{
                <li key={i}>{t}</li>
            })}
        </ul>
    </div>
);
}