import React, { Component } from 'react'
import '../App.css';
import dummy from '../img/dummy.png';
import Data from '../data';
export default class Header extends Component {
    state={
        data:  Data     
    }
    render() {
        console.log(this.state.data.news[0].headline.length);
        console.log(this.state.data.news[0].headline);
        console.log(this.state.data.news[0].headline.slice(0,18));
        const data = this.state.data
        return (
            <div>
                <div class="row">
                    <div class="col-md-8 col-xs-8  heading">
                        News Paper
                    </div>
                    <div class="col-md-2 col-xs-2">
                        <div class="row" style={{ fontSize: "20px", fontWeight: "bold" }}>{data.day}</div>
                        <div class="row heading1">
                            <div class="image">
                                <div class="row text-center">
                                    <img src={this.state.data.news[0].images[0]} width="100%" height="100px" />
                                </div>
                                <div class="row">
                                    {this.state.data.news[0].headline}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-2 col-xs-2">
                        <div class="row" style={{ fontSize: "20px", fontWeight: "bold", textAlign: "end" }}>{data.date}</div>
                        <div class="row heading2">
                            <div class="image">
                                <div class="row text-center">
                                    <img src={data.news[1].images[1]} width="100%" height="100px" />
                                </div>
                                <div class="row ">
                                    <p>{data.news[1].headline}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row" style={{ backgroundColor: "#ff5700" }}>
                    Hyderabad | Vijayawada | Banglore | chennai | Delhi | Mumbai
                </div>
            </div>
        )
    }
}
