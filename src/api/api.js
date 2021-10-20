import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "274f1d99-1d08-42f1-a65a-b1102028ecfe"
    }
});

export const usersAPI = {

    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            });
    },

    setFollow(id) {
        return instance.post(`follow/${id}`)
            .then(response => response.data);
    },

    setUnfollow(id) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data);
    },

    getUserProfile(userId) {
        console.warn('Obsolete method. Please use profileAPI object.')
        return profileAPI.getUserProfile(userId)
    }

};

export const profileAPI = {
    getUserProfile(userId) {
        return instance.get(`profile/${userId}`);
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId);
    },

    updateStatus(status) {
        return instance.put(`profile/status/`, { status: status });
    },
    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append('image', photoFile);

        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }

}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    },

    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, { email, password, rememberMe })
            .then(response => response.data)
    },

    logout() {
        return instance.delete(`auth/login`)
    }
}



