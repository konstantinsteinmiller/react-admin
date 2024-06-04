import Topbar from './components/topbar/Topbar'
import React from 'react'
import Sidebar from './components/sidebar/Sidebar'
import Home from './components/pages/home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import UserList from './components/pages/userList/UserList'

function App() {
  return (
    <div className="App">
      <Router future={{ v7_startTransition: true }}>
        <Topbar />
        <div className="flex">
          <Sidebar />
          <div style={{ flex: '1 0 75%' }}>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/users" element={<UserList />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  )
}

export default App
