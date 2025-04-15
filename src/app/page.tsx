import { CenterUI } from "@/app/ui/center";
import { lusitana } from "@/app/ui/fonts";

export default async function Home() {
  return (
    <>
      <p className={`${lusitana.className}`}>testFont</p>
      <div>{"main page"}</div>
    </>
  );
}
