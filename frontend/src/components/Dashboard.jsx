import React from 'react'
import TestListPage from './pages/TestListPage'
import './tailwind.css'
import SidebarComp from './components/SidebarComp';
import { DarkModeProvider } from './components/DarkModeContext';



const Dashboard = () => {
  return (
    <>
      
      <div className="flex h-full space-x">
  
  <SidebarComp/>

  <div className='flex-grow p-4 border border-orange-600 overflow-hidden '>
    <div className="grid h-full sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 grid-rows-10 gap-1 grid-auto-rows-auto-cols-min" >
      <div className='sm:row-start-6 sm:row-end-12 lg:col-start-7 lg:col-end-9 border border-orange-600'>
        <TestListPage/>
      </div>
      <div className='border border-orange-600'>
        
      </div>
      <div className='border border-orange-600'>03</div>
      <div className='border border-orange-600'>04</div>
      <div className='border border-orange-600'>05</div>
      <div className='border border-orange-600'>06</div>
      <div className='border border-orange-600'>07</div>
      <div className='border border-orange-600'>08</div>
      <div className='border border-orange-600'>09</div>
      <div className='border border-orange-600'>02</div>
      <div className='border border-orange-600'>03</div>
      <div className='border border-orange-600'>04</div>
      <div className='border border-orange-600'>05</div>
      <div className='border border-orange-600'>06</div>
      <div className='border border-orange-600'>07</div>
      <div className='border border-orange-600'>08</div>
      <div className='border border-orange-600'>09</div>
      <div className='border border-orange-600'>02</div>
      <div className='border border-orange-600'>03</div>
      <div className='border border-orange-600'>04</div>
      <div className='border border-orange-600'>05</div>
      <div className='border border-orange-600'>06</div>
      <div className='border border-orange-600'>07</div>
      <div className='border border-orange-600'>08</div>
      <div className='border border-orange-600'>09</div>
    </div>
  </div>


</div>




    </>
  )
}

export default Dashboard
