import { getLanguage } from "@/utils/langs";
import { langType } from "./langs";
import DesktopHeader from "@/components/ui/header/desktop/DesktopHeader";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: langType }>;
}) {
  const { lang } = await params;
  const language = await getLanguage(lang);

  return (
    <>
      <DesktopHeader language={language} />
    </>
  );
}
