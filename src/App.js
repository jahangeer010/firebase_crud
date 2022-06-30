import logo from './logo.svg';
import './App.css';
import { db } from './components/firebase';
import {set,ref, onValue, DataSnapshot,remove} from "firebase/database"
import { useState,useEffect } from 'react';
// import {uid} form "uid"
import Contacts from './components/Contacts';



function App() {  
  const [todo,setTodo]=useState("")
const [todos,setTodos]=useState([]);
const [isEdit,SetEdit]=useState(false)
const [tempUid,SetTempUid]=useState("")
const handleTOdoChange=(e)=>{
    setTodo(e.target.value)

  }
//write



// const initialFieldValues={
//   fullName:"Sy1ed Jahangeer  ",
//   mobile:"upd1arte",
//   email:"abssss1sc@gmail.com",
//   address:"new data1"
// } 
// const database=initialFieldValues

const writeToDatabase=()=>{
const uid=10*todo.length
  
  set(ref(db,`/${uid}`,),{
    
    todo,
    uid
    // ...database
    
  })
  setTodo('')
}
//read
useEffect(()=>{
  onValue(ref(db),(snapshot)=>{
    setTodos([]);
    const data=snapshot.val();
    if(data!==null){
      Object.values(data).map((todo)=>{
        setTodos(oldAry=>[...oldAry,todo])

      })
    }
  })
},[])
//update
const handleUpdate=()=>{
  SetEdit(true);
}

//delete
const handleDelete=(todo)=>{
    
  remove(ref(db,`/${todo.uid}`))
}

  return (
   <>
   <div className='row'>
<div className='col-md-8 offset-md-1'>

  <input type="text" value={todo} onChange={handleTOdoChange}/>
{isEdit?(<><button onClick={writeToDatabase}>submit Change</button> <button onClick={()=>SetEdit(false)}>X</button></>):
(<button onClick={writeToDatabase}>submit</button>)}

{todos.map((todo)=>(<>  
<h1>{todo.todo}</h1>
<button onClick={()=>handleUpdate(todo)}>update</button>
<button onClick={()=>handleDelete(todo)}>delete</button>
</>))}
//comment contact form
{/* <Contacts/> */}


</div>


   </div>
   
   </>
  );
} 

export default App;
