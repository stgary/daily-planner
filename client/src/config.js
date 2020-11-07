const vars = {
  POST_EVENT: process.env.POST_URL || 'http://localhost:5000/events',
  GET_EVENT: process.env.POST_URL || 'http://localhost:5000/events',
  
  POST_LOGIN:process.env.POST_LOGIN || 'http://localhost:5000/auth/login',
  POST_REGISTER: process.env.POST_REGISTER || 'http://localhost:5000/auth/register'
};

export { vars };