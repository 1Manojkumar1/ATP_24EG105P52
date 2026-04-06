import { useContext } from 'react'
import { counterContextObj } from './contexts/ContextProvider.jsx'

function App() {
    const { counter, increment, decrement } = useContext(counterContextObj)

    return (
        <div className="grid grid-cols-2 m-20 bg-white gap-20">

            <div className="bg-amber-200">
                <h1 className="text-5xl flex justify-center mb-10">{counter}</h1>
                <div className="flex justify-around mb-10">
                    <button onClick={increment} className="p-4 bg-green-400 text-5xl">+</button>
                    <button onClick={decrement} className="p-4 bg-red-500 text-5xl">-</button>
                </div>
            </div>

            <div className="bg-amber-200">
                <h1 className="text-5xl flex justify-center mb-10">{counter}</h1>
                <div className="flex justify-around mb-10">
                    <button onClick={increment} className="p-4 bg-green-400 text-5xl">+</button>
                    <button onClick={decrement} className="p-4 bg-red-500 text-5xl">-</button>
                </div>
            </div>

            <div className="bg-amber-200">
                <h1 className="text-5xl flex justify-center mb-10">{counter}</h1>
                <div className="flex justify-around mb-10">
                    <button onClick={increment} className="p-4 bg-green-400 text-5xl">+</button>
                    <button onClick={decrement} className="p-4 bg-red-500 text-5xl">-</button>
                </div>
            </div>

            <div className="bg-amber-200">
                <h1 className="text-5xl flex justify-center mb-10">{counter}</h1>
                <div className="flex justify-around mb-10">
                    <button onClick={increment} className="p-4 bg-green-400 text-5xl">+</button>
                    <button onClick={decrement} className="p-4 bg-red-500 text-5xl">-</button>
                </div>
            </div>

        </div>
    )
}

export default App