import {useForm} from 'react-hook-form'
import {useState} from 'react'

function FormHandsOn(){
    let [users,setUser]=useState([])
    const {register,handleSubmit,formState:{errors}}=useForm()

    const onFormSubmit=(obj)=>{
        setUser([...users,obj])
    }
    return(
        <div>
            <div className="text-2xl m-9">
        <h1 className='text-center text-3xl font-bold'>Form Demo HandsOn</h1>
        {/* form */}
        <form className='max-w-md mx-auto mt-10' onSubmit={handleSubmit(onFormSubmit)}>
            <div className="mb-3">

                {/* username */}
                <label htmlFor="firstName">FirstName</label>
                <input type="text"
                {...register("firstName",
                    {
                        required:"FirstName required",
                        validate:(v)=>v.trim().length!==0 || "Whitespace is not allowed"
                    })
                }
                    id="firstName" className="border w-full p-1"/>
                {/* firstname validation error message */}
                {
                    errors.firstName?.type==="required" && <p className="text-red-600 text-xl">{errors.firstName.message}</p>
                }
                {
                    errors.firstName?.type==="minLength" && <p className="text-red-600 text-xl">min length should be 4</p>
                }
                {
                    errors.firstName?.type==="validate" && <p className="text-red-600 text-xl">{errors.firstName.message}</p>
                }

                {/* Email */}
                <label htmlFor="email">Email</label>
                <input type="email"
                {...register("email",
                    {
                        required:"email required",
                        validate:(v)=>v.trim().length!==0 || "Whitespace is not allowed"
                    })
                }
                id="email" className="border w-full p-1"/>
                {/* email validation error message */}
                {
                    errors.email?.type==="required" && <p className="text-red-600 text-xl">{errors.email.message}</p>
                }
                {
                    errors.email?.type==="minLength" && <p className="text-red-600 text-xl">min length should be 4</p>
                }
                {
                    errors.email?.type==="validate" && <p className="text-red-600 text-xl">{errors.email.message}</p>
                }

                {/* Date of Birth */}
                <label htmlFor="dob">dateOfBirth</label>
                <input type="date"
                {...register("dob",
                    {
                        required:"dob required",
                        validate:(v)=>v.trim().length!==0 || "Whitespace is not allowed"
                    })
                }
                id="dob" className="border w-full p-1"/>
                {/* email validation error message */}
                {
                    errors.dob?.type==="required" && <p className="text-red-600 text-xl">{errors.dob.message}</p>
                }
                {
                    errors.dob?.type==="minLength" && <p className="text-red-600 text-xl">min length should be 4</p>
                }
                {
                    errors.dob?.type==="validate" && <p className="text-red-600 text-xl">{errors.dob.message}</p>
                }
                <button type="submit" className="p-3 bg-cyan-400 block mx-auto mt-3">Add User</button>
            </div>
        </form>
    </div>

    <div className="mt-10 px-4">
        <h2 className="text-center text-2xl mb-4">List of Users</h2>
        <div>
            <table className="mx-auto border border-black">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="border px-4 py-2">First Name</th>
                        <th className="border px-4 py-2">Email</th>
                        <th className="border px-4 py-2">Date of Birth</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user,index) => (
                        <tr key={index} className="text-center">
                            <td className="border px-4 py-2">{user.firstName}</td>
                            <td className="border px-4 py-2">{user.email}</td>
                            <td className="border px-4 py-2">{user.dob}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
</div>
)
}
export default FormHandsOn