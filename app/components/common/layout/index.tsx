import React from 'react';
import { ThirdwebProvider } from '@thirdweb-dev/react';
import { Ethereum } from '@thirdweb-dev/chains';

import { Polybase } from '@polybase/client';
import { PolybaseProvider } from '@polybase/react';

import { ConfigProvider, theme } from 'antd';

import { TW_CLIENT_ID, AppMetadata, POLYBASE_NAMESPACE } from '@/config';

// Polybase Config
export const polybase = new Polybase({ defaultNamespace: POLYBASE_NAMESPACE });

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
				<PolybaseProvider polybase={polybase}>{children}</PolybaseProvider>
			</ThirdwebProvider>
		</ConfigProvider>
	);
};

export default Layout;
