import { ChevronFirst, ChevronLast, MoreVertical } from "lucide-react"
import { Link } from "react-router-dom";
import { createContext, useContext, useState } from "react"
import ThemeButton from "./ThemeButton";
import { checkAuthenticated,load_user } from '../actions/auth';
import { logout } from '../actions/auth';
import { connect } from 'react-redux';
import { useEffect } from "react";

const SidebarContext = createContext();

const Sidebar = ( {children ,isAuthenticated,logout,firstName,lastName,userId}) => {

  

    const [expanded, setExpanded] = useState(true)
    
    const guestLinks = () => (
        <>
            <ul className='nav-item text-content'>
              <Link className='nav-link' to='/login'>
                Login
                </Link>
            </ul>
            <ul className='nav-item text-content'>
              <Link className='nav-link' to='/signup'>
                Sign up
                </Link>
            </ul>
        </>
    );
const authLinks = () => (
    <div className='nav-item text-content mt-2'>
    <a className='nav-link' href='#!' onClick={logout}>Logout</a>
  </div>
);

    return (
        <>
            <aside className="h-screen">
                <nav className="h-full flex flex-col bg-bkg border-r border-accent-1 shadow-sm rounded-xl">
                    <div className="p-4 pb-2 flex justify-between items-center">
                    <h4 className="font-bold text-xl ml-3 text-content">{expanded ? "Eventino" : ""}</h4>
                        <button onClick={() => setExpanded((curr) => !curr)} className="p-1.5 rounded-lg bg-bkg hover:bg-accent-1 text-content">
                            {expanded ? <ChevronFirst /> : <ChevronLast />}
                        </button>
                    
                    </div>
                    <div className="border-accent-2 flex p-3">
                        
                        <div className={`flex justify-between items-center overflow-hidden transition-all ${expanded ? "w-36 ml-3" : "w-10 ml-3"} `}>
                            <div className="leading-4">
                            {/* <h2 className="font-bold">{expanded ? "PeDrept" : "PD"}</h2> */}

                            </div>
                        </div>
                    </div>

                    <SidebarContext.Provider value={{ expanded }}>

                        <ul className="flex-1 text-content px-3 ">{children}</ul>
                    </SidebarContext.Provider>
                    
                  
                    <div className="border-accent-2 flex p-3">
                  
                    
                        
                        <div className={`flex justify-between items-center overflow-hidden transition-all ${expanded ? "w-36 ml-3" : "w-0"} `}>
                            


                            <div className="leading-4">
                            <p className="text-md text-content mb-2 "><ThemeButton/></p>
                       
                                
            
            {isAuthenticated ? ( 
                
                      <div className='nav-item text-content mt-2 mb-4'>
    <Link className='nav-link text-content mb-2' href='#!' onClick={logout} to='/login'>Logout</Link>
        
    <p className="mt-2">{` ${firstName} ${lastName} ID: ${userId}`}</p>

  </div>) : (
  <><ul className='nav-item text-content mt-2'>
            <Link className='nav-link' to='/login'>
                Login
                </Link>
                </ul>
                <ul className='nav-item text-content mt-2'>
              <Link className='nav-link' to='/signup'>
                Sign up
                </Link>
            </ul>
            </>)}
            
     
                            </div>
                            <MoreVertical size={20} />
                        </div>
                    </div>
                </nav>
            </aside>
        </>
    )
   

}
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    firstName: state.auth.user ? state.auth.user.first_name : '',
    lastName: state.auth.user ? state.auth.user.last_name : '',
    userId: state.auth.user ? state.auth.user.id : '',
  })
export default connect(mapStateToProps,{checkAuthenticated, load_user, logout } ) (Sidebar)



export function SidebarItem({ icon, text, active, alert }) {
    const { expanded } = useContext(SidebarContext)
    return (
        <li className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${active ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800" : "hover:bg-accent-1 text-content"}`}>
            {icon}
            <span className={`overflow-hidden transition-all ${expanded ? "w-36 ml-3" : "w-0"}`}>{text}</span>
            {alert && (
                <div className={`absolute right-2 w-2 h-2 rounded bg-accent-2 ${expanded ? "" : "top-2"}`}>

                </div>
            )}

            {!expanded && (
                <div className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-accent-1 text-accent-2 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}>
                    {text}
                </div>
            )}
        </li>
    )
}