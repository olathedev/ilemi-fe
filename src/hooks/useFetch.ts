import { callApi } from "@/lib/helpers/callApi"
import { useState } from "react"
import { toast } from "sonner"

export const useFetch = () => {
    const [isLoading, setIsLoading] = useState(false)

    const fetch = async (url: string, method: 'POST' | 'GET' = 'GET', data?: any) => {
        setIsLoading(true)

        const { data: responseData, error } = await callApi(url, method, (data && {...data}))
        if (error) {
            // console.log("", error)
            setIsLoading(false)

            toast.error("ERROR", {
                description: error.message
            })

            return
        }

        setIsLoading(false)
        toast.success('Success', {
            description: responseData?.message
        })
    }

    return { 
        isLoading,
        fetch
    }
}