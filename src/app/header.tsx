import Image from "next/image";
import Link from "next/link";
import { SignIn } from "@/components/sign-in";
import { SignOut } from '@/components/sign-out';
import { auth } from "@/auth";

export async function Header() {
    const session = await auth();
    return <div className="bg-gray-200 py-3">
        <div className="container flex justify-between items-center">
            <div className="flex items-center gap-12">
                <Link href="/" className="flex items-center gap-1 hover:underline">
                    <Image src="/logo.png" width="50" height="50" alt="Logo"/>
                    BidSpot
                </Link>
                <div className="flex item-center gap-8">
                    <Link href="/" className="flex items-center gap-1 hover:underline">
                        All Auctions
                    </Link>
                    {session && (
                        <>
                            <Link href="/items/create" className="flex items-center gap-1 hover:underline">
                                Create Auction
                            </Link>
                            <Link href="/auctions" className="flex items-center gap-1 hover:underline">
                                My Auctions
                            </Link>
                        </>
                    )}
                </div>
            </div>
            <div className="flex items-center gap-4">
                <div>{session?.user?.name}</div>
                <div>{session ? <SignOut /> : <SignIn />}</div>
            </div>
        </div>
    </div>
 }