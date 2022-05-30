import * as React from 'react';

function SvgSafeFill(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M9.778 9.414A2 2 0 116.95 6.586a2 2 0 012.828 2.828z' />
			<path d='M2.5 0A1.5 1.5 0 001 1.5V3H.5a.5.5 0 000 1H1v3.5H.5a.5.5 0 000 1H1V12H.5a.5.5 0 000 1H1v1.5A1.5 1.5 0 002.5 16h12a1.5 1.5 0 001.5-1.5v-13A1.5 1.5 0 0014.5 0h-12zm3.036 4.464l1.09 1.09a3.003 3.003 0 013.476 0l1.09-1.09a.5.5 0 11.707.708l-1.09 1.09c.74 1.037.74 2.44 0 3.476l1.09 1.09a.5.5 0 11-.707.708l-1.09-1.09a3.002 3.002 0 01-3.476 0l-1.09 1.09a.5.5 0 11-.708-.708l1.09-1.09a3.003 3.003 0 010-3.476l-1.09-1.09a.5.5 0 11.708-.708zM14 6.5v3a.5.5 0 01-1 0v-3a.5.5 0 011 0z' />
		</svg>
	);
}

export default SvgSafeFill;
