import { z } from "zod";
import getError from "@/components/ui/getError";

export const LoginSchema = z
  .object({
    name: z.string(),
    password: z.string().min(5, { message: getError("passwordLength") }),
  })
  .required();
