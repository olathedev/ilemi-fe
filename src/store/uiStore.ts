import { create } from "zustand";

interface UiState {
    hasSeenWelcomeModal: boolean;
    setHasSeenWelcome: (value: boolean) => void
}

const initialState = {
    hasSeenWelcomeModal: false
}
const useUiStore = create<UiState>((set) => ({
    ...initialState,
    setHasSeenWelcome: (value) => set({ hasSeenWelcomeModal: value })
}))

export { useUiStore }