import Link from "next/link";


export default function Nav() {
  return (
    <>
    <nav className="ml-6 text-2xl font-dmsans z-20 relative">
        <ul className="flex gap-12 cursor-pointer">
            <Link href="/"><li>Home</li></Link>
            <Link href="/work"><li>Work</li></Link>
            <Link href="/contact"><li>Contact</li></Link>               
        </ul>
    </nav>
    
    </>
  )
}
