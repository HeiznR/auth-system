"use client";

import { fetchPosts } from "@/api/fetchPosts";
import { useQuery } from "@tanstack/react-query";

export default function Posts() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  if (isLoading) return <div>Загрузка постов...</div>;
  if (error) return <div>Ошибка: {error.message}</div>;

  return (
    <div>
      <h1>Посты</h1>
      <ul>
        {Array.isArray(data)
          ? data.map((post) => <li key={post.id}>{post.title}</li>)
          : typeof data === "object" && <li key={data.id}>{data.title}</li>}
      </ul>
    </div>
  );
}
