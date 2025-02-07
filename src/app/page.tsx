import { QueryClient } from "@tanstack/react-query";
import { fetchPosts } from "@/api/fetchPosts";
import Auth from "@/components/auth/auth";
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
        <Auth />
      </CenterUI>
    </>
  );
}
