import React, { Component } from 'react'
import dummy from '../img/dummy.png';
import '../App.css';
import Data from '../data';
import {Modal,Button,} from 'react-bootstrap';
import HiddenNews from './HiddenNews';

export default class Row3 extends Component {
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
                <div class="row">
                    <div class="col-md-10">
                        <div class="row">
                        <div class="col-md-8">
                            <div class="row">
                            <div class="col-md-5 text-center">
                                <h1 class="bgblack">tfhggj akujs hjsa</h1>
                                <p>jyvhb tyhcg jhjvvhg jhnhg jguj dszn zjhz hj jhjvvhg jhnhg jguj dszn zjhz hj
                                jhjvvhg jhnhg jguj dszn zjhz hj jhjvvhg jhnhg jguj dszn zjhz hj jhjvvhg jhnhg jguj dszn zjhz hj
                                        </p>
                                <p>jyvhb tyhcg jhjvvhg jhnhg jguj dszn
                                jhjvvhg jhnhg jguj dszn zjhz hj jhjvvhg jhnhg jguj dszn zjhz hj jhjvvhg jhnhg jguj dszn zjhz hj
                                        </p>
                            </div>
                            <div class="col-md-7">
                                <img src={dummy} class="img-ht" width="100%" height="250px" />
                            </div>
                            </div>
                            <hr />
                            <div class="row">
                            <div class="col-md-5">
                                <img src={dummy} class="img-ht" width="100%" height="100%" />
                                <p class="text-center">jyvhb tyhcg jhjvvhg jhnhg jguj dszn zjhz hj jyvhb tyhcg jhjvvhg jhnhg jguj dszn zjhz hj
                                jyvhb tyhcg jhjvvhg jhnhg jguj dszn zjhz hj jyvhb tyhcg jhjvvhg jhnhg jguj dszn zjhz hj
                                            jyvhb tyhcg jhjvvhg jhnhg jguj dszn zjhz hj jyvhb tyhcg jhjvvhg jhnhg jguj dszn zjhz hj </p>
                            </div>
                            <div class="col-md-7">
                                <div class="row" style={{paddingLeft:"15px"}}>
                                <h2>tfhggj akujs hjsa</h2>
                                <h1>tfhggj akujs hjsa</h1>
                                </div>
                                <div class="row">
                                <div class="col-md-7">
                                    <div class="backp">
                                    <p>jyvhb tyhcg jhjvvhg jhnhg jguj </p>
                                    <hr style={{margin:"0px"}} />
                                        <p>jyvhb tyhcg jhjvvhg jhnhg jguj </p>
                                                </div>
                                    <p>jyvhb tyhcg jhjvvhg jhnhg jguj dszn jhjvvhg jhnhg jguj dszn jhjvvhg jhnhg jguj dszn zjhz hj jyvhb tyhcg jhjvvhg jhnhg jguj dszn zjhz hj
                                    jyvhb tyhcg jhjvvhg jhnhg jguj dszn zjhz hj jyvhb tyhcg jhjvvhg jhnhg jguj dszn zjhz hj
                                                    jyvhb tyhcg jhjvvhg jhnhg jguj dszn zjhz hj jyvhb tyhcg jhjvvhg jhnhg jguj dszn zjhz hj </p>

                                    </div>
                                    <div class="col-md-5">
                                    <p>jyvhb tyhcg jhjvvhg jhnhg jguj dszn zjhz hj jyvhb tyhcg jhjvvhg jhnhg jguj dszn zjhz hj
                                    jyvhb tyhcg jhjvvhg jhnhg jguj dszn zjhz hj jyvhb tyhcg jhjvvhg jhnhg jguj dszn zjhz hj
                                                    jyvhb tyhcg jhjvvhg jhnhg jguj dszn zjhz hj jyvhb tyhcg jhjvvhg jhnhg jguj dszn zjhz hj </p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div class="col-md-4 five1">
                            <div class="row" style={{display: "flex",justifyContent: "space-between"}}>
                                <div class="col-md-3">
                                <img src={dummy} class="img-ht" width="100px" height="140px" />
                                </div>
                                <div class="col-md-3">
                                <img src={dummy} class="img-ht" width="100px" height="140px" />
                                </div>
                            </div>
                            <div class="row" style={{padding:"10px"}}>
                                <h1>jyvhb tyhcg jhjvvhg jhnhg jguj</h1>
                                <h4>jyvhb tyhcg jhjvvhg jhnhg jguj dszn zjhz hj jhjvvhg jhnhg jguj dszn zjhz hj</h4>
                                <h4>jyvhb tyhcg jhjvvhg jhnhg jguj dszn zjhz hj jhjvvhg jhnhg jguj dszn zjhz hj</h4>
                                <hr />
                            </div>


