import React from 'react';
import { Button } from 'antd';
import { useContractRead, useContract } from '@thirdweb-dev/react';

// Utils
import { ABI } from '@/utils/abi';
interface Props {
	contractAddress: string;
	totalRoles: number;
}
const GetRole = ({ contractAddress, totalRoles }: Props) => {
	React.useEffect(() => {}, []);
	return (
		<div className='max-w-screen-lg mx-auto w-full flex flex-col sm:flex-row justify-between px-4 gap-4 mb-8'>
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
