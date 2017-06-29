import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

class Index extends React.Component {
    render() {
        return(
            <div>
                <Header />
                <Content />
                <Footer />
            </div>
        )
    }
}

ReactDOM.render(
    <Index />,
    document.getElementById('app')
);