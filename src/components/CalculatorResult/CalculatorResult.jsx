import React from 'react';

function CalculatorResult({ name, value, currency }) {
	return (
		<div className="calculator__result">
			<span className="calculator__result-name">{name}:</span>
			<span className="calculator__result-value">
				{value} {currency}
			</span>
		</div>
	);
}

export default CalculatorResult;
