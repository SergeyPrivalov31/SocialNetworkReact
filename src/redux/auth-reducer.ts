import { authAPI, securityAPI } from "../api/api";
import { stopSubmit } from "redux-form";
import { type } from "node:os";

const SET_USER_DATA = 'network/auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'network/auth/GET_CAPTCHA_URL_SUCCESS';


export type InitialStateType = {
	userId: number | null,
	email: string | null,
	login: string | null,
	isAuth: boolean | null,
	captchaUrl: string | null
}

let initialState: InitialStateType = {
	userId: null,
	email: null,
	login: null,
	isAuth: false,
	captchaUrl: null // if null, then captcha is not required
};

const authReducer = (state = initialState, action: any): InitialStateType => {
	switch (action.type) {

		case GET_CAPTCHA_URL_SUCCESS:
		case SET_USER_DATA:
			return {
				...state,
				...action.payload,
			}

		default:
			return state;
	}
}

type setAuthUserDataActionPayloadType = {
	userId: number
	email: string
	login: string
	isAuth: boolean
}

type setAuthUserDataActionType = {
	type: typeof SET_USER_DATA
	payload: setAuthUserDataActionPayloadType

}

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): setAuthUserDataActionType => ({
	type: SET_USER_DATA, payload:
		{ userId, email, login, isAuth }
})
export const getAuthUserData = () => async (dispatch: any) => {
	let response = await authAPI.me()
	if (response.data.resultCode === 0) {
		let { id, login, email } = response.data.data;
		dispatch(setAuthUserData(id, email, login, true));
	}
}


export const getCaptchaUrlSuccess = (captchaUrl: any) => ({
	type: GET_CAPTCHA_URL_SUCCESS, payload:
		{ captchaUrl }
})

export const login = (email: string | null, password: string | null, rememberMe: boolean, captcha: string | null) => async (dispatch: any) => {
	let response = await authAPI.login(email, password, rememberMe, captcha)
	if (response.data.resultCode === 0) {
		dispatch(getAuthUserData())
	} else {
		if (response.data.resultCode === 10) {
			dispatch(getCaptchaUrl())
		}
		let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
		dispatch(stopSubmit("login", { _error: message }));
	}
}
export const getCaptchaUrl = () => async (dispatch) => {
	const response = await securityAPI.getCaptchaUrl()
	const captchaUrl = response.data.url;

	dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export const logout = () => async (dispatch) => {
	let response = await authAPI.logout()
	if (response.data.resultCode === 0) {
		dispatch(setAuthUserData(null, null, null, false));
	}
}
export default authReducer;