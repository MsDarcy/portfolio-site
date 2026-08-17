import { independentAIPracticeCards } from "@/lib/independent-ai-practice";
import { selectedWorkCards } from "@/lib/selected-work";

/** Header Work menu — labels match case study cards. */
export const workNavItems = [...selectedWorkCards, ...independentAIPracticeCards].map(
  ({ href, title }) => ({
    href,
    label: title,
  }),
);

/** Header About menu — anchor links to /about sections. */
export const aboutNavItems = [
  { href: "/about#my-story", label: "My Story" },
  { href: "/about#ways-of-working", label: "Ways of Working" },
  { href: "/about#career-highlights", label: "Career Highlights" },
] as const;
