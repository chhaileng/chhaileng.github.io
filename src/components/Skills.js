import React, { Component } from 'react';
import terminalIcon from '../images/icons/terminal.png';

export default class Skills extends Component {
    render() {
        return (
            <section id='skills' className='section'>
                <div className='container'>
                    <div className='section-title'>
                        <h4 className='text-uppercase text-center'><img src={terminalIcon} alt='icon'/>Skills</h4>
                    </div>
                    <div className='row'>
                        <div className='col-md-12 col-sm-12 col-xs-12'>
                            <div id='skills-card' className='card'>
                                <div className='card-content'>
                                    <div className='row'>
                                        {/* <div className='skills-title'>
                                            <h6 className='text-center'>Professional</h6>
                                        </div> */}
                                        <div className='col-md-6 col-sm-6 col-xs-12'>
                                            <div className='skillbar' data-percent='90%'>
                                                <div className='skillbar-title'><span>JavaScript</span></div>
                                                <div className='skillbar-bar'></div>
                                                <div className='skill-bar-percent'>90%</div>
                                            </div>
                                            <div className='skillbar' data-percent='90%'>
                                                <div className='skillbar-title'><span>jQuery</span></div>
                                                <div className='skillbar-bar'></div>
                                                <div className='skill-bar-percent'>90%</div>
                                            </div>
                                            <div className='skillbar' data-percent='78%'>
                                                <div className='skillbar-title'><span>ReactJS</span></div>
                                                <div className='skillbar-bar'></div>
                                                <div className='skill-bar-percent'>78%</div>
                                            </div>
                                            <div className='skillbar' data-percent='90%'>
                                                <div className='skillbar-title'><span>Spring Framework</span></div>
                                                <div className='skillbar-bar'></div>
                                                <div className='skill-bar-percent'>90%</div>
                                            </div>
                                            <div className='skillbar' data-percent='90%'>
                                                <div className='skillbar-title'><span>Java</span></div>
                                                <div className='skillbar-bar'></div>
                                                <div className='skill-bar-percent'>90%</div>
                                            </div>
                                        </div>


                                        <div className='col-md-6 col-sm-6 col-xs-12'>
                                            <div className='skillbar' data-percent='88%'>
                                                <div className='skillbar-title'><span>iOS App Development</span></div>
                                                <div className='skillbar-bar'></div>
                                                <div className='skill-bar-percent'>88%</div>
                                            </div>
                                            <div className='skillbar' data-percent='85%'>
                                                <div className='skillbar-title'><span>Database</span></div>
                                                <div className='skillbar-bar'></div>
                                                <div className='skill-bar-percent'>85%</div>
                                            </div>
                                            <div className='skillbar' data-percent='80%'>
                                                <div className='skillbar-title'><span>Server Admin</span></div>
                                                <div className='skillbar-bar'></div>
                                                <div className='skill-bar-percent'>80%</div>
                                            </div>
                                            <div className='skillbar' data-percent='70%'>
                                                <div className='skillbar-title'><span>Security</span></div>
                                                <div className='skillbar-bar'></div>
                                                <div className='skill-bar-percent'>70%</div>
                                            </div>
                                            <div className='skillbar' data-percent='90%'>
                                                <div className='skillbar-title'><span>Communication</span></div>
                                                <div className='skillbar-bar'></div>
                                                <div className='skill-bar-percent'>90%</div>
                                            </div>
                                        </div>
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