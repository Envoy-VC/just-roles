import React from 'react';
import type { ReactElement } from 'react';
import Layout from '@/components/common/layout';
import type { NextPageWithLayout } from '../_app';

export enum StepType {
	BASIC_DETAILS = 0,
	ROLES_SETUP,
	DEPLOYMENT,
}

// Context

export const CreateContext = React.createContext<{
	step: StepType;
	setStep: React.Dispatch<React.SetStateAction<StepType>>;
	form: ICreateForm;
	setForm: React.Dispatch<React.SetStateAction<ICreateForm>>;
}>({
	step: StepType.BASIC_DETAILS,
	form: {
		name: '',
		logo: '',
		description: '',
		contactDetails: { name: '', value: '' },
		roles: [],
	},
	setStep: () => {},
	setForm: () => {},
});

// Components
import {
	Header,
	BasicDetails,
	RolesSetup,
	Deployment,
} from '@/components/create';

// Types
import { ICreateForm } from '@/types';

const Create: NextPageWithLayout = () => {
	const [step, setStep] = React.useState<StepType>(StepType.ROLES_SETUP);
	const [form, setForm] = React.useState<ICreateForm>({
		name: '',
		logo: '',
		description: '',
		contactDetails: { name: '', value: '' },
		roles: [],
	});
	return (
		<CreateContext.Provider value={{ step, form, setStep, setForm }}>
			<>
				<Header />
				{step === StepType.BASIC_DETAILS && <BasicDetails />}
				{step === StepType.ROLES_SETUP && <RolesSetup />}
				{step === StepType.DEPLOYMENT && <Deployment />}
			</>
		</CreateContext.Provider>
	);
};

Create.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

export default Create;