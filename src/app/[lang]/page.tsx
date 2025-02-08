import { getDictionary } from "@/utils/langs";
import { langType } from "./langs";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: langType }>;
}) {
  const { lang } = await params;
  const language = await getDictionary(lang);

  return (
    <>
      <center>{language.general.websiteTitle}</center>
    </>
  );
}
