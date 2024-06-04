import React from 'react'
import { ArrowDownward, ArrowUpward } from '@material-ui/icons'

function FeaturedInfo() {
  const featuresItemsList = [
    { title: 'Revenue', value: '$2,415', rate: '-11.2' },
    { title: 'Sales', value: '$4,415', rate: '1.2' },
    { title: 'Cost', value: '$6,415', rate: '-1.2' },
  ]
  return (
    <div className="mx-4 my-2 flex justify-between">
      {featuresItemsList.map((featured, index) => {
        return [
          <div key={index} className="cursor-pointer px-4 py-2 my-2" style={{ boxShadow: '0 0 15px -10px rgba(0, 0, 0, 0.75)' }}>
            <div>{featured.title}</div>
            <div key={index} className="flex gap-0 items-center">
              <span className="font-bold">{featured.value}</span>
              <span className={`text-xs ml-3 ${+featured.rate < 0 ? 'text-red-600' : 'text-green-600'}`}>{featured.rate}</span>
              {+featured.rate < 0 ? <ArrowDownward className="-rotate-45 text-red-600" /> : <ArrowUpward className="rotate-45 text-green-600" />}
            </div>
            <span key={index}>Compared to last month</span>
          </div>,
        ]
      })}
    </div>
  )
}

export default FeaturedInfo
