/* global localStorage */
import { Region } from 'region-shortcut';

class RegionLocalStorage extends Region {
  constructor() {
    super('localStorage');
    this.setWithLocalStorage = this.setWithLocalStorage.bind(this);
    try {
      const { set } = this;
      const local = localStorage.getItem('RegionLocalStorage');
      const obj = JSON.parse(local);
      Object.keys(obj).forEach((key) => {
        set(key, obj[key]);
      });
    } catch (e) {
      // do nothing
    }
  }

  setWithLocalStorage(key, result) {
    const { set } = this;
    set(key, result);
    const obj = { [key]: result };
    localStorage.setItem('RegionLocalStorage', JSON.stringify(obj));
    return result;
  }
}

export default RegionLocalStorage;
