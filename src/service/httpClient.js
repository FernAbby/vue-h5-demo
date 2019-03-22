import axios from 'axios';
import JWT from 'jsonwebtoken';

let baseUrl = "/proxy";

// 重新创建http
export const httpClient = axios.create({
  baseURL: baseUrl,
  timeout: 6000,
  headers: {'Content-Type': 'application/json;charset=UTF-8'}
});

// 添加请求拦截器
httpClient.interceptors.request.use(config => {
  // if (config.url.indexOf('/wx/loginApi') < 0) {
  //   let token = sessionStorage.getItem('jwt');
  //   if (token) {
  //     token = JWT.sign({ foo: token }, 'aplat_params');
  //     const decoded = JWT.verify(token, 'aplat_params');
  //     config.headers.common['Authorization'] = `${decoded.foo}`;
  //     config.headers.common['jwt_token'] = `${decoded.foo}`;
  //   }
  // }
  return config;
}, error => {
  // 请求错误
  return Promise.reject(error);
});

// 添加响应拦截器
httpClient.interceptors.response.use(response => {
  // 响应数据
  return response;
}, error => {
  // if (error && error.response) {
  //   switch (error.response.status) {
  //     case 404:
  //       $toast.show(error.message || '请求出错(404)');
  //       break;
  //
  //     case 417:
  //       if (error.response.data.ecode == 'SYS000100') {
  //         window.location.href = '/login';
  //       } else {
  //         $toast.show(error.response.data.errorMsg || '请求出错');
  //       }
  //       break;
  //
  //     case 500:
  //       $toast.show(error.response.data.errorMsg || '服务器错误(500)');
  //       break;
  //
  //     default:
  //       error.message = `连接出错(${error.response.status})!`;
  //   }
  // }
  return Promise.reject(error);
});

// 表单提交
export const postParamConfig = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  transformRequest: [function (data) {
    // Do whatever you want to transform the data
    let ret = '';
    let isComplex = false;
    for (let it in data) {
      if (typeof (data[it]) === 'object') {
        isComplex = true;
        break;
      }
      ret += `${encodeURIComponent(it)}=${encodeURIComponent(data[it])}&`;
    }
    if (isComplex) return data;
    return ret;
  }]
};
