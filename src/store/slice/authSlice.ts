import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { AuthUser } from '../../types/auth'


interface AuthState {
    user: AuthUser | null
}

const stored = localStorage.getItem('auth_user')

const initialState: AuthState = {
    user: stored ? JSON.parse(stored) : null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: {
            prepare: (name: string, email: string) => ({
                payload: {
                    id: Date.now(),
                    name,
                    email,
                } as AuthUser,
            }),
            reducer: (state, action: PayloadAction<AuthUser>) => {
                state.user = action.payload
            },
        },
        logout: (state) => {
            state.user = null
        },
    },
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer
