import React from 'react';
import { ConnectWallet, useAddress } from '@thirdweb-dev/react';
import { Button } from 'antd';

// Icons
import { PiCurrencyEth, PiPlusBold } from 'react-icons/pi';

const YourCommunities = () => {
	const address = useAddress();
	const totalCommunities = 0;
	if (!address)
		return (
			<div className='max-w-screen-lg w-full p-4 my-4 mx-auto'>
				<div className='bg-[#3F3F46] rounded-xl p-4 flex sm:flex-row flex-col items-center py-6 justify-between gap-8'>
					<div className='flex items-center gap-3'>
						<PiCurrencyEth size={24} />
						<span className='text-lg'>
							Connect your wallet to view your communities / create new ones
						</span>
					</div>
					<ConnectWallet
						className='!bg-[#6366F1] !text-white !font-medium !font-sans'
						btnTitle='Connect'
					/>
				</div>
			</div>
		);

	if (!totalCommunities) {
		return (
			<div className='max-w-screen-lg w-full p-4 my-4 mx-auto'>
				<div className='bg-[#3F3F46] rounded-xl p-4 flex sm:flex-row flex-col items-center py-6 justify-between gap-8'>
					<span className='text-lg max-w-3xl'>
						You&lsquo;re not a member of any communities yet. Explore and join
						some below, or create your own!
					</span>
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
		);
	}
};

export default YourCommunities;
