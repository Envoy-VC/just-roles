import type { ReactElement } from 'react';
import { Layout, NestedLayout } from '@/components/common';
import type { NextPageWithLayout } from './_app';
import { usePolybase, useCollection } from '@polybase/react';

// Components
import {
	Header,
	CommunityCard,
	YourCommunities,
	ExploreFilters,
} from '@/components/home';

const Page: NextPageWithLayout = () => {
	const polybase = usePolybase();
	const { data, error, loading } = useCollection(
		polybase.collection('Community')
	);

	return (
		<div>
			<Header />
			<YourCommunities />
			<ExploreFilters />
			{!!data && (
				<div className='my-4 max-w-screen-lg mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 px-4 justify-items-center'>
					{data?.data.map((community, i) => (
						<CommunityCard community={community} key={i} />
					))}
				</div>
			)}
		</div>
	);
};

Page.getLayout = function getLayout(page: ReactElement) {
	return (
		<Layout>
			<NestedLayout>{page}</NestedLayout>
		</Layout>
	);
};

export default Page;
