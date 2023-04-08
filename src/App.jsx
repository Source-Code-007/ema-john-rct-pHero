import { Outlet } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav/Nav'
import Products from './components/Products/Products'


function App() {
  return (
    <>
    <Nav></Nav>
    <Outlet></Outlet>
    </>
  )
}

export default App
