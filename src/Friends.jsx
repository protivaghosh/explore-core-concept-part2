import { useEffect, useState } from 'react'
import './Friend.css'
export default function Friends(){
const [Friend, setFriend] =useState([])

useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setFriend(data))
},[])

    return(
        <div className='box'>
            <h3>Friends:{Friend.length}</h3>
        </div>
    )
}