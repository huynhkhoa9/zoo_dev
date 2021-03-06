import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://zoowebapp-env.eba-p2mxpa2c.us-east-2.elasticbeanstalk.com/api/test/';

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }

  getUserBoard() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }
}

export default new UserService();