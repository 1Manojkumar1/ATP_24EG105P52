import {useState} from 'react'

function Counter(){
    //state
    const [count,setCount]=useState(0)

    //functions
    const increment=()=>{
        setCount(count+1)
    }
    const decrement=()=>{
        setCount(count-1)
    }

    const reset=()=>{
        setCount(0)
    }

    const resetTo=(value)=>{
        setCount(value)
    }

    return(
        <div className="text-center text-3xl border border-blue-600 mt-9 m-9">
            <h1 className="m-7">Count: {count}</h1>
            <button className="p-9 bg-emerald-400 rounded-4xl text-3xl mb-3 mr-5 hover:bg-emerald-600" onClick={increment}>Increment</button>
            <button className="p-9 bg-blue-400 rounded-4xl text-3xl mb-3 mr-5 hover:bg-blue-600" onClick={reset}>Reset</button>
            <button className="p-9 bg-red-400 rounded-4xl text-3xl mb-3 hover:bg-red-600" onClick={decrement}>Decrement</button>
            <button className="p-9 bg-blue-800 rounded-4xl text-3xl mb-3 mr-5 hover:bg-blue-600" onClick={()=>resetTo(7)}>Reset to</button>
        </div>
    )
}

export default Counter