import React, { Component } from 'react';

class Article extends Component {
    
    state={
        likes:0
    }

    handleAddLike=()=>{
        console.log('test')
        this.setState({
            likes:this.state.likes+1
        })
    }

    render() {
        return (
            <div className='article'>
                <img 
                    alt='study' 
                    src={'https://source.unsplash.com/1600x900/?study'}
                />
                <h2>Full Stack Web Developer program</h2>
                <p>Full Stack Web Developer program is designed for adults who want to work as software developer. Studing in the program is very practical in comparison to academic studing. The studies focus 100% on getting the cose skills neededas software developer.
                </p>
                <p>{this.state.likes} people like this article</p>
                <div className='buttons'>            
                    <button>Read More</button>
                    <button onClick={this.handleAddLike}>Give a vote</button> 
                </div>                
            </div>
        );
    }
}

export default Article;