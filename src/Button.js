import React from 'react'

function Button() {
  return (
    <div>
        {/* button outline */}
      <button className="btn btn-outline-primary btn-sm">Click Me!</button>
      <button className="btn btn-outline-success">Button Success!</button>
      <button className="btn btn-outline-secondary">Button Secoundar</button>
      <hr />
      {/* button group */}
      <div className="btn-group">
        <a href="/" className="btn btn-success">Success</a>
        <a href="/" className="btn btn-danger">Danger</a>
        <a href="/" className="btn btn-warning">Warning</a>
        <a href="/" className="btn btn-info">Information</a>
        <a href="/" className="btn btn-secondary">Secondary</a>
      </div>
      <hr />
      {/* button size large */}
      <div className="btn-group">
        <a href="/" className="btn btn-lg btn-outline-success">Success</a>
        <a href="/" className="btn btn-lg btn-outline-danger">Danger</a>
        <a href="/" className="btn btn-lg btn-outline-warning">Warning</a>
        <a href="/" className="btn btn-lg btn-outline-info">Information</a>
        <a href="/" className="btn btn-lg btn-outline-secondary">Secondary</a>
      </div>
      <hr />
      {/* button size small  */}
      <div className="btn-group">
        <a href="/" className="btn btn-sm btn-outline-success">Success</a>
        <a href="/" className="btn btn-sm btn-outline-danger">Danger</a>
        <a href="/" className="btn btn-sm btn-outline-warning">Warning</a>
        <a href="/" className="btn btn-sm btn-outline-info">Information</a>
        <a href="/" className="btn btn-sm btn-outline-secondary">Secondary</a>
      </div>
    </div>
  )
}

export default Button
