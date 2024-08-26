import { callApi } from "@/lib/helpers/callApi"
import { useState } from "react"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

export const useFetch = () => {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState(null)

    const fetch = async (url: string, method: 'POST' | 'GET' = 'GET', data?: any) => {
        setIsLoading(true)

        const { data: responseData, error } = await callApi(url, method, (data && {...data}))

        if (error) {
            console.log("errorr ohh", error)
            setIsLoading(false)

           
            if(error.error?.status === "ACCOUNT_NOT_VERIFIED") {
                router.push(`/verify-email?email=${data?.email}`)
                console.log("account no dey verified")
                return
            }

            toast.error("ERROR", {
                description: error.message || "something went wrong from our end, please try again in a bit"
            })

            return
        }

        setIsLoading(false)
        // setData(responseData)
        toast.success('Success', {
            description: responseData?.message
        })
        return responseData
    }

    return { 
        isLoading,
        fetch,
        data
    }
}