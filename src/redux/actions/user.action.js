import { services } from '../../service';
// import { ADD_STATUS } from '../types';
import * as types from '../types';

export const login = (data) => {
    return (dispatch) => {
        dispatch({
            type: types.CHECK_LOGIN_START,
            payload: null,
        });
        services.post('login/api', data)
            .then((res) => {
                if (res.code === 200 && res.errorCode == 0) {
                    dispatch({
                        type: types.CHECK_LOGIN_SUCCESS,
                        payload: res,
                    });
                } else {
                    dispatch({
                        type: types.CHECK_LOGIN_FAIL,
                        payload: res,
                    });
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

export const addAction = (data)=> {
    console.log("data===>",data)
    return {
            type: types.ADD_STATUS,
            payload: data,
    }
}