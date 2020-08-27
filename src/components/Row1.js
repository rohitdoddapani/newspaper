import React, { Component } from 'react'
import dummy from '../img/dummy.png';
import '../App.css';
import Data from '../data';
import {Modal,Button,} from 'react-bootstrap';
import HiddenNews from './HiddenNews';

export default class Row1 extends Component {
    constructor(props){
        super(props);
    }
    state={
        data:  Data,
        modalShow: false,
        news: []
    }
    setModalShow(){
        console.log("cliecked");
        this.setState({modalShow: true})
    }
    render() {
        const data = this.state.data
        return (
            <div>
                <div class="row" style={{overflow: "hidden"}}>
                    <div class="col-md-3 four1 sahgt">
                        <div class="row" style={{marginTop:"10px",marginBottom:"10px"}}>
                            <div class="col-md-8">
                            <a onClick={() => {this.setState({modalShow: true,news: data.news[2]})}}><h3>{data.news[2].headline}</h3></a>
                            </div>
                            <div class="col-md-4 text-center">
                            <img src={data.news[2].images[0]} class="img-ht" width="100%" height="100%" />
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 four2 sahgt">
                        <div class="row" style={{marginTop:"10px",marginBottom:"10px"}}>
                            <div class="col-md-8">
                            <a onClick={() => {this.setState({modalShow: true,news: data.news[3]})}}>
                                <h3>{data.news[3].headline}</h3>
                            </a>
                            </div>
                            <div class="col-md-4 text-center">
                            <img src={data.news[3].images[0]} class="img-ht" width="100%" height="100%" />
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 four3 sahgt">
                        <div class="row" style={{marginTop:"10px",marginBottom:"10px"}}>
                            <div class="col-md-8">
                            <a onClick={() => {this.setState({modalShow: true,news: data.news[4]})}}>
                                <h3>{data.news[4].headline}</h3>
                            </a>
                            </div>
                            <div class="col-md-4 text-center">
                            <img src={data.news[4].images[0]} class="img-ht" width="100%" height="100%" />
                        </div>
                    </div>
                    </div>
                    <div class="col-md-3 four4 sahgt">
                        <div class="row" style={{marginTop:"10px",marginBottom:"10px"}}>
                            <div class="col-md-8">
                            <a onClick={() => {this.setState({modalShow: true,news: data.news[5]})}}>
                                <h3>{data.news[5].headline}</h3>
                            </a>
                            </div>
                            <div class="col-md-4 text-center">
                            <img src={data.news[5].images[0]} class="img-ht" width="100%" height="100%" />
                            </div>
                        </div>
                    </div>
                </div>
                {this.state.modalShow && <HiddenNews news={this.state.news} hi={this.state.modalShow} />}
            </div>
        )
    }
}
