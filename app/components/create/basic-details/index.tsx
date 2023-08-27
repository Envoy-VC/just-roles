import React from 'react';
import { z } from 'zod';
import { CreateContext } from '@/pages/create';
import { Avatar, Button } from 'antd';

// Components
import { CustomInput, CustomTextArea } from '@/components/common';

// Types
import { StepType } from '@/pages/create';

const BasicDetails = () => {
	const { form, setForm, setStep } = React.useContext(CreateContext);

	const BasicDetailsSchema = z
		.object({
			logo: z.string(),
			name: z.string().min(1),
			description: z.string().min(1),
			contactDetails: z.object({
				name: z.string().min(1),
				value: z.string().min(1),
			}),
		})
		.required();

	const handleNextStep = () => {
		let res = BasicDetailsSchema.safeParse({
			logo: form.logo,
			name: form.name,
			description: form.description,
			contactDetails: form.contactDetails,
		});
		if (res.success === false) {
			console.log(res.error);
		} else {
			setStep(StepType.ROLES_SETUP);
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
							<Avatar size={56} className='font-semibold'>
								A
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
							placeholder='Name'
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
							placeholder='Value'
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
				>
					Next
				</Button>
			</div>
		</div>
	);
};

export default BasicDetails;
