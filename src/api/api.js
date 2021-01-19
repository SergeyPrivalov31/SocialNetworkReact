import * as axios from "axios";

const instance = axios.create( {
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "1b518eb4-791f-4cd5-83c0-854ef9a0b789"
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


/*export const getFollow = (id) => { //поломано
    return instance.delete(`follow/${id}`)
        .then(response => {
            return response.data;
    })

}
export const getUnfollow = (id) => { //поломано
    return instance.post(`follow/${id}`)
        .then(response => {
            return response.data;
    })
}*/
