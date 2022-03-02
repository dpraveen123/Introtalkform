import Link from 'next/link'

export default function FirstPost() {
    return (
        <div>
            <h1>Sample Page</h1>
            <Link href="/"><a>return to home page</a></Link>
            <Link href="/section1/section1"><a>navigate to section1</a></Link>
        </div>
    )
}