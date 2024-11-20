import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import TicketList from './components/TicketList'

import { useStateContext } from './hooks/useStateContext'

import inProgress from "./assets/icons_FEtask/in-progress.svg"
import todo from "./assets/icons_FEtask/To-do.svg"
import backlog from "./assets/icons_FEtask/Backlog.svg"
import done from "./assets/icons_FEtask/Done.svg"
import cancelled from "./assets/icons_FEtask/Cancelled.svg"

import noPriority from "./assets/icons_FEtask/No-priority.svg"
import lowPriority from "./assets/icons_FEtask/Img - Low Priority.svg"
import mediumPriority from "./assets/icons_FEtask/Img - Medium Priority.svg"
import highPriority from "./assets/icons_FEtask/Img - High Priority.svg"
import urgentPriority from "./assets/icons_FEtask/SVG - Urgent Priority colour.svg"
import DropdownMenuOverlay from './components/DropdownMenuOverlay'

function App() {

  const [data, setData] = useState (null)
  const { grouping, showDropdown } = useStateContext ()
  const [loading, setLoading] = useState (true)
  const statusKeys = ["Backlog", "Todo", "In progress", "Done", "Cancelled"]
  const statusImgMap = {
      "In progress": inProgress,
      "Backlog": backlog,
      "Todo": todo,
      "Done": done,
      "Cancelled": cancelled
  }
  const priorityImgArray = [noPriority, lowPriority, mediumPriority, highPriority, urgentPriority]
  const priorityTitles = ["No priority", "Low", "Medium", "High", "Urgent"]

  useEffect (() => {
    const endpoint = "https://api.quicksell.co/v1/internal/frontend-assignment"
    const getData = async () => {
      try {
        const response = await fetch (endpoint)
        if (!response.ok) {
          throw new Error (`Response status: ${response.status}`)
        }
        const responseData = response.json()
        responseData.then (value => {
          setData (value)
          setLoading (false)
        })
      }
      catch (error) {
        console.error (error.message)
      }
    }
    getData ()
  }, [])

  if (loading) {
    return <></>
  }

  return (
    <div id='main'>
      <Navbar />
      {showDropdown && <DropdownMenuOverlay />}
      <div className='flex tickets-container'>
        {grouping === "Status" && statusKeys.map (status => <TicketList key={status} icon={statusImgMap[status]} heading={status} tickets={data.tickets.filter (ticket => { return ticket.status === status })} />)}
        {grouping === "User" && data.users.map (user => <TicketList key={user.id} heading={user.name} tickets={data.tickets.filter (ticket => { return ticket.userId === user.id })} />)}
        {grouping === "Priority" && [0,4,3,2,1].map (priority => <TicketList key={priority} icon={priorityImgArray[priority]} heading={priorityTitles[priority]} tickets={data.tickets.filter (ticket => { return ticket.priority === priority })} />)}
      </div>
    </div>
  )
}

export default App
