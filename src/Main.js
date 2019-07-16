import React, { Component } from 'react';

import './css/style.css';

import PreLoader from './components/PreLoader';
import Header from './components/Header';
import VCard from './components/VCard';
import About from './components/About';
import Blog from './components/Blog';
import Educuation from './components/Education';
// import Skills from './components/Skills';
import Experience from './components/Experience';
import Contributions from './components/Contributions';
import ResearchInterest from './components/ResearchInterest';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default class Main extends Component {
    render() {
        return (
            <div>
                <PreLoader/>
                <Header/>
                <VCard/>
                <About/>
                <Blog/>
                <Educuation/>
                {/* <Skills/> */}
                <Experience/>
                <Contributions/>
                <ResearchInterest/>
                <ScrollToTop/>
                <Footer/>
            </div>
        );
    }
}