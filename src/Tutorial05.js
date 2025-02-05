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
            <hr />
            <div className="containar">
                <div>
                    <h1 className='fw-bold text-danger text-center my-5'>Lorem Ipsum</h1>
                </div>
                <div className="row gap-3 justify-content-center m-2">
                    <div className="col-lg-3 col-md-5 border border-primary p-4">
                        <p className='display-6'>Hi, this is Jaykishor.</p>
                        <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="col-lg-3 col-md-5 border border-primary p-4">
                        <p className='display-6'>Hi, this is Jaykishor.</p>
                        <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="col-lg-3 col-md-5 border border-primary p-4">
                        <p className='display-6'>Hi, this is Jaykishor.</p>
                        <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="col-lg-4 col-md-5 border border-primary p-4">
                        <p className='display-6'>Hi, this is Jaykishor.</p>
                        <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="col-lg-4 col-md-5 border border-primary p-4">
                        <p className='display-6'>Hi, this is Jaykishor.</p>
                        <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <hr />

                <div className="containar-fluid">
                    <div className="row row-cols-1 row-cols-sm-3 gap-3 justify-content-center m-2">
                        <div className="col p-4 border border-danger">
                            <p className="display-4">Autosoft</p>
                            <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <div className="col p-4 border border-danger">
                            <p className="display-4">Autosoft</p>
                            <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Tutorial05
