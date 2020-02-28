import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: { "API-KEY": "22b58ba4-e1a1-4b41-b6a5-fd0b1637101a" },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
})

export const authAPI = {
  authMe: () => instance.get(`auth/me`),
  login: (email, password) => instance.post('auth/login', {email: email, password: password})
}

export const usersAPI = {
  getUsers: (currentPage, pageSize) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`
      ).then(response => response.data)
}
}

export const profileAPI = {
  updateStatus: (status) => { return instance.put(`profile/status`, { status: status })},
  getStatus: (userId) => { return instance.get(`profile/status/${userId}`) },
  profileUser: (userId) => { return instance.get(`profile/${userId}`)},
}

export const followAPI = {
  follow: (id) => {  return instance.post(`follow/${id}`)},
  unfollow: (id) => { return instance.delete(`unfollow/${id}`)}
}



