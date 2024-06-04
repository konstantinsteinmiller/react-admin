import React, { useEffect, useState } from 'react'
import { DataGrid } from '@material-ui/data-grid'
// import { DeleteOutline } from '@material-ui/icons'
import { userRows as rows, userColumns as columns } from '../../../dummyData'

// function deleteUser(id) {
//   console.log(id)
// }
function UserList() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `You clicked ${count} times`
    console.log('count: ', count)
  }, [count])

  return (
    <div className="p-4 w-full" style={{ flex: '1 0 50%', boxShadow: '0 0 15px -10px rgba(0, 0, 0, 0.75)' }}>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection disableSelectionOnClick />
      </div>
      <div>
        <button onClick={() => setCount(count + 1)}> click count: {count}</button>
      </div>
    </div>
  )
}

export default UserList
