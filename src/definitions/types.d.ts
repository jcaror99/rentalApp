import { z } from "zod";
import { Login } from "./schemas";

export type Login = z.infer<typeof Login>;
export type GenericObject = { [key: string]: string };
