import React, { useState } from 'react';
import Main from './components/Main';
import Nav from './components/Nav';

const App = () => {
	const [score, setScore] = useState(0);
	const [highScore, setHighScore] = useState(0);

	const incrementScore = () => {
		setScore(score + 1);
	};

	const incrementHighScore = () => {
		if (score > highScore) {
			setHighScore(score + 1);
		}
	};

	const clearScore = () => {
		setScore(0);
	};

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
