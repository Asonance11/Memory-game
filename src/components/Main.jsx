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

		return items;
	};

	const loadedImages = displayedImages.map((item, index) => (
		<div
			key={index}
			id={item}
			title="card"
			style={{ backgroundImage: 'url(' + item + ')' }}
			className=" rounded h-full w-full cursor-pointer bg-no-repeat bg-contain  object-cover"
		></div>
	));

	return (
		<main className=" grid grid-cols-3 grid-rows-2 gap-4 p-8 bg-slate-900 items-center h-[90vh]">
			{loadedImages}
		</main>
	);
};

export default Main;
