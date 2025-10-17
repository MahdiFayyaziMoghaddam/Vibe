export const isPrivateRoute = (route: string, privateRoutes: string[]) =>
  privateRoutes.some((privateRoute) => privateRoute.endsWith(route));
