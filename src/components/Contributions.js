import React, { Component } from 'react';
import keynoteIcon from '../images/icons/keynote.png';
import defense_talk from '../images/defense_talk.jpg';
import barcamp_2017 from '../images/barcamp_2017.jpg';
import barcamp_2016 from '../images/barcamp_2016.jpg';
import barcamp_2015 from '../images/barcamp_2015.jpg';
import khnog from '../images/khnog.jpg';
import more from '../images/more.jpg';

export default class Contributions extends Component {
    render() {
        return (
            <section id='contributions' className='section'>
                <div className='container'>
                    <div className='section-title'>
                        <h4 className='text-uppercase text-center'><img src={keynoteIcon} alt='icon'/>Contributions</h4>
                    </div>
                    <div id='contributions-card' className='row'>
                        <p className='text-center'>Click for viewing slide</p>
                        <div className='tab-content'>
                            <div className='col-md-4 col-sm-6 col-xs-12 grid inLeft'>
                                <figure className='port-effect-up'>
                                    <img src={defense_talk} className='img-responsive' alt='Defense Talk'/>
                                    <figcaption>
                                        <h2>Defense&nbsp;&nbsp;&nbsp;&nbsp;Talk&nbsp;&nbsp;&nbsp;&nbsp;(2019)</h2>
                                        <p>The Journey to Regional Cybersecurity Competition</p>
                                        <a href='https://drive.google.com/open?id=1Rl4tKsf2EubyR6W0XS91fDb2nXRimQWE' target='_blank' rel='noopener noreferrer'>View more</a>
                                    </figcaption>
                                </figure>
                            </div>

                            <div className='col-md-4 col-sm-6 col-xs-12 grid inRight'>
                                <figure className='port-effect-up'>
                                    <img src={barcamp_2017} className='img-responsive' alt='Barcamp 2017'/>
                                    <figcaption>
                                        <h2>Barcamp&nbsp;&nbsp;&nbsp;&nbsp;ASEAN&nbsp;&nbsp;&nbsp;&nbsp;(2017)</h2>
                                        <p>Is Your Website Secure?</p>
                                        <a href='https://drive.google.com/open?id=0B9XmYcXaSp0SNUt3LTVSOWxZcDg' target='_blank' rel='noopener noreferrer'>View more</a>
                                    </figcaption>
                                </figure>
                            </div>

                            <div className='col-md-4 col-sm-6 col-xs-12 grid inRight'>
                                <figure className='port-effect-up'>
                                    <img src={khnog} className='img-responsive' alt='KHNOG'/>
                                    <figcaption>
                                        <h2>KHNOG&nbsp;&nbsp;&nbsp;&nbsp;(2017)</h2>
                                        <p>Wireless Penetration Testing</p>
                                        <a href='https://drive.google.com/open?id=1LBuf3B0EYkAx-wo0NU-b5hD4LqGNwp_O' target='_blank' rel='noopener noreferrer'>View more</a>
                                    </figcaption>
                                </figure>
                            </div>


                            <div className='col-md-4 col-sm-6 col-xs-12 grid inLeft'>
                                <figure className='port-effect-up'>
                                    <img src={barcamp_2016} className='img-responsive' alt='Barcamp 2016'/>
                                    <figcaption>
                                        <h2>Barcamp&nbsp;&nbsp;&nbsp;&nbsp;ASEAN&nbsp;&nbsp;&nbsp;&nbsp;(2016)</h2>
                                        <p>How hacker hacks your online account?</p>
                                        <a href='https://drive.google.com/open?id=0B9XmYcXaSp0Sb18wZFoxMlRJZlU' target='_blank' rel='noopener noreferrer'>View more</a>
                                    </figcaption>
                                </figure>
                            </div>

                            <div className='col-md-4 col-sm-6 col-xs-12 grid inRight'>
                                <figure className='port-effect-up'>
                                    <img src={barcamp_2015} className='img-responsive' alt='Barcamp 2015'/>
                                    <figcaption>
                                        <h2>Barcamp&nbsp;&nbsp;&nbsp;&nbsp;ASEAN&nbsp;&nbsp;&nbsp;&nbsp;(2015)</h2>
                                        <p>Understanding Cyber Security - What is Backdoor?</p>
                                        <a href='/slides/barcamp_2015' className='popup-image' data-effect='mfp-3d-unfold'>View more</a>
                                    </figcaption>
                                </figure>
                            </div>

                            <div className='col-md-4 col-sm-6 col-xs-12 grid inRight'>
                                <figure className='port-effect-up'>
                                    <img src={more} className='img-responsive' alt='More'/>
                                    <figcaption>
                                        <h2>More</h2>
                                        <p>Checkout my GitHub repositories.</p>
                                        <a href='https://github.com/chhaileng?tab=repositories' target='_blank' rel='noopener noreferrer'>View more</a>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}