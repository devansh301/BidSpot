import { database } from "@/db/database";
import { desc, eq } from "drizzle-orm";
import { bids, items } from "@/db/schema";

export async function getBidForItem(itemId: number) {
  const allBids = await database.query.bids.findMany({
    where: eq(bids.itemId, itemId),
    orderBy: desc(bids.id),
    with: {
      user: {
        columns: {
          image: true,
          name: true,
        },
      },
    },
  });
  return allBids;
}
