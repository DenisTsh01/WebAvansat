import React, { useState,useEffect } from 'react';
import { Link,  useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../actions/auth';
import SidebarComp from '../components/SidebarComp';

const EventCreate= ({  isAuthenticated, userId ,accessToken}) => {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    user: userId,
    title: '',
    location: '',
    description: '',
    joined: '',
  
  });

  const { title, location, description, joined , user} = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {

    e.preventDefault();
    console.log(formData)
    console.log(accessToken)
      const token = accessToken;
      const response = await fetch('http://127.0.0.1:8000/api/create_event/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + String(token),
        },
        body: JSON.stringify(formData),
      });

      // if (!response.ok) {
      //   throw new Error('Network response was not ok');
      // }
      const data = await response.json();
      console.log('Success:', data);
      // Aici puteți adăuga logica pentru tratarea răspunsului
      navigate("/teste")
    
    //  catch (error) {
    //   console.error('Error:', error);
    //   // Aici puteți adăuga logica pentru tratarea erorii
    // }
  // };
    };

  return (
    <div className="flex h-full space-x bg-filler">
       <div className="hidden sm:flex">
      <SidebarComp />
      </div>
      <div className="flex-grow p-4 border border-orange-600 overflow-hidden flex items-start justify-center">
   
   <div className="col-span-2 lg:col-span-3 sm:mt-20 mt-0 bg-bkg text-content rounded-3xl p-10">
            <div className="border-orange-600 p-4 ">
              <h1 className="text-2xl font-bold mb-2">Create Event</h1>
              <p className=" ">Title</p>
              <form onSubmit={(e) => onSubmit(e)} className="">
                <div className="mb-4 ">
                  <input
                    className="w-full px-3 py-2 border border-gray-300 text-black rounded-md"
                    type="text"
                    placeholder="Title"
                    name="title"
                    value={title}
                    onChange={(e) => onChange(e)}
                    minLength="4"
                    required
                  />
                </div>
                <p className=" ">Location</p>
                <div className="mb-4">
                  <input
                    className="w-full px-3 py-2 border border-gray-300  text-black rounded-md"
                    type="text"
                    placeholder="Location"
                    name="location"
                    value={location}
                    onChange={(e) => onChange(e)}
                   
                    required
                  />
                </div>
                <p className=" ">Short Description</p>
                <div className="mb-4">
                  <input
                    className="w-full px-3 py-2 border border-gray-300  text-black rounded-md"
                    type="text"
                    placeholder="Description"
                    name="description"
                    value={description}
                    onChange={(e) => onChange(e)}
                    required
                  />
                </div>
                <p className=" ">Attendents Expected:</p>
                <div className="mb-4">
                  <input
                    className="w-full px-3 py-2 border border-gray-300  text-black rounded-md"
                    type="number"
                    placeholder="Attendens Expected:"
                    name="joined"
                    value={joined}
                    onChange={(e) => onChange(e)}
                    required
                  />
                </div>
                <button className="bg-yellow-400 text-white hover:bg-yellow-500 px-4 py-2 rounded-md" type="submit">
                  Create Event
                </button>
              </form>
              
              
              
            </div>
          </div>
      
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  userId: state.auth.user ? state.auth.user.id : '',
  accessToken: state.auth.access,
}); 

export default connect(mapStateToProps, ) (EventCreate);
