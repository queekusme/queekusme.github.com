import React from 'react';
import { Container, Jumbotron } from 'reactstrap';
import './App.css';
import SiteNav from './Components/SiteNav';

export default function App() {
    return (
        <div>
            <SiteNav />
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <Container>
                <Jumbotron>
                    <h1 className="display-3">Hello, world!</h1>
                    <p className="lead">My website is going through a small re-design...</p>
                    <hr className="my-2" />
                    <p>If you wish to have a look at my current projects, my Github and Roller Derby Officials CV links can be found in the navbar above</p>
                </Jumbotron>
            </Container>
        </div>
    );
}
