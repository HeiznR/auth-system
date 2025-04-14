import Image from "next/image";
import { CenterUI } from "../center";

export default function Header() {
  return (
    <div
      style={{
        display: "flex",
        borderBottom: "1px solid black",
        padding: "10px 15px",
      }}
    >
      <Image
        src="/next.svg"
        width={100}
        height={250}
        className="hidden md:block"
        alt="logo"
      />
      <p style={{ display: "flex", flexGrow: "1", justifyContent: "center" }}>
        {"Header"}
      </p>
    </div>
  );
}
