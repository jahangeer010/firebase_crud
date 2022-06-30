
 import { db } from '../components/firebase';
 import {set,ref} from "firebase/database"
 import { useState,useEffect } from 'react';


 export default function ContactForm(props) {
  const [name,setName] = useState()
  const [email,setEmail]= useState()
  const [contact,setContact] = useState()
  const [address,setAddress] = useState()

  const submitValues = (e)=>{
    e.preventDefault()
    const initialFieldValues={
      fullName:name,
      mobile:contact,
      email:email,
      address:address,
    
    }
     
    
    set(ref(db,'Contact'+name),{initialFieldValues})
   
   
    // console.log(initialFieldValues)
    console.log('khkjhjk'+name,email,contact,address)}
  /*
  const initialFieldValues={
    fullName:'',
    mobile:'',
    email:'',
    address:''
  } 

  var [values,SetValues]=useState(initialFieldValues)
const handleInputChange= e=>{
var {name,value}=  e.target
console.log(value)

SetValues({...values,[name]:value})
console.log(values)
}
*/
  return (
     <>
     <form>
      <div className='form-group input-group'>
      <div className='input-group-prepend'>
<div className='input-group-text'>
  < i className='fas fa-user'></i>
    <input className='form-control' placeholder='full Name' name="fullName" value={name} onChange={(e)=>{setName(e.target.value)}}/>
  </div>    </div>  </div>
<div className='form-row'>
<div className='form-group input-group col-md-6'>
      <div className='input-group-prepend'>
<div className='input-group-text'>
  < i className='fas fa-user'></i>
    <input className='form-control' placeholder='Mobile Number' name="m" value={contact} onChange={(e)=>{setContact(e.target.value)}}/>
 
  </div>    </div>  </div>
  <div className='form-group input-group col-md-6'>
      <div className='input-group-prepend'>
<div className='input-group-text'>
  < i className='fas fa-user'></i>
    <input className='form-control' placeholder='Emaill Address' name="Email"value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
 
  </div>    </div>  </div>


</div>
<div className='form-group input-group col-md-6'>
      <div className='input-group-prepend'>
<div className='form-group'>
  <textarea className='form-control' placeholder='Address' name="address" values={address} onChange={(e)=>{setAddress(e.target.value)}}/>
  
    
 
  </div>    </div>  </div>

<div className='form-group'>
  <input type="submit" value="Save" className='btn btn-primary btn-block' onClick={submitValues}/>
   </div>



     </form>
     </>


   )
 }
 