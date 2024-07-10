import Image from "next/image";
import Link from "next/link";
import { SignIn } from "@/components/ui/sign-in";
import { SignOut } from '@/components/ui/sign-out';
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
                <div>
                    <Link href="/items/create" className="flex items-center gap-1 hover:underline">
                        Auction an Item
                    </Link>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <div>{session?.user?.name}</div>
                <div>{session ? <SignOut /> : <SignIn />}</div>
            </div>
        </div>
    </div>
 }