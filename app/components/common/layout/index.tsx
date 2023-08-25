import React from 'react';
import { ThirdwebProvider } from '@thirdweb-dev/react';
import { Ethereum } from '@thirdweb-dev/chains';

import { ConfigProvider, theme } from 'antd';

import { SEO, Navbar } from '..';
import { TW_CLIENT_ID, AppMetadata } from '@/config';

import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

interface Props {
	children: React.ReactNode;
}
const Layout = ({ children }: Props) => {
	return (
		<ConfigProvider
			theme={{
				algorithm: theme.darkAlgorithm,
			}}
		>
			<ThirdwebProvider
				activeChain={Ethereum}
				clientId={TW_CLIENT_ID}
				dAppMeta={AppMetadata}
			>
				<div className={`flex flex-col text-white ${inter.className}`}>
					<SEO />
					<Navbar />
					{children}
				</div>
			</ThirdwebProvider>
		</ConfigProvider>
	);
};

export default Layout;
