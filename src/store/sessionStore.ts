import { ApiResponse, IUser } from "@/interfaces/ApiResponses";
import { callApi } from "@/lib/helpers/callApi";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
    isFirstMount: boolean;
    loading: boolean;
    user: any;
    token: string | null;
    getSession: () => Promise<void>;
    setLoading: (data: boolean) => void;
    setUser: (data: IUser) => void;
    setSession: (data: {user: IUser, accessToken: string}) => void;
    clearSession: () => void;
}

const intialState = {
    loading: true,
    user: null,
    token: null,
    isFirstMount: false
}

export const useAuthSessionStore = create<AuthState>()(persist((set, get) => ({
    ...intialState,
    getSession: async () => {
        set({loading: true})
        const { data } = await callApi('/auth/user')
        set({
            ...(data && { user: data?.user}),
            loading: false
        })
        console.log('get session', data.user)
        console.log(get())

    },
    setSession:  (data: {user: IUser, accessToken: string}) => {
        set({ user: data.user, loading: false, token: data.accessToken })
        console.log(get())
    },
    setUser: (data: IUser) => set({ user: data}),
    setLoading: (data: boolean) => set({ loading: data }),
    clearSession:  () => {
        set({ user: null, token: null })
    }
}), {
    name: 'auth-storage',
    storage: {
        getItem: (name) => {
          const str = localStorage.getItem(name);
          return str ? JSON.parse(str) : null;
        },
        setItem: (name, value) => {
          localStorage.setItem(name, JSON.stringify(value));
        },
        removeItem: (name) => localStorage.removeItem(name),
      },
}))
