import { drizzle } from 'drizzle-orm/vercel-postgres';
import { sql } from "@vercel/postgres";
import {
  pgTable,
  serial,
  varchar,
} from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: serial("id").primaryKey(),
  username: varchar('username', { length: 256 }).unique(),
  email:varchar('email',{length:256}).unique(),
});

export const apartments = pgTable('apartments', {
  id: serial("id").primaryKey(),
  name: varchar('username', { length: 256 }).unique(),
  location: varchar('location', { length: 256 }),
  managerId:serial('manager_id').references(() => users.id),
  images:varchar('images',{length:256}),
  description:varchar('description',{length:256}),
});

export const reviews = pgTable('reviews', {
  id: serial("id").primaryKey(),
  userId: serial('user_id').references(() => users.id),
  apartmentId: serial('apartment_id').references(() => apartments.id),
  
});

// Use this object to send drizzle queries to your DB
export const db = drizzle(sql);
// Create a pgTable that maps to a table in your DB




