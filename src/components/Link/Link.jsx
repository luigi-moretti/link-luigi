import React, { Component } from "react";

class Link extends Component{
    render(){
        return(
            <div className="my-3">
                <a href="https://www.linkedin.com.br" target="_blank" className="btn btn-outline-secondary btn-lg col-md-4 col-sm-10">
                    Linkedin
                </a>
            </div>
        );
    }
}

export default Link;