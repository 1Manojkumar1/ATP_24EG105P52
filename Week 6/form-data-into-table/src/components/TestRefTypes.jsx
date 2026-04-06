import {useState} from 'react'

function TestRefTypes(){
    const [user,setUser]=useState({username:"Ravi",age:25,city:"Hyd"})
    const [marks,setMarks]=useState([10,20,30])

    //update userState update user details
    const updateUser=()=>{
        setUser({...user,username:"Manoj"})
    }

    //update marks
    const updateMarks=()=>{
        setMarks([...marks,40])
    }

    return (
        <div className="text-3xl m-8 text-center">
            <p>Username: {user.username}</p>
            <p>Age: {user.age}</p>
            <p>City: {user.city}</p>
            <button className="p-5 m-4 bg-blue-500" onClick={updateUser}>Update user</button>
            {
                marks.map((mark,index)=><p key={index}>{mark}</p>)
            }
            <button className="p-5 m-4 bg-amber-500" onClick={updateMarks}>Update marks</button>
        </div>
    )
}

export default TestRefTypes