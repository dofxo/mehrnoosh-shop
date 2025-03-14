import type { MegaMenuTriggerProps } from "./MegaMenuTrigger.d";
import { Button } from "@/components/ui/button";

export default function MegaMenuTrigger({ icon, text }: MegaMenuTriggerProps) {
  return (
    <Button variant="megaMenu" size="xl">
      <div className="h-6 w-6">{icon}</div>
      <span className="-mb-1">{text}</span>
    </Button>
  );
}
