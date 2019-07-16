import React, { Component } from 'react';
import heartIcon from '../images/icons/heart.png';

export default class ResearchInterest extends Component {
    render() {
        return (
            <section id='interest' className='section'>
                <div className='container'>
                    <div className='section-title'>
                        <h4 className='text-uppercase text-center'><img src={heartIcon} alt='icon'/>Research Interests</h4>
                    </div>

                    <div id='interest-card' className='card'>
                        <div className='card-content'>
                            <p><span role='img' aria-label='heart'>💙</span>Beside Software development, these are some of my research interests. <span role='img' aria-label='heart'>💙</span></p>
                        </div>

                        <div className='row no-gutters'>
                            <div className='col-md-3 col-sm-6 col-xs-6  box text-center'>
                                <div className='interest-icon-even'>
                                    <i className='fa fa-lock'></i>
                                    <span>Cyber Security</span>
                                </div>
                            </div>
                            <div className='col-md-3 col-sm-6 col-xs-6 box text-center'>
                                    <div className='interest-icon-even'>
                                        <i className='fa fa-cubes'></i>
                                        <span>Blockchain</span>
                                    </div>
                                </div>
                            <div className='col-md-3 col-sm-6 col-xs-6 box text-center'>
                                <div className='interest-icon-even'>
                                    <i className='fa fa-database'></i>
                                    <span>Big Data</span>
                                </div>
                            </div>
                            <div className='col-md-3 col-sm-6 col-xs-6 box text-center'>
                                <div className='interest-icon-even'>
                                    <i className='fa fa-server'></i>
                                    <span style={{fontSize: 40}}>*</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}