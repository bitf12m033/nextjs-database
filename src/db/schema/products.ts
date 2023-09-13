import { numeric, pgTable, serial, varchar } from 'drizzle-orm/pg-core';

export const products = pgTable('products', {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 256 }),
    price:numeric("price")
  });