function Product(props){ // x: {productObj : {}}
    //state
    const {productObj}=props
    //return a react element
    return(
        <div className="border border-amber-400 p-9 border-l-8 border-b-5 bg-emerald-50">
            <div>
                <h1 className="text-2xl">{productObj.title}</h1>
                <p className="text-rose-600">{productObj.price}</p>
                <p className="text-emerald-700">{productObj.description}</p>
            </div>
        </div>
    )
}
export default Product