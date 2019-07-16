import React, { Component } from 'react';

export default class PreLoader extends Component {
    render() {
        return (
            <div id='loading'>
                <div id='loading-center'>
                    <div id='loading-center-absolute'>
                        <div className='box-holder animated bounceInDown'>
                            <span className='load-box'><span className='box-inner'></span></span>
                        </div>
                        <div className='text-holder text-center'>
                            <h2>Chhaileng PENG</h2>
                            <hr/>
                            <h6>Software Developer & Researcher</h6>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}