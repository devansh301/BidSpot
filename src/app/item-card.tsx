import { Item } from "@/db/schema";
import Image from "next/image"
import { getImageURLAction } from "@/app/actions";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ConvertToRupees } from './../utils/convert';

export async function ItemCard({item} : { item: Item}) {
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
            <p className="text-lg">starting price: Rs.{ConvertToRupees(item.startingPrice)}</p>
            <Button asChild>
                <Link href={`/items/${item.id}`}>Place Bid</Link>
            </Button>
        </div>
    );
}