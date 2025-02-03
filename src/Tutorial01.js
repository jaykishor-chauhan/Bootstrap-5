import React from 'react'

function Tutorial01() {
    return (
        <div>
            {/* heading tag */}
            <h1>Hi Jaykishor, this is heading h1</h1>
            <h2>Hi Jaykishor, this is heading h2</h2>
            <h3>Hi Jaykishor, this is heading h3</h3>
            <h1 className="h3">Hi Jaykishor, this is the heading of h3 in h1</h1>

            {/* display class  properties */}
            <h1 className="display-1">this is heading 1</h1>
            <h1 className="display-2">this is heading 2</h1>
            <h1 className="display-5">this is heading 5</h1>
            <p className="display-1">this is p tag in display 1</p>

            {/* text decoration and font weight */}
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <p className="lead">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit, eaque maxime, quidem aliquam velit fugiat, fuga commodi sint quae nisi consequatur omnis atque in repellendus illo amet quisquam iusto distinctio.</p>
            <p className="text-decoration-underline">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p className="text-decoration-line-through">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p className="fw-bold">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <small>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</small>

            {/* text color */}
            <p className="text-primary">thems primary color</p>
            <p className="text-secoundary">thems secondary color</p>
            <p className="text-info">thems info color</p>
            <p className="text-danger">thems danger color</p>
            <p className="text-warning">thems warning color</p>
            <p className="text-success">thems success color</p>


            {/* background color */}
            <p className="bg-primary">background primary color</p>
            <p className="bg-secoundary">background secondary color</p>
            <p className="bg-info">background info color</p>
            <p className="bg-danger">background danger color</p>
            <p className="bg-warning">background warning color</p>
            <p className="bg-success">background success color</p>
        </div>
    )
}

export default Tutorial01
