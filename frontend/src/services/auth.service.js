import axios from 'axios';
const API_ROOT = '/api/users/';

class AuthService {
  login(email, password) {
    return axios
      .post(API_ROOT + 'login', {
        user: {
          email,
          password
        }
      })
      .then(response => {
        console.log(JSON.stringify(response.data));
        const { user: object } = response.data;
        console.log(object);
        if (response.data) {
          localStorage.setItem('token', JSON.stringify(object));
        }
        return response.data;
      });
  }

  register(username, email, password) {
    return axios
      .post(API_ROOT + 'register', {
        user: {
          username,
          email,
          password
        }
      })
      .then(response => {
        console.log(JSON.stringify(response.data));
        if (response.data) {
          localStorage.setItem('token', JSON.stringify(response.data));
        }
        return response.data;
      });
  }
  getCurrentUser() {
    return JSON.parse(localStorage.getItem('token'));
  }
}

export default new AuthService();
