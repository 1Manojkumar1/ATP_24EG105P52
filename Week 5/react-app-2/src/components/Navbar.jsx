function Navbar(){
    return(
        <div className="flex justify-between bg-slate-500 text-amber-50 p-7">
            <h1>LOGO</h1>
            <ul className="flex gap-9">
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </div>
    )
}
export default Navbar