import { DeleteOutline } from '@material-ui/icons'
import React from 'react'

export const userChartData = [
  {
    name: 'January',
    activeUser: 4000,
    activeMember: 1000,
  },
  {
    name: 'February',
    activeUser: 3000,
    activeMember: 1200,
  },
  {
    name: 'March',
    activeUser: 2000,
    activeMember: 1400,
  },
  {
    name: 'April',
    activeUser: 2780,
    activeMember: 1280,
  },
  {
    name: 'May',
    activeUser: 1890,
    activeMember: 1190,
  },
  {
    name: 'June',
    activeUser: 2390,
    activeMember: 1390,
  },
  {
    name: 'July',
    activeUser: 3490,
    activeMember: 1490,
  },
]

export const usersData = { usersList: [{ name: 'John', role: 'Software Engineer' }] }

export const userColumns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'username',
    headerName: 'User name',
    width: 150,
    editable: true,
    renderCell: params => {
      return (
        <div className="flex items-center gap-1">
          <img className="w-8 h-8 rounded-full object-cover" src={params.row.avatar} alt="" />
          {params.row.username}
        </div>
      )
    },
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 110,
    editable: true,
  },
  {
    field: 'transactions',
    headerName: 'Transactions',
    width: 110,
    editable: true,
  },
  {
    field: 'actions',
    headerName: 'Actions',
    width: 110,
    editable: true,
    renderCell: (/*params*/) => {
      return (
        <div className="flex items-center gap-1">
          <DeleteOutline className="cursor-pointer" /*{ onClick={() => deleteUser(params.row.id)}}*/ />
        </div>
      )
    },
  },
]

export const userRows = [
  {
    id: 1,
    username: 'Jon Snow',
    avatar: 'https://images.pexels.com/photos/3830432/pexels-photo-3830432.jpeg?auto=compress&cs=tinysrgb&w=600',
    email: 'jonsnow@hot.mail',
    transactions: '$120.00',
  },
  {
    id: 2,
    username: 'Cersei Lannister',
    avatar: 'https://images.pexels.com/photos/5990021/pexels-photo-5990021.jpeg?auto=compress&cs=tinysrgb&w=600',
    email: 'cersei.lannister@hot.mail',
    transactions: '$40.00',
  },
  {
    id: 3,
    username: 'Arya Lannister',
    avatar:
      'https://images.pexels.com/photos/20429161/pexels-photo-20429161/free-photo-of-frau-sitzung-sitzen-model.jpeg?auto=compress&cs=tinysrgb&w=600',
    email: 'arya.lannister@hot.mail',
    transactions: '$510.00',
  },
  {
    id: 4,
    username: 'Jack Stark',
    avatar: 'https://images.pexels.com/photos/2468339/pexels-photo-2468339.jpeg?auto=compress&cs=tinysrgb&w=600',
    email: 'jonstark@hot.mail',
    transactions: '$420.00',
  },
  {
    id: 5,
    username: 'Targaryen Daenerys',
    avatar: 'https://images.pexels.com/photos/3359734/pexels-photo-3359734.jpeg?auto=compress&cs=tinysrgb&w=600',
    email: 'targaryen.daenery@hot.mail',
    transactions: '$6620.00',
  },
  { id: 6, username: 'Melisandre', avatar: '', email: 'melisandre@hot.mail', transactions: '$10.00' },
  { id: 7, username: 'Ferrara Clifford', avatar: '', email: 'ferrara@hot.mail', transactions: '$10.00' },
]
