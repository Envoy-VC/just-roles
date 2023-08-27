import React from 'react';
import { Input, ConfigProvider } from 'antd';
import { TextAreaProps } from 'antd/es/input';

interface Props extends TextAreaProps {}

const CustomTextArea = ({ ...props }: Props) => {
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
			<Input.TextArea {...props} />
		</ConfigProvider>
	);
};

export default CustomTextArea;
