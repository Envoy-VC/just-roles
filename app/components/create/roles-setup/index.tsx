import React from 'react';
import { CreateContext, StepType } from '@/pages/create';
import { Button } from 'antd';
import { CustomInput, CustomNumberInput } from '@/components/common';

// Icons
import { PiPlusBold, PiTrashBold } from 'react-icons/pi';

//  Utils
import { formatFollowers } from '@/utils';

// Types
import { RoleType } from '@/types';

const RolesSetup = () => {
	const { form, setForm, setStep } = React.useContext(CreateContext);
	const [role, setRole] = React.useState<RoleType>({
		name: '',
		thresholdLower: 0,
		thresholdUpper: 0,
	});

	const addRole = () => {
		console.log(role);
		setForm((prev) => ({ ...prev, roles: [...prev.roles, role] }));
	};

	const removeRole = (index: number) => {
		setForm((prev) => ({
			...prev,
			roles: prev.roles.filter((_, i) => i !== index),
		}));
	};

	const handleStep = (step: StepType) => () => {
		if (step === StepType.DEPLOYMENT) {
			if (form.roles.length === 0) {
				alert('Please add at least one role');
				return;
			} else {
				setStep(step);
			}
		} else {
			setStep(step);
		}
	};

	return (
		<div className='max-w-screen-lg mx-auto w-full p-4'>
			<div className='p-4 bg-[#3F3F46] rounded-2xl'>
				<div className='flex flex-col gap-2'>
					<span className='text-[1rem] font-medium font-sans my-4'>Roles</span>
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
							<Button
								type='text'
								size='large'
								className='bg-[#35353B] flex items-center justify-center'
								icon={<PiTrashBold size={20} />}
								onClick={() => removeRole(index)}
							/>
						</div>
					))}
					<div className='flex flex-row gap-2'>
						<CustomInput
							size='large'
							className='max-w-[200px] text-[1rem]'
							placeholder='Role Name'
							onChange={(e) =>
								setRole((prev) => ({ ...prev, name: e.target.value }))
							}
						/>
						<CustomNumberInput
							size='large'
							className='max-w-[200px] text-[1rem]'
							placeholder='Min'
							min={0}
							onChange={(e) =>
								setRole((prev) => ({
									...prev,
									thresholdLower: e?.valueOf() as number,
								}))
							}
						/>
						<CustomNumberInput
							size='large'
							className='max-w-[200px] text-[1rem]'
							placeholder='Max'
							min={0}
							onChange={(e) =>
								setRole((prev) => ({
									...prev,
									thresholdUpper: e?.valueOf() as number,
								}))
							}
						/>
						<Button
							size='large'
							icon={<PiPlusBold />}
							type='text'
							className='border-2 border-[#969696]'
							onClick={addRole}
						/>
					</div>
				</div>
			</div>
			<div className='flex flex-row justify-end py-6 gap-3'>
				<Button
					size='large'
					className='bg-[#38383B] font-sans font-medium text-[1rem]'
					type='text'
					onClick={handleStep(StepType.BASIC_DETAILS)}
				>
					Back
				</Button>
				<Button
					size='large'
					className='bg-[#38383B] font-sans font-medium text-[1rem]'
					type='text'
					onClick={handleStep(StepType.DEPLOYMENT)}
				>
					Next
				</Button>
			</div>
		</div>
	);
};

export default RolesSetup;
