import React from 'react'
import { Link } from 'react-router-dom'

const Page404 = () => (
  <div className="block-center">
    <h1 style={{ textAlign: 'center' }}>
      Sorry this page doesn't exist
      <br />
      <Link to="/">Home</Link>
    </h1>
  </div>
)

export default Page404
