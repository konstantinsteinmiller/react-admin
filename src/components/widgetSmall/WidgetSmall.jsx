import React from 'react'
import PropTypes from 'prop-types'
import { Visibility } from '@material-ui/icons'

WidgetSmall.propTypes = {
  data: PropTypes.any,
}

function WidgetSmall({ data }) {
  return (
    <div className="p-4" style={{ flex: '1 0 33%', boxShadow: '0 0 15px -10px rgba(0, 0, 0, 0.75)' }}>
      {/*{data}*/}
      <span className="font-bold">New Joined Members</span>
      <ul>
        {data.usersList.map((user, index) => (
          <li className="flex items-center justify-between text-xs" key={index}>
            <img
              className="rounded-full w-10 h-10 object-cover"
              src="https://images.pexels.com/photos/18505373/pexels-photo-18505373/free-photo-of-frau-gesicht-portrat-spass.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
            <div className="text-xs">
              <div className="font-bold">{user.name}</div>
              <div className="" style={{ fontSize: '10px' }}>
                {user.role}
              </div>
            </div>
            <button className="flex items-center rounded-lg gap-1 bg-gray-100 text-gray-500 px-1 cursor-pointer hover:bg-gray-300">
              <Visibility />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default WidgetSmall
