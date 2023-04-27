export interface BaseRes<T = any> {
  code: number;
  data: T;
  msg: string;
}
