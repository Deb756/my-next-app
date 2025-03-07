import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <Link href="/users">Users Page</Link> <br />
      <Link href="/users/new">New Users Page</Link>
      <ProductCard />
    </>
  );
}
