import { database } from "@/db/database";
import { ItemCard } from "@/app/item-card";
import { auth } from "@/auth";
import { eq } from "drizzle-orm";
import { items } from "@/db/schema";
import { EmptyState } from "./empty-state";
import { pageTitleStyles } from "@/styles";

export default async function MyAuctionPage() {
    const session = await auth();
    if (!session || !session.user || !session.user.id) {
        throw new Error("Unauthorized");
    }
    
    const allItems = await database.select().from(items).where(eq(items.userId,session.user.id));
    const has_items = allItems.length > 0;
    return (
        <main className="space-y-8">
            {has_items ? (
                <>
                    <h1 className={pageTitleStyles}>Your Current Auctions</h1>
                    <h2 className="text-2xl font-bold"></h2>
                    <div className="grid grid-cols-4 gap-8">
                        {allItems.map((item) => (
                            <ItemCard key={item.id} item={item} />
                        ))}
                    </div>
                </>
            ) : (
                <EmptyState />
            )}
        </main>
    );
}