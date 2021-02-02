import React, { Component } from 'react'
import './Post.css'
import {Button} from 'react-bootstrap'
import ReactHtmlParser from 'react-html-parser'
import { Link } from "react-router-dom";
import store from '../../store/Store'

export default class PostCell extends Component {
    constructor(props) {
        super(props)
        this.history = props.history
        this.data = this.props.data
        this.id = this.data.postId
    }


    handleClick = () => {
        const action = {
            type: 'setCurrentVisitingPost',
            data: {
                post: this.data
            }
        }
        store.dispatch(action)
        //this.history.push( `/posts/${this.id}`)
    }

    render() {
        const {creatorName, creatorEmail, title, description, views, likes, date, postId, postType} = this.data

        return (
            <div className='single-post-container'>
                <div className='single-post-wrapper'>
                <div className='single-post-header'>
                <div style={{display: 'inline-block'}}>
                    <div style={{display: 'flex'}}>

                        <div className='single-post-creator'>
                            {creatorName? creatorName: 'unknown'}
                        </div>
                        <div className='single-post-type'>
                            {postType}  
                        </div>
                    </div>
                </div>

                    <span className='single-post-date'>
                        {date}
                    </span>
                </div>

                <div className='single-post-title'>
                    {title}
                </div>

                <div className='single-post-description-box'>
                    <div className='single-post-description-text'>
                        {ReactHtmlParser(description)}
                        
                    </div>
                </div>
                </div>
 
                <div className= 'single-post-detailButton-box'>
                   <Link to={`/posts/${this.id}`}>
                        <Button variant='light' className='single-post-detailButton' onClick={this.handleClick}>View Details</Button>
                        {/* <DislikeOutlined className='single-post-likeButton' />
                        <LikeOutlined className='single-post-likeButton'/> */}
                    </Link>
                </div>
                  
            </div>
        )
    }
}