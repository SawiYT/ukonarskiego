import { InputProps } from '@/types';

export const Input: React.FC<InputProps> = ({ label, type, id }) => (
	<div className='mb-4'>
		<label htmlFor={id} className='block text-sm font-medium text-gray-500 '>
			{label}
		</label>
		<input
			type={type}
			name={id}
			id={id}
			required
			className='mt-1 p-2 w-full border rounded-md text-white bg-neutral-950 border-gray-500'
		/>
	</div>
);
