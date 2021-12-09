import Link from "next/link";

export default function Support() {
  return (
    <div className="col-md-4 col-6 mb-lg-0 mb-25">
      <p className="text-lg fw-semibold color-palette-1 mb-12">Support</p>
      <ul className="list-unstyled">
        <li className="mb-6">
          <Link href="/">
            <a href="" className="text-lg color-palette-1 text-decoration-none">
              Refund Policy
            </a>
          </Link>
        </li>
        <li className="mb-6">
          <Link href="/">
            <a href="" className="text-lg color-palette-1 text-decoration-none">
              Unlock Rewards
            </a>
          </Link>
        </li>
        <li className="mb-6">
          <Link href="/">
            <a href="" className="text-lg color-palette-1 text-decoration-none">
              Live Chatting
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
