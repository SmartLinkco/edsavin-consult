import Link from "next/link";
import { COMPANY } from "@/content/site";

export default function NotFound() {
  return (
    <div className="wrap not-found">
      <p className="kicker">{COMPANY}</p>
      <h1>Page not found</h1>
      <p>That address is not one of the ten pages on this site.</p>
      <p>
        <Link className="btn btn-red" href="/">
          Back to the home page
        </Link>
      </p>
    </div>
  );
}
