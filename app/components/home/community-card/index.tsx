import React from 'react';
import { Avatar } from 'antd';

// Icons
import { PiUsersBold } from 'react-icons/pi';

const CommunityCard = () => {
	return (
		<div className='p-5 bg-[#3F3F46] rounded-xl flex flex-row items-center gap-2 max-w-lg w-full'>
			<Avatar size={64} className='bg-orange-400'>
				A
			</Avatar>
			<div className='flex flex-col gap-2'>
				<span className='text-[1.4rem] font-bold font-sans'>Base Guild</span>
				<div className='flex flex-row gap-2'>
					<div className='flex flex-row px-2 rounded-md bg-[#4E4E55] gap-1 items-center text-[#D0D0D2]'>
						<PiUsersBold size={16} />
						<span className='font-medium font-sans text-[1rem]'>11.2k</span>
					</div>
					<span className=' px-2 rounded-md bg-[#4E4E55] gap-1 font-medium font-sans text-[1rem] text-[#D0D0D2]'>
						5 roles
					</span>
				</div>
			</div>
		</div>
	);
};

export default CommunityCard;
