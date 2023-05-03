import React, { useState } from 'react';
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

	return <div>Main</div>;
};

export default Main;
