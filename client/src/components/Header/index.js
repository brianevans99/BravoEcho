import React, {Component} from 'react';
import logo from "../../assets/images/BRAVO_ECHO_COLOR_TRANSPARENT-min.png";
import ('../../assets/javascript/app');
export default class Header extends Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 d-flex justify-content-center" id="belogo">
                        <img src={logo} className="App-logo" alt="logo" />
                    </div>
                    <div className="col-lg-8 d-flex justify-content-center align-items-center">
                        <div className="animated fadeIn slower">
                            <span><h1 className="text-center">Affordable Web Presence</h1></span>
                            <h5 className="text-center">for Small Businesses and Organizations</h5>
                        </div>
                    </div>
                </div>
        
        
            </div>
        
        )
    }
}
