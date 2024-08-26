import dotenv from 'dotenv';
import { defineConfig } from '@mikro-orm/sqlite';
import { User } from './src/users/entities/user.entity';

dotenv.config();

export default defineConfig({
  entities: [User],
  dbName: 'my-db-name.sqlite3',
  // this is inferred as you import `defineConfig` from sqlite package
  // driver: SqliteDriver,
  debug: process.env.NODE_ENV === 'development',
});
