import { ApiResponse, IUser } from "@/interfaces/ApiResponses";
import { callApi } from "@/lib/helpers/callApi";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
    isFirstMount: boolean;
    loading: boolean;
    user: unknown;
    token: string | null;
    getSession: () => Promise<void>;
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
        const { data } = await callApi('/auth/user')
        set({
            ...(data?.data && { user: data?.data}),
            loading: false
        })
    },
    setSession:  (data: {user: IUser, accessToken: string}) => {
        set({ user: data.user, loading: false, token: data.accessToken })
        console.log(get())
    },
    clearSession:  async () => {set({ user: null, token: null })}
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