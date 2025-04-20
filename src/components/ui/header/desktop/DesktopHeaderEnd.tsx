import ChangeLanguage from "@/components/ChangeLanguage";
import { useAppSelector } from "@/lib/hooks";
import { Heart } from "lucide-react";
import Link from "next/link";

export default function DesktopHeaderEnd() {
  const { currentLanguage } = useAppSelector((state) => state.language);

  return (
    <div className="w-[25%]">
      <div className="flex flex-row items-center justify-end gap-1">
        <Link
          href={`/${currentLanguage}/wishlist`}
          className="cursor-pointer transition hover:text-primary"
        >
          <Heart />
        </Link>

        <ChangeLanguage />
      </div>
    </div>
  );
}
