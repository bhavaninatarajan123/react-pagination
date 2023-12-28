import React,{useEffect, useState} from 'react';

import axios from 'axios';



function Methods(){


const [users,setUsers]=useState([]);
const[name,setName]=useState("")

useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users/2")
    .then((res)=>{
        setUsers(res.data)
        console.log(users)
         console.log(res.data)
    })
},[])

const postData=(e)=>{
e.preventDefault()
    axios.post("https://jsonplaceholder.typicode.com/users",{name:name})
    .then((res)=>{
        // console.log(res.data)
        setUsers([...users,res.data])
    })
    console.log("post data")

}


const updateData=(e)=>{
    e.preventDefault()
        axios.patch(`https://jsonplaceholder.typicode.com/users/${2}`,{name:name})
        .then((res)=>{
             console.log(res.data)
            setUsers(res.data)
        })
        console.log("update data")
    
    }

    const deleteData=(e)=>{
        e.preventDefault()
            axios.delete(`https://jsonplaceholder.typicode.com/users/${2}`,{name:name})
            .then((res)=>{
                 console.log(res.data)
                setUsers(res.data)
            })
            console.log("delete data")
        
        }
    return(
        <div>
            {/* {
                users.map((user)=>(
                    <div key={user.id}>
                        <p>name : {user.name}</p>
                        {/* <p>username  : {user.username}</p>
                        <p>user email : {user.email}</p> */}

                    {/* </div>
                ))
            } */} 

            {users.name}
            <input type='text' value={name}  onChange={(e)=>setName(e.target.value)}/> 

            <button onClick={postData}>post </button>

            <button onClick={updateData}>update </button>
            <button onClick={deleteData}>delete </button>
        </div>
    )
}
export default Methods ;