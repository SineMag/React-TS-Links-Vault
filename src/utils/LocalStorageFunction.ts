import type { LinkItem } from "../types";

const STORAGE_KEY = "links";

export const getLinks = (): LinkItem[] => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const saveLinks = (links: LinkItem[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(links));
};
