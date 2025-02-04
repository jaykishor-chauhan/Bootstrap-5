import React from 'react'

function Tutorial05() {
    return (
        <section id='intro' className='my-5'>
            <div className="containar-lg">
                <div className="row justify-content-center align-item-center">
                    <div className="col-md-5 text-center text-md-start">
                        <h1>
                            <div className="display-2 display-md-4">Autosoft Pvt. Ltd</div>
                            <div className="display-5 display-md-6 text-muted">Your Coading Skills</div>
                        </h1>
                        <p className="lead text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus reiciendis nemo dicta voluptatem suscipit amet, omnis autem, eveniet enim aperiam veniam quae maxime, reprehenderit recusandae vero doloremque labore totam ratione?</p>
                        <a href="/pricing" className="btn btn-outline-success btn-lg">Buy Now</a>
                    </div>
                    <div className="col-md-5 text-center d-none d-md-block">
                        <img
                            src="https://www.indiafilings.com/learn/wp-content/uploads/2015/07/starting-a-business-in-India-for-foreign-company.jpg"
                            alt=""
                            className="img-fluid" />
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Tutorial05
