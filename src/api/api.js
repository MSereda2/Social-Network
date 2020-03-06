import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: { "API-KEY": "47ec3dd4-e38a-4951-addd-133e3397f6c6" },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
})

export const authAPI = {
  authMe: () => instance.get(`auth/me`),
  login: (email, password, rememberMe) => instance.post('auth/login', {email: email, password: password, rememberMe: rememberMe}),
  logOut: () => instance.delete('auth/login')
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



