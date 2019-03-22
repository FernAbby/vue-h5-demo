import { httpClient } from './httpClient';

// 账号登录
export const account = params => {
  return httpClient.get(`/wx/login?push_params=${params}`, params).then(ret => ret.data);
}

// 检查mobile是否存在
export const mobileCheck = params => {
  return httpClient.post('/isExistMobile', params).then(ret => ret.data);
}

