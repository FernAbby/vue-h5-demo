import merge from 'webpack-merge';

import * as upload from './upload'; // 教师
import * as account from './account'; // 登录

export default merge(
  account,
  upload,
);
