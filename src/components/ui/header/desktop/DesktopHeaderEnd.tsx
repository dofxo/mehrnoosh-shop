import ChangeLanguage from "@/components/ChangeLanguage";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

export default function DesktopHeaderEnd() {
  return (
    <div className="w-[25%]">
      <div className="flex flex-row items-center justify-end gap-1">
        <div className="cursor-pointer transition hover:text-primary">
          <FavoriteBorderOutlinedIcon />
        </div>

        <ChangeLanguage />
      </div>
    </div>
  );
}
