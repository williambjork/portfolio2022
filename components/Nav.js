import Link from "next/link";

export default function Nav() {
  return (
    <nav>
        <ul>
            <Link href="/"><li>Home</li></Link>
            <Link href="/contact"><li>Contact</li></Link>
        </ul>
    </nav>
  )
}
