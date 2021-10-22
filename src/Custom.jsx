import React from 'react';
import useToggle from './hooks/useToggle';

function Custom() {
	const [isTextChanged, setIsTextChanged] = useToggle();

	return (
		<button onClick={setIsTextChanged}>{isTextChanged ? 'Toggled' : 'Click to Toggle'}</button>
	);
}

export default Custom;
