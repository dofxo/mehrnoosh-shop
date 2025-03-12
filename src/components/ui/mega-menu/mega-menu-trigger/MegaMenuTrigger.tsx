import type { MegaMenuTriggerProps } from "./MegaMenuTrigger.d";
import { Button } from "@/components/ui/button";

export default function MegaMenuTrigger({ icon, text }: MegaMenuTriggerProps) {
  return (
    <Button
      variant="secondary"
      className="text-[16px] hover:bg-primary hover:text-white"
      size="lg"
    >
      {icon}
      {text}
    </Button>
  );
}
