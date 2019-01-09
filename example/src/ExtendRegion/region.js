/* global localStorage */
import { Region } from 'region-shortcut';

const sync = (key, result) => {
  const obj = { [key]: result };
  localStorage.setItem('RegionLocalStorage', JSON.stringify(obj));
};

class RegionLocalStorage extends Region {
  constructor() {
    super('localStorage');
    const { set, load } = this;
    try {
      const local = localStorage.getItem('RegionLocalStorage');
      const obj = JSON.parse(local);
      Object.keys(obj).forEach((key) => {
        set(key, obj[key]);
      });
    } catch (e) {
      // do nothing
    }
    this.set = (key, result, options) => {
      set(key, result, options);
      sync(key, result);
      return result;
    };
    this.load = async (key, asyncFunction, options) => {
      const result = await load(key, asyncFunction, options);
      sync(key, result);
      return result;
    };
  }
}

export default RegionLocalStorage;
