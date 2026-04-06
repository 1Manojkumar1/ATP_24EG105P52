import {useState,useEffect} from 'react'

function APIDemoFetch() {

    console.log("API Demo rendered")
    let [users,setUsers]=useState([])
    let [loading,setLoading]=useState(false)
    let [error,setError]=useState(null)
    
    useEffect(()=>{
        console.log("UseEffect rendered")
        //a function to make api request
        async function getData(){
            //set loading to true
            setLoading(true)
            try{
                let results=await fetch("https://jsonplaceholder.typicode.com/users")
                let usersList=await results.json()
                //update state
                setUsers(usersList)
            }
            catch(err){
                console.log("Error is : ",err)
                //update error state
                setError(err)
            }
            finally{
                setLoading(false)
            }
        }
        getData()
    },[])

    //deal with loading state
    if(loading){
        return <p className="text-3xl text-center mt-60">Loading...</p>
    }

    //deal with error state
    if(error!==null){
        return <p>{error.message}</p>
    }

  return (
    <div className="text-center mt-9">
        <h1 className="text-center text-4xl text-blue-600 mb-8 font-semibold">Users</h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                users.map((userObj)=>(
                    <div className="border-3 border-blue-600 p-5 m-5 text-2xl" key={userObj.id}>
                        <p className="font-semibold">{userObj.username}</p>
                        <p className="font-sans">{userObj.email}</p>
                        <p className='font-thin'>{userObj.phone}</p>
                        <p>{userObj.website}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default APIDemoFetch