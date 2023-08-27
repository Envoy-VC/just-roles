import React from 'react';
import { InputNumber, ConfigProvider } from 'antd';

import { InputNumberProps } from 'antd';

interface Props extends InputNumberProps {}

const CustomNumberInput = ({ ...props }: Props) => {
	return (
		<ConfigProvider
			theme={{
				token: {
					controlOutline: 'none',
					colorPrimaryHover: 'none',
					colorBorder: 'transparent',
					colorBgContainer: '#35353B',
				},
			}}
		>
			<InputNumber {...props} />
		</ConfigProvider>
	);
};

export default CustomNumberInput;
