import React, { useState, useEffect, useRef } from 'react';
import { checkAuthenticated, load_user } from '../actions/auth';
import { connect } from 'react-redux';
import ButtonAccent from '../components/ButtonAccent';
import EventHistory from '../components/EventHistory';
import ButtonAccent2 from '../components/ButtonAccent2';

const TestListPage = ({ accessToken, load_user, isAuthenticated, searchTerm, viewMode , lastName}) => {
  const [tests, setTests] = useState([]);
  const [showHistory, setShowHistory] = useState(false);
  const [selectedTest, setSelectedTest] = useState(null);

  useEffect(() => {
    getTests();
  }, []);


  const handleShowHistory = (test) => {
    setShowHistory(true);
    setSelectedTest(test);
  };

  const handleCloseHistory = () => {
    setShowHistory(false);
    setSelectedTest(null);
  };

  const getTests = async () => {
    const token = accessToken;
    console.log(token)
    const response = await fetch('http://127.0.0.1:8000/api/events/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + String(token),
      },
    });

    const data = await response.json();
    // console.log('DATAmea: ', data);
    setTests(data);
    console.log(data)
  };

  const filteredTests = tests.filter((test) => {
    return test && test.title && test.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const showHistoryRef = useRef(false);


  return (<>


<div className={`cursor-pointer p-4   ${viewMode === 'cards' ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ' : 'flex flex-col'}`}>
      {filteredTests.map((test, index) => (
        <div key={index} className={` bg-bkg border shadow-lg  border-accent-1 hover:border-accent-3 ${viewMode === 'cards' ? 'p-4 rounded-2xl' : 'p-3 border   mb-2 rounded-2xl flex flex-row justify-between items-center'}`}>
          <div className={` text-content ${viewMode === 'cards' ? ' mb-4' : ''}`}>
            <h3 className={`font-bold  text-lg mb-2 ${viewMode === 'cards' ? 'text-content' : 'text-content'}`}>{test && test.title}</h3>
            {viewMode === 'cards' ? (
              <div >
              
                        <div class="px-1 py-1 justify-self-center">
                        
                          <p> People expected:{test && test.joined}</p>
                          <p className="mb-1 " >Organised by {test && test.user}</p>
                          
                          <ButtonAccent  onClick={() => handleShowHistory(test)}  text="Event Details"/>
                         
                          <ButtonAccent2  onClick={() => handleShowHistory(test)}  text="Join"/> 
                         
                         

                        </div>
              
              </div>
            ) : (
              <div className="flex ">
               
                <p className="mr-4 mt-2">People expected: {test && test.joined}</p>
                <p className="mr-4 mt-2">Organised by {test && test.user} </p>
               
                <ButtonAccent onClick={() => handleShowHistory(test)  }  text="Event Details"/>
               
                <ButtonAccent2  onClick={() => handleShowHistory(test)}  text="Join"/>
              
           


                
              </div>
            )}
          </div>
        </div>
      ))}

{showHistory && (
        <EventHistory selectedTest={selectedTest} onClose={handleCloseHistory}  showHistory={showHistory} />

        )}
    </div>
    </>
  );
};


const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  firstName: state.auth.user ? state.auth.user.first_name : '',
  lastName: state.auth.user ? state.auth.user.last_name : '',
  userId: state.auth.user ? state.auth.user.id : '',
  accessToken: state.auth.access,
});

export default connect(mapStateToProps, { checkAuthenticated, load_user })(TestListPage);
