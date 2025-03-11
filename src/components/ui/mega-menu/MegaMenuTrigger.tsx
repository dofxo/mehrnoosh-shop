import type { MegaMenuTriggerProps } from "./MegaMenuTrigger.d";
import { Button } from "@/components/ui/button";

export default function MegaMenuTrigger({ icon, text }: MegaMenuTriggerProps) {
  return (
    <Button
      variant="secondary"
      className="hover:bg-primary hover:text-white"
      size="lg"
    >
      {text}
      {icon}
    </Button>
  );
}
