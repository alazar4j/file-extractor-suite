import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg.asset.json";
import { Card } from "@/components/Section";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gospel for Generation Church — Addis Ababa" },
      {
        name: "description",
        content:
          "A Bible-teaching church family in Addis Ababa. Sunday worship at 9 and 11 AM, Wednesday Bible study, events, sermons and a member portal.",
      },
      { property: "og:title", content: "Gospel for Generation Church — Addis Ababa" },
      {
        property: "og:description",
        content: "Worship, learn and serve together. Sunday services, sermons, events and giving.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const { t } = useLang();

  return (
    <>
      <section
        className="relative flex min-h-[70vh] items-center bg-cover bg-center px-6 py-24"
        style={{
          backgroundImage: `linear-gradient(180deg, oklch(0.2 0.02 55 / 0.72) 0%, oklch(0.2 0.02 55 / 0.45) 40%, oklch(0.283 0.043 52 / 0.6) 75%, var(--parchment) 100%), url(${hero.url})`,
        }}
      >
        <div className="mx-auto w-full max-w-[1100px]">
          <h1 className="display max-w-3xl text-4xl leading-tight !text-parchment md:text-6xl">{t("hero.title")}</h1>
          <p className="mt-5 max-w-xl text-parchment-2">{t("hero.lede")}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/events"
              className="rounded-sm bg-amber px-6 py-3 font-medium text-accent-foreground transition-opacity hover:opacity-90"
            >
              {t("hero.cta1")}
            </Link>
            <Link
              to="/sermons"
              className="rounded-sm border border-parchment-2 px-6 py-3 font-medium text-parchment transition-colors hover:bg-parchment-2/15"
            >
              {t("hero.cta2")}
            </Link>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-[1100px] px-6 py-14">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl">{t("home.welcome.h")}</h2>
            <hr className="rule-gold my-4" />
            <p className="mb-6 text-muted-foreground">{t("home.welcome.p")}</p>
            <Card>
              <h3 className="text-xl">{t("home.sunday.h")}</h3>
              <p>{t("home.sunday.p")}</p>
            </Card>
            <Card>
              <h3 className="text-xl">{t("home.wed.h")}</h3>
              <p>{t("home.wed.p")}</p>
            </Card>
            <Card>
              <h3 className="text-xl">{t("home.new.h")}</h3>
              <p>{t("home.new.p")}</p>
            </Card>
          </div>
          <div className="md:pt-24">
            <Card accent="ruby">
              <h3 className="text-xl">{t("home.thissun.h")}</h3>
              <p>{t("home.thissun.p")}</p>
            </Card>
            <Card accent="amber">
              <h3 className="text-xl">{t("home.address.h")}</h3>
              <p>{t("home.address.p")}</p>
            </Card>
            <Card>
              <h3 className="text-xl">{t("home.contact.h")}</h3>
              <p>{t("home.contact.p")}</p>
            </Card>
          </div>
        </div>

        <blockquote className="mt-14 border-y border-border py-10 text-center">
          <p className="display text-2xl italic md:text-3xl">{t("home.verse.text")}</p>
          <cite className="mt-3 block text-sm not-italic tracking-wide text-muted-foreground">
            {t("home.verse.ref")}
          </cite>
        </blockquote>
      </main>
    </>
  );
}
