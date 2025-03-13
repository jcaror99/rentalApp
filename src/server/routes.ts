import { TypeWithKey } from "@/definitions/types";

const getApiRoute = (route: string) => {
  const routes: TypeWithKey<string> = {
    auth: "/auth",
  };
  return routes[route];
};

export default getApiRoute;
