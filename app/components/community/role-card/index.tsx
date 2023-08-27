import { Avatar } from 'antd';
import React from 'react';

// Icons
import { PiUsersBold, PiUsersThree } from 'react-icons/pi';

const RoleCard = () => {
	return (
		<div className='flex flex-col sm:flex-row w-full'>
			<div className='p-4 py-8 bg-[#3F3F46] w-full sm:rounded-tl-2xl sm:rounded-bl-2xl sm:rounded-tr-[0px] rounded-tr-2xl rounded-tl-2xl sm:rounded-br-[0px]'>
				<div className='flex flex-col sm:flex-row sm:items-end justify-between gap-4'>
					<span className='text-xl font-medium font-sans'>Verified Member</span>
					<div className='flex flex-row gap-2 items-center'>
						<PiUsersBold size='16' color='#919191' />
						<span className='text-sm font-medium font-sans text-[#919191]'>
							11.2k
						</span>
					</div>
				</div>
			</div>
			<div className='min-h-full border-[1px] border-[#52525B]' />
			<div className='p-4 bg-[#35353B] w-full sm:rounded-tr-2xl sm:rounded-br-2xl rounded-tr-[0px] rounded-bl-2xl rounded-br-2xl sm:rounded-bl-[0px]'>
				<span className='text-sm font-medium font-sans text-[#919191]'>
					REQUIREMENTS TO QUALIFY
				</span>
				<div className='flex flex-row gap-3 mt-3'>
					<Avatar
						src={<PiUsersThree size={28} color='#EEEEEF' />}
						className='bg-[#2C2C31] flex justify-center items-center'
						size={42}
					/>
					{/* have lens followers between 1k and 20k */}
					<div className='flex flex-col gap-1'>
						<span className='text-[1rem] font-medium font-sans text-[#EEEEEF]'>
							Have Lens followers between 1k and 20k
						</span>
						<span className='text-xs font-medium font-sans text-[#919191]'>
							1,000 - 20,000
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RoleCard;
