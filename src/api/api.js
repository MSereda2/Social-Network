import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: { "API-KEY": "22b58ba4-e1a1-4b41-b6a5-fd0b1637101a" },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
})

export const authAPI = {
  auth: () => instance.get(`auth/me`)
}

export const usersAPI = {
  getUsers: (currentPage, pageSize) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`
      ).then(response => response.data)
}
}

export const profileAPI = {
  profileUser: (userId) => { return instance.get(`profile/${userId}`)}
}

export const followAPI = {
  follow: (id) => {  return instance.post(`follow/${id}`)},
  unfollow: (id) => { return instance.delete(`unfollow/${id}`)}

}



