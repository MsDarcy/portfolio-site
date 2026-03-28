import { selectedWorkCards } from "@/lib/selected-work";

/** Header Work menu — labels match case study cards. */
export const workNavItems = selectedWorkCards.map(({ href, title }) => ({
  href,
  label: title,
}));
