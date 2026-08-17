import { independentAIPracticeCards } from "@/lib/independent-ai-practice";
import { selectedWorkCards } from "@/lib/selected-work";

/** Header Work menu — labels match case study cards. */
export const workNavItems = [...selectedWorkCards, ...independentAIPracticeCards].map(
  ({ href, title }) => ({
    href,
    label: title,
  }),
);
