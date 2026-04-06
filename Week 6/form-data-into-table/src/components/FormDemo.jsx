import {useForm} from 'react-hook-form'


function FormDemo() {
    const {register,handleSubmit,formState:{errors}}=useForm()

    //form submit function
    const onFormSubmit=(obj)=>{
        console.log(obj);
    }
  return (
    <div className="text-2xl m-9">
        <h1 className='text-center text-3xl font-bold'>Form Demo</h1>
        {/* form */}
        <form className='max-w-md mx-auto mt-10' onSubmit={handleSubmit(onFormSubmit)}>
            <div className="mb-3">

                {/* username */}
                <label htmlFor="username">Username</label>
                <input type="text"
                {...register("username",
                    {
                        required:"Username required",
                        minLength:4,
                        validate:(v)=>v.trim().length!==0 || "Whitespace is not allowed"
                    })
                }
                    id="username" className="border w-full p-1"/>
                {/* username validation error message */}
                {
                    errors.username?.type==="required" && <p className="text-red-600 text-xl">{errors.username.message}</p>
                }
                {
                    errors.username?.type==="minLength" && <p className="text-red-600 text-xl">min length should be 4</p>
                }
                {
                    errors.username?.type==="validate" && <p className="text-red-600 text-xl">{errors.username.message}</p>
                }

                {/* Email */}
                <label htmlFor="email">Email</label>
                <input type="email" {...register("email")} id="email" className="border w-full p-1"/>
                <button type="submit" className="p-3 bg-cyan-400 block mx-auto mt-3">Submit</button>
            </div>
        </form>
    </div>
  )
}

export default FormDemo