import React from 'react';
import { Button } from 'antd';

import { PiPlusBold } from 'react-icons/pi';

const Header = () => {
	return (
		<div className='bg-[#18181B]'>
			<div className=' p-4 max-w-screen-lg mx-auto'>
				<div className='text-[2.4rem] font-black tracking-wide font-sans mb-12 mt-4'>
					Explore Communities
				</div>
				<div className='py-4 flex flex-row  justify-between items-center gap-8'>
					<div className='flex items-center gap-2'>
						<Button
							type='text'
							className='text-[1rem] font-bold bg-[#343437]'
							size='large'
						>
							Your Communities
						</Button>
						<Button type='text' className='text-[1rem] font-bold' size='large'>
							Explore
						</Button>
					</div>
					<Button
						type='text'
						className='text-[1rem] font-bold sm:flex items-center gap-2 hidden'
						size='large'
					>
						<PiPlusBold size={20} />
						Create
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Header;
