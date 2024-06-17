import { Article } from "./types";

export const getAllArticles = async (): Promise<Article[]> => {
  const res = await fetch("http://localhost:3001/posts", { cache: "no-store" }); //SSR

  if (!res.ok) {
    throw new Error("意図的にエラー発生");
  }

  await new Promise((resolve) => setTimeout(resolve, 500));

  const articles = await res.json();
  return articles;
};
