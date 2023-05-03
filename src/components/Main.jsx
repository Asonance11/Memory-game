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
		setdisplayedImages(selectRandomImages(images, 6));
	}, []);

	const selectRandomImages = (arr, num) => {
		let randomIndex;
		let items = [];
		let count = 0;

		while (count < num) {
			randomIndex = Math.floor(Math.random() * arr.length);

			if (!items.includes(arr[randomIndex])) {
				items.push(arr[randomIndex]);
				count++;
			}
		}
		console.log(items);
	};

	return <div>Main</div>;
};

export default Main;
