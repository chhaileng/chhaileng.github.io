import React, { Component } from 'react';
import computerIcon from '../images/icons/computer.png';

export default class Experience extends Component {
    render() {
        return (
            <section id='experience' className='section'>
                <div className='container'>
                    <div className='section-title'>
                        <h4 className='text-uppercase text-center'><img src={computerIcon} alt='icon' />Experience</h4>
                    </div>

                    <div id='timeline-experience'>
                        <div className='timeline-block'>
                            <div className='timeline-dot'><i className='fa fa-cubes'></i></div>
                            <div className='card timeline-content'>
                                <div className='card-content'>
                                    <h6 className='timeline-title'>Research Assistant (Blockchain Developer)</h6>
                                    <hr />
                                    <div className='timeline-info'>
                                        <h6><small><i className='small material-icons'>place</i> Blockchain & Big Data Lab, CBNU</small></h6>
                                        <h6><small><i><i className='small material-icons'>event</i> ~ Present</i></small></h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='timeline-block'>
                            <div className='timeline-dot'><i className='fa fa-code'></i></div>
                            <div className='card timeline-content'>
                                <div className='card-content'>
                                    <h6 className='timeline-title'>IT Instructor</h6>
                                    <hr />
                                    <div className='timeline-info'>
                                        <h6><small><i className='small material-icons'>place</i> Korea Software HRD Center</small></h6>
                                        <h6><small><i className='small material-icons'>event</i> <i>Mar 2018 - Mar 2019</i></small></h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='timeline-block'>
                            <div className='timeline-dot'><i className='fa fa-apple'></i></div>
                            <div className='card timeline-content'>
                                <div className='card-content'>
                                    <h6 className='timeline-title'>iOS & Web Developer</h6>
                                    <hr />
                                    <div className='timeline-info'>
                                        <h6><small><i className='small material-icons'>place</i> Korea Software HRD Center</small></h6>
                                        <h6><small><i className='small material-icons'>event</i> <i>Mar 2018 - Mar 2019</i></small></h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='timeline-block'>
                            <div className='timeline-dot'><i className='fa fa-user-secret'></i></div>
                            <div className='card timeline-content'>
                                <div className='card-content'>
                                    <h6 className='timeline-title'>Web Penetration Tester</h6>
                                    <hr />
                                    <div className='timeline-info'>
                                        <h6><small><i className='small material-icons'>place</i> Freelancer</small></h6>
                                        <h6><small><i className='small material-icons'>event</i> <i>2017</i></small></h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='timeline-block'>
                            <div className='timeline-dot'><i className='fa fa-terminal'></i></div>
                            <div className='card timeline-content'>
                                <div className='card-content'>
                                    <h6 className='timeline-title'>Security Instructor</h6>
                                    <hr />
                                    <div className='timeline-info'>
                                        <h6><small><i className='small material-icons'>place</i> [ Somewhere on earth ]</small></h6>
                                        <h6><small><i className='small material-icons'>event</i> <i>2017</i></small></h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='timeline-block'>
                            <div className='timeline-dot'><i className='fa fa-lock'></i></div>
                            <div className='card timeline-content'>
                                <div className='card-content'>
                                    <h6 className='timeline-title'>Cyber Security Competition</h6>
                                    <hr />
                                    <ul>
                                        <li>- 2015, Cambodia Cyber Sea Game (2nd place)</li>
                                        <li>- 2015, Cambodia Cyber Challenge (4th place)</li>
                                        <li>- Jun 2018, Cambodia Cyber Contest (2nd place)</li>
                                        <li>- Sep 2018, Singapore Cyber Conquest</li>
                                        <li>- Nov 2018, Thailand, Cyber Sea Game (8th place)</li>
                                        <li>- Apr 2019, KHr00t CTF (3rd place)</li>
                                        <li>- Other online competition</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}