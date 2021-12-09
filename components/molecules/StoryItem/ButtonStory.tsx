import Link from "next/link";

export default function ButtonStory() {
    return (
        <Link href="/">
        <a
            className="btn btn-read text-lg rounded-pill"
            role="button"
          >
            Read Story
          </a>
        
        </Link>
    )
}
