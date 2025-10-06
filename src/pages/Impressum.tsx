const Impressum = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="font-serif text-5xl font-bold mb-8">Impressum</h1>

        <div className="prose prose-slate max-w-none space-y-8">
          <section>
            <h2 className="font-serif text-2xl font-semibold mb-4">Angaben gemäß § 5 TMG</h2>
            <p>
              Friseursalon Birgit Hartbauer<br />
              Beauty, Kosmetik und Körperpflege<br />
              Wolfskeelstraße 23<br />
              Würzburg - Rottenbauer
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold mb-4">Kontakt</h2>
            <p>
              Telefon: 0931/6606888<br />
              E-Mail: info@friseur-hartbauer.de
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold mb-4">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
            <p>
              Berufsbezeichnung: Friseurmeisterin<br />
              Zuständige Kammer: Handwerkskammer für Unterfranken<br />
              Verliehen in: Deutschland
            </p>
            <p className="mt-4">
              Es gelten folgende berufsrechtliche Regelungen:<br />
              Handwerksordnung (HwO)
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold mb-4">EU-Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
              <br />
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold mb-4">
              Verbraucherstreitbeilegung / Universalschlichtungsstelle
            </h2>
            <p>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold mb-4">Haftung für Inhalte</h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen
              Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir
              als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen oder nach Umständen zu forschen, die auf eine
              rechtswidrige Tätigkeit hinweisen.
            </p>
            <p className="mt-4">
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
              allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist
              jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.
              Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte
              umgehend entfernen.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold mb-4">Haftung für Links</h2>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir
              keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine
              Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige
              Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum
              Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
              Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold mb-4">Urheberrecht</h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
              unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung,
              Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes
              bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen
              Gebrauch gestattet.
            </p>
          </section>

          <p className="text-sm text-muted-foreground mt-12">
            Quelle:{" "}
            <a href="https://www.e-recht24.de" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              eRecht24
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Impressum;
