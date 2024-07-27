import { useAuthSessionStore } from "@/store/sessionStore"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export const useAuth = () => {
    const { loading, user, token, setLoading, getSession, setSession, clearSession } = useAuthSessionStore()
    const router = useRouter()
    useEffect(() => {
      const initAuth = async () => {
        if(token && !user) {
            try {
                setLoading(true)
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
        clearSession()
        router.push('/')
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