import React from 'react'
import './widgetsmall.css'
import member1 from './member1.jpeg';
import member2 from './member2.jpeg';
import member3 from './member3.jpeg';
import member4 from './member4.jpeg';
import member5 from './member5.jpeg';
import member6 from './member6.jpeg';
import {Visibility} from '@material-ui/icons';
const WidgetSmall = () => {
  return (
    <div className = 'widgetSm'>
    <span className="widgetSmTitle">New Join Members</span>
    <ul className="widgetSmList">
       <li className="widgetSmListItem">
          <img src={member1} alt={member1} className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Ushindi Brylon</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
             <Visibility className = 'widgetSmIcon'/>
             Display
          </button>
          
       </li>
        <li className="widgetSmListItem">
          <img src={member2} alt={member2} className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Ushindi Haddish</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
             <Visibility className = 'widgetSmIcon'/>
             Display
          </button>
          
       </li>
        <li className="widgetSmListItem">
          <img src={member3} alt={member3} className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Ushindi Krystl</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
             <Visibility className = 'widgetSmIcon'/>
             Display
          </button>
          
       </li>
        <li className="widgetSmListItem">
          <img src={member4} alt={member4} className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Ushindi Hyram</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
             <Visibility className = 'widgetSmIcon'/>
             Display
          </button>
          
       </li>
        <li className="widgetSmListItem">
          <img src={member5} alt={member5} className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Ushindi Kydn</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
             <Visibility className = 'widgetSmIcon'/>
             Display
          </button>
          
       </li>
       
    </ul>
    </div>
  )
}

export default WidgetSmall