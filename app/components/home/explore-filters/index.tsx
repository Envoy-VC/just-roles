import React from 'react';
import { Input, ConfigProvider } from 'antd';

// Icons
import { PiMagnifyingGlass } from 'react-icons/pi';

const ExploreFilters = () => {
	return (
		<div className='max-w-screen-lg w-full p-4 mx-auto' id='explore'>
			<div className='text-[1.25rem] font-semibold my-4 mb-8'>Explore Communities</div>
			<div>
				<ConfigProvider
					theme={{
						token: {
							controlOutline: 'none',
							colorPrimaryHover: 'none',
							colorBorder: 'transparent',
						},
					}}
				>
					<Input
						size='large'
						placeholder='Search...'
						prefix={<PiMagnifyingGlass color='#9B9B9F' size={20} />}
						className='flex gap-2 py-3 my-2'
					/>
				</ConfigProvider>
			</div>
		</div>
	);
};

export default ExploreFilters;
