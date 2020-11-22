import React, { Component } from 'react';
import axios from 'axios';
import me from './images/icon_memoji.png';

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

import img from './images/me.jpg'

export default class Main extends Component {
    constructor() {
        super()
        this.state = {
            profile: me
        }
    }

    componentDidMount() {
        axios.get('https://graph.facebook.com/100004619404186/picture?width=1000&height=1000&redirect=false').then((res) => {
            this.setState({ profile: res.data.data.url })

            // // Dynamic site icon
            // var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
            // link.type = 'image/x-icon';
            // link.rel = 'shortcut icon';
            // link.href = res.data.data.url;
            // document.getElementsByTagName('head')[0].appendChild(link);
        });

        // // Analytic
        // axios.post('https://xd-analytics.herokuapp.com/api/visitor')
    }

    render() {
        return (
            <div>
                <PreLoader />
                <Header profile={img} />
                <VCard profile={img} />
                <About />
                <Blog />
                <Educuation />
                {/* <Skills/> */}
                <Experience />
                <Contributions />
                <ResearchInterest />
                <ScrollToTop />
                <Footer />
            </div>
        );
    }
}