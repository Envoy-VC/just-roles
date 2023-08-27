import React from 'react';
import { Steps, ConfigProvider, theme } from 'antd';
import { CreateContext } from '@/pages/create';

const StepTitle = ({ title }: { title: string }) => (
	<span className='text-lg font-medium'>{title}</span>
);

const stepItems = [
	{
		title: <StepTitle title='Basic Information' />,
	},
	{
		title: <StepTitle title='Roles setup' />,
	},
	{
		title: <StepTitle title='Deploy' />,
	},
];

const Header = () => {
	const { step } = React.useContext(CreateContext);
	return (
		<div className='bg-[#18181B]'>
			<div className=' p-4 max-w-screen-lg mx-auto'>
				<div className='text-[2.4rem] font-black tracking-wide font-sans mb-12 mt-4'>
					Create Community
				</div>
				<div className='border-2 border-[#ccc] rounded-2xl p-8 bg-[#35353B]'>
					<ConfigProvider
						theme={{
							token: {
								colorPrimary: '#35353B',
								colorBorder: '#fff',
								controlItemBgActive: '#696975',
							},
						}}
					>
						<Steps current={step} items={stepItems} />
					</ConfigProvider>
				</div>
			</div>
		</div>
	);
};

export default Header;
