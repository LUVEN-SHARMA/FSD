import React, { useState } from 'react'

const App = () => {
  const [Task, setTask] = useState("");
  const [list, setlist] = useState([]);
  const [editidx, seteditidx] = useState(null);
  const addHandler = () => {
    if(editidx !== null){
      // Update
      const updatedlist = [...list];
      updatedlist[editidx] = Task;
      setlist([...updatedlist]);
      seteditidx(null);
    }else{
      // Add
      setlist([...list, Task]);
    }
    setTask("");
    console.log(list);
    
  }

  const deleteHandler = (index) => {
    const updatedList = list.filter((d,i)=> i!= index);
    setlist([...updatedList]);
  }

  const editHandler =(index)=>{
    setTask(list[index]);
    seteditidx(index);
  }
  
  return (
    <div>
      <h1>ToDo List</h1>
      <input value={Task} onChange={(e)=>setTask(e.target.value)}></input>
      <button onClick={addHandler}>ADD</button>
      <br></br>
      {list.map((t, index)=>
      <div key={index}>
        <span>{t}</span>
        <button onClick={()=>editHandler(index)}>EDIT</button>
        <button onClick={()=>deleteHandler(index)}>DELETE</button>
      </div>)}
    </div>
  )
}

export default App