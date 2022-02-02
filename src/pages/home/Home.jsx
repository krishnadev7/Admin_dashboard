import React from 'react';
import Charts from '../../components/charts/Charts';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import './home.css'
import {userData} from '../../dummyData'
import WidgetLarge from '../../components/widgetLarge/WidgetLarge';
import WidgetSmall from '../../components/widgetSmall/WidgetSmall';

export default function Home() {
  return <div className='home'>
      <FeaturedInfo />
      <Charts data={userData} title='User Analytics' grid datakey="Active User"/>
      <div className="homeWidgets">
        <WidgetSmall />
        <WidgetLarge />
      </div>
  </div>;
}
