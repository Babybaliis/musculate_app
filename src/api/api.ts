import axios from 'axios';
import {HierarchyBaseResponse, SignInRequest, SignUpRequest} from '../../musculate-app';
import {BASE_URL} from '@env';

const api = axios.create({
    baseURL: BASE_URL,
});

export const signIn = async (username: string, password: string) => {
    const response = await api.post('/auth/sign-in', {
        username,
        password,
    } as SignInRequest);
    return response.data;
};

export const signUp = async (username: string, email: string, password: string) => {
    const response = await api.post('/auth/sign-up', {
        username,
        email,
        password,
    } as SignUpRequest);
    return response.data;
};