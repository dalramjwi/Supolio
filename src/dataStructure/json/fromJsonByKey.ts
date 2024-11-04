export function fromJsonByKey<T>(
  json: any,
  key: string,
  Constructor: { new (data: T): T }
): T {
  if (!json[key]) {
    throw new Error(`키 : "${key}"가 JSON 데이터에 존재하지 않음`);
  }
  return new Constructor(json[key]);
}
