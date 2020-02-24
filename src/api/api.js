import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: { "API-KEY": "b222f440-ad03-42e9-81e4-19af0d77c6e1" },
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

export let followAPI = {
  unfollow: (id) => { return instance.delete(`unfollow/${id}`)},
  follow: (id) => {  return instance.post(`follow/${id}`)}

}



