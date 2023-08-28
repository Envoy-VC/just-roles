import React from 'react';
import { useRouter } from 'next/router';
import { Avatar } from 'antd';
import { CollectionRecordResponse } from '@polybase/client';
import { useContractRead, useContract } from '@thirdweb-dev/react';

// Utils
import { ABI } from '@/utils/abi';

interface Props {
	community: CollectionRecordResponse<any, any>;
}

const CommunityCard = ({ community }: Props) => {
	const router = useRouter();
	const { id, name, logo } = community?.data;
	const { contract } = useContract(id as string, ABI);
	const { data } = useContractRead(contract, 'totalRoles');

	return (
		<div
			className='p-5 bg-[#3F3F46] rounded-xl flex flex-row items-center gap-2 max-w-lg w-full cursor-pointer'
			onClick={() => router.push(`/community/${id}`)}
		>
			<Avatar size={64} src={logo} />
			<div className='flex flex-col gap-2'>
				<span className='text-[1.4rem] font-bold font-sans'>{name}</span>
				<div className='flex flex-row justify-start gap-2'>
					<span className=' px-2 rounded-md bg-[#4E4E55] gap-1 font-medium font-sans text-[1rem] text-[#D0D0D2]'>
						{`${data} roles`}
					</span>
				</div>
			</div>
		</div>
	);
};

export default CommunityCard;
