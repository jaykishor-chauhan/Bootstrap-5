import React from 'react'

function Accodians() {
    return (
        <section id='accodians' className='my-5 bg-light'>
            <div className="container-fluid">
                <div className="text-center mb-5">
                    <h1>Inside the Projects</h1>
                    <p className="lead text-muted">A quick referance to the project you want</p>
                </div>
                <div className="row justify-content-around align-items-center">
                    <div className="col-8 col-lg-4">
                        <img src="https://www.create180design.com/wp-content/uploads/2021/05/2021_05_12-Web-Design-Best-Practices-for-B2B-Websites-1200x628-1.jpg" alt="website" className="img-fluid" />
                    </div>
                    <div className="col-8 col-lg-6">
                        <div className="accordion" id="projectExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#projectOne" aria-expanded="true" aria-controls="projectOne">
                                        <strong>E-Commerce Platform with Real-Time Chat</strong>
                                    </button>
                                </h2>
                                <div id="projectOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#projectExample">
                                    <div className="accordion-body lead">
                                        <strong>Build a complete e-commerce website that allows users to browse products</strong>, add them to the cart, and complete their purchases. Implement a real-time chat feature using WebSockets, enabling customers to communicate directly with support agents or sales representatives. The site should include user authentication, product categories, payment gateway integration, and an admin dashboard to manage inventory.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#projectTwo" aria-expanded="false" aria-controls="projectTwo">
                                        <strong>Fitness and Wellness App</strong>
                                    </button>
                                </h2>
                                <div id="projectTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#projectExample">
                                    <div className="accordion-body lead">
                                        <strong>Develop a mobile app that guides users through personalized fitness</strong> and wellness routines. Include features like workout tracking, meal planning, hydration reminders, and mindfulness exercises. Add integration with wearable devices (e.g., Fitbit, Apple Watch) to collect health data and provide detailed progress reports.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#projectThree" aria-expanded="false" aria-controls="projectThree">
                                        <strong>Task and Project Management Tool</strong>
                                    </button>
                                </h2>
                                <div id="projectThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#projectExample">
                                    <div className="accordion-body lead">
                                        <strong>Build a task and project management software with features like task assignment</strong>, deadlines, priority tagging, time tracking, and team collaboration. Provide a dashboard view for managers to oversee the progress of various projects and create Gantt charts or Kanban boards for task visualization.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Accodians
