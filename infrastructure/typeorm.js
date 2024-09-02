const typeorm = require("typeorm");
const EntitySchema = typeorm.EntitySchema;

const dataSource = new typeorm.DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  database: process.env.DATABASE_NAME,
  username: process.env.DATABASE_USER_NAME,
  password: process.env.DATABASE_PASSWORD,
  logging: true,
  synchronize: true,
  entities: [new EntitySchema(require("../src/entities/User.entity.js"))],
});

module.exports = { dataSource };
