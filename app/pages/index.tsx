import type { ReactElement } from 'react';
import Layout from '@/components/common/layout';
import type { NextPageWithLayout } from './_app';

// Components
import {
	Header,
	CommunityCard,
	YourCommunities,
	ExploreFilters,
} from '@/components/home';

const Page: NextPageWithLayout = () => {
	return (
		<div>
			<Header />
			<YourCommunities />
			<ExploreFilters />
			<div className='my-4 max-w-screen-lg mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 px-4 justify-items-center'>
				{Array(20)
					.fill(1)
					.map((_, i) => (
						<CommunityCard key={i} />
					))}
			</div>
		</div>
	);
};

Page.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

export default Page;
