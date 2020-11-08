module.exports = {
  PORT: process.env.PORT || 5000,
  JWT_SECRET: process.env.JWT_SECRET || ':(',
  DATABASE: process.env.DATABASE || 'DPDB',
  DB_PASS: process.env.DB_PASS || 'j233ancigp3po',
  DB_USER: process.env.DB_USER || 'postgres',
  ENVIRONMENT: process.env.DB_ENV || "development",
  BCRYPT_ROUNDS: process.env.BCRYPT_ROUNDS || 10,
}