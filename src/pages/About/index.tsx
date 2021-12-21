import React from 'react';
import AboutInfo from './components/AboutInfo';

import HeroWrap from './components/HeroWrap';

interface AboutProps {}

export const About = (props: AboutProps) => {
	return (
		<div>
			<HeroWrap />
			<AboutInfo />
		</div>
	);
};