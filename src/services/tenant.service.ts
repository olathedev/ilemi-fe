import { ISendTenantInvite, ITenantAcceptInvite } from "@/interfaces/tenant.interface";
import { callApi } from "@/lib/helpers/callApi";
import { ENDPOINTS } from "@/lib/utils/endpoints";

class TenantService {
    public async GETALLTENANTS(): Promise<any> {
        const response = await callApi('/tenants')
        return response;
    }
    
    public async SENDTENATINVITE(data: ISendTenantInvite): Promise<any> {
        const response = await callApi('/invite/sendTenantInvite', 'POST', {...data})
        return response;
    }

    public async TENANTACCEPTINVITE(data: ITenantAcceptInvite): Promise<any> {
        const response = await callApi('/invite/acceptInvite', 'POST', {...data})
        return response;
    }
    
    public async GETINVITES() {
        const response = await callApi('/invite/')
        return response
    }

    public async UPDATETENANT() {

    }
}

export default new TenantService()