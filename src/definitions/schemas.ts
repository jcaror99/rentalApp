import { z } from "zod";
import getError from "ui/getError";

export const Login = z
  .object({
    name: z.string(),
    password: z.string().min(5, { message: getError("passwordLength") }),
  })
  .required();
