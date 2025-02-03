import React from 'react'

function Tutorial03() {
  return (
    <div>
        {/* margin and padding */}
        <div className="bg-primary text-light m-1 p-1">margin and pading small</div>
        <div className="bg-primary text-light m-3 p-3">margin and pading small</div>

        {/* borders */}
        <div className="m-3 p-2 border">defult border</div>
        <div className="m-3 p-3 border-top border-end">border top and border end</div>
        <div className="m-3 p-3 border-start border-success">Border top with color success</div>
        <div className="m-3 p-3 border-start border-danger border-4">thik left border</div>
        <div className="m-3 p-3 rounded border">rounded border</div>
        <div className="m-3 p-3 rounded-pill border border-primary border-2">Border rounded pill with margine and padding of 3 </div>

        {/* box shadows */}
        <div className="m-3 p-3 shadow">defult shadow box</div>
        <div className="m-3 p-3 shadow-sm">small shadow box</div>
        <div className="m-3 p-3 shadow-lg">large shadow box</div>

        {/* font weight */}
        <div className="m-2 p-2">
            <p className="">font normal</p>
            <p className="fw-bold">font bold</p>
            <p className="fw-bolder">font bolder</p>
            <p className="fw-light">font light </p>
            <p className="fst-italic fw-light">font style italic light</p>
            <p className="fst-italic">font italic</p>
        </div>
      
    </div>
  )
}

export default Tutorial03
