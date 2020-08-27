import React, { Component } from 'react'
import dummy from '../img/dummy.png';
import '../App.css';
import Data from '../data';
import {Modal,Button,} from 'react-bootstrap';
import HiddenNews from './HiddenNews';

export default class Articlew5 extends Component {
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
        const data = this.state.data;
        console.log(this.props.rdata);
        return (
            <div>
                <div class="col-md-5">
                {this.props.rdata.map(data =>{
                return(
                    <article>
                        <h3 style={{marginTop: "0px"}}>{data.title}</h3>
                        <img src={data.urlToImage} width="250px" />
                        <p>
                            {data.description}
                        </p>
                        <p>
                            {data.content}
                        </p>
                    </article>
                )
                
            })}
                </div>
            </div>
        )
    }
}
