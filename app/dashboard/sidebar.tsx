'use client';

import React, { FC, useState } from 'react';

interface SidebarProps {
	onSelectOption: (option: string) => void;
}

const Sidebar: FC<SidebarProps> = ({ onSelectOption }) => {
	const [isOpen, setIsOpen] = useState(true);

	function handleSwitch() {
		return setIsOpen(!isOpen);
	}

	return (
		<div className={'bg-gray-800 absolute z-40 pt-20 top-0 left-0 h-screen text-white p-4'}>
			<div className={isOpen ? 'block' : 'hidden'}>
				<div className='mb-4'>
					<h2 className='text-2xl font-semibold'>Dashboard</h2>
				</div>
				<ul>
					<li className='mb-2'>
						<button onClick={() => onSelectOption('podrecznik')} className='flex items-center text-white'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
								className='h-5 w-5 mr-2'>
								<path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M12 6v6m0 0v6m0-6h6m-6 0H6' />
							</svg>
							Dodaj podręcznik
						</button>
					</li>
					<li className='mb-2'>
						<button onClick={() => onSelectOption('wpis')} className='flex items-center text-white'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
								className='h-5 w-5 mr-2'>
								<path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M12 6v6m0 0v6m0-6h6m-6 0H6' />
							</svg>
							Dodaj wpis do bloga
						</button>
					</li>
					<li className='mb-2'>
						<button onClick={() => onSelectOption('konto')} className='flex items-center text-white'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
								className='h-5 w-5 mr-2'>
								<path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M12 6v6m0 0v6m0-6h6m-6 0H6' />
							</svg>
							Dodaj konto nauczycielskie
						</button>
					</li>
					<li>
						<button onClick={() => onSelectOption('zdjecie')} className='flex items-center text-white'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
								className='h-5 w-5 mr-2'>
								<path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M12 6v6m0 0v6m0-6h6m-6 0H6' />
							</svg>
							Dodaj zdjęcie
						</button>
					</li>
				</ul>
			</div>
			<button onClick={handleSwitch} className='absolute sm:block md:hidden top-1/2 right-0'>
				{isOpen ? (
					<svg width='32' height='32' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
						<g fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2'>
							<path d='M21 12H9m4 4l-4-4l4-4' />
							<path d='M12 3a9 9 0 1 0 0 18' />
						</g>
					</svg>
				) : (
					<svg width='32' height='32' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
						<path
							fill='none'
							stroke='currentColor'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							d='M9 12h12m-4 4l4-4l-4-4m-5-5a9 9 0 1 0 0 18'
						/>
					</svg>
				)}
			</button>
		</div>
	);
};

export default Sidebar;
