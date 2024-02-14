'use client';

import { useState } from 'react';
import AddTextbookForm from './add-textbook-form';
import AddBlogPostForm from './add-blog-post-form';
import AddPhotoForm from './add-photo-form.tsx';
import Sidebar from './sidebar';
import SelectOption from './select-option';

export default function DashboardPage() {
	const [selectedOption, setSelectedOption] = useState('');

	const renderForm = () => {
		switch (selectedOption) {
			case 'podrecznik':
				return <AddTextbookForm />;
			case 'wpis':
				return <AddBlogPostForm />;
			case 'zdjecie':
				return <AddPhotoForm />;
			default:
				return <SelectOption />;
		}
	};
	return (
		<div className='flex flex-row '>
			<Sidebar onSelectOption={setSelectedOption} />
			<div className=''>{renderForm()}</div>
		</div>
	);
}
