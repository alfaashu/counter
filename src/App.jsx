import { useState } from "react"

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl hover:ring-4 hover:ring-blue-300 transition duration-700 hover:ring-opacity-50">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Counter App</h1>

      <div className="text-center mb-6">
        <p className="text-5xl font-bold text-indigo-600">Count: {count}</p>
      </div>

      <div className="flex justify-between">
        <button className="px-6 py-3 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition duration-200 shadow-md hover:shadow-lg active:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50" onClick={() => setCount(count+1)}>Increment</button>

        <button className="px-6 py-3 bg-gray-500 text-white font-medium rounded-lg hover:bg-gray-600 transition duration-200 shadow-md hover:shadow-lg active:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50" onClick={()=> setCount(0)}>Reset</button>

        <button className="px-6 py-3 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 transition duration-200 shadow-md hover:shadow-lg active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50" onClick={() => setCount(count-1)}>Decrement</button>
        
      </div>
      <p className="text-center text-gray-500 mt-6 text-sm">Click buttons to change the counter value</p>
      
    </div>
  )
}

export default Counter