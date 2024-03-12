'use client';

import { useState } from 'react';
import AddTextbookForm from './sidebar/add-textbook-form';
import AddBlogPostForm from './sidebar/add-blog-post-form';
import AddPhotoForm from './sidebar/add-photo-form.tsx';
import Sidebar from './sidebar';
import SelectOption from './select-option';
import Login from './login/login-form';
import CreateAccount from './login/create-account';

export default function DashboardPage() {
	const [selectedOption, setSelectedOption] = useState('');
	const [isLoggedIn, setLoggedIn] = useState(false);

	const renderForm = () => {
		if (!isLoggedIn) {
			return <Login setLoggedIn={setLoggedIn} />;
		}

		switch (selectedOption) {
			case 'podrecznik':
				return <AddTextbookForm />;
			case 'wpis':
				return <AddBlogPostForm />;
			case 'zdjecie':
				return <AddPhotoForm />;
			case 'konto':
				return <CreateAccount />;
			default:
				return <SelectOption />;
		}
	};

	return (
		<div className='flex flex-row '>
			{isLoggedIn ? <Sidebar onSelectOption={setSelectedOption} /> : null}
			<div className=''>{renderForm()}</div>
		</div>
	);
}
