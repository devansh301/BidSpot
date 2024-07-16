import { Item } from "@/db/schema";
import Image from "next/image"
import { getImageURLAction } from "@/app/items/create/actions";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ConvertToRupees } from './../utils/convert';
import { format } from "date-fns";
import { isBidOver } from "./../utils/bids";

export async function ItemCard({ item }: { item: Item }) {
    const imageURL = await getImageURLAction(item.fileKey);
    return (
        <div key={item.id} className="border p-8 rounded-xl space-y-2">
            <Image
                src={imageURL}
                alt={item.name}
                width={200}
                height={200}
            />
            <h2 className="text-xl font-bold">{item.name}</h2>
            <p className="text-lg">
                Starting Price: Rs.{ConvertToRupees(item.startingPrice)}
            </p>
            {isBidOver(item) ? (
                <p className="text-lg">
                    Bidding is Over
                </p>
            ) : (
                <p className="text-lg">
                    Ends On: {format(item.endDate, "eeee MM/dd/yy")}
                </p>
            )}
            <Button asChild variant={isBidOver(item) ? "outline" : "default"}>
                <Link href={`/items/${item.id}`}>{isBidOver(item) ? "View Bid" : "Place Bid"}</Link>
            </Button>
        </div>
    );
}