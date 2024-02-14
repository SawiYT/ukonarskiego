'use server';

export async function shareApplication(formData: FormData): Promise<void> {
	const user = {
		name: formData.get('name'),
		secondName: formData.get('secondname'),
		surname: formData.get('surname'),
		dateOfBirth: formData.get('dateofbirth'),
		placeOfBirth: formData.get('placeofbirth'),
		pesel: formData.get('pesel'),
		fathersName: formData.get('fathersname'),
		mothersName: formData.get('mothersname'),
		residence: formData.get('residence'),
		domicile: formData.get('domicile'),
		parentsNumber: formData.get('parentsnumber'),
		studentsNumber: formData.get('studentsnumber'),
		parentsEmail: formData.get('parentsemail'),
		studentsEmail: formData.get('studentsemail'),
	};

	console.log(user);
}
