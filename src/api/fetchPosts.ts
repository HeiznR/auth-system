interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const fetchBreeds = async (): Promise<any> => {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  const res = await fetch(`https://dogapi.dog/api/v2/breeds`);
  if (!res.ok) {
    throw new Error("error");
  }
  return res.json();
};

export const fetchFacts = async (): Promise<any> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const res = await fetch(`https://dogapi.dog/api/v2/facts?limit=2`);
  if (!res.ok) {
    throw new Error("error");
  }
  return res.json();
};
