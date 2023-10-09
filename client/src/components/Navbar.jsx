// Posts List Link (Root Path) | Link to Create New Post (Post Form)

import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
        <Link to="/">Post List</Link>
        <span> | </span>
        <Link to="/new">New Post</Link>

    </nav>
  )
}

export default Navbar