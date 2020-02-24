import * as axios from "axios";

export const getUsers = (currentPage, pageSize) => {
    return axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`,
        {
          withCredentials: true
        }
      ).then(response => response.data)
}

export const auth = () => {

   // We sent request to server with our cookies and server check if cookies is right then he send to us response
    return axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
    withCredentials: true,
})
}

export const profileUser = (userId) => {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
}



