import React from 'react';
import './Course.css';

const Course = (props) => {
    //    console.log(props);
    const { img, name, lecture, hour, price } = props.name;
    return (
        <div>
            <div className="row">
                <div className="col-10">

                    <div class="card-deck">
                        <div class="card">
                            <img src={img} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">{name}</h5>
                                <p class="card-text">{props.name.title}</p>
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">Created by: {props.name.instructor}
                                    <br />
                                        Course content: {lecture}
                                    <br />
                                    Total: {hour} hours on-demand video
                                     <br />
                                     Course price: ${price}
                                </small>
                                <button className="btn btn-danger"
                                    onClick={() => props.handleItem(props.name)}
                                >Enroll Course</button>
                            </div>
                        </div>


                    </div>
                </div>

            </div>
        </div>
    );
};

export default Course;