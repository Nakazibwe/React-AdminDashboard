import React from 'react'
import "./home.css"
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import Chart from '../../components/charts/Chart';
import {userdata} from '../../../src/dummyData.js';
import WidgetSmall from '../../components/widgetSmall/WidgetSmall';
import WidgetLarge from '../../components/widgetLarge/WidgetLarge';
const Home = () => {
  return (
    <div className ="home">
      <FeaturedInfo/>
      <Chart data = {userdata} title = 'User Analytics' grid dataKey = 'ActiveUsers'/>
      <div className = 'homeWidgets'>
         <WidgetSmall/>
         <WidgetLarge/>
      </div>
    </div>
  )
}

export default Home