import React from 'react'
import { Link } from 'react-router-dom';
import './notFound.scss'

export const NotFound = () => {
  return (
    <main className="notFound">
      <Link to="/home-kitchens/" className="notFound__link">
        Back to the main page
      </Link>
    </main>
  )
}