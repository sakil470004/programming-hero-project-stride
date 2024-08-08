import React from 'react'
import { useRouteError } from 'react-router-dom'

export default function ErrorRoute() {
    const {error, status}=useRouteError();
  return (
    <div>
        <h1>Error {status}</h1>
        <p>{error.message}</p>
        {/* give go back home page button */}
        <button onClick={()=>window.history.back()}>Go back</button>
        
    </div>
  )
}
