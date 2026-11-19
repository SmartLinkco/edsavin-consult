import Link from "next/link";
import { COMPANY, cta, notFound } from "@/content/site";

export default function NotFound() {
  return (
    <div className="wrap not-found">
      <p className="kicker">{COMPANY}</p>
      <h1>{notFound.title}</h1>
      <p>{notFound.body}</p>
      <p>
        <Link className="btn btn-red" href="/">
          {cta.home}
        </Link>
      </p>
    </div>
  );
}
