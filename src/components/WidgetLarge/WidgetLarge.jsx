import React from 'react'
import PropTypes from 'prop-types'
import userStore from '../../store/user'

WidgetLarge.propTypes = { data: PropTypes.any }
userStore.subscribe(() => console.log(userStore.getState()))
userStore.dispatch({ type: 'user/setName', value: 'Konstantin' })

function WidgetLarge() {
  const Button = ({ type }) => {
    const bgColour = {
      approved: '#e5faf2',
      declined: '#fff0f1',
      pending: '#ebf1fe',
      undefined: 'lightgrey',
    }[type]
    const colour = {
      approved: '#3bb077',
      declined: '#d95087',
      pending: '#2a7ade',
      undefined: 'lightgrey',
    }[type]

    return (
      <button className="p-1 bg-gray-100 rounded-lg" style={{ backgroundColor: `${bgColour}`, color: `${colour}` }}>
        {type}
      </button>
    )
  }
  Button.propTypes = { type: PropTypes.string }

  return (
    <div className="p-4 w-full" style={{ flex: '1 0 50%', boxShadow: '0 0 15px -10px rgba(0, 0, 0, 0.75)' }}>
      <span className="font-bold">Latest Transactions</span>
      <table className="border-separate border-spacing-2 border-spacing-y-1">
        <tr className="text-left">
          <th className=""></th>
          <th className="">Customer</th>
          <th className="">Date</th>
          <th className="">Amount</th>
          <th className="">Status</th>
        </tr>
        <tr className="" style={{ fontWeight: '300' }}>
          <td className="w-10">
            <img
              className="rounded-full w-10 h-10 object-cover"
              src="https://images.pexels.com/photos/14868774/pexels-photo-14868774.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </td>
          <td className="" style={{ fontWeight: '400' }}>
            Anna Will
          </td>
          <td className="">2 June 2021</td>
          <td className="">$122.00</td>
          <td className="">
            <Button type="approved" />
          </td>
        </tr>
        <tr className="">
          <td className="">
            <img
              className="rounded-full w-10 h-10 object-cover"
              src="https://images.pexels.com/photos/14868774/pexels-photo-14868774.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </td>
          <td className="">Susan Carol</td>
          <td className="">2 June 2021</td>
          <td className="">$122.00</td>
          <td className="">
            <Button type="declined" />
          </td>
        </tr>
        <tr className="">
          <td className="">
            <img
              className="rounded-full w-10 h-10 object-cover"
              src="https://images.pexels.com/photos/14868774/pexels-photo-14868774.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </td>
          <td className="">Blaze Stone</td>
          <td className="">1 June 2023</td>
          <td className="">$122.00</td>
          <td
            className=""
            onClick={() => {
              userStore.dispatch({ type: 'user/setName', value: 'Jim' })
            }}
          >
            <Button type="pending" />
          </td>
        </tr>
      </table>
    </div>
  )
}

export default WidgetLarge
