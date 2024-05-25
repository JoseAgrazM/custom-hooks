import { useState } from 'react';

export const useCounter = (initialValue = 1) => {
	const [counter, setCounter] = useState(initialValue);

	const increment = (value = 1) => {
		// if (counter >= value) return;
		return setCounter(counter + 1);
	};

	const decrement = (value = 1) => {
		// if (counter <= value) return;
		return setCounter(counter - 1);
	};

	const reset = (value = 1) => {
		return setCounter(initialValue);
	};

	return {
		counter, // --> counter: counter
		increment,
		decrement,
		reset,
	};
};
