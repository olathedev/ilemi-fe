export type ApiResponse<T = Record<string, unknown>> = {
	status: string;
	message: string;
	error?: Record<string, string[]> | string;
	data?: T;
};

export interface IUser {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: Number;
    state?: string;
    password: string;
    profileImage?: string[];
    role: 'LANDLORD' | 'TENANT';
    // house: Types.ObjectId;
    // tenants: Types.ObjectId
    isProfileCompleted: boolean;
}