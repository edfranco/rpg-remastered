import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// internal components
import { landingImages as IMAGES } from '../../Constants/landingImages';
// internal styles
import './Landing.css';

class Landing extends Component {
    state = {
        imageIndex: 0
    };

    componentDidMount() {
        this.setLandingImage();
    }

    carouselTimer = undefined;

    incrementCarousel = () => {
        const nextIndex = this.state.imageIndex + 1;
        const hasPassedLastIndex = nextIndex >= IMAGES.length;
        this.setState({ imageIndex: hasPassedLastIndex ? 0 : nextIndex });
    }

    setLandingImage = () => {
        this.carouselTimer = setInterval(this.incrementCarousel, 3000)
    };

    render() {
        return (
            <div className="landing">
                <div className="header">
                    <h1>Not a Good RPG</h1>
                    <h4>A Game By <a href="eduardofranco.me">Eduardo Franco</a></h4>
                </div>
                <img id="landing-image" src={IMAGES[this.state.imageIndex].imageUrl} alt={`${IMAGES[this.state.imageIndex].name} game artwork`} />
                <h4>Do You like Roleplaying Games?</h4>
                <p>Are you a fan of table top games like Dungeons and Dragons?</p>
                <p>Did you you enjoy games like the Elder Scrolls Games, Fallout, and The Witcher?</p>
                <p>Awesome! This is not the game for you. This is not a very good RPG but it's a cool concept I wanted to play with. This game has the basic RPG elements such as, branching storylines, quests, and inventory management</p>
                <Link to="/game-start">
                    <button>Start</button>
                </Link>
            </div>
        );
    }
};

export default Landing;
