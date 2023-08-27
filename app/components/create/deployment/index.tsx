import React from 'react';
import { useSDK } from '@thirdweb-dev/react';
import { CreateContext, StepType } from '@/pages/create';
import { usePolybase } from '@polybase/react';
import { Avatar, Button } from 'antd';

// Utils
import { formatFollowers } from '@/utils';
import { CustomInput } from '@/components/common';

interface DeploymentParams {
	roles: string[];
	thresholdLower: number[];
	thresholdUpper: number[];
	phatAttestor: string;
}

const Deployment = () => {
	const sdk = useSDK();
	const polybase = usePolybase();
	const { form, setForm, setStep } = React.useContext(CreateContext);

	const handleStep = (step: StepType) => {
		setStep(step);
	};

	const deploy = async () => {
		if (!form?.attestorAddress) {
			alert('Please enter a valid attestor address');
			return;
		}
		let roles: string[] = [];
		let thresholdLower: number[] = [];
		let thresholdUpper: number[] = [];
		form.roles.forEach((role) => {
			roles.push(role.name);
			thresholdLower.push(role.thresholdLower);
			thresholdUpper.push(role.thresholdUpper);
		});
		console.log(roles, thresholdLower, thresholdUpper, form.attestorAddress);

		let contractAddress = await deployContract({
			roles,
			thresholdLower,
			thresholdUpper,
			phatAttestor: form.attestorAddress,
		});
		if (!contractAddress) return;

		// TODO: Upload to Polybase
		// ERROR: Need to fix this fn
		let data = [
			contractAddress,
			form.name,
			form.logo,
			form.description,
			form.contactDetails.name!,
			form.contactDetails.value!,
			form.attestorAddress,
		];

		const res = await polybase.collection('Community').create(data);
	};

	const deployContract = async ({
		roles,
		thresholdLower,
		thresholdUpper,
		phatAttestor,
	}: DeploymentParams) => {
		let res = await sdk?.deployer?.deployPublishedContract(
			'0xBF4979305B43B0eB5Bb6a5C67ffB89408803d3e1',
			'LensRoles',
			[roles, thresholdLower, thresholdUpper, phatAttestor]
		);
		if (!!res) return res;
	};

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
					<CustomInput
						size='large'
						className='max-w-xl text-[1rem]'
						placeholder='Phat Attestor Address'
						onChange={(e) =>
							setForm({ ...form, attestorAddress: e.target.value })
						}
						value={form.attestorAddress}
					/>
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
