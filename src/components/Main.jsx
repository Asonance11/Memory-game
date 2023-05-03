import React, { useEffect, useState } from 'react';
import {
	brook,
	chopper,
	franky,
	jinbei,
	luffy,
	nami,
	robin,
	sanji,
	ussop,
	zoro,
} from '../data/images';

const Main = ({ incrementScore, incrementHighScore, clearScore }) => {
	const [images, setImages] = useState([
		luffy,
		zoro,
		nami,
		ussop,
		sanji,
		chopper,
		robin,
		franky,
		brook,
		jinbei,
	]);
	const [displayedImages, setdisplayedImages] = useState([]);

	useEffect(() => {
		setdisplayedImages(selectRandomImage(images));
	}, []);

	const selectRandomImage = (arr) => {
		let randomIndex;
		let item;

		randomIndex = Math.floor(Math.random() * arr.length);

		item = arr[randomIndex];

		console.log(item);
	};

	return <div>Main</div>;
};

export default Main;
