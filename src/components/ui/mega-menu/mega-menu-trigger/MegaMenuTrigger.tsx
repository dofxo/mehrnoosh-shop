import type { MegaMenuTriggerProps } from "./MegaMenuTrigger.d";
import { Button } from "@/components/ui/button";

export default function MegaMenuTrigger({ icon, text }: MegaMenuTriggerProps) {
  return (
    <Button variant="megaMenu" size="xl">
      <div>{icon}</div>
      <span> {text}</span>
    </Button>
  );
}
