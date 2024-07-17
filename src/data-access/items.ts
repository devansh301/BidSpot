import { database } from "@/db/database";
import { eq } from "drizzle-orm";
import { items } from "@/db/schema";

export async function getItem(itemId: number) {
  const item = await database.select().from(items).where(eq(items.id,itemId));
  if (item.length == 0) {
    return null;
  } 
  return item[0];
}
