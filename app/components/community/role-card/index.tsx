import React from 'react';
import { Avatar } from 'antd';
import { useContractRead, useContract } from '@thirdweb-dev/react';

// Utils
import { formatFollowers } from '@/utils';
import { ABI } from '@/utils/abi';

// Icons
import { PiUsersThree } from 'react-icons/pi';

interface Props {
	index: number;
	contractAddress: string;
}

const RoleCard = ({ index, contractAddress }: Props) => {
	const { contract } = useContract(contractAddress, ABI);
	const { data } = useContractRead(contract, 'Roles', [index]);
	const [role, name, minFollowers, maxFollowers] = data || [];
	if (data)
		return (
			<div className='flex flex-col sm:flex-row w-full'>
				<div className='p-4 py-8 bg-[#3F3F46] w-full sm:rounded-tl-2xl sm:rounded-bl-2xl sm:rounded-tr-[0px] rounded-tr-2xl rounded-tl-2xl sm:rounded-br-[0px]'>
					<div className='flex flex-col sm:flex-row sm:items-end justify-between gap-4'>
						<span className='text-xl font-medium font-sans'>{name || ''}</span>
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
						<div className='flex flex-col gap-1'>
							<span className='text-[1rem] font-medium font-sans text-[#EEEEEF]'>
								Have Lens followers between{' '}
								{parseInt((minFollowers as any).toHexString(), 16)} and{' '}
								{parseInt((maxFollowers as any).toHexString(), 16)}
							</span>
							<span className='text-xs font-medium font-sans text-[#919191]'>
								{formatFollowers(
									parseInt((minFollowers as any).toHexString(), 16)
								)}{' '}
								-{' '}
								{formatFollowers(
									parseInt((maxFollowers as any).toHexString(), 16)
								)}
							</span>
						</div>
					</div>
				</div>
			</div>
		);
};

export default RoleCard;
