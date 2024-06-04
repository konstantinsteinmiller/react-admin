import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import PropTypes from 'prop-types'

Chart.propTypes = {
  data: PropTypes.array,
  title: PropTypes.string,
  dataKeysList: PropTypes.any,
  grid: PropTypes.bool,
}

function Chart({ title, data, dataKeysList, grid }) {
  return (
    <div className="p-4 m-4" style={{ boxShadow: '0 0 15px -10px rgba(0, 0, 0, 0.75)' }}>
      <h3 className="mb-4">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4}>
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          {grid && <CartesianGrid strokeDasharray="3 3" />}
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          {dataKeysList.map((dataKey, index) => (
            <Line type="monotone" dataKey={dataKey.key} name={dataKey.name} stroke={dataKey.color} activeDot={{ r: 6 }} key={index} />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart
