
export const getLoading = (state, path) => {
  const { loadings } = state;
  if (!loadings) {
    return true;
  }
  if (Array.isArray(path)) {
    for (let i = 0; i < path.length; i++) {
      if (loadings[path[i]]) { // exclude undefined
        return true;
      }
    }
    return false;
  }
  return loadings[path];
};

export const getResults = (state, path) => {
  const { results = {} } = state;
  if (Array.isArray(path)) {
    const ans = [];
    for (let i = 0; i < path.length; i++) {
      const key = path[i];
      ans.push(results[key] || undefined);
    }
    return ans;
  }
  return results[path] || undefined;
};

export const getFetchTimes = (state, path) => {
  const { fetchTimes = {} } = state;
  if (Array.isArray(path)) {
    const ans = [];
    for (let i = 0; i < path.length; i++) {
      const key = path[i];
      ans.push(fetchTimes[key] || undefined);
    }
    return ans;
  }
  return fetchTimes[path] || undefined;
};

export const mapResultToProps = (path) => (state) => {
  const loading = getLoading(state, path);
  const resultArr = getResults(state, path);
  const results = { loading };
  path.forEach((key, index) => {
    results[key] = resultArr[index];
  })
  return results;
}
