module.exports = {
  isValid,
};

function isValid(user) {
  return Boolean(
    user.username 
    && user.password 
    && user.name
    && user.email
    && typeof user.password === "string" 
  );
}