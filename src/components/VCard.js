import React, { Component } from 'react';
import me from '../images/me.jpg';
import axios from 'axios';

export default class VCard extends Component {

    constructor() {
        super()
        this.state = {
            profile: me
        }
    }

    componentDidMount() {
        axios.get('https://graph.facebook.com/100004619404186/picture?width=1000&height=1000&redirect=false').then((res) => {
            this.setState({profile: res.data.data.url})
            var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
            link.type = 'image/x-icon';
            link.rel = 'shortcut icon';
            link.href = res.data.data.url;
            document.getElementsByTagName('head')[0].appendChild(link);
        });
    }

    render() {
        return (
            <div id='v-card-holder' className='section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12 col-sm-12 col-xs-12'>
                            <div id='v-card' className='card'>
                                <div id='profile' className='right'>
                                    <img alt='profile' className='img-responsive' src={this.state.profile}/>
                                    <div className='slant'></div>
                                    <a href='https://github.com/chhaileng?tab=repositories' target='_blank' rel='noopener noreferrer' className='btn-floating btn-large profile-btn'><i className='material-icons'>code</i></a>
                                </div>

                                <div className='card-content'>
                                    <div className='info-headings'>
                                        <h4 className='text-uppercase left'>Chhaileng PENG</h4>
                                        <h6 className='text-capitalize left'>Software Developer & Researcher</h6>
                                    </div>

                                    <div className='infos'>
                                        <ul className='profile-list'>
                                            <li className='clearfix'>
                                                <span className='title'><i className='material-icons'>email</i></span>
                                                <span className='content'>chhailengpeng@gmail.com</span>
                                            </li>
                                            <li className='clearfix'>
                                                <span className='title'><i className='material-icons'>language</i></span>
                                                <span className='content'>www.chhaileng.com</span>
                                            </li>
                                            <li className='clearfix'>
                                                <span className='title'><i className='material-icons'>place</i></span>
                                                <span className='content'>Cheongju-si, South Korea</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className='links'>
                                        <a href='https://www.facebook.com/ChhailengPeng' target='_blank' rel='noopener noreferrer' className='social btn-floating indigo'><i className='fa fa-facebook'></i></a>
                                        <a href='https://www.instagram.com/chhailengpeng' target='_blank' rel='noopener noreferrer' className='social btn-floating' style={{backgroundColor: '#E91E63'}}><i className='fa fa-instagram'></i></a>
                                        <a href='https://www.twitter.com/ChhailengPeng' target='_blank' rel='noopener noreferrer' className='social btn-floating blue'><i className='fa fa-twitter'></i></a>
                                        <a href='https://www.linkedin.com/in/chhailengpeng' target='_blank' rel='noopener noreferrer' className='social btn-floating blue darken-3'><i className='fa fa-linkedin'></i></a>
                                        <a href='https://github.com/chhaileng' target='_blank' rel='noopener noreferrer' className='social btn-floating' style={{backgroundColor: '#3f4449'}}><i className='fa fa-github'></i></a>
                                        <a href='https://www.youtube.com/channel/UCvWkh0nDQRV4Sicq1y1rTMQ/videos' target='_blank' rel='noopener noreferrer' className='social btn-floating' style={{backgroundColor: '#da2828'}}><i className='fa fa-youtube'></i></a>
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