import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Credits = () => {
    return (
        <div className="container mt-5">
            <div className="card">
                <div className="card-header">
                    <h2 className="text-center">Credits</h2>
                </div>
                <div className="card-body">
                    <p className="lead">
                        We extend our heartfelt gratitude to the following resources and their creators for their invaluable contributions:
                    </p>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <strong>Bootstrap:</strong> For providing a versatile and powerful CSS framework that makes responsive design effortless.
                        </li>
                        <li className="list-group-item">
                            <strong>Flaticon:</strong> For offering a vast collection of high-quality icons that enhance the visual appeal of our application.
                        </li>
                        <li className="list-group-item">
                            <strong>Freepik:</strong> For creating stunning graphics and illustrations that elevate the design of our project.
                        </li>
                    </ul>
                    <p className="text-cente mt-4">
                        Thank you for your dedication and creativity in providing these amazing resources to the developer community.
                    </p>
                </div>
                <div className="card-footer text-muted text-center">
                    <small>© {new Date().getFullYear()} Our Application</small>
                </div>
            </div>
        </div>
    );
};

export default Credits;
