import { SVGProps } from 'react';

export type IconSvgProps = SVGProps<SVGSVGElement> & {
	size?: number;
};

export type InputProps = {
	label: string;
	type: string;
	id: string;
};
