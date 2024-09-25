import './App.css'
import Navbar from './components/Navbar'
import CustomRoutes from './routes'

function App() {

  return (
    <div className='flex'>
      <Navbar />
      <div className='w-[80%]'>
        <CustomRoutes />
      </div>
    </div>
  )
}

export default App
