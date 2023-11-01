import React from 'react'
import {Outlet,Link,NavLink,useLocation}from 'react-router-dom'

const Layaout = () => {
    const location= useLocation()


  return (
    <div className='md:flex md:min-h-screen'>
        <aside className='md:w-1/4 bg-blue-600 px-5 py-10'>
            <h2 className='text-4xl font-black text-center text-white'>crm-clientes</h2>
            <nav className='mt-10'>
                <Link className={`${location.pathname==='/' ? 'text-blue-300':'text-white'} text-2xl block mt-2 hover:text-blue-300 text-white`} to='/'>Clientes</Link>
                <Link className={`${location.pathname==='/clientes/nuevo' ? 'text-blue-300':'text-white'} text-2xl block mt-2 hover:text-blue-300 text-white`} to='/clientes/nuevo'>Nuevo Cliente</Link>
                
            </nav>
        </aside>
       <main className='md:w-3/4 p-10 md:h-screen overflow-scroll'>
            <Outlet/>

       </main>
    </div>
  )
}

export default Layaout