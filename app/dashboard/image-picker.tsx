interface ImagePickerProps {
	label: string;
	name: string;
}

const ImagePicker: React.FC<ImagePickerProps> = ({ label, name }) => {
	return (
		<div>
			<label htmlFor='image'>{label}</label>
			<input type='file' id='image' accept='image/png, image/jpeg, image/jpg' required name={name} />
		</div>
	);
};

export default ImagePicker;
