import { selectedWorkCards } from "@/lib/selected-work";
import { WorkCards } from "@/components/WorkCards";

export function SelectedWorkCards() {
  return <WorkCards items={selectedWorkCards} />;
}
