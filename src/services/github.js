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
  getRepo(repo) {
    return client.get(`/repos/mauricio-chavez/${repo}`);
  }
};
