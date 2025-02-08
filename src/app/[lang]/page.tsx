import { getLanguage } from "@/utils/langs";
import { langType } from "./langs";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: langType }>;
}) {
  const { lang } = await params;
  const language = await getLanguage(lang);

  return (
    <>
      <center>{language.general.websiteTitle}</center>
    </>
  );
}
