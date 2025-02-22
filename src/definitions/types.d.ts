import { z } from "zod";
import { LoginSchema } from "./schemas";

export type LoginType = z.infer<typeof LoginSchema>;
export type GenericObject = { [key: string]: string };
