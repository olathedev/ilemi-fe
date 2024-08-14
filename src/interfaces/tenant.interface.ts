export interface ISendTenantInvite {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
}

export interface ITenantAcceptInvite {
    email: string | null;
    inviteToken: string | null;
    password: string
}