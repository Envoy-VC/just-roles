import React from 'react';
import Link from 'next/link';
import { Avatar } from 'antd';

// Icons
import { PiArrowLeftBold } from 'react-icons/pi';

const Header = () => {
	return (
		<div className='bg-[#18181B]'>
			<div className=' p-4 max-w-screen-lg mx-auto'>
				<Link href='/' className='flex flex-row items-center gap-2'>
					<PiArrowLeftBold size={20} color='#9B9B9F' />
					<span className='text-textSecondary hover:underline text-sm font-medium'>
						Go back to explorer
					</span>
				</Link>
				<div className='flex flex-col gap-6'>
					<div className='flex flex-col sm:flex-row gap-3 items-center my-8'>
						<Avatar size={64}>A</Avatar>
						<div className='text-[2rem] sm:text-[3rem] font-black tracking-wide font-sans text-center'>
							Base Guild
						</div>
					</div>
					<div className='text-medium text-[1rem] max-w-xl'>
						onchain is the new online - build on Base.
					</div>
					<div className='flex flex-row gap-2 rounded-xl bg-[#35353B] font-sans font-medium text-[1rem] px-3 py-2 w-fit'>
						<span className='text-textSecondary'>Twitter: </span>
						<Link target='_blank' href='https://twitter.com/base'>
							<span>https://twitter.com/base</span>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
