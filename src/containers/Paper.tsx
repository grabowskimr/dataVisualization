import React from 'react';

type Props = {
	width?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
	className?: string;
};

const Paper: React.FC<Props> = (props): JSX.Element => (
	<div className={`paper width-${props.width ? props.width : 10} ${props.className ? props.className : ''}`}>{props.children}</div>
);

export default Paper;
