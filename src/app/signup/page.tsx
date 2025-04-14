import Auth from "@/app/ui/auth/auth";
import { CenterUI } from "@/app/ui/center";

export default async function Home() {
  return (
    <>
      <CenterUI>
        <Auth type={"signup"} />
      </CenterUI>
    </>
  );
}
