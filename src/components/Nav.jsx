import React from 'react';

const Nav = () => {
	return (
		<header className="p-4 bg-slate-950 flex items-center justify-between text-white">
			<h1 className="text-3xl font-bold">Memory Game</h1>
			<ul>
				<li>Score: 0</li>
				<li>Best Score: 0</li>
			</ul>
		</header>
	);
};

export default Nav;
