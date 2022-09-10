import React from 'react';
import {
    Container, Jumbotron
} from 'reactstrap';
import './App.css';

import SiteNav from './Components/SiteNav';
import FeaturedProjects from './Sections/FeaturedProjects';
import Footer from './Sections/Footer';

export default function App() {
    return (
        <div>
            <SiteNav />
            <Container>
                <Jumbotron>
                    <h1 className="display-3">Hello, world!</h1>
                    <p className="lead">My website is going through a small re-design...</p>
                    <p>Most of my projects can either be found on my Itch Profile or on my Github Profile, Links for both can be found in the navbar above.</p>
                    <p>Featured Projects are displayed below. These are usually my latest projects.</p>
                </Jumbotron>
                <hr />
                <FeaturedProjects />
            </Container>
            <Footer />
        </div>
    );
}
