import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import About from './pages/about'
import Contact from './pages/contact'
import Itnews from './pages/itnews' 
import Services from './pages/services' 
import Structure from './pages/structure' 
import Vision from './pages/vision' 
import Layout from './pages/admin/Layout' 
import Dashboard from './pages/admin/Dashboard'
import AddBlog from './pages/admin/AddBlog'
import ListBlog from './pages/admin/ListBlog'
import Comments from './pages/admin/Comments'
import Login from './components/admin/Login'
import 'quill/dist/quill.snow.css'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path ='/' element={<Home/>} />
        <Route path ='/blog/:id' element={<Blog/>} />
        <Route path ='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path ='/itnews' element={<Itnews/>} />
        <Route path ='/services' element={<Services/>} />
        <Route path ='/structure' element={<Structure/>} />
        <Route path ='/vision' element={<Vision/>} />

        <Route path ='/admin' element={true ? <Layout/> : <Login/>} > 
          <Route index element ={<Dashboard/>}/>
          <Route path='addBlog' element ={<AddBlog/>}/>
          <Route path='listBlog' element ={<ListBlog/>}/>
          <Route path='comments' element ={<Comments/>}/>
        </Route>
        
      </Routes>
    </div>
  )
}

export default App