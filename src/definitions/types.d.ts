import { z } from "zod";
import { LoginSchema } from "./schemas";

export type LoginType = z.infer<typeof LoginSchema>;
export type TypeWithKey<T> = { [key: string]: T };

export type ApiResponse = {
  status: number;
  message: string;
  data: T;
};
