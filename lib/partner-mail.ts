// Bestaetigung an den Partner nach dem Formular auf /pflegekraefte-fuer-vermittler.
// Wortlaut und Gestaltung kommen aus der Vorlage 20-partner-zugangslink im
// Design-Workspace (CAapp/mail-templates) — dort liegt die pflegbare Fassung,
// hier die verschickte. Aendert sich die Vorlage, wandert die Aenderung hierher.
//
// 24.09.2026: Kein Magic Link, solange die Online-Anmeldung nicht laeuft. Die Mail
// verspricht deshalb keinen Zugang, sondern Magdalenas Rueckruf.

export type PartnerDaten = {
  anrede: string
  nachname: string
  firma: string
  email: string
}

export const BETREFF = 'Ihre Anfrage ist bei uns'

/** Hausregel: Herr/Frau + Nachname, sonst nur „Guten Tag,". Nie aus dem Vornamen raten. */
export function anredeZeile(anrede: string, nachname: string): string {
  const a = (anrede || '').trim()
  const n = (nachname || '').trim().replace(/\s+/g, ' ')
  return (a === 'Herr' || a === 'Frau') && n ? `Guten Tag ${a} ${n},` : 'Guten Tag,'
}

function htmlEscape(wert: string): string {
  return wert
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function fuelle(vorlage: string, d: PartnerDaten, escape: (w: string) => string): string {
  return vorlage
    .replace(/Guten Tag \{\{ANREDE\}\} \{\{NACHNAME\}\},/g,
             escape(anredeZeile(d.anrede, d.nachname)))
    .replace(/\{\{FIRMA\}\}/g, escape(d.firma))
    .replace(/\{\{EMAIL\}\}/g, escape(d.email))
}

const HTML_VORLAGE = `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="color-scheme" content="light">
  <meta name="supported-color-schemes" content="light">
  <title>Ihre Anfrage ist bei uns</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    body { margin:0; padding:0; background:#EFECE7; -webkit-text-size-adjust:100%; }
    table { border-collapse:collapse; }
    img { border:0; outline:none; text-decoration:none; }
    a { text-decoration:none; }
    @media only screen and (max-width:620px) {
      .container { width:100% !important; border-radius:0 !important; }
      .px { padding-left:20px !important; padding-right:20px !important; }
      .h1 { font-size:30px !important; }
      .cta a { display:block !important; text-align:center !important; }
      .cta { width:100% !important; }
    }
  </style>
</head>
<body style="margin:0;padding:0;background:#EFECE7;">
  <div style="display:none;max-height:0;overflow:hidden;mso-hide:all;font-size:1px;line-height:1px;color:#EFECE7;">Magdalena Gorska richtet Ihren Partnerzugang ein und meldet sich bei Ihnen.&nbsp;&#847;&nbsp;&#847;&nbsp;&#847;&nbsp;&#847;&nbsp;&#847;&nbsp;&#847;&nbsp;&#847;&nbsp;&#847;</div>

  <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background:#EFECE7;">
    <tr><td align="center" style="padding:24px 0;">

      <table class="container" width="600" cellpadding="0" cellspacing="0" role="presentation" style="width:600px;max-width:600px;background:#FFFFFF;border-radius:18px;overflow:hidden;font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">

        <!-- Kopf wie in allen Primundus-Mails -->
        <tr>
          <td class="px" style="padding:22px 32px 20px;background:#FFFFFF;border-bottom:1px solid #EFECE7;">
            <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
              <tr>
                <td style="font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;vertical-align:middle;">
                  <img src="https://kostenrechner.primundus.de/images/Primundus-Logo_V6.png" alt="Primundus" width="150" style="display:block;width:150px;max-width:150px;height:auto;">
                </td>
                <td style="font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;vertical-align:middle;text-align:right;">
                  <table cellpadding="0" cellspacing="0" role="presentation" style="margin-left:auto;">
                    <tr>
                      <td style="font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;vertical-align:middle;padding-right:8px;border-right:1px solid #EFECE7;">
                        <img src="https://kostenrechner.primundus.de/images/primundus_testsieger-2021.webp" alt="Testsieger DIE WELT" width="36" style="display:block;width:36px;height:auto;">
                      </td>
                      <td style="font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;text-align:left;padding-left:8px;">
                        <p style="font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;margin:0 0 1px;font-size:10px;font-weight:700;color:#3D2B1F;white-space:nowrap;">Testsieger</p>
                        <p style="font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;margin:0 0 1px;font-size:10px;font-weight:600;color:#B5A184;white-space:nowrap;">DIE WELT</p>
                        <p style="font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;margin:0;font-size:9px;color:#AAAAAA;white-space:nowrap;">6&times; in Folge</p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Hero: Personal zuerst (Martin 11.09.), ein Knopf, Firmen-Echo, Bild mit passenden Pflegekraeften -->
        <tr>
          <td class="px" style="padding:42px 32px 0;background:#F8F7F5;">
            <p style="font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;margin:0 0 14px;font-size:11.5px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;color:#8B7355;">Personal für die 24-Stunden-Betreuung</p>
            <h1 class="h1" style="margin:0;font-size:38px;line-height:1.05;font-weight:800;letter-spacing:-0.03em;color:#1C1C1C;">Ihr Partnerzugang wird eingerichtet</h1>
            <p style="font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;margin:18px 0 0;font-size:16.5px;line-height:1.6;color:#1C1C1C;">Guten Tag {{ANREDE}} {{NACHNAME}},</p>
            <p style="font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;margin:6px 0 0;font-size:16.5px;line-height:1.6;color:#5B5B5B;">vielen Dank, dass Sie Primundus als Partner nutzen möchten. Ich richte Ihren Zugang ein und melde mich innerhalb eines Werktags bei Ihnen. Vorher brauchen Sie nichts weiter zu tun.</p>
            <p style="font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;margin:14px 0 0;font-size:13px;line-height:1.5;color:#8B8B8B;">Anfrage für <strong style="font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#1C1C1C;font-weight:600;">{{FIRMA}}</strong> &middot; <span style="font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;white-space:nowrap;">{{EMAIL}}</span></p>
            <img src="https://primundus.de/pflegekraefte-fuer-vermittler/img/zugang.jpg" alt="Passende Pflegekräfte im Partnerbereich" width="536" style="display:block;width:100%;max-width:536px;height:auto;margin-top:34px;">
          </td>
        </tr>

            </table>
          </td>
        </tr>

        <!-- Die ersten zwei Schritte im Partnerbereich (wie auf der Willkommensseite) -->
        <tr>
          <td class="px" style="padding:36px 32px 0;">
            <p style="font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;margin:0 0 16px;font-size:13px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#8B8B8B;">Sobald Ihr Zugang steht</p>
            <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
              <tr>
                <td width="30" style="width:30px;vertical-align:top;">
                  <table cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:separate;"><tr><td width="28" height="28" align="center" style="width:28px;height:28px;background:#E76F63;border-radius:50%;color:#FFFFFF;font-size:13px;font-weight:700;line-height:28px;mso-line-height-rule:exactly;">1</td></tr></table>
                </td>
                <td style="font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;vertical-align:top;padding:2px 0 18px 10px;">
                  <p style="font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;margin:0 0 4px;font-size:17px;font-weight:600;color:#1C1C1C;line-height:1.4;">Ersten Kunden anlegen</p>
                  <p style="font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;margin:0;font-size:15.5px;line-height:1.55;color:#5B5B5B;">Laden Sie Fragebogen, PDF oder Text hoch. Wir übernehmen die Angaben automatisch.</p>
                </td>
              </tr>
              <tr>
                <td width="30" style="width:30px;vertical-align:top;border-top:1px solid #EFECE7;padding-top:18px;">
                  <table cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:separate;"><tr><td width="28" height="28" align="center" style="width:28px;height:28px;background:#F4F4F6;border-radius:50%;color:#8B8B8B;font-size:13px;font-weight:700;line-height:28px;mso-line-height-rule:exactly;">2</td></tr></table>
                </td>
                <td style="font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;vertical-align:top;padding:20px 0 0 10px;border-top:1px solid #EFECE7;">
                  <p style="font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;margin:0 0 4px;font-size:17px;font-weight:600;color:#1C1C1C;line-height:1.4;">Bewerbungen erhalten</p>
                  <p style="font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;margin:0;font-size:15.5px;line-height:1.55;color:#5B5B5B;">Wir informieren passende Pflegekräfte. Die Bewerbungen sehen Sie im Partnerbereich, auf Wunsch auch Ihr Kunde.</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Ansprechpartnerin Magdalena Gorska -->
        <tr>
          <td class="px" style="padding:40px 32px 0;">
            <p style="font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;margin:0 0 6px;font-size:19px;font-weight:700;letter-spacing:-0.01em;color:#1C1C1C;">Viel Erfolg beim Vermitteln!</p>
            <p style="font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;margin:0 0 18px;font-size:15.5px;line-height:1.65;color:#5B5B5B;">Bei Fragen zum Start helfe ich Ihnen gern, am Telefon oder per WhatsApp.</p>
            <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background:#F8F7F5;border:1px solid #E5E3DF;border-radius:16px;border-collapse:separate;">
              <tr>
                <td style="font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;padding:16px;">
                  <table cellpadding="0" cellspacing="0" role="presentation">
                    <tr>
                      <td style="font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;vertical-align:middle;padding-right:12px;">
                        <img src="https://primundus.de/pflegekraefte-fuer-vermittler/img/magdalena.jpg" alt="Magdalena Gorska" width="48" height="48" style="display:block;width:48px;height:48px;border-radius:50%;">
                      </td>
                      <td style="font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;vertical-align:middle;">
                        <p style="font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;margin:0;font-size:15.5px;font-weight:700;color:#1C1C1C;line-height:1.3;">Magdalena Gorska</p>
                        <p style="font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;margin:0;font-size:13px;font-weight:600;color:#8B7355;line-height:1.4;">Ansprechpartnerin für Vermittler</p>
                      </td>
                    </tr>
                  </table>
                  <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="margin-top:14px;">
                    <tr>
                      <td width="50%" style="width:50%;padding-right:5px;">
                        <table width="100%" cellpadding="0" cellspacing="0" role="presentation"><tr>
                          <td bgcolor="#E76F63" align="center" style="background:#E76F63;border-radius:12px;">
                            <a href="tel:+4989200000831" style="display:block;padding:11px 8px;font-size:14px;font-weight:700;color:#FFFFFF;text-align:center;white-space:nowrap;">Anrufen</a>
                          </td>
                        </tr></table>
                      </td>
                      <td width="50%" style="width:50%;padding-left:5px;">
                        <table width="100%" cellpadding="0" cellspacing="0" role="presentation"><tr>
                          <td bgcolor="#25D366" align="center" style="background:#25D366;border-radius:12px;">
                            <a href="https://wa.me/4989200000831" style="display:block;padding:11px 8px;font-size:14px;font-weight:700;color:#FFFFFF;text-align:center;white-space:nowrap;">WhatsApp</a>
                          </td>
                        </tr></table>
                      </td>
                    </tr>
                  </table>
                  <p style="font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;margin:10px 0 0;font-size:12.5px;color:#8B8B8B;text-align:center;">089 200 000 831</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Ersatzlink + Sicherheitshinweis -->
        <tr>
          <td class="px" style="padding:30px 32px 34px;">
            <p style="font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;margin:0;font-size:12.5px;line-height:1.6;color:#8B8B8B;">Falls Sie keinen Zugang angefordert haben, ignorieren Sie diese E-Mail.</p>
          </td>
        </tr>

        <!-- Fuss -->
        <tr>
          <td class="px" style="padding:26px 32px 30px;background:#F8F7F5;border-top:1px solid #EFECE7;text-align:center;">
            <p style="font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;margin:0 0 6px;font-size:14px;font-weight:700;color:#1C1C1C;">PRIMUNDUS Sp. z o.o.</p>
            <p style="font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;margin:0;font-size:12.5px;line-height:1.8;color:#8B8B8B;">Personal für die <span style="font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;white-space:nowrap;">24-Stunden-Betreuung</span><br>Poznańska 21/48, 00-685 Warschau, Polen<br>KRS 0001259402 &middot; NIP 7011326714</p>
            <p style="font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;margin:14px 0 0;font-size:12px;line-height:1.6;color:#A3A09B;">Sie erhalten diese E-Mail, weil Sie auf primundus.de einen Partnerzugang angefordert haben.</p>
          </td>
        </tr>

      </table>

    </td></tr>
  </table>
</body>
</html>
`

const TEXT_VORLAGE = `PERSONAL FÜR DIE 24-STUNDEN-BETREUUNG
Ihr Partnerzugang wird eingerichtet

Guten Tag {{ANREDE}} {{NACHNAME}},

vielen Dank, dass Sie Primundus als Partner nutzen möchten. Ich richte Ihren Zugang ein und melde mich innerhalb eines Werktags bei Ihnen. Vorher brauchen Sie nichts weiter zu tun.

Anfrage für {{FIRMA}} · {{EMAIL}}

SOBALD IHR ZUGANG STEHT
1. Ersten Kunden anlegen
   Laden Sie Fragebogen, PDF oder Text hoch. Wir übernehmen die Angaben automatisch.
2. Bewerbungen erhalten
   Wir informieren passende Pflegekräfte. Die Bewerbungen sehen Sie im Partnerbereich, auf Wunsch auch Ihr Kunde.

Viel Erfolg beim Vermitteln!
Bei Fragen zum Start helfe ich Ihnen gern, am Telefon oder per WhatsApp.

Magdalena Gorska
Ansprechpartnerin für Vermittler
Telefon: 089 200 000 831 · WhatsApp: https://wa.me/4989200000831

Falls Sie keinen Zugang angefordert haben, ignorieren Sie diese E-Mail.`

export function partnerBestaetigung(d: PartnerDaten): { betreff: string; html: string; text: string } {
  return {
    betreff: BETREFF,
    html: fuelle(HTML_VORLAGE, d, htmlEscape),
    text: fuelle(TEXT_VORLAGE, d, (w) => w),
  }
}
