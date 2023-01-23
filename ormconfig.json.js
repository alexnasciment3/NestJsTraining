module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'postgres',
  entities: ['dist/**/*.entity.js'],
  migratios: ['dist/migrations/*.js'],
  cli: {
    migratiosDir: 'src/migrations',
  }


}