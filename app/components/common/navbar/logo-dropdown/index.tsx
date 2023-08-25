import React from 'react';
import { Dropdown, Button } from 'antd';

import type { MenuProps } from 'antd';

import {
	PiHouseBold,
	PiMagnifyingGlassBold,
	PiPlusBold,
	PiGearSixBold,
} from 'react-icons/pi';

interface Props {
	children: React.ReactNode;
}

interface NavItemProps {
	label: string;
	icon: React.ReactNode;
	handleClick?: () => void;
}

const NavItem = ({ label, icon, handleClick }: NavItemProps) => {
	return (
		<div
			className='flex items-center gap-2 px-2 py-1 font-medium'
			onClick={handleClick}
		>
			{icon}
			{label}
		</div>
	);
};

const LogoDropdown = ({ children }: Props) => {
	const NavItems: NavItemProps[] = [
		{
			label: 'Home',
			icon: <PiHouseBold size={22} />,
		},
		{
			label: 'Explore Communities',
			icon: <PiMagnifyingGlassBold size={22} />,
		},
		{
			label: 'Create Community',
			icon: <PiPlusBold size={22} />,
		},
		{
			label: 'Manage Community',
			icon: <PiGearSixBold size={22} />,
		},
	];
	const items: MenuProps['items'] = [
		{
			key: '0',
			label: (
				<div className='p-2 text-textSecondary font-bold text-[1rem]'>
					Navigation
				</div>
			),
		},
		...NavItems.map((item, index) => ({
			key: `${index + 1}`,
			label: <NavItem {...item} />,
		})),
	];

	return (
		<Dropdown menu={{ items }} trigger={['click']}>
			{children}
		</Dropdown>
	);
};

export default LogoDropdown;
