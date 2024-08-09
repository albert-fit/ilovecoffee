import { Coffee } from 'src/coffees/entities/coffee.entity';
import { Flavor } from 'src/coffees/entities/flavor.entitiy';
import { CoffeeRefactor1723197403085 } from 'src/migrations/1723197403085-CoffeeRefactor';
import { SchemaSync1723198054872 } from 'src/migrations/1723198054872-SchemaSync';
import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'pass123',
  database: 'postgres',
  entities: [Coffee, Flavor],
  migrations: [CoffeeRefactor1723197403085, SchemaSync1723198054872],
});
