function User(props){ // x: {productObj : {}}
    //state
    const {userObj}=props
    //return a react element
    return(
        <div className="p-9 bg-emerald-50 h-100 rounded-3xl shadow-fuchsia-700">
            <div>
                <img src={userObj.image} alt="image" className="mx-auto mt-4 rounded-3xl"/>
                <p className="text-rose-600 text-center mt-10 font-bold text-4xl">{userObj.name}</p>
                <p className="text-emerald-700 text-center mt-11">{userObj.email}</p>
            </div>
        </div>
    )
}
export default User