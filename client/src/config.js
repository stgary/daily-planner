const POST_EVENT = process.env.POST_URL || 'http://localhost:5000/events';
const GET_EVENTS = process.env.POST_URL || 'http://localhost:5000/events';
const POST_LOGIN = process.env.POST_LOGIN || 'http://localhost:5000/auth/login';
const POST_REGISTER = process.env.POST_REGISTER || 'http://localhost:5000/auth/register';


export { POST_EVENT, GET_EVENTS, POST_LOGIN, POST_REGISTER };