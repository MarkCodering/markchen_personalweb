import React, {Component} from 'react';
import './Home_Style.css';

class Home extends Component {
    render() {
        return(
            <div id="home_background">
                <h1 id="title">Mark Chen</h1>
                <h2 id="subtitle">Computer Science Student</h2>
                <h2 id="subtitle">On-campus Tech Entrepreneur</h2>
                <h2 id="subtitle">2021 Alpha Microsoft Student Ambassador</h2>
            </div>);
    }
}

export default Home;