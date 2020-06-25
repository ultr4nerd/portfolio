import axios from 'axios';

const client = axios.create({
  baseURL: 'https://api.github.com',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default {
  getRepos() {
    return client.get('/users/mauricio-chavez/repos');
  },
};
