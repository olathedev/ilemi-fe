import { useAuthSessionStore } from "@/store/sessionStore"
import { useRouter } from "next/navigation"
import { useEffect } from "react"


export const useAuth = () => {
    const { loading, user, token, setLoading, getSession, clearSession } = useAuthSessionStore()
    const router = useRouter()
    
    useEffect(() => {
        const initAuth = async () => {
            if (!loading && !user) {
                router.push('/login')
                return
            }

            if (token && !user) {
                try {
                    getSession()
                } catch (error) {
                    console.log('Failed to fetch user data:', error)
                    clearSession()
                }
            }

        }

        initAuth()
        setLoading(false)

    }, [user, token, setLoading, getSession, clearSession])

    const logout = () => {
        router.push('/')
        clearSession()
    }

    return {
        loading,
        user,
        token,
        clearSession,
        getSession,
        setLoading,
        logout
    }
}