import { pageTitleStyles } from "@/styles";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { getImageURLAction } from "@/app/actions";
import { formatDistance } from "date-fns";
import { ConvertToRupees } from "@/utils/convert";
import { createBidAction } from "./actions";
import { getBidForItem } from "@/data-access/bids";
import { getItem } from "@/data-access/items";

function formatTimestamp(timestamp: Date) {
    return formatDistance(timestamp, new Date(), { addSuffix: true });
}

export default async function ItemPage({
    params: { itemId },
}: {
    params: { itemId: string };
}) {
    const item = await getItem(parseInt(itemId));
    if (!item) {
        return <div className="space-y-6 flex flex-col items-center">
            <h2 className="text-3xl font-bold">Item not found</h2>
            <Image src="/package.svg" width="300" height="300" alt="Package" />
            <p className="text-center">
                The item you are trying to view is invalid.
                <br />
                Please go back and search for a different auction item.
            </p>
            <Button asChild>
                <Link href="/">View Auction</Link>
            </Button>
        </div>
    }

    const allBids = await getBidForItem(item.id);
    const hasBids = allBids.length > 0;

    const imageURL = await getImageURLAction(item.fileKey);
    return (
        <main className="space-y-8">
            <div className="flex gap-8">
                <div className="flex flex-col gap-6">
                    <h1 className={pageTitleStyles}><span className="font-normal">Auction for</span> {item.name}</h1>
                    <Image
                        className="rounded-xl"
                        src={imageURL}
                        alt={item.name}
                        width={400}
                        height={400}
                    />
                    <div className="text-xl space-y-4">
                        <div>
                            Current Bid{" "}
                            <span className="font-bold"> Rs. {ConvertToRupees(item.currentBid)}</span>
                        </div>
                        <div>
                            Starting Price of
                            <span className="font-bold"> Rs. {ConvertToRupees(item.startingPrice)}</span>
                        </div>
                        <div>
                            Bid Interval 
                            <span className="font-bold"> Rs. {ConvertToRupees(item.bidInterval)}</span>
                        </div>
                    </div>
                </div>
                <div className="space-y-4 flex-1">
                    <div className="flex justify-between">
                        <h2 className="text-2xl font-bold">Current Bids</h2>
                        <form action={createBidAction.bind(null, item.id)}>
                            <Button>Place a Bid</Button>
                        </form>
                    </div>
                    {hasBids ? (
                        <ul className="space-y-4">
                            {allBids.map((bid) => (
                                <li key={bid.id} className="bg-gray-100 rounded-xl p-8">
                                    <div className="flex gap-4">
                                        <div>
                                            <span className="font-bold">
                                                Rs. {ConvertToRupees(bid.amount)}
                                            </span>{" "}
                                            by <span className="font-bold">{bid.user.name}</span>
                                        </div>
                                        <div className="">{formatTimestamp(bid.timestamp)}</div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <div className="flex flex-col items-center bg-gray-100 rounded-xl p-12">
                            <Image src="/nobidsyet.svg" width="300" height="300" alt="Package" />
                            <h2 className="text-2xl font-bold">No bids yet</h2>
                            <br/>
                            <form action={createBidAction.bind(null, item.id)}>
                                <Button>Place a Bid</Button>
                            </form>
                        </div>
                )}
                </div>
            </div>
        </main>
    );
}
