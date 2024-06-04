import React from 'react'
import './topbar.css'
import { NotificationsNone, Language, Settings } from '@material-ui/icons'

const Topbar = () => {
  return (
    <div className="topbar w-full sticky top-0 z-50 bg-white" style={{ height: '50px', boxShadow: '0px 1px 1px 0px lightgrey' }}>
      <div className="topbar__wrapper h-full px-5 flex justify-between items-center">
        <div className="topbar__left">
          <div className="font-bold text-3xl text-blue-950 cursor-pointer">Admin</div>
        </div>
        <div className="topbar__right relative cursor-pointer flex gap-2 items-center">
          <span className="relative">
            <NotificationsNone />
            <span
              className="absolute -top-1 bg-red-700 rounded-full text-white w-4 h-4 flex justify-center items-center text-sm"
              style={{ right: '-2px' }}
            >
              2
            </span>
          </span>

          <Language />
          <Settings />
          <img className="w-10 h-10 rounded-full" src="https://avatars.githubusercontent.com/u/10655837?v=4" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Topbar
