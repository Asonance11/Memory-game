import React, { useState } from 'react';
import Nav from './components/Nav';

const App = () => {
	const [score, setScore] = useState(0);
	const [highScore, setHighScore] = useState(0);

	const incrementScore = () => {
		setScore(score + 1);
	};

	const incremetHighScore = () => {
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
		</div>
	);
};

export default App;
