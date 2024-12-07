export const requestLogger = (request, response, next) => {
  const method = request.method;
  const url = request.url;
  const timestamp = new Date().toISOString();
  const token = request.cookie.token;

  console.log(request);

  console.log(`[${timestamp} ${method}] ${url}`);

  next();
};
