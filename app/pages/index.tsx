import type { ReactElement } from 'react';
import Layout from '@/components/common/layout';
import type { NextPageWithLayout } from './_app';

// Components
import { Header } from '@/components/home';

const Page: NextPageWithLayout = () => {
	return (
		<div>
			<Header />
		</div>
	);
};

Page.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

export default Page;
