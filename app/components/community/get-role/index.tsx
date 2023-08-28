import React from 'react';
import { Button } from 'antd';
import { useContractRead, useContract, useAddress } from '@thirdweb-dev/react';

// Utils
import { ABI } from '@/utils/abi';
interface Props {
	contractAddress: string;
	totalRoles: number;
}
const GetRole = ({ contractAddress, totalRoles }: Props) => {
	const address = useAddress();
	const { contract } = useContract(contractAddress, ABI);
	const { data } = useContractRead(contract, 'getCurrentRole', [address!]);
	const { data: role } = useContractRead(contract, 'Roles', [data]);
	return (
		<div className='max-w-screen-lg mx-auto w-full flex flex-col sm:flex-row justify-between px-4 gap-4 mb-8'>
			<div className='text-[1.1rem] font-sans font-medium flex items-center gap-2'>
				<span className='text-[#bdbdbd]'>Current Role: </span>
				<span className='text-[#EEEEEF]'>
					{role.at(1) === '' ? 'None' : role.at(1)}
				</span>
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
