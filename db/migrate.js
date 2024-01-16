
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";

const connection = postgres({
    connectionString:process.env.NEXT_PUBLIC_POSTGRES_URL,
})
const db = drizzle(connection)

const migrateFiles = async () => {
    try {
        await migrate(db, { migrationsFolder: "drizzle" });
        console.log("Successful migration")
    } catch (error) {
        console.log(error)
    }
    
}

migrateFiles()
