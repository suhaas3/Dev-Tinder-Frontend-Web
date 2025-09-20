import './index.css'


function App() {

  return (
    <>
      <div className="h-screen flex items-center justify-center bg-gray-100">
        <div className="p-6 rounded-2xl bg-white shadow-md text-center">
          <h1 className="text-3xl font-bold text-blue-600">
            Hello Tailwind!
          </h1>
          <p className="mt-4 text-gray-700">
            This is a simple example with Tailwind colors 🎨
          </p>
          <button className="mt-6 px-4 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600">
            Click Me
          </button>
        </div>
      </div>
    </>
  )
}

export default App
