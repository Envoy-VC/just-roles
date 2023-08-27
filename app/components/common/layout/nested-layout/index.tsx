import React from 'react';
import { useSigner } from '@thirdweb-dev/react';
import { Polybase } from '@polybase/client';
import { PolybaseProvider } from '@polybase/react';

// Components
import { SEO, Navbar } from '@/components/common';

import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

// Polybase Config
import { POLYBASE_NAMESPACE } from '@/config';
const polybase = new Polybase({ defaultNamespace: POLYBASE_NAMESPACE });

interface Props {
	children: React.ReactNode;
}
const NestedLayout = ({ children }: Props) => {
	const signer = useSigner();
	polybase.signer(async (data: string) => {
		const res = await signer?.signMessage(data);
		const sig = res || '';
		return { h: 'eth-personal-sign', sig };
	});
	return (
		<PolybaseProvider polybase={polybase}>
			<div className={`flex flex-col text-white ${inter.className}`}>
				<SEO />
				<Navbar />
				{children}
			</div>
		</PolybaseProvider>
	);
};

export default NestedLayout;
