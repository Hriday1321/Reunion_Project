import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div>
        <span><Link to={'/'}>Rent</Link></span>
        <span><Link to={'/buy'}>Buy</Link></span>
        <span><Link to={'/sell'}>Sell</Link></span>
        <span>
            <select>
                <option value="Manage Properties">Manage Properties</option>
                <option value="Edit">Edit Properties</option>
            </select>
        </span>
        <span>
            <select>
                <option value="Resources">Resources</option>
                <option value="Docs">Documentation</option>
            </select>
        </span>
        <span><button>Login</button></span>
        <span><button>Sign Up</button></span>
    </div>
  )
}

export default Nav