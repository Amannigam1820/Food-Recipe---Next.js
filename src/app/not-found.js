import Link from "next/link";

export default function NotFound(){
    return(
        <div>
            <h1>This page can not found</h1>
            <Link href={"/"}>Home</Link>
        </div>
    )
}