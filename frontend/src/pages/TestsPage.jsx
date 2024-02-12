// HomePage.js
import React, { useState } from 'react';
import SidebarComp from '../components/SidebarComp';
import TestListPage from './TestListPage';
import Button from '../components/Button';
import ButtonAccent from '../components/ButtonAccent';
import EventAddPage from './EventAddPage';
import { Link, useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('list'); // 'list' sau 'cards'

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleToggleView = () => {
    setViewMode((prevMode) => (prevMode === 'list' ? 'cards' : 'list'));
  };

  const redirectioneaza = () => {
    console.log("aici")
    navigate("/add_event")
  }
  return (
    <div className="flex h-screen space-x bg-filler"> {/* Setăm înălțimea întregii pagini la înălțimea ecranului */}
      <div className="hidden sm:flex">
        <SidebarComp />
      </div>

      <div className='flex-grow p-4  overflow-hidden'>
        <div className="grid h-full grid-cols-1 sm:grid-cols-2 gap-2">
          <div className=' h-14  col-span-4  flex flex-col items-start justify-end '>
            <div className="flex items-center">
              <div className="relative p-1">
                <input
                  type="text"
                  placeholder="&#128269; Search Event..."
                  value={searchTerm}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="border p-2 pr-56 ml-3 border-accent-1 rounded-3xl w-full bg-bkg hover:border-accent-1 text-content"
                />
              </div>
              {/* <button onClick={handleToggleView} className=" hover:bg-accent-1  h-8 w-24 bg-bkg text-content rounded-2xl ml-4 border border-accent-1 hover:border-accent-2">
                {viewMode === 'list' ? 'Card' : 'Listă'}
              </button> */}
              {viewMode === 'list' ? <Button onClick={handleToggleView} text="Card View" /> : <Button onClick={handleToggleView} text='List View'/>}
              {/* <button  className="  hover:bg-accent-1   h-8 w-24 bg-bkg text-content rounded-2xl ml-2 border border-accent-1 hover:border-accent-2">
                {viewMode === 'list' ? 'Barou' : 'IMN'}
              </button> */}
             
               <Button onClick={() => redirectioneaza()} text='Add Event' />
             
            </div>
          </div>
          <div className={`col-span-4 row-span-8 overflow-y-auto  ${viewMode === 'cards' ? '' : 'flex flex-col '}`}>
            <TestListPage searchTerm={searchTerm} viewMode={viewMode} />
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
