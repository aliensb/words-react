/**
 * 用户相关的接口
 */
import request from "@/utils/api-service";
import { BaseRes } from "@/api/types/common";

export interface LoginReq {
  username: string;
  password: string;
}

export interface signUpReq {
  username: string;
  password: string;
  nickname: string;
}

export const login = (data: LoginReq) => {
  return request<BaseRes<string>>({
    method: "POST",
    url: "/login",
    data,
  });
};

export const signup = (data: LoginReq) => {
  return request<BaseRes<string>>({
    method: "POST",
    url: "/signup",
    data,
  });
};
