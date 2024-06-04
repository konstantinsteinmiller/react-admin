import React from 'react'
import { LineStyle, TrendingUp, VerifiedUser, Apps, Accessibility } from '@material-ui/icons'
import { Link } from 'react-router-dom'

function Sidebar() {
  const itemsList = [
    { name: 'Home', icon: LineStyle, link: '/' },
    { name: 'User', icon: TrendingUp, link: '/users' },
    { name: 'trending', icon: TrendingUp },
  ]
  const staffItemsList = [
    { name: 'Staff', icon: Apps },
    { name: 'Organisation', icon: Accessibility },
    { name: 'Members', icon: VerifiedUser },
  ]
  return (
    <div className="sidebar bg-gray-50 sticky min-w-32" style={{ flex: '1 0 25%', height: 'calc(100vh - 50px)', top: '50px', fontSize: '13px' }}>
      <div className="p-4 text-gray-700 mb-3">
        <h3 className="font-bold" style={{ fontSize: '15px' }}>
          Dashboard
        </h3>
        <ul>
          {itemsList.map((item, index) => {
            return (
              <li key={index} className="gap-1 items-center p-1 cursor-pointer rounded hover:bg-gray-200">
                <Link to={item.link}>
                  <item.icon className="mr-2" />
                  {item.name}
                </Link>
              </li>
            )
          })}
        </ul>
        <h3 className="font-bold" style={{ fontSize: '15px' }}>
          Staff
        </h3>
        <ul>
          {staffItemsList.map((item, index) => {
            return (
              <li key={index} className="gap-1 items-center p-1 cursor-pointer rounded hover:bg-gray-200">
                <item.icon className="mr-2" />
                {item.name}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
