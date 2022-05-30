function convertObjToQueryString(paramObj: Record<string, any>) {
  const keys = Object.keys(paramObj);
  if (keys.length === 0) {
    return '';
  }

  return keys
    .map(
      key => encodeURIComponent(key) + '=' + encodeURIComponent(paramObj[key]),
    )
    .join('&');
}

export default convertObjToQueryString;
