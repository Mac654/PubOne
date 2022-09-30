import React from 'react';
import { Link } from 'react-router-dom';

interface Props {}

const Home: React.FC<Props> = (props) => {
    return (
        <div className="container">
            <div className='titleDiv'>
                <h1 className="h1Title">Imagine if <span className='homeTitle'>Snapchat</span> had events.</h1>
                <p className='underTitle'>Easily host and share events with your friends aross any social media.</p>

                <div>
                    <img src="../landingImg.png" alt="landingImg" />
                </div>

                <div>
                    <Link to="create" className='btnCreateEvent'>🎉 Create my event</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;