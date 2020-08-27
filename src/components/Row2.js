import React, { Component } from 'react'
import dummy from '../img/dummy.png';
import '../App.css';
import Data from '../data';
import {Modal,Button,} from 'react-bootstrap';
import HiddenNews from './HiddenNews';

export default class Row2 extends Component {
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
                    <div class="col-md-7 two1">
                    <div class="row">
                        <div class="col-md-9">
                        <h1 class="two-heading">Some Title</h1>
                        <div class="row">
                            <div class="col-md-5" >
                            <div class="row" style={{backgroundColor: "red"}}>
                                <h4 class="text-center" style={{color:"white"}}>hgj jakseb cakjs kajdszjk<hr />gfvh kjwhab kwqj ajsh kj</h4>
                            </div>
                            <ul style={{marginLeft: "-30px"}}>
                                <li>jhac ajs ajhsc jhsv hjdjh dszn zjhz hj</li>
                                <li>jhac ajs ajhsc jhsv hjdjh dszn zjhz hj</li>
                                <li>jhac ajs ajhsc jhsv hjdjh dszn zjhz hj</li>
                                <li>jhac ajs ajhsc jhsv hjdjh dszn zjhz hj</li>
                                <li>jhac ajs ajhsc jhsv hjdjh dszn zjhz hj</li>
                                <li>jhac ajs ajhsc jhsv hjdjh dszn zjhz hj</li>
                                <li>jhac ajs ajhsc jhsv hjdjh dszn zjhz hj</li>
                                <li>jhac ajs ajhsc jhsv hjdjh dszn zjhz hj</li>
                            </ul>
                            </div>
                            <div class="col-md-7 text-center">
                            <img src={dummy} class="img-ht" width="100%" height="100%" />
                            <p>bh bh ikjsa cdsikjsd dssdkl ask iknld bh ikjsa cdsikjsd dssdkl ask iknld bh
                            ikjsa cdsikjsd dssdkl ask iknld  ikjsa cdsikjsd dssdkl ask iknld iaeksjd oiaskzdj
                            dszn zjhz hj fd oiaskzdj oialkjszd oiaskjv oailszkjd iszkjd oiaekwsjv
                            oiwakj owiskj skj
                                            </p>
                            <div style={{backgroundColor: "bisque"}}>
                                <p>iasnvoisavaoi djks lskdv vsjkdv sdjk sdzjk sdjk </p>
                                <p class="frit"> -hbsw aw aqhj</p>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div class="col-md-3" style={{border: "4px solid white"}}>
                        <div class="row">
                            <img src={dummy} class="frit" width="100px" height="120px" />
                            <p>jkesa askj askj akjs jkesa askj askj akjs jkesa askj askj
                            asjbial\ IAK ak a\kzb sdkj sdjksd sjkdz szdkj akjs jkesa askj 
                            askj akjs jkesa askj askj akjs jkesa askj askj akjs jkesa askj askj akjs</p>
                            <p class="frit">-ukabs kAJ</p>
                        </div>
                        <div class="row">
                            <img src={dummy} class="frit" width="100px" height="120px" />
                            <p>jkesa jkesa jkesa askj askj akjs  jkesa askj askj akjs  askj askj akjs jkesa
                            askj askj askj akjs jkesa askj askj akjs jkesa askj askj akjs jkesa askj askj akjs
                                jkesa askj askj akjs jkesa askj askj akjs jkesa askj askj akjs</p>
                            <p class="frit">-ukabs kAJ</p>
                        </div>
                        </div>
                    </div>
                    <hr style={{border: "1px solid grey"}} />
                    </div>
                    <div class="col-md-5 two2">
                        <div class="row">
                        <h1 style={{fontSize: "50px",fontWeight: "bold",textAlign: "center"}}>Other Title</h1>
                        </div>
                        <div class="row">
                        <div class="col-md-6" style={{marginRight: "-20px"}}>
                            <div class="third1">
                            <p>usbd hsdb sdh eshjs dznm ash asjhn</p>
                            </div>
                            <img src={dummy} class="img-ht" width="100%" height="100%" />
                            <p style={{backgroundColor: "#e1dcdc",textAlign: "center"}}>bh ikjsa cdsikjsd dssdkl ask oiaskzdj dszn zjhz hj fd oiaskzdj oialkjszd </p>
                            <p style={{marginBottom:"0px"}}>bh ikjsa cdsikjsd dssdkl ask bh ikjsa cdsikjsd dssdkl ask bh ikjsa cdsikjsd dssdkl ask iknld iaeksjd oiaskzdj dszn zjhz hj fd oiaskzdj oialkjszd oiaskjv oailszkjd iszkjd oiaekwsjv oiwakj owiskj skj</p>
                            <p class="frit" style={{marginTop:"0px"}}>- yuv yjhvsedy</p>
                        </div>
                        <div class="col-md-6">
                            <div class="third2">
                            <p>usbd hsdb sdh eshjs dznm ash asjhn</p>
                            </div>
                            <div class="text-center">
                            <h4>lasjbc akjshz jhsam iaksjh akjshm kjwas kusaj askjmn</h4>
                            <h4>lasjbc akjshz jhsam iaksjh akjshm kjwas kusaj askjmn</h4>
                            <h4>lasjbc akjshz jhsam iaksjh akjshm kjwas kusaj askjmn</h4>
                            </div>
                            <p style={{textAlign: "justify"}}><b>ikjsa cdsikjsd</b> dssdkl ask iknld iaeksjd oiaskzdj dszn zjhz hj fd oiaskzdj oialkjszd oiaskjv oailszkjd iszkjd oiaekwsjv oiwakj owiskj skj
                                    bh ikjsa cdsikjsd dssdkl ask iknld iaeksjd oiaskzdj dszn zjhz hj fd oiaskzdj oialkjszd oiaskjv oailszkjd iszkjd oiaekwsjv oiwakj owiskj skj
                                    bh ikjsa cdsikjsd dssdkl ask iknld iaeksjd oiaskzdj dszn zjhz hj fd oiaskzdj oialkjszd oiaskjv oailszkjd iszkjd oiaekwsjv oiwakj owiskj skj
                                </p>
                        </div>
                        </div>
                    </div>
                    </div>
            </div>
        )
    }
}
