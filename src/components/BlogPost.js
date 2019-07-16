import React, { Component } from 'react';

export default class BlogPost extends Component {
    formatDate(date) {
        let d = new Date(date);
        var MM = '';
        switch (d.getMonth()) {
            case 1: MM = 'Jan'; break;
            case 2: MM = 'Feb'; break;
            case 3: MM = 'Mar'; break;
            case 4: MM = 'Apr'; break;
            case 5: MM = 'May'; break;
            case 6: MM = 'Jun'; break;
            case 7: MM = 'Jul'; break;
            case 8: MM = 'Aug'; break;
            case 9: MM = 'Sep'; break;
            case 10: MM = 'Oct'; break;
            case 11: MM = 'Nov'; break;
            case 12: MM = 'Dec'; break;
            default: MM = '';
        }
        let dd = (d.getDate().toString().length < 2) ? '0' + d.getDate() : d.getDate();
        return dd + ' ' + MM + ', ' + d.getFullYear();
    }
    render() {
        const nTag = this.props.post.tags.length;
        let tags = this.props.post.tags.map((tag, i) =>
            <span key={tag}><a href={'https://blog.chhaileng.com/tags#' + tag}>#{tag}</a>{(nTag !== i+1) ? ', ' : ''}</span>
        )
        return (
            <div className={this.props.isEven ? 'blog even' : 'blog odd'}>
                <a className='image' href={this.props.post.url}>
                    <img alt='thumbnail' src={this.props.post.thumbnail} style={{objectFit: 'cover'}}/>
                    <div className='image-overlay'>
                        <div className='created-date' style={{backgroundColor: 'rgba(0,0,0,0.5)', paddingTop: 6}}>
                            <i className='fa fa-clock-o'></i> {this.formatDate(this.props.post.created_date)}
                        </div>
                    </div>
                </a>

                <div className='content'>
                    <h6>{this.props.post.title}</h6>
                    <p>{tags}</p>
                    <hr/>
                    <p>
                        {this.props.post.content}
                    </p>
                    <a className='forward' href={this.props.post.url}>Read More...</a>
                </div>
            </div>
        );
    }
}