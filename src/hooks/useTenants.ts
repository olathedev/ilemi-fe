import { ISendTenantInvite, ITenantAcceptInvite } from "@/interfaces/tenant.interface"
import tenantService from "@/services/tenant.service"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { use } from "react"
import { toast } from "sonner"


export const useGetAllTenatsQuery = () => {
    const query = useQuery({ queryKey: ['tenants'], queryFn: tenantService.GETALLTENANTS })
    console.log(query)
    return query
}

export const useGetAllInvitesQuery = () => {
    const query = useQuery({ queryKey: ['invites'], queryFn: tenantService.GETINVITES })
    return query
}

export const useSendTenantInviteMutation = () => {
    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn: (data: ISendTenantInvite) => tenantService.SENDTENATINVITE(data),
        onSuccess: (res) => {
            console.log('from mutation', res)
            if (res.error) {
                toast.error(res.error.message)
                return
            }
            queryClient.invalidateQueries({queryKey: ['invites']})
            toast.success('Invite sent to tenants mail')
        },
        onError: (err) => {
            console.log('mutation error', err)
            toast.error(err.message)
        }
    })

    return mutation
}


export const useAcceptInviteMutation = () => {
    const router = useRouter();
    const mutation = useMutation({
        mutationFn: (data: ITenantAcceptInvite) => tenantService.TENANTACCEPTINVITE(data),
        onSuccess: (res) => {
            console.log('from mutation', res)
            if (res.error) {
                toast.error(res.error.message)
                return
            }
            toast.success(res.data.message)
            router.push('/signin')
        },
        onError: (err) => {
            console.log('mutation error', err)
            toast.error(err.message)
        }
    })

    return mutation

} 
