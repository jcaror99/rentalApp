import instance from "../config";
import getApiRoute from "../routes";
import { LoginType, ApiResponse } from "@/definitions/types";

const authentication = async (values: LoginType) => {
  const route = getApiRoute("auth");
  const { data } = await instance.post<ApiResponse<string>>(route, values);
  return data;
};

export default authentication;
