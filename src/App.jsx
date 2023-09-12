import React, { useState, useEffect } from 'react';
import './App.scss';

const images = [
	{ id: 1, src: 'https://media.myshows.me/episodes/c/5b/c5b504b9ec76acb305457ac4acf07cdc.jpg', title: 'Three Robots: Exit Strategies' },
	{ id: 2, src: 'https://media.myshows.me/episodes/d/33/d330417c47715857bf022bd978268ce3.jpg', title: 'Bad Travelling' },
	{ id: 3, src: 'https://media.myshows.me/episodes/3/0f/30fb34f0e34b8598c753ff5e7a99eba9.jpg', title: 'The Very Pulse of the Machine' },
	{ id: 4, src: 'https://media.myshows.me/episodes/5/fc/5fc04bc1bc64c36e91c390accf9f2091.jpg', title: 'Night of the Mini Dead' },
	{ id: 5, src: 'https://media.myshows.me/episodes/f/d6/fd6bf75b7e57e6925771915ec91467d2.jpg', title: 'Kill Team Kill' },
	{ id: 6, src: 'https://media.myshows.me/episodes/5/f5/5f58c6d2f848a1512df507a89d72fb4b.jpg', title: 'Swarm' },
	{ id: 7, src: 'https://media.myshows.me/episodes/0/1e/01e529828254fea85f28e39fc38480c9.jpg', title: 'Masons Rats' },
	{ id: 8, src: 'https://media.myshows.me/episodes/1/af/1af54d8042fa12c8655646db660a12c4.jpg', title: 'In Vaulted Halls Entombed' },
	{ id: 9, src: 'https://media.myshows.me/episodes/c/05/c058a1560e65aea6bd32c91075aafdc3.jpg', title: 'Jibaro' },
];

function Slider() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [autoPlay, setAutoPlay] = useState(true);
  
	useEffect(() => {
		const interval = setInterval(() => {
		if (autoPlay) {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
		}
		}, 4000);
	
		return () => clearInterval(interval);
	}, [autoPlay]);
  
	const handlePrev = () => {
		setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
	};

	const handleNext = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
	};

	const handleToggleAutoPlay = () => {
		setAutoPlay((prevAutoPlay) => !prevAutoPlay);
	};

	return (
		<div className="slider">
		<div className="slider-container">{images.map((image, index) => (
				<div key={image.id} className={`slide ${index === currentIndex ? 'active' : ''}`}>
					<img src={image.src} alt={image.title}/>
					
					<div key={image.id} className={`slide-content ${index === currentIndex ? 'active' : ''}`}>
						<p>{image.title}</p>
					</div>
				</div>
		))}
		</div>

		
		<button onClick={handlePrev} className="slider-button prev-button">
			Prev
		</button>
		<button onClick={handleNext} className="slider-button next-button">
			Next
		</button>
		<button onClick={handleToggleAutoPlay} className="auto-play-button">
			{autoPlay ? 'Pause' : 'Play'}
		</button>
		</div>
	);
}

export default Slider;
