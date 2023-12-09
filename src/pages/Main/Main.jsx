import React from 'react';
import { Slider, ProductCards, Calculator } from '../../components';
import Banks from '../../components/Banks/Banks';
import Support from '../../components/Support/Support';

function Main() {
	return (
		<>
			<Slider />
			<ProductCards />
			<Calculator />
			<Banks></Banks>
			<Support></Support>
		</>
	);
}
export default Main;
