import Link from "next/link";

export default function Navbar() {
    return (
        <>
            <div>
                <Link className={'border-2 px-2'} href={'/'}>Home</Link>
                <Link className={'border-2 px-2'} href={'/test-registry'}>Test registry</Link>
            </div>
        </>
    )
}
