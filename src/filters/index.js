import Vue from 'vue'
import moment from 'moment'

// 时间格式化
Vue.filter('dateFormat', function (value) {
  return value ? moment(value).format('YYYY-MM-DD HH:mm') : value
})
