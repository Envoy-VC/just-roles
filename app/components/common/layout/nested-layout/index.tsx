import React from 'react';
import { useSDK } from '@thirdweb-dev/react';

// Components
import { SEO, Navbar } from '@/components/common';

import { polybase } from '..';

import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

interface Props {
	children: React.ReactNode;
}
const NestedLayout = ({ children }: Props) => {
	const sdk = useSDK();
	polybase.signer(async (data: string) => {
		return {
			h: 'eth-personal-sign',
			sig: await sdk?.wallet?.sign(data),
		} as any;
	});
	return (
		<div className={`flex flex-col text-white ${inter.className}`}>
			<SEO />
			<Navbar />
			{children}
		</div>
	);
};

export default NestedLayout;
