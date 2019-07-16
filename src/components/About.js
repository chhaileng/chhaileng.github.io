import React, { Component } from 'react';

export default class About extends Component {
    render() {
        return (
            <div id='about' className='section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div id='about-card' className='card'>
                                <div className='card-content'>
                                    <p>
                                        Hi there, my name is Chhaileng. I am a software developer. I have some experience 
                                        in developing web application, application programming interface (API), mobile application.
                                        I also have some experience with cyber security and used to participate in 
                                        web application penetration testing too. Currently, 
                                        I am researching on Blockchain technology based on Hyperledger 
                                        and also Big Data platform development.
                                        <br/><br/>Feel free to contact me. Thank you ^^
                                    </p>
                                </div>

                                <div id='about-btn' className='card-action'>
                                    <div className='about-btn'>
                                        <a href='https://www.facebook.com/ChhailengPeng' target='_blank' rel='noopener noreferrer' className='btn waves-effect'>Contact Me</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}