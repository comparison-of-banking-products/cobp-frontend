import React from 'react';
import { Slider, ProductCards } from '../../components';
import Banks from '../../components/Banks/Banks';
import Support from '../../components/Support/Support';

function Main() {
	return (
		<>
			<Slider />
			<ProductCards />
			<Banks></Banks>
			<Support></Support>
		</>
	);
}
export default Main;
