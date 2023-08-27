import React from 'react';
import { z } from 'zod';
import { CreateContext } from '@/pages/create';
import { Avatar, Button, Spin } from 'antd';
import { useStorage } from '@thirdweb-dev/react';

// Components
import { CustomInput, CustomTextArea } from '@/components/common';

// Icons
import { LoadingOutlined } from '@ant-design/icons';

// Types
import { StepType } from '@/pages/create';

const BasicDetails = () => {
	const storage = useStorage();
	const hiddenFileInput = React.useRef<HTMLInputElement>(null);
	const { form, setForm, setStep } = React.useContext(CreateContext);

	const [isUploading, setIsUploading] = React.useState<boolean>(false);

	const handleClick = () => {
		if (hiddenFileInput.current) hiddenFileInput.current.click();
	};

	const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
		try {
			setIsUploading(true);
			const fileUploaded = e.target.files?.[0];
			if (!!!fileUploaded) return;
			const uri = await storage?.upload(fileUploaded, {
				uploadWithoutDirectory: true,
			});
			if (!!!uri) return;
			let url = `https://ipfs.io/ipfs/${uri.slice(7)}`;
			setForm({ ...form, logo: url });
		} catch (error) {
			console.log(error);
		} finally {
			setIsUploading(false);
		}
	};

	const BasicDetailsSchema = z
		.object({
			logo: z.string().min(1),
			name: z.string().min(1),
			description: z.string().min(1),
			contactDetails: z.object({
				name: z.string().min(1),
				value: z.string().min(1),
			}),
		})
		.required();

	const handleNextStep = () => {
		try {
			let res = BasicDetailsSchema.parse({
				logo: form.logo,
				name: form.name,
				description: form.description,
				contactDetails: form.contactDetails,
			});
			setStep(StepType.ROLES_SETUP);
		} catch (error) {
			alert('Please fill all the fields');
		}
	};
	return (
		<div className='max-w-screen-lg mx-auto w-full p-4'>
			<div className='p-4 py-8 bg-[#3F3F46] rounded-2xl flex flex-col gap-6'>
				<div className='flex flex-col gap-2'>
					<span className='text-[1rem] font-medium font-sans'>
						Logo and name
					</span>
					<div className='flex flex-row gap-2'>
						<div className='min-w-[56px]'>
							<Avatar
								size={56}
								src={form?.logo}
								onClick={handleClick}
								className='cursor-pointer'
							>
								<input
									type='file'
									accept='image/*'
									style={{ display: 'none' }}
									onChange={handleChange}
									ref={hiddenFileInput}
									disabled={isUploading}
								/>
								{isUploading && (
									<Spin
										indicator={
											<LoadingOutlined
												style={{ fontSize: 24, color: '#fff' }}
												spin
											/>
										}
									/>
								)}
							</Avatar>
						</div>
						<CustomInput
							size='large'
							className='max-w-xl text-[1rem]'
							placeholder='Developer DAO'
							onChange={(e) => setForm({ ...form, name: e.target.value })}
							value={form.name}
						/>
					</div>
				</div>
				<div className='flex flex-col gap-2'>
					<span className='text-[1rem] font-medium font-sans'>Description</span>
					<CustomTextArea
						size='large'
						className='max-w-xl text-[1rem]'
						autoSize={{ minRows: 4, maxRows: 8 }}
						placeholder='Description'
						onChange={(e) => setForm({ ...form, description: e.target.value })}
						value={form.description}
					/>
				</div>
				<div className='flex flex-col gap-2'>
					<span className='text-[1rem] font-medium font-sans'>
						Contact Details
					</span>
					<div className='flex flex-col sm:flex-row gap-2'>
						<CustomInput
							size='large'
							className='max-w-xs text-[1rem]'
							placeholder='Twitter'
							onChange={(e) =>
								setForm({
									...form,
									contactDetails: {
										...form.contactDetails,
										name: e.target.value,
									},
								})
							}
							value={form.contactDetails.name}
						/>
						<CustomInput
							size='large'
							className='max-w-xl text-[1rem]'
							placeholder='https://twitter.com/Envoy_1084'
							onChange={(e) =>
								setForm({
									...form,
									contactDetails: {
										...form.contactDetails,
										value: e.target.value,
									},
								})
							}
							value={form.contactDetails.value}
						/>
					</div>
				</div>
			</div>
			<div className='flex flex-row justify-end py-6'>
				<Button
					size='large'
					className='bg-[#38383B] font-sans font-medium text-[1rem]'
					type='text'
					onClick={handleNextStep}
					disabled={isUploading}
				>
					Next
				</Button>
			</div>
		</div>
	);
};

export default BasicDetails;
