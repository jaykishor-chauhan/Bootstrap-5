import React from 'react'

function Grid() {
  return (
    <div className='container'>
      <div className="containar my-5">
        <h1>Basic Grid</h1>
        <div className="row">
          <div className="col">
            <div className="p-2 bg-primary text-light">Column 1</div>
          </div>
          <div className="col">
            <div className="p-2 bg-primary text-light">Column 2</div>
          </div>
          <div className="col">
            <div className="p-2 bg-primary text-light">Column 3</div>
          </div>
          <div className="col">
            <div className="p-2 bg-primary text-light">Column 4</div>
          </div>
        </div>
      </div>
      <div className="containar my-5">
        <h1>Column width Grid</h1>
        <div className="row">
          <div className="col-6">
            <div className="p-2 bg-primary text-light">Column 1</div>
          </div>
          <div className="col-3">
            <div className="p-2 bg-primary text-light">Column 2</div>
          </div>
          <div className="col-3">
            <div className="p-2 bg-primary text-light">Column 3</div>
          </div>
        </div>
      </div>
      <div className="containar my-5">
        <h1>Responsive column width Grid</h1>
        <div className="row">
          <div className="col-lg-6 col-sm-4">
            <div className="p-2 bg-primary text-light">Column 1</div>
          </div>
          <div className="col-lg-3 col-sm-4">
            <div className="p-2 bg-primary text-light">Column 2</div>
          </div>
          <div className="col-lg-3 col-sm-4">
            <div className="p-2 bg-primary text-light">Column 3</div>
          </div>
        </div>
      </div>
      <div className="containar my-5">
        <h1>Justify column Grid</h1>
        <div className="row justify-content-center">
          <div className="col-md-3">
            <div className="p-4 my-1 bg-primary text-light">Column 1</div>
          </div>
          <div className="col-md-3">
            <div className="p-4 my-1 bg-primary text-light">Column 1</div>
          </div>
          <div className="col-md-3">
            <div className="p-4 my-1 bg-primary text-light">Column 1</div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Grid
