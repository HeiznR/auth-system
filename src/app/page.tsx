import { QueryClient } from "@tanstack/react-query";
import Posts from "@/components/Posts";
import { fetchPosts } from "@/api/fetchPosts";
import Auth from "@/components/auth/auth";
import { InputUI } from "@/components/ui/input";
import { CenterUI } from "@/components/ui/center";

export default async function Home() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  return (
    <>
      <CenterUI>
        <div style={{ padding: "20px" }}>
          <Auth />
        </div>
      </CenterUI>
    </>
  );
}
