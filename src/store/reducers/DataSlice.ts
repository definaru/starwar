import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Characters } from '../../models/Users'
import { IData } from '../../models/IData'


interface UserState {
    users: Characters[] | IData[];
    isLoading: boolean;
    error: string;
}

const initialState: UserState = {
    users: [],
    isLoading: false,
    error: ''
}

export const dataSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {
        userLoading(state) {
            state.isLoading = true
        },
        userFetching(state, action: PayloadAction<Characters[]>) {
            state.isLoading = false
            state.error = ''
            state.users = action.payload
        },
        charactersFetching(state, action: PayloadAction<IData[]>) {
            state.isLoading = false
            state.error = ''
            state.users = action.payload
        },
        getMessageError(state, action: PayloadAction<string>) {
            state.isLoading = false
            state.error = action.payload
        }
    }
})

export default dataSlice.reducer