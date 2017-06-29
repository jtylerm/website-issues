import React from 'react';
import ArtCode from './ArtCode.js';

class Content extends React.Component {
    constructor(props) {
        super(props);

        this.setState({
            activePage: 'home'
        })
    }
    render() {
        return (
            <div id="contentContainer" className="container">
                <ArtCode />
            </div>
        )
    }
}

export default Content;