import React, { Component } from "react";

class LinkItem extends Component{
    render(){
        return(
            <div className="my-3">
                <a className="btn btn-outline-secondary btn-lg col-md-4 col-sm-10"  target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com.br">
                    Linkedin
                </a>
            </div>
        );
    }
}

export default LinkItem;