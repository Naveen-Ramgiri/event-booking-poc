import React from 'react'
import { Link } from 'react-router-dom';

function MardiGras() {
    return (
        <div className='create__event'>
            <div className='container'>
                <div className='create__event-steps'>
                    <div>
                        <h4>Organizing for a group?</h4>
                        <p>Create a group to manage and keep track of those attending.</p>
                        <ul>
                            <li>
                                <Link to="">
                                    <h5>YES,CREATE A GROUP</h5>                                   
                                </Link>
                            </li>
                            <li>
                                <Link to="">
                                    <h5>NO,CREATE A SINGLE RENTAL</h5>
                                </Link>
                            </li>
                          
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MardiGras