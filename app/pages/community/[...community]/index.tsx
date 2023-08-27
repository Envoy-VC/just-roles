import React from 'react';
import type { ReactElement } from 'react';
import Layout from '@/components/common/layout';
import type { NextPageWithLayout } from '../../_app';

import { useRouter } from 'next/router';

// Components
import { Header, RoleCard, GetRole } from '@/components/community';

const Community: NextPageWithLayout = () => {
	const router = useRouter();
	const { community } = router.query;
	return (
		<>
			<Header />
			<div className='my-4 flex flex-col gap-4 p-4 max-w-screen-lg mx-auto w-full'>
				<RoleCard />
				<RoleCard />
				<RoleCard />
			</div>
			<GetRole />
		</>
	);
};

Community.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

export default Community;
