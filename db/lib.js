import { users,reviews,apartments,db } from "./schema";

export const addUser = async ({username,email}) => {
    const newUser = {username,email}
    const selectResult = await db.insert(users).values(newUser).returning();
    console.log('Results', selectResult);
};

export const getUsers = async () => {
    const selectResult = await db.select().from(users);
    console.log('Results', selectResult);
};


export const getReviews = async () => {
    const selectResult = await db.select().from(reviews);
    console.log('Results', selectResult);
};

export const getApartments = async () => {
    const selectResult = await db.select().from(apartments);
    console.log('Results', selectResult);
};