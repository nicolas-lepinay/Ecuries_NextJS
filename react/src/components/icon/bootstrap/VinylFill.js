import * as React from 'react';

function SvgVinylFill(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M8 6a2 2 0 100 4 2 2 0 000-4zm0 3a1 1 0 110-2 1 1 0 010 2z' />
			<path d='M16 8A8 8 0 110 8a8 8 0 0116 0zM4 8a4 4 0 108 0 4 4 0 00-8 0z' />
		</svg>
	);
}

export default SvgVinylFill;
