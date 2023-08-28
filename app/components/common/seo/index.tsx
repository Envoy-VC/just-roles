import { NextSeo } from 'next-seo';

const SEO = () => {
	return (
		<NextSeo
			title='Just Roles'
			description='Create communities, assign roles based on followers, and enjoy decentralized role management.'
			openGraph={{
				url: 'https://just-roles.vercel.app',
				title: 'Just Roles',
				description:
					'Create communities, assign roles based on followers, and enjoy decentralized role management.',
				images: [
					{
						url: 'https://i.ibb.co/549Tqxc/og.png',
						width: 1200,
						height: 630,
						alt: 'Just Roles OG Image',
						type: 'image/png',
					},
				],
				siteName: 'Just Roles',
			}}
			twitter={{
				handle: '@Envoy_1084',
				site: '@Envoy_1084',
				cardType: 'summary_large_image',
			}}
		/>
	);
};

export default SEO;
