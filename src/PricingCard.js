import React from 'react'

function PricingCard() {
  return (
    <section id='price'className="bg-light my-4">
        <div className="container-lg">
            <div className="text-center">
                <h1 className="display-5">Pricing Plans</h1>
                <p className="lead text-muted">Choose a pricing plan to suit you.</p>
            </div>
            <div className="row my-4 justify-content-center align-items-center g-0">
                <div className="col-8 col-md-4 col-xxl-3">
                    <div className="card border-0">
                        <div className="card-body text-center py-4">
                            <h4 className="card-title">Web Application</h4>
                            <p className="lead card-subtitle">Responsive and full functionality websites</p>
                            <p className="display-5 my-4 text-primary fw-bold">$125.99</p>
                            <p className="lead text-muted mx-3 d-none d-lg-block">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus perspiciatis non dolor, harum adipisci unde vitae.</p>
                            <a href="/pricing" className="btn btn-lg btn-outline-primary mt-3">Buy Now</a>
                        </div>
                    </div>
                </div>
                <div className="col-9 col-md-4">
                    <div className="card border-2 border-primary">
                        <div className="card-header text-center text-primary">Most Popular</div>
                        <div className="card-body text-center py-5">
                            <h4 className="card-title">Blockchain based Web Application</h4>
                            <p className="lead card-subtitle">Responsive and full functionality websites with blockchain technology</p>
                            <p className="display-5 my-4 text-primary fw-bold">$150.99</p>
                            <p className="lead text-muted mx-5 d-none d-lg-block">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus perspiciatis non dolor, harum adipisci unde vitae.</p>
                            <a href="/pricing" className="btn btn-lg btn-outline-primary mt-3">Buy Now</a>
                        </div>
                    </div>
                </div>
                <div className="col-7 col-md-4 col-xxl-3">
                    <div className="card border-0">
                        <div className="card-body text-center py-4">
                            <h4 className="card-title">Mobile Application</h4>
                            <p className="lead card-subtitle">Responsive and full functionality websites</p>
                            <p className="display-5 my-4 text-primary fw-bold">$125.99</p>
                            <p className="lead text-muted mx-3 d-none d-lg-block">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus perspiciatis non dolor, harum adipisci unde vitae.</p>
                            <a href="/pricing" className="btn btn-lg btn-outline-primary mt-3">Buy Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default PricingCard
