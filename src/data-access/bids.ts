import { database } from "@/db/database";
import { desc, eq } from "drizzle-orm";
import { bids, items, users } from "@/db/schema";

export async function getBidForItem(itemId: number) {
  const allBids = await database
    .select({
      id: bids.id,
      amount: bids.amount,
      timestamp: bids.timestamp,
      userId: bids.userId,
      userName: users.name,
      userImage: users.image,
    })
    .from(bids)
    .innerJoin(users, eq(bids.userId, users.id))
    .where(eq(bids.itemId, itemId))
    .orderBy(desc(bids.id));

  return allBids;
}
