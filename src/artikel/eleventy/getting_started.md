---
tags: post
title: "Mit eleventy durchstarten"
subtitle: "Das eleventy Tutorial – Teil 1"
heroTemplate: opossum
image: opossumhero.jpg
---

# Mit eleventy durchstarten
[Eleventy](https://www.11ty.dev) oder _11ty_ ([oder doch nicht](https://twitter.com/chriscoyier/status/1329821876244328448)) ist ein _static site generator_ (SSG), basierend auf Javascript. Von seinen zahlreichen Mitbewerbern unterscheidet sich eleventy zunächst mal durch … Sein knuffiges Maskottchen, das Opossum. Diese Beutelratten sind ja nunmal unglaublich niedlich. Nebenbei bringt eleventy aber auch eine ganze Wagenladung an Templatesprachen mit: HTML, Markdown, Liquid, Nunjucks, Handlebars, Mustache, EJS, Haml, Pug und JavaScript Template Literals. Es ist superleicht aufzusetzen und doch bis ins Letzte konfigurierbar und steht fest auf den Schultern durch API und Plug-ins angedockter gut abgelagerter Tools und Technologien, wie bspw. [markdown-it](https://github.com/markdown-it/markdown-it) oder [Prism](https://prismjs.com). Noch dazu ist alles, was Webentwickler:innen freut schon eingebaut: lokaler Server, _watch_-Prozess und Events, sodass man auf Workflow-Monster wie bspw. _webpack_ getrost verzichten kann (aber auch nicht muss). Ich habe mir diese Website mit eleventy und meinem linken Fuß handgestrickt und nebenbei dieses Tutorial mitgeschrieben … Los geht's.

[[toc]]

## Intro: Kurzer Überblick
Dieses Tutorial ist hoffentlich einigermaßen für alle geeignet, die schon einmal Dinge mit _npm_ auf der Shell gemacht haben. Es behandelt aber nicht Randprobleme, wie das Installieren aktueller Versionen von _npm_ oder ähnlichem. Einen Einstieg sehr weit am Anfang bietet dieses [Tutorial von Tatiana Mac](https://tatianamac.com/posts/beginner-eleventy-tutorial-parti/), wer also noch kein _node_ oder _npm_ auf dem Rechner hat, möge dort anfangen. Einen viel kürzeren Einstieg bietet sicherlich der [Getting-Startet-Guide](https://www.11ty.dev/docs/getting-started/) von 11ty.dev. Ich werde versuchen auf alle Dinge einzugehen, die mir vom Start bis zur fertigen Seite über den Weg gelaufen sind. Also das Tutorial schreiben, über dessen Abwesenheit ich bisher immer gemeckert habe.

### Was ist dieses eleventy und was macht es
Um es kurz zu sagen: eleventy nimmt sich alle für es lesbare Templates in einem Verzeichnis, transformiert sie in HTML-Dateien und schreibt Letztere in ein Ausgabeverzeichnis. Zusätzlich können Aufgaben wie bspw. das Kopieren von CSS oder Javascript in das Ausgabeverzeichnis konfiguriert werden. Das Templatesystem kann mit vielen Sprachen (s. o.) umgehen, und beliebig modular unterteilt werden. Es können durchaus auch mehrere Templatesprachen nebeneinander benutzt werden. Metadaten und Prozessanweisungen zu Dateien können in sogenannte _front matter_ Abschnitten in den Dateien gespeichert werden, sie können aber auch in externen Dateien gespeichert oder sogar programmatisch erstellt werden. Die gesammelten Metadaten können gefiltert und/oder angereichert werden und an beliebigen Stellen der Website wieder ausgegeben werden. Durch offizielle Plug-ins ist eleventy um Fähigkeiten wie bspw. die automatische Ausgabe von RSS-Dateien erweiterbar. Letztlich haben Anwender:innen aber jederzeit Zugriff auf die Daten und können diese mit Javascript manipulieren.

Man kann mit eleventy also viele Arten von Seiten bauen, von der Landingpage bis zum Weblog. Das Kompilat muss dann nur noch zur Auslieferung gebracht werden …

### Was gefällt mir an eleventy
Neben dem Opossum? Nun, eleventy ist kein Framework und obwohl es seine ganz eigene Philosophie mitbringt. Trotzdem bietet es alle Freiheiten, mit den angebotenen Grundstrukturen alles was man möchte anzustellen. Ich habe beispielsweise bei meinem ersten Projekt mit eleventy noch alles _von Hand_ drumherum gebaut, mit DART-Sass, Babel, _webpack_, _npm scripts_, das ganze Geraffel, das ich auch für große Webseiten einsetzen würde. Erst später habe ich gemerkt, dass ich das auch alles _in_ eleventy abfeiern kann, was für kleinere Projekte in 99 % der Fälle völlig ausreicht. Aber wichtig: beide Herangehensweisen funktionieren bestens. Und _last but absolute not least:_ Es ist Javascript. Hatte ich das Opossum schon erwähnt?

### Wie ist das Tutorial aufgebaut?
Ich habe dieses Tutorial zweistufig aufgebaut. Den Code und seine Entstehung kann man komplett in seinem [Repository auf Github](https://github.com/codecandies/eleventy-tutorial/) nachverfolgen. Jeder Abschnitt hat einen eigenen Branch bekommen und jeder Branch wurde mittels eines _pull requests_ in den Main-Branch eingewebt, sodass man sich also [an den geschlossenen PRs](https://github.com/codecandies/eleventy-tutorial/pulls?q=is%3Apr+is%3Aclosed) entlang hangeln kann. Gleichzeitig findet sich hier auf der Seite die passende Prosa zu jedem Entwicklungsabschnitt: Was ist das Ziel? Wie bin ich vorgegangen? Was sind die Quellen? Was waren die Probleme? So in der Art.

Meine Hoffnung ist, das am Ende ein Tutorial entsteht, das Menschen befähigt eleventy in ihren Werkzeugkasten aufzunehmen. Und falls es nur alle drei Monate mal gebraucht wird, kann dann hier wieder nachgeschlagen werden, wie das noch ging, mit der Konfiguration der Collections …

### Gibt es noch andere Quellen?
Aber sicher, jede Menge. Neben der guten [eleventy-Dokumentation](https://www.11ty.dev/docs/) gibt es eine lange Liste von [Starter-Projekten](https://www.11ty.dev/docs/starter/), in denen man sich verlieren kann. Es gibt natürlich jede Menge [anderer Anleitungen](https://www.11ty.dev/docs/tutorials/). Mit [Let's Learn Eleventy](https://www.learnwithjason.dev/lets-learn-eleventy) gibt es auch mindestens ein einschlägiges Videotutorial.

## Get the party started
Ich weiß ja nicht, wie du deine Projekte anfängst, ich starte meist auf Github und lege mir dort ein Repository an, mit einer (fast) leeren ReadMe-Datei und den passenden Lizenz-Dateien schon dabei. Das klone ich dann auf meinen Rechner. Ist eine Angewohnheit, können wir überspringen, geht natürlich auch genau umgekehrt. Vorausgesetzt auf dem Rechner sind ein funktionierendes und aktuelles _node.js_ und _npm_ installiert, können wir dann gleich mit unserem Eleventy-Projekt beginnen, indem wir uns zunächst eine kleine `package.json` anlegen. Bevor wir nun mit `npm i` das Internet herunterladen, können wir uns eine `.gitignore` anlegen, mit der der Ordner `node_modules` ignoriert wird. Dann installieren wir eleventy.

```bash
$> npm init -y
$> echo "/node_modules" >> .gitignore
$> npm install --save-dev @11ty/eleventy
```

Nach ein paar Sekunden steht uns eleventy zur Verfügung. Unsere `package.json` sieht dann hoffentlich so oder so ähnlich aus:

```json
{
  "name": "eleventy-tutorial",
  "version": "1.0.0",
  "description": "Mit eleventy durchstarten",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/codecandies/eleventy-tutorial.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/codecandies/eleventy-tutorial/issues"
  },
  "homepage": "https://github.com/codecandies/eleventy-tutorial#readme",
  "devDependencies": {
    "@11ty/eleventy": "^0.11.1"
  }
}
```

### Erster Gehversuch
Jetzt können wir unser Programm schon mal laufen lassen.

```bash
$> npx @11ty/eleventy
Writing _site/README/index.html from ./README.md.
Wrote 1 file in 0.14 seconds (v0.11.1)
```

Bei mir hat eleventy gleich voll losgelegt und die README.md kompiliert.

### Pfade und coole URIs
Klasse! Daraus lässt sich schon eine Menge lernen, auch wenn wir eigentlich nicht wollen, dass die README des Projekts unbedingt kompiliert wird. Eleventy hat folgenden Pad angelegt: `_site/README/` und dort in der Datei `index.html` das Kompilat aus unserer Markdown-Datei hingeschrieben. Das Verzeichnis `_site` ist dabei das Distributionsverzeichnis. Später beim Konfigurieren kann man das auch umbenennen, standardmäßig nimmt eleventy aber immer dieses Verzeichnis. Falls ihr auch mit einem Github-Repo arbeitet: Dieses Verzeichnis wollen wir gewöhnlich nicht mit einchecken, deswegen kommt es auf die _ignorelist_.

```bash
$> echo "/_site" >> .gitignore
```

In dem Pfad verbirgt sich aber auch noch ein interessantes Learning, so baut eleventy nämlich standardmäßig seine Pfade und damit URLs auf: `[PFAD]/NAME_DER_AUSGANGSDATEI/index.html`. Läge diese Datei nun auf einem Webserver, könnte man so dahin verlinken: `https://meinserver.foo/README/`. Das `index.html` kann man gut weglassen, da man seinen Server so einstellen kann, dass er Dinge wie `index.html` oder `index.php` oder was auch immer, automatisch zurückliefert. Falls wir also in zehn Jahren unsere Dateien nicht mehr als HTML, sondern als `index.whatsoever` schreiben wollen, bleibt die URL bestehen. Nein, stimmt nicht, die URI bleibt stabil. Denn in der URL ist ja noch die Zugriffsmethode enthalten (hier: `https`) und die kann sich im Laufe der Jahre auch ändern (erinnert sich jemand an `http`?). Also: [cool URIs don't change](https://www.w3.org/Provider/Style/URI.html). Dieses Verhalten können wir später noch konfigurieren und ggf. ein wenig aufbohren.

### Was hier transformiert wird, bestimme ich!
Wie gesagt, ich will eigentlich nicht, dass die README mit kompiliert wird. Eleventy ignoriert zunächst mal alles, was in einer `.gitignore` steht. Dort können wir die README aber nicht hinzufügen, denn wir wollen sie auf Github ja benutzen. Aber es gibt eine eigene spezifische _ignorelist_, die wir nutzen können: `.eleventyignore`.

```bash
$> echo "README.md" >> .eleventyignore
```

Unseren ersten Versuch können wir nun löschen `rm -rf /_site` und zum Abschluss dieses Abschnitts noch mal den Beweis antreten:

```bash
?> npx @11ty/eleventy
Wrote 0 files in 0.03 seconds (v0.11.1)
```

Yeah! Nothing. Gewonnen!

### Wie strukturieren wir das jetzt?
Bevor wir weitere Dinge kaputt machen, schauen wir doch mal, wie wir das Projekt jetzt strukturieren wollen. Ich als Zahnartzfrau empfehle an dieser Stelle gerne, getrennte Eingabe- und Ausgabeverzeichnisse zu nutzen und im `root` unseres Projekts ausschließlich die Konfiguration vorzuhalten. In unserem Fall bedeutet dies, dass wir einen Eingabeordner bestimmen, in dem wir alles ablegen, was eleventy zum Arbeiten braucht. Ich nenne den Ordner gewöhnlich _source_ und weil ich arglistig schreibfaul bin, kürze ich das auf `src` herunter.

```bash
$> mkdir src
```

Das von nun aber unter `/src` alle unsere relevanten Dateien liegen werden, müssen wir eleventy natürlich noch mitteilen. Das kann man alles auch auf der Shell beim Aufruf von eleventy machen, bspw. so: `npx @11ty/eleventy --input=./src `. Es geht aber auch anders, nämlich mit einer Konfigurationsdatei, der `.eleventy.js` (Jubel, Beifall, Freudentränen).

Die `.eleventy.js` ist eine ziemlich popelige Javascriptdatei, die per definitionem ein Modul exportiert, dem das `eleventyConfig`-Objekt übergeben wurde und das seinerseits dann Config retourniert. Hier ist am Ende der Ort, _where the magic happens_. Wir fangen aber erst mal klein an. Spätestens jetzt kommen wir mit der Shell als Eingabevehikel nicht mehr aus, sondern benutzen einen Editor. Unsere erste Version der Datei sieht so aus:

```js
module.exports = function( eleventyConfig ) {
	return {
		dir: {
			input: 'src'
		}
	}
}
```

Es gibt noch ein paar weitere Optionen hier, zu denen wir aber später noch kommen. Sinnvollerweise wollen wir das Gelernte erst umsetzen. Dazu legen wir unter `src/index.md` eine erste kleine Markdown-Datei an, die so aussieht:

```md
# Hallo Welt

Dies ist die erste Datei, die wir mit eleventy schreiben werden.
```

### Hallo Welt!
Und jetzt wieder starten:

```bash
$> npx @11ty/eleventy
Writing _site/index.html from ./src/index.md.
Wrote 1 file in 0.19 seconds (v0.11.1)
```

Das hat geklappt. Nur wo kann ich mir das denn jetzt anschauen? Das geht so:

```bash
$> npx @11ty/eleventy --serve
Writing _site/index.html from ./src/index.md.
Wrote 1 file in 0.17 seconds (v0.11.1)
Watching…
[Browsersync] Access URLs:
 ---------------------------------------
       Local: http://localhost:8080
    External: http://0.0.0.0:8080
 ---------------------------------------
          UI: http://localhost:3001
 UI External: http://localhost:3001
 ---------------------------------------
[Browsersync] Serving files from: _site
```

Unter `http://localhost:8080` können wir unser Werk bestaunen. Nicht ganz uninteressant ist übrigens auch `http://localhost:3001`, die UI für Programm [_Browsersync_](https://www.npmjs.com/package/browser-sync), das den Entwicklungsserver zur Verfügung stellt und einige interessante Optionen für Entwickler bietet. Mit der Option `--serve` ist gleichzeitig ein Watch-Prozess angestossen, sodass, wenn wir Änderungen an der `index.md` vornehmen, das Projekt neu gebaut wird _und_ eigentlich der Browser neu geladen wird. Das klappt aber jetzt noch nicht, weil die Datei, die wir ausgeben, noch kein ernsthaftes HTML enthält, vor allem keinen `<body>` hat. Dafür benötigen wir ein Layout, das folgt dann im nächsten Teil.

## Outro: Lesson learned
Die _commits_ zu diesem Teil des Tutorials kann man gut [in diesem _pull request_](https://github.com/codecandies/eleventy-tutorial/pull/1) nachvollziehen.

Wir haben heute eleventy installiert, es minimal eingerichtet und etwas über seine Pfadkonfiguration und seine Bedienung auf der Shell gelernt. Wir haben auch gelernt, wie man Dateien innerhalb von eleventy ignoriert. Hierzu die Anmerkung, dass schon der nächste Schritt, die Einrichtung eines getrennten Verzeichnisses für Sourcen, das ignorieren der README überflüssig gemacht hat. Aber zu Demozwecken war das IMHO ok so.

Der zweite Teil folgt in Kürze auf dieser Seite.

::: copyright
Foto von <a href="https://unsplash.com/@jeancarloemer?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Jean Carlo Emer</a> auf <a href="https://unsplash.com/s/photos/balloons?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a>, Opossum von <a href="https://github.com/11ty/11ty-website">11ty.dev</a>.
:::
