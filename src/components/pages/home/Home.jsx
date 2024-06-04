import React from 'react'
import FeaturedInfo from '../../featuredInfo/FeaturedInfo'
import Chart from '../../chart/Chart'
import { userChartData, usersData } from '../../../dummyData'
import WidgetSmall from '../../widgetSmall/WidgetSmall'
import WidgetLarge from '../../WidgetLarge/WidgetLarge'

function Home() {
  return (
    <div className="">
      <FeaturedInfo />
      <Chart
        data={userChartData}
        dataKeysList={[
          { key: 'activeUser', name: 'user', color: '#8884d8' },
          { key: 'activeMember', name: 'active users', color: '#82ca9d' },
        ]}
        title="Sales Analytics"
        grid={true}
      />
      <div className="flex mx-4 my-2">
        <WidgetSmall data={usersData} />
        <WidgetLarge data={usersData} />
      </div>
    </div>
  )
}

export default Home