                            <div class="row">
                                <h3>jyvhb tyhcg jhjvvhg jhnhg jguj</h3>
                                <div class="col-md-8">
                                <ul style={{textAlign: "start"}}>
                                    <li>jyvhb tyhcg jhjvvhg jhn jyvhb tyhcg jhjvvhg jhn </li>
                                    <li>jyvhb tyhcg jhjvvhg jhn </li>
                                    <li>jyvhb tyhcg jhjvvhg jhn jyvhb tyhcg jhjvvhg jhn</li>
                                </ul>
                                </div>
                                <div class="col-md-4">
                                <img src={dummy} class="img-ht" width="100px" height="140px" />
                                </div>
                            </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-2">
                            <img src={dummy} class="img-ht" width="100%" height="300px" />
                            </div>
                            <div class="col-md-10">
                            <div class="row">
                                <h1 class="mt-0">jyvhb tyhcg jhjvvhg jhnhg jguj </h1>
                            </div>
                            <div class="row">
                                <div class="col-md-3">
                                <div class="backp">
                                    <p>jyvhb tyhcg jhjvvhg jhnhg jguj dszn zjhz hj</p>
                                    <hr style={{margin:"0px"}} />
                                    <p>jyvhb tyhcg jhjvvhg jhnhg jguj </p>
                                    <hr style={{margin:"0px"}} />
                                        <p>jyvhb tyhcg jhjvvhg jhnhg jguj </p>
                                        </div>
                                    <p><b>ikjsa cdsikjs: </b>djyvhb tyhcg jhjvvhg jhnhg jguj dszn zjhz hj jhjvvhg jhnhg jguj dszn zjhz hj
                                            dszn zjhz hj jhjvvhg jhnhg jguj dszn zjhz hj jhjvvhg jhnhg jguj dszn zjhz hj
                                            dszn zjhz hj jhjvvhg jhnhg jguj zjhz
                                        </p>
                                    </div>
                                    <div class="col-md-6">
                                    <div class="row">
                                        <img src={dummy} class="img-ht" width="100%" height="150px" />
                                    </div>
                                    <div class="row" style={{paddingTop: "10px"}}>
                                        <div class="col-md-6">
                                        <p>jyvhb tyhcg jhjvvhg jhnhg jguj dszn zjhz hj jhjvvhg jhnhg jguj dszn zjhz hj jhjvvhg jhnhg jguj dszn zjhz hj</p>
                                        </div>
                                        <div class="col-md-6">
                                        <h3 class="mt-0">tfhggj akujs hjsa</h3>
                                        <p>jyvhb tyhcg jhjvvhg jhnhg jguj dszn zjhz hj jhjvvhg jhnhg jguj</p>
                                        </div>
                                    </div>
                                    </div>
                                    <div class="col-md-3">
                                    <div class="backp">
                                        <ul>
                                        <li>jyvhb tyhcg jhjvvhg jhnhg jguj dszn zjhz hj</li>
                                        <li>jyvhb tyhcg jhjvvhg jhnhg jguj </li>
                                        <li>jyvhb tyhcg jhjvvhg jhnhg jguj </li>
                                        <li>jyvhb tyhcg jhjvvhg jhnhg jguj </li>
                                        <li>jyvhb tyhcg jhjvvhg jhnhg jguj </li>
                                        <li>jyvhb tyhcg jhjvvhg jhnhg jguj </li>
                                        </ul>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div class="col-md-2 text-center" style={{padding: "0px 20px 0px 20px"}}>
                            <h3>jyvhb tyhcg</h3>
                            <h1>jyvhbed</h1>
                            <div class="row bgblack">
                                <h5>jyvhb tyhcg jhjvvhg jhnhg </h5>
                                <hr />
                                <h5>jyvhb tyhcg jhjvvhg jhnhg </h5>
                            </div>
                            <div class="" style={{textAlign: "justify"}}>
                                <p>jyvhb tyhcg jhjvvhg jhnhg jguj dszn zjhz hj jhjvvhg jhnhg jguj dszn zjhz hj
                                jhjvvhg jhnhg jguj dszn zjhz hj jhjvvhg jhnhg jguj dszn zjhz hj jhjvvhg jhnhg jguj
                                dszn zjhz hj jhjvvhg jhnhg jguj dszn zjhz hj jhjvvhg
                            </p>
                                <p>jyvhb tyhcg jhjvvhg jhnhg jguj dszn zjhz hj jhjvvhg jhnhg jguj dszn zjhz hj
                                jhjvvhg jhnhg jguj dszn zjhz hj jhjvvhg jhnhg jguj dszn zjhz hj jhjvvhg jhnhg jguj
                                dszn zjhz hj jhjvvhg jhnhg jguj dszn zjhz hj jhjvvhg
                            </p>
                                <p>jyvhb tyhcg jhjvvhg jhnhg jguj dszn zjhz hj jhjvvhg jhnhg jguj dszn zjhz hj
                                jhjvvhg jhnhg jguj dszn zjhz hj jhjvvhg jhnhg jguj dszn zjhz hj jhjvvhg jhnhg jguj
                                dszn zjhz hj jhjvvhg jhnhg jguj dszn zjhz hj jhjvvhg
                            </p>
                                <p>jyvhb tyhcg jhjvvhg jhnhg jguj dszn zjhz hj jhjvvhg jhnhg jguj dszn zjhz hj
                                jhjvvhg jhnhg jguj dszn zjhz hj jhjvvhg jhnhg jguj dszn zjhz hj jhjvvhg jhnhg jguj
                                dszn zjhz hj jhjvvhg jhnhg jguj dszn zjhz hj jhjvvhg
                            </p>
                            </div>

                            </div>
                        </div>
            </div>
        )
    }
}
