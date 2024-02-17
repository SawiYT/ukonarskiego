'use client';
import { Card, CardHeader, CardBody, Image } from '@nextui-org/react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from '@nextui-org/react';

interface BlogItemProps {
	title: string;
	slug: string;
	image: string;
	description: string;
	summary: string;
	creator: string;
}

const BlogItem: React.FC<BlogItemProps> = ({ title, image, summary, description, creator }) => {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	return (
		<Card className='flex flex-col w-60 h-[22.6rem] p-5'>
			<CardBody className='overflow-visible py-2 flex-grow'>
				<Image
					alt='Card background'
					className='object-cover rounded-xl flex-grow h-32'
					src={image}
					width={270}
					height={270}
				/>
			</CardBody>
			<CardHeader className='pb-0 pt-2 px-4 flex flex-col justify-center items-center'>
				<p className='font-bold pb-3 text-large'>{title}</p>
				<p className='text-tiny uppercase font-bold'>{summary}</p>
				<small className='text-default-500 mb-3'>{creator}</small>
				<div className='flex flex-col items-start flex-grow'>
					<Button onPress={onOpen}>Zobacz szczegóły</Button>
					<Modal isOpen={isOpen} onOpenChange={onOpenChange}>
						<ModalContent>
							{onClose => (
								<>
									<ModalHeader className='flex justify-center items-center flex-col gap-1'>
										{title}
										<Image
											alt='Card background'
											className='object-cover rounded-xl'
											src={image}
											width={270}
											height={270}
										/>
									</ModalHeader>
									<ModalBody>
										<p>{description}</p>
									</ModalBody>
									<ModalFooter>
										<Button color='danger' variant='light' onPress={onClose}>
											Zamknij
										</Button>
									</ModalFooter>
								</>
							)}
						</ModalContent>
					</Modal>
				</div>
			</CardHeader>
		</Card>
	);
};

export default BlogItem;
