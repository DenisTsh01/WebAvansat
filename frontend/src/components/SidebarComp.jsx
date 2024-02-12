import React, {useEffect} from 'react'
import Sidebar from './Sidebar'
import { SidebarItem } from './Sidebar'
import { LayoutDashboard, Home, StickyNote, Layers, Flag, Calendar,  Settings, TestTube , ActivitySquare} from 'lucide-react';
import { HashRouter as Router,Route,Routes, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { checkAuthenticated,load_user } from '../actions/auth';
import { logout } from '../actions/auth';

const SidebarComp = (props) => {

useEffect(()=> {
props.checkAuthenticated();
props.load_user();
}, [])

  return (
    <div>
    
    <Sidebar>
              <Link to='/'><SidebarItem icon={<Home size={20} />} text="Home" alert /></Link>
              <Link to='/teste'><SidebarItem icon={<LayoutDashboard size={20} />} text="Events" alert /></Link>
              <SidebarItem icon={<ActivitySquare size={20} />} text="Activities" alert />
              <SidebarItem icon={<Settings size={20} />} text="Account" alert />
              <SidebarItem icon={<TestTube size={20} />} text="Notifications" alert />  
    </Sidebar>

    </div>
  )
}

export default connect(null,{checkAuthenticated,load_user} ) (SidebarComp)
