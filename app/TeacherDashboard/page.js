import React from 'react'
import SideBar from '@/components/SideBar.js'

const page = () => {
  return (
    <main className='flex items-center h-screen w-full'>
        <SideBar/>
        <div className="mainContent"></div>
    </main>
  )
}

export default page
