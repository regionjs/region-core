import { Region } from 'region-core';
import { get } from 'lodash';
import routes from "./routes";
import history from "./history";

export const appRegion = new Region('selectedKey')

export const setSelectedKey = appRegion.setBy('selectedKey')

const initRegion = () => {
  const { hash } = history.location;
  const initSelectKey = hash !== '' ? hash.slice(1) : null;
  const defaultSelectKey = get(routes, ['0', 'key']);
  if (!initSelectKey || routes.find(({ key }) => key === initSelectKey) === undefined) {
    setSelectedKey(defaultSelectKey);
  } else {
    setSelectedKey(initSelectKey);
  }
}

initRegion();
