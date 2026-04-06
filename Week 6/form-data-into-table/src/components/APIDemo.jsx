import {useState,useEffect} from 'react'

function APIDemo() {

    let [count,setCount]=useState(0)

    //change count
    const changeCount=()=>{
        setCount(count+1)
    }

    console.log("API demo rendered")

    //useEffect
    useEffect(()=>{
        console.log("UseEffect executed")
    },[])

    // making api req need to be in waiting until initial rendering 
    //initial render--> display-->api call-->rerender -->display

  return (
    <div className="text-4xl text-center mt-9">
        <p className="text-5xl">Count: {count}</p>
        <button className="bg-amber-600 p-4 m-5" onClick={changeCount}>Change count</button>
    </div>
  )
}

export default APIDemo