import * as axios from "axios";

const instance = axios.create( {
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "85011dda-dbb7-4dd6-8396-816804b3e439"
    }
})
export const usersAPI = {
    getUsers (currentPage = 1 , pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    }
}


export const getFollow = (id = 1) => {
    return instance.delete(`follow/${id}`)
        .then(response => {
            return response.data;
    })

}
export const getUnfollow = (id = 1) => {
    return instance.post(`follow/${id}`)
        .then(response => {
            return response.data;
    })
}
