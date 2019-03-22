import { httpClient } from './httpClient';

// 获取图片上传token
export const getPicToken = () => {
  return httpClient.get(`/token`).then(ret => ret.data)
}

// 上传图片
export const uploadImage = params => {
  return httpClient.post('/upload/image', params, {
    headers: {'Content-Type': 'multipart/form-data'}
  }).then(ret => ret.data);
}
