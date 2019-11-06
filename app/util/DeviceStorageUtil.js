import React, {AsyncStorage} from 'react-native';

export default class DeviceStorage {
  /**
   * 获取
   * @param key
   * @returns {Promise<T>|*|Promise.<TResult>}
   */

  static get(key) {
    return AsyncStorage.getItem(key).then(value => {
       return value
    });
  }

  /**
   * 保存
   * @param key
   * @param value
   * @returns {*}
   */
  static save(key, value) {
    return AsyncStorage.setItem(key, value);
  }

  /**
   * 更新
   * @param key
   * @param value
   * @returns {Promise<T>|Promise.<TResult>}
   */
  static update(key, value) {
    return DeviceStorage.get(key).then(item => {
      value =
        typeof value === 'string' ? value : Object.assign({}, item, value);
      return AsyncStorage.setItem(key, value);
    });
  }

  /**
   * 删除
   * @param key
   * @returns {*}
   */
  static delete(key) {
    return AsyncStorage.removeItem(key);
  }
  /**
   * 清除
   */
  static clean(){
    return AsyncStorage.clear();
  }
  
}
