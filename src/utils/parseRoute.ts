const parseRoute = (route: string, paramName: string, paramValue: string) =>
  route.replace(`:${paramName}`, paramValue);

export default parseRoute;
