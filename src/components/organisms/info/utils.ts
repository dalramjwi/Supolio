export const processObjectKeys = (
  obj: { [key: string]: any },
  callback: (key: string, value: any) => JSX.Element
) => {
  return Object.keys(obj).map((key) => {
    const value = obj[key];
    return callback(key, value);
  });
};
