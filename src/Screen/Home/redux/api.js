import axios from 'axios';

const baseUrl = 'https://see-events-teama.herokuapp.com/api/v1/';
axios.defaults.validateStatus = status => status <= 500;

export const apiEventStartingSoon = () => {
  return axios({
    method: 'GET',
    url: baseUrl + 'events/?limit=6',
  });
};

export const apiLogin = dataLogin => {
  return axios({
    method: 'POST',
    url: 'https://see-events-teama.herokuapp.com/api/v1/auth/login',
    data: dataLogin,
  });
};

export const apiSignUp = (dataLogin, token) => {
  return axios({
    method: 'POST',
    url: 'https://see-events-teama.herokuapp.com/api/v1/auth/register',
    data: dataLogin,
    headers: {authorization: `Bearer ${token}`},
  });
};

export const apiEventByCategory = type => {
  return axios({
    method: 'GET',
    url: `https://see-events-teama.herokuapp.com/api/v1/events?category=${type}`,
  });
};

export const apiComment = () => {
  return axios({
    method: 'GET',
    url: baseUrl + 'comment/8',
  });
};

export const apiPostComment = (dataComment, token, id) => {
  console.log(token, 'ini dari api');
  return axios({
    method: 'POST',
    url: `https://see-events-teama.herokuapp.com/api/v1/comment/${id}`,
    data: dataComment,
    headers: {Authorization: `Bearer ${token}`},
  });
};
