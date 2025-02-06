import { QueryClient, dehydrate } from "@tanstack/react-query";
import Posts from "@/components/Posts";
import { fetchPosts } from "@/api/fetchPosts";

export default async function Home() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  return (
    <>
      <Posts />
    </>
  );
}
