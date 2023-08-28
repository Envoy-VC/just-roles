import React from 'react';
import type { ReactElement } from 'react';
import { Layout, NestedLayout } from '@/components/common';
import type { NextPageWithLayout } from '../../_app';

import { useRouter } from 'next/router';
import { Button } from 'antd';
import { usePolybase, useDocument } from '@polybase/react';
import { useContractRead, useContract } from '@thirdweb-dev/react';
import { ABI } from '@/utils/abi';

// Components
import { Header, RoleCard, GetRole } from '@/components/community';

interface Role {
	role: string;
	name: string;
	thresholdLower: string;
	thresholdUpper: string;
}

const Community: NextPageWithLayout = () => {
	const router = useRouter();
	const polybase = usePolybase();
	const { community } = router.query;
	const { data } = useDocument(
		polybase.collection('Community').record(community?.at(0) as string)
	);
	const { contract } = useContract(community?.at(0) as string, ABI);
	const { data: totalRoles, isLoading } = useContractRead(
		contract,
		'totalRoles'
	);

	if (!!data)
		return (
			<>
				<Header community={data.data} />
				{!!totalRoles && !isLoading && (
					<div className='my-4 flex flex-col gap-4 p-4 max-w-screen-lg mx-auto w-full'>
						{Array(parseInt(totalRoles, 16))
							.fill(1)
							.map((_, index) => (
								<RoleCard
									key={index}
									index={index}
									contractAddress={community?.at(0) as string}
								/>
							))}
					</div>
				)}
				<GetRole
					contractAddress={community?.at(0) as string}
					totalRoles={totalRoles}
				/>
				<Button
					onClick={async () => {
						polybase
							.collection('Community')
							.record(community?.at(0) as string)
							.call('del');
					}}
				>
					Delete
				</Button>
			</>
		);
};

Community.getLayout = function getLayout(page: ReactElement) {
	return (
		<Layout>
			<NestedLayout>{page}</NestedLayout>
		</Layout>
	);
};

export default Community;
