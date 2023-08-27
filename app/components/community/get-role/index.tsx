import React from 'react';
import { Button } from 'antd';

const GetRole = () => {
	return (
		<div className='max-w-screen-lg mx-auto w-full flex flex-col sm:flex-row justify-between px-4'>
			<div className='text-[1.1rem] font-sans font-medium flex items-center gap-2'>
				<span className='text-[#bdbdbd]'>Current Role: </span>
				<span className='text-[#EEEEEF]'>Verified Member</span>
			</div>
			<Button
				className='bg-[#5768EA] hover:!bg-[#5768eaad] font-medium'
				type='text'
				size='large'
			>
				Get Role
			</Button>
		</div>
	);
};

export default GetRole;
