import React from 'react';
import { Button, Avatar } from 'antd';
import { ConnectWallet, useAddress } from '@thirdweb-dev/react';

// Components
import LogoDropdown from './logo-dropdown';

// Icons
import { PiStackBold, PiListBold } from 'react-icons/pi';

const Navbar = () => {
	const address = useAddress();
	return (
		<div className='p-4 bg-[#18181B]'>
			<div className='flex flex-row justify-between items-center'>
				<LogoDropdown>
					<Button
						type='text'
						size='large'
						className='flex items-center justify-center font-black text-lg gap-3'
					>
						<div className='flex flex-row items-center gap-[6px]'>
							<PiStackBold size={24} />
							JustRoles
						</div>
						<PiListBold size={20} />
					</Button>
				</LogoDropdown>
				<ConnectWallet
					theme='dark'
					detailsBtn={() => (
						<Avatar
							src={`https://api.dicebear.com/6.x/avataaars-neutral/svg?seed=${address}`}
							className='border-2 border-textSecondary'
							size={48}
						/>
					)}
				/>
			</div>
		</div>
	);
};

export default Navbar;
