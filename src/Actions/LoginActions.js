
import * as ACTION from '../constants/actions'
import LoginController from "../Controller/loginController";
import {createAsyncThunk , createSlice} from '@reduxjs/toolkit'

export const LoginInit =  createAsyncThunk(ACTION.LOGIN_KD , async(payload)=>{
    const respones = await LoginController.loginKD(payload)
    return respones 
})
export const LoginSelected =  createAsyncThunk(ACTION.LOGIN_SECLECT , async(payload)=>{
    const respones = await LoginController.loginSelect(payload)
    return respones 
})
export const LoginUser =  createAsyncThunk(ACTION.LOGIN_USER , async(payload)=>{
    const respones = await LoginController.loginUser(payload)
    return respones 
})

const callApiLogin = createSlice({
    name: 'login/api',
    initialState: {
        ma_nsd: null,
    },
    reducers: {},
    extraReducers: {
        [LoginSelected.fulfilled]:(state,action)=>{
            state.ma_nsd=action.payload
        },
        [LoginUser.fulfilled]:(state,action)=>{
            state.token=action.payload
        }, 
    }
})

const { reducer } = callApiLogin
export default reducer