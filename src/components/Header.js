import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <header id='home'>
                <nav id='theMenu' className='menu'>
                    <div id='menu-options' className='menu-wrap'>
                        <div className='logo-flat'>
                            <img alt='profile' className='img-responsive' style={{borderRadius: '50%'}} src={this.props.profile}/>
                        </div>
                        <br/>
                        <a href='#home'><i className='title-icon fa fa-user'></i>Home</a>
                        <a href='#about'><i className='title-icon fa fa-dashboard'></i>About</a>
                        <a href="#blog"><i className="title-icon fa fa-pencil-square"></i>Blog</a>
                        <a href='#education'><i className='title-icon fa fa-graduation-cap'></i>Education</a>
                        {/* <a href='#skills'><i className='title-icon fa fa-sliders'></i>Skills</a> */}
                        <a href='#experience'><i className='title-icon fa fa-suitcase'></i>Experience</a>
                        <a href='#contributions'><i className='title-icon fa fa-bullhorn'></i>Contributions</a>
                        <p className='text-center' style={{fontSize: '7px'}}>© Copyright Chhaileng PENG | 2019</p>
                    </div>

                    <div id='menuToggle'>
                        <div className='toggle-normal'>
                            <i className='material-icons top-bar'>remove</i>
                            <i className='material-icons middle-bar'>remove</i>
                            <i className='material-icons bottom-bar'>remove</i>
                        </div>
                    </div>
                </nav>
                <div className='header-background section'></div>
            </header>
        );
    }
}