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
	const [displayedImages, setDisplayedImages] = useState([]);
	const [selectedImages, setSelectedImages] = useState([]);

	useEffect(() => {
		setDisplayedImages(selectRandomImages(images, 6));
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
			style={{ backgroundImage: 'url(' + item + ')' }}
			className=" h-full w-full cursor-pointer bg-no-repeat bg-contain bg-center  object-cover"
			onClick={(e) => {
				setDisplayedImages(selectRandomImages(images, 6));
				if (!selectedImages.includes(e.target.id)) {
					setSelectedImages(selectedImages.concat(e.target.id));
					incrementScore();
					incrementHighScore();
				} else {
					setSelectedImages([]);
					clearScore();
				}
			}}
		></div>
	));

	return (
		<main className=" grid gap-4 grid-cols-3 grid-rows-2  p-8 bg-slate-900 items-center h-[90vh]">
			{loadedImages}
		</main>
	);
};

export default Main;
