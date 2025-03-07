import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <a href="/users">Users Page</a> <br />
      <a href="/users/new">New Users Page</a>
    </>
  );
}
