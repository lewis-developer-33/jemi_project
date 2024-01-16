import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
  try {
    const result =
      await sql`
      CREATE TABLE users (
        id int AUTO_INCREMENT NOT NULL,
        username varchar(256),
        email varchar(256),
        CONSTRAINT users_id PRIMARY KEY(id)
    );
      `;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}