import React, { Component } from 'react';
import graduationIcon from '../images/icons/graduation.png';

export default class Educuation extends Component {
    render() {
        return (
            <section id='education' className='section'>
                <div className='container'>
                    <div className='section-title'>
                        <h4 className='text-uppercase text-center'><img src={graduationIcon} alt='icon' />Education</h4>
                    </div>

                    <div id='timeline-education'>
                        <div className='timeline-block'>
                            <div className='timeline-dot'><h6>M</h6></div>
                            <div className='card timeline-content'>
                                <div className='card-content'>
                                    <h6 className='timeline-title'>Management Information Systems</h6>
                                    <hr />
                                    <div className='timeline-info'>
                                        <h6><small><i className='small material-icons'>place</i> Chungbuk National University</small></h6>
                                        <h6><small><i><i className='small material-icons'>event</i> ~ Present</i></small></h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='timeline-block'>
                            <div className='timeline-dot'><i className='fa fa-graduation-cap'></i></div>
                            <div className='card timeline-content'>
                                <div className='card-content'>
                                    <h6 className='timeline-title'>Computer Science</h6>
                                    <hr />
                                    <div className='timeline-info'>
                                        <h6><small><i className='small material-icons'>place</i> Royal University of Phnom Penh</small></h6>
                                        <h6><small><i><i className='small material-icons'>event</i> 2014 - 2018</i></small></h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='timeline-block'>
                            <div className='timeline-dot'><i className='fa fa-code'></i></div>
                            <div className='card timeline-content'>
                                <div className='card-content'>
                                    <h6 className='timeline-title'>IT Training</h6>
                                    <hr />
                                    <div className='timeline-info'>
                                        <h6><small><i className='small material-icons'>place</i> Korea Software HRD Center</small></h6>
                                        <h6><small><i><i className='small material-icons'>event</i> Mar 2017 - Feb 2018</i></small></h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='timeline-block'>
                            <div className='timeline-dot'><i className='fa fa-search'></i></div>
                            <div className='card timeline-content'>
                                <div className='card-content'>
                                    <h6 className='timeline-title'>Digital Forensic</h6>
                                    <hr />
                                    <div className='timeline-info'>
                                        <h6><small><i className='small material-icons'>place</i> Fujian, China</small></h6>
                                        <h6><small><i><i className='small material-icons'>event</i> 2016</i></small></h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='timeline-block'>
                            <div className='timeline-dot'><h6>H</h6></div>
                            <div className='card timeline-content'>
                                <div className='card-content'>
                                    <h6 className='timeline-title'>High School</h6>
                                    <hr />
                                    <div className='timeline-info'>
                                        <h6><small><i className='small material-icons'>place</i> Saang High School</small></h6>
                                        <h6><small><i><i className='small material-icons'>event</i> 2014</i></small></h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='timeline-block'>
                            <div className='timeline-dot'><i className='fa fa-ellipsis-h'></i></div>
                            <div className='card timeline-content'>
                                <div className='card-content'>
                                    <h6 className='timeline-title'>Other Traning</h6>
                                    <hr />
                                    <div className='timeline-info'>
                                        <h6><small><i className='small material-icons'>place</i> [ Everywhere ]</small></h6>
                                        <h6><small><i><i className='small material-icons'>event</i> ~ Present</i></small></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
