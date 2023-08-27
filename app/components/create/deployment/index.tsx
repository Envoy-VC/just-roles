import React from 'react';
import { CreateContext, StepType } from '@/pages/create';
import { Avatar, Button } from 'antd';

// Utils
import { formatFollowers } from '@/utils';

const Deployment = () => {
	const { form, setStep } = React.useContext(CreateContext);

	const handleStep = (step: StepType) => {
		setStep(step);
	};

	const deploy = async () => {};

	return (
		<div className='max-w-screen-lg mx-auto w-full p-4'>
			<div className='p-4 bg-[#3F3F46] rounded-2xl'>
				<div className='flex flex-col gap-4'>
					<div className='flex flex-row gap-2 items-center'>
						<Avatar size={42} src={form.logo} />
						<span className='text-xl font-sans font-medium'>{form.name}</span>
					</div>
					<div className='whitespace-pre-line break-words max-w-lg text-[1rem] bg-[#35353B] p-3 rounded-xl'>
						{form.description}
					</div>
					<div className='flex flex-row gap-2 items-center p-2 px-4 rounded-xl bg-[#35353B] w-fit'>
						<span className='text-[1rem] font-sans font-medium'>
							{form.contactDetails.name}
						</span>
						<span className='text-textSecondary font-medium'>
							{' '}
							{form.contactDetails.value}
						</span>
					</div>
					<span className='text-xl font-sans font-medium'>Roles</span>
					<div className='flex flex-col gap-1'>
						{form.roles.map((role, index) => (
							<div
								className='flex flex-row gap-2 items-center w-full max-w-xs'
								key={index}
							>
								<div className='flex flex-row gap-2 items-center justify-between px-4 py-2 rounded-xl bg-[#35353B] w-full'>
									<span className='text-[1rem] font-medium font-sans'>
										{role.name}
									</span>
									<span className='text-[1rem] font-medium font-sans text-textSecondary'>
										{formatFollowers(role.thresholdLower)} -{' '}
										{formatFollowers(role.thresholdUpper)} followers
									</span>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
			<div className='flex flex-row justify-end py-6 gap-3'>
				<Button
					size='large'
					className='bg-[#38383B] font-sans font-medium text-[1rem]'
					type='text'
					onClick={() => handleStep(StepType.ROLES_SETUP)}
				>
					Back
				</Button>
				<Button
					size='large'
					className='bg-[#22C55E] font-sans font-medium text-[1rem] hover:!bg-[#22c55ec7]'
					type='text'
					onClick={deploy}
				>
					Deploy
				</Button>
			</div>
		</div>
	);
};

export default Deployment;
