import React from 'react';

export const About: React.FC = () => (
    <section id="about">
        <h2 className="section-title">Wer wir sind</h2>
        <div className="content-box">
            <p>The Crashclub ist weit mehr als nur ein Zusammenschluss von Clash of Clans-Spielern – wir sind eine strukturierte und ambitionierte Clan-Familie mit klaren Zielen und einer lebendigen Community. In einem Spiel, das von Strategie, Ausdauer und Teamgeist lebt, haben wir eine Plattform geschaffen, in der sich Spieler auf Augenhöhe begegnen, voneinander lernen und gemeinsam wachsen können.</p>
            <br />
            <p>Unsere Clans sind untereinander eng vernetzt und bieten ein organisiertes System, das sowohl Einsteiger als auch erfahrene Spieler unterstützt. Durch regelmäßige interne Events, Clan Wars, CWLs und eine aktive Discord-Community fördern wir Zusammenhalt und Motivation.</p>
        </div>
    </section>
);

export const Vision: React.FC = () => (
    <section id="vision">
        <h2 className="section-title">Unsere Vision</h2>
        <div className="content-box">
            <p>Unsere Vision ist es, eine starke und nachhaltige Clan-Familie aufzubauen, in der jeder Spieler – unabhängig vom Rathaus-Level – ein langfristiges Zuhause findet. Wir verstehen uns als eine geschlossene Einheit auf Augenhöhe, in der die individuelle Entwicklung und der gemeinsame Spaß in jedem unserer Clan-Zweige im Vordergrund stehen.</p>
            <br />
            <p>Anstatt einer starren Hierarchie fördern wir die Flexibilität innerhalb unserer gesamten Struktur: Während ein Teil unserer Clans den Fokus auf die spielerische Entwicklung und eine starke Gemeinschaft legt, bietet ‘The Crashclub’ den Raum für ambitioniertes Pokal-Pushing, langfristig wollen wir mit dem Clan wieder in die Top 30 Deutschlands aufsteigen.</p>
        </div>
    </section>
);

export const Rules: React.FC = () => (
    <section id="rules">
        <h2 className="section-title">Regelwerk der Clanfamilie</h2>

        <div className="grid">
            <div className="feature-item">
                <h3>Aktivität & Engagement</h3>
                <p>Regelmäßige Aktivität ist die Grundlage. Wer eine Pause braucht, gibt einfach kurz im Chat oder auf Discord Bescheid – Kommunikation ist alles!</p>
            </div>

            <div className="feature-item">
                <h3>Spendenverhalten</h3>
                <p>Truppenwünsche sind einzuhalten. Trollspenden führen zum Ausschluss. Im Gegenzug kannst du jederzeit auf schnellen Support zählen.</p>
            </div>

            <div className="feature-item">
                <h3>Fairness & Respekt</h3>
                <p>Unser Miteinander basiert auf gegenseitigem Respekt und Hilfsbereitschaft. Beleidigungen, toxisches Verhalten oder Diskriminierung werden nicht geduldet – weder im Spiel noch auf Discord.</p>
            </div>

            <div className="feature-item">
                <h3>Clanwars (CW & CWL)</h3>
                <p>Eingetragene Spieler greifen zweimal an – pünktlich und überlegt. Absprachen sind in der CWL ab Meister Pflicht. Absprachen im Voraus z.B. bei späterem Angriff oder Verhinderung sind bei der CWL erforderlich. Unüberlegte Angriffe, vergessene Kämpfe oder Chaos-Taktiken sind nicht akzeptabel – solang der CW nicht gewonnen ist.</p>
            </div>

            <div className="feature-item">
                <h3>Kommunikation & Discord</h3>
                <p>Discord ist für alle Championspieler <strong>verpflichtend</strong>. Hier findet die gesamte Organisation für die CWL und Events statt. Bleib informiert!</p>
            </div>

            <div className="feature-item">
                <h3>Clanwechsel</h3>
                <p>Ein Wechsel innerhalb der Familie ist jederzeit möglich (z.B. nach Push oder Pause). Wir helfen dir, den passenden Clan für deinen Fortschritt zu finden.</p>
            </div>
        </div>

        <div className="content-box" style={{ textAlign: 'center', marginTop: '40px', borderLeft: 'none', borderBottom: '5px solid #ff8c00' }}>
            <h3>Crashclub – Mehr als nur ein Clan</h3>
            <p>Ob du ambitioniert an die Spitze willst oder einfach Teil einer starken Community sein möchtest – bei uns bist du willkommen. Was zählt, ist dein Einsatz, dein Verhalten und dein Teamgeist. Denn am Ende geht’s nicht nur ums Gewinnen, sondern darum, miteinander Spaß zu haben, sich weiterzuentwickeln und sich gegenseitig zu unterstützen.</p>
            <br />
            <div className="slogan" style={{ marginBottom: 0 }}>Let’s clash. Let’s win. Let’s crash it!</div>
        </div>
    </section>
);

export const Join: React.FC = () => (
    <section id="join">
        <h2 className="section-title">Hier ist dein Platz, wenn du…</h2>
        <ul className="check-list">
            <li>eine aktive und unterstützende Gemeinschaft suchst.</li>
            <li>dich weiterentwickeln möchtest – strategisch, taktisch und als Spieler.</li>
            <li>regelmäßig an Clan Wars und CWL teilnehmen willst.</li>
            <li>bereit bist, dich einzubringen und auch anderen zu helfen.</li>
        </ul>
    </section>
);

export const Benefits: React.FC = () => (
    <section id="benefits">
        <h2 className="section-title">Wir bieten dir</h2>
        <div className="grid">
            <div className="feature-item">
                <h3>Strukturierte Clan-Aufteilung</h3>
                <p>Mit mehreren Clans für unterschiedliche Spielstufen garantieren wir, dass du genau dort spielst, wo dein Fortschritt hinpasst.</p>
            </div>
            <div className="feature-item">
                <h3>Permanente Clan-Kriege</h3>
                <p>Unsere Clans führen regelmäßig Kriege durch – mit klaren Ansagen, Planung und Feedback.</p>
            </div>
            <div className="feature-item">
                <h3>Spielerorientiertes Coaching</h3>
                <p>Egal ob Basebuilding oder Angriffstaktiken – bei uns bekommst du Support von erfahrenen Mitgliedern.</p>
            </div>
            <div className="feature-item">
                <h3>Schnelle Spenden</h3>
                <p>Dank unserer aktiven Mitglieder erhältst du im Minutentakt deine Wunschtruppen.</p>
            </div>
            <div className="feature-item">
                <h3>Discord-Community</h3>
                <p>Unser Discord ist das Herzstück. Hier laufen Clanmanagement, Taktikdiskussionen und Bewerbungen zusammen.</p>
            </div>
        </div>
    </section>
);