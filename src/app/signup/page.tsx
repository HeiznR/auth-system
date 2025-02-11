import Auth from "@/components/auth/auth";
import { CenterUI } from "@/components/ui/center";

export default async function Home() {
  return (
    <>
      <CenterUI>
        <Auth type={"signup"} />
      </CenterUI>
    </>
  );
}
