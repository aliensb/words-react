/**
 * 用户相关的接口
 */
import request from "@/utils/axios";
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

export interface LoginRes {
  user: User;
  token: string;
}

export interface User {
  ID: number;
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt: string;
  username: string;
  nickName: string;
}

export const login = (data: LoginReq) => {
  return request<BaseRes<LoginRes>>({
    method: "POST",
    url: "/login",
    data,
  });
};

export const signup = (data: LoginReq) => {
  return request<BaseRes<LoginRes>>({
    method: "POST",
    url: "/signup",
    data,
  });
};
