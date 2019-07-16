import React, { Component } from 'react';
import axios from 'axios';
import bookIcon from '../images/icons/book.png';

import BlogPost from './BlogPost';

export default class Blog extends Component {
    constructor() {
        super();
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        axios.get('https://blog.chhaileng.com/feed.json').then(res => {
            var posts = [];
            res.data.posts.forEach(post => {
                posts.push({
                    title: post.title,
                    thumbnail: post.thumbnail,
                    tags: post.tags,
                    url: post.url,
                    content: post.content,
                    created_date: post.created_date
                });
            })
            this.setState({posts: posts})
            // Add khmer.js script to render khmer text with Hanuman font
            var script = document.createElement('script');
            script.src = './javascript/khmer.js';
            document.getElementsByTagName('body')[0].appendChild(script);
        }).catch(error => {
            console.log(error);
        });
    }

    render() {
        let blogposts = this.state.posts.map((post, i) =>
            (i % 2) ? <BlogPost key={post.url} post={post} isEven/> : <BlogPost key={post.url} post={post}/>
        )
        return (
            <section id='blog' className='section'>
                <div className='container'>
                    <div className='section-title'>
                        <h4 className='text-uppercase text-center'><img src={bookIcon} alt='icon'/><a href='https://blog.chhaileng.com/'>Blogs</a></h4>
                    </div>

                    
                    <div id='blog-card' className='row'>
                        <div className='col-md-12 col-sm-12'>
                            <div className='card'>
                                {blogposts}
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-md-12 col-sm-12'>
                            <div>
                                <div style={{padding:20, fontSize: 20, textAlign: 'center'}} className='card'>
                                    <p>View more on <a href='https://blog.chhaileng.com/'>blog.chhaileng.com</a>, but it is under construction xD</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}