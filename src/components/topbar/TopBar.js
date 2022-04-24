import React from 'react'
import './topbar.css';
import { NotificationsNone, Language, Settings} from '@material-ui/icons';
import profile from '../topbar/profile.jpg';
const TopBar = () => {
  return (
    <div className = 'topbar'>
      <div className = 'topbarWrapper'>
        <div className = 'topbarLeft'>
           <span className = 'logo'>ushindiadmin</span>
        </div>
        <div className = 'topbarRight'>
            <div className = "topbarIconContainer">
              <NotificationsNone/>
              <span className = 'topIconBadge'>2</span>
            </div>
            <div className = "topbarIconContainer">
              <Language/>
              <span className = 'topIconBadge'>2</span>
           </div>
           <div className = "topbarIconContainer">
              <Settings/>
           </div>
           <img src = {profile} alt = {profile} className = 'topAvatar'/>
        </div>
        
      </div>

    </div>
  )
}

export default TopBar