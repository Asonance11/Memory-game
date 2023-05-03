import React, { useEffect, useState } from 'react';
import Main from './components/Main';
import Nav from './components/Nav';
import storageAvailable from './storage/localStorage';

const App = () => {
	const [score, setScore] = useState(0);
	const [highScore, setHighScore] = useState(0);

	const incrementScore = () => {
		setScore(score + 1);
	};

	const incrementHighScore = () => {
		if (score >= highScore) {
			setHighScore(score + 1);
			localStorage.setItem('highScore', JSON.stringify(score + 1));
		}
	};

	const clearScore = () => {
		setScore(0);
	};

	useEffect(() => {
		const storedHighScore =
			storageAvailable('localStorage') && localStorage.getItem('highScore')
				? JSON.parse(localStorage.getItem('highScore'))
				: 0;

		setHighScore(storedHighScore);
	}, []);

	return (
		<div>
			<Nav score={score} highScore={highScore} />
			<Main
				incrementScore={incrementScore}
				incrementHighScore={incrementHighScore}
				clearScore={clearScore}
			/>
		</div>
	);
};

export default App;
