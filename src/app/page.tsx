import { database } from "@/db/database";
import { ItemCard } from "./item-card";
import { items } from '@/db/schema';

export default async function HomePage() {
  const allItems = await database.select().from(items);
  return (
    <main className="space-y-8">
      <h1 className="text-4xl font-bold">
        Items for sale
      </h1>
      
      <h2 className="text-2xl font-bold"></h2>
      <div className="grid grid-cols-4 gap-8">
        {allItems.map((item) => (
          <ItemCard key={item.id} item={item}/>
        ))}
      </div>
    </main>
  );
}
