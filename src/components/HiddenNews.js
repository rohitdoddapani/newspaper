import React, { Component } from 'react'
import dummy from '../img/dummy.png';

export default class HiddenNews extends Component {
    state={
        show: this.props.hi
    }
    componentDidMount(){
        console.log(this.props);
    }
    render() {
        return (
            <div className="hiddenNews" style={{display: this.state.show ? 'block' : 'none'}}>
                <div className="model">
                <button class="btn btn-primary" onClick = {() => {window.location.reload(false)}}
                    style={{marginTop: "10px",marginLeft: "1000px",position: "fixed"}}>Close </button>
                    <div className="container">
                        <div className="row">
                        <div class="col-md-8">
                        
                            <h1 class="mt-4">{this.props.news.headline}</h1>
                            
                            <hr />
                            <img class="img-fluid rounded" src={this.props.news.images[0]} alt="" />

                            <hr />

                            <p class="lead">{this.props.news.description}</p>
                            <blockquote class="blockquote">
                            <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                            <footer class="blockquote-footer">Someone famous in
                                <cite title="Source Title">Source Title</cite>
                            </footer>
                            </blockquote>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
