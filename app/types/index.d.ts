import { StepType } from '@/pages/create';

export interface DAppMetaData {
	name: string;
	url: string;
	description?: string;
	logoUrl?: string;
	isDarkMode?: boolean;
}

export interface ContactDetails {
	name?: string;
	value?: string;
}

export interface RoleType {
	name: string;
	thresholdLower: number;
	thresholdUpper: number;
}

export interface ICreateForm {
	name: string;
	logo: string;
	description: string;
	contactDetails: ContactDetails;
	roles: RoleType[];
}
