import { getDictionary, hasLocale } from "./dictionaries";
import { notFound } from "next/navigation";
import type { Locale } from "@/i18n/config";

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "es" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!hasLocale(lang)) return {};

  const dict = await getDictionary(lang);

  return {
    title: dict.meta.title,
    description: dict.meta.description,
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  return <>{children}</>;
}
