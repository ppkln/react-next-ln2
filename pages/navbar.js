import Link from "next/link";

export default function Navbar(){
    return(
        <nav>
            <div className="text-center">
                <div className="mt-3 item-center flex">
                    <Link href="/" className="p-2"> | Home </Link>
                    <Link href="/product" className="p-2"> | Product </Link>
                    <Link href="/dashboard" className="p-2"> | Dashboard </Link>
                    <Link href="/about" className="p-2"> | About</Link>
                </div>
            </div>
        </nav>
    )
}