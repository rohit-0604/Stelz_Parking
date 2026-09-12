import { createLocalizedContent, type MarketingCopy } from "./factory";

const copy = {
  meta: {
    title: "STELZ Multiparking | Parkraum neu gedacht",
    description: "Innovative automatische und mechanische Parksysteme für moderne Städte und intelligente Infrastruktur.",
  },
  home: {
    taglines: ["Wir entwickeln das Parken von morgen", "Architekten exzellenter Parklösungen", "Parken. Neu definiert von STELZ."],
    highlights: [
      "Für Innen- und Außenbereiche entwickelt", "Innovative Parksysteme", "Optimale Raumnutzung",
      "Integration moderner Technologie", "Kompatibel mit Smart Cities", "Individuelle Parklösungen",
      "Mehr Fahrzeuge auf weniger Fläche", "Einfache Bedienung", "Schnelle Montage und langfristiger Nutzen",
    ],
    footprint: "STELZ Referenzen",
    models: "Parkmodelle",
  },
  about: {
    introTitle: "WILLKOMMEN BEI STELZ MULTIPARKING",
    introBody: "STELZ Parking entwickelt, fertigt, installiert und wartet moderne mechanische Parksysteme. Von Bengaluru aus liefern wir zuverlässige, platzsparende Lösungen für Wohn-, Gewerbe- und Infrastrukturprojekte.",
    overview: ["Urbane Parklösungen neu gedacht", "Wir verbinden präzise Technik mit intelligenter Flächennutzung und schaffen sichere Parksysteme für wachsende Städte."],
    expertise: ["Unsere Kompetenz", "Unser Leistungsspektrum reicht von Beratung und Konstruktion über Fertigung und Montage bis zu Inbetriebnahme und Wartung."],
    commitment: ["Unser Anspruch", "Innovation, Qualität, Zuverlässigkeit, Nachhaltigkeit und persönliche Betreuung bestimmen jede Projektphase."],
    impact: ["Unsere Wirkung", "Unsere Systeme erhöhen die Kapazität, reduzieren den Flächenbedarf und steigern Komfort, Sicherheit und Immobilienwert."],
    vision: "Wir sehen eine Zukunft, in der intelligente Parktechnik, Nachhaltigkeit und nutzerorientiertes Design gemeinsam lebenswertere Städte ermöglichen.",
    growth: ["Strategisches Wachstum und Branchenführung", "Durch Forschung, Partnerschaften und skalierbare Systeme wollen wir der verlässlichste Partner für moderne Parkinfrastruktur sein."],
    mission: ["Exzellenz und Nachhaltigkeit", "Wir entwickeln langlebige, energieeffiziente und anpassbare Systeme nach hohen Qualitäts- und Sicherheitsstandards."],
    whyTitle: "Warum STELZ Multiparking",
    whyCards: [
      ["Individuelle Konstruktion", "Jedes System wird an Grundstück, Nutzung und Fahrzeugtypen angepasst."],
      ["Lösungen aus einer Hand", "Planung, Fertigung, Montage und Service kommen aus einem erfahrenen Team."],
      ["Skalierbar und verlässlich", "Bewährte Prozesse sichern gleichbleibende Qualität auch bei großen Projekten."],
      ["Starker Forschungsfokus", "Kontinuierliche Entwicklung verbessert Technik, Sicherheit und Lebensdauer."],
      ["Wirtschaftliche Effizienz", "Unsere Systeme schaffen mehr Stellplätze bei kontrollierten Betriebs- und Baukosten."],
      ["Nachgewiesene Erfahrung", "Bauträger, Unternehmen und Institutionen vertrauen auf unsere Installationen."],
    ],
    philosophyTitle: "Unsere Arbeitsphilosophie",
    philosophyBody: "Serviceorientierung ist die Grundlage unseres Erfolgs. Wir analysieren Anforderungen und Standortbedingungen und führen jedes Projekt in fünf klaren Schritten zur passenden Lösung.",
    steps: [
      ["Konzeption", "Wir erfassen Ziele, Randbedingungen und Risiken und entwickeln daraus ein passendes Konzept."],
      ["Konstruktion", "Wir erstellen präzise Pläne, die Funktion, Sicherheit und effiziente Nutzung verbinden."],
      ["Fertigung", "Qualitätsgeprüfte Komponenten entstehen mit modernen Verfahren und belastbaren Materialien."],
      ["Montage", "Unser Team installiert, richtet aus und prüft das System sicher und termingerecht."],
      ["Wartung nach der Montage", "Regelmäßiger Service und schnelle Unterstützung sichern dauerhaft zuverlässigen Betrieb."],
    ],
  },
  blog: {
    title: "Produkt und Technologie in der Forschung: die Zukunft des urbanen Parkens",
    lead: "Innovation bedeutet für STELZ, Mobilität und knappen Stadtraum neu zu denken. Unsere Entwicklung stützt sich auf zwei Säulen:",
    pillars: ["Produkt", "Technologie"],
    closing: "Gemeinsam bilden sie das Fundament jeder unserer Lösungen.",
    sections: [
      ["Produkt: die Vision hinter der Innovation", "Wir entwickeln Parksysteme, die Fläche optimal nutzen und zugleich Komfort, Sicherheit und Architektur berücksichtigen."],
      ["Technologie: der Motor des Fortschritts", "Hydraulik, intelligente Steuerungen, Sensorik und vorausschauende Wartung sorgen für sicheren und zukunftsfähigen Betrieb."],
      ["Das Zusammenspiel von Produkt und Technologie", "Interdisziplinäre Zusammenarbeit verwandelt Ideen in zuverlässige Systeme wie Rotations- und Puzzle-Parkanlagen."],
      ["Blick nach vorn", "Mit dichter werdenden Städten bleibt Forschung der Schlüssel zu nachhaltigen, anpassbaren und effizienten Parklösungen."],
    ],
  },
  services: {
    title: "Unsere Leistungen",
    items: [
      ["Komplette Planung und Installation", "Wir liefern maßgeschneiderte Parksysteme von der Standortanalyse bis zur Inbetriebnahme."],
      ["Individuelle Parklösungen", "Jedes Konzept wird an Fläche, Bauwerk, Nutzung und Fahrzeugmix angepasst."],
      ["Nachrüstung und Modernisierung", "Wir verbessern bestehende Anlagen für mehr Kapazität, Sicherheit und Leistung."],
      ["Wartungs- und Serviceverträge", "Regelmäßige Wartung, schnelle Reparaturen und langfristige Betreuung sichern den Betrieb."],
    ],
  },
  gallery: { projects: "Galerie erfolgreicher Smart-Parking-Projekte", concepts: "3D-Parkkonzepte zum Leben erweckt" },
  modelNames: {
    "Pit Puzzle": "Gruben-Puzzle", "Puzzle Parking": "Puzzle-Parken", Rotary: "Rotationsparken", "OP -01": "OP-01",
    "3-level Pit Puzzle": "Dreifach-Grubenpuzzle", "3-level Pit Stacker": "Dreifach-Grubenstapler",
    "3-level Stack Parking": "Dreifach-Stapelparken", "Car Hoist": "Autoaufzug", "Turn Table": "Drehteller",
    "Cantilever Parking": "Freitragendes Parken", "2 Level Stacker": "Zweifach-Stapler", "3 Level Stacker": "Dreifach-Stapler",
    "2 Level Pit Stacker": "Zweifach-Grubenstapler", "3 Level Pit Stacker": "Dreifach-Grubenstapler", Cantilever: "Freitragendes System",
    "2 Puzzle Parking System": "Zweifach-Puzzle-Parksystem", "2 Pit Puzzle Parking System": "Zweifach-Grubenpuzzle",
    "3 Pit Puzzle Parking System": "Dreifach-Grubenpuzzle",
  },
  products: {
    names: {
      "stack-parking": "Stapelparken", "3-level-stack-parking": "Dreifach-Stapelparken", "pit-stacker": "Grubenstapler",
      "3-level-pit-stacker": "Dreifach-Grubenstapler", "cantilever-parking": "Freitragendes Parken", "puzzle-parking": "Puzzle-Parken",
      "3-level-pit-puzzle": "Dreifach-Grubenpuzzle", "op-01": "OP-01", "car-hoist": "Autoaufzug", rotary: "Rotationsparken", "turn-table": "Drehteller",
    },
    subtitles: { stack: "Mehr Stellplätze auf derselben Fläche", puzzle: "Flexible Kapazität mit Puzzle-Parksystemen", automatic: "Intelligente automatische Fahrzeugbewegung" },
    summary: "{product} ist eine platzsparende mechanische Parklösung für Wohn-, Gewerbe- und Infrastrukturprojekte. Das System erhöht die Kapazität, ermöglicht eine sichere Bedienung und lässt sich an die Bedingungen des Standorts anpassen.",
    features: ["Hohe Flächeneffizienz", "Sichere Sensorik und Verriegelungen", "Einfache, intuitive Bedienung", "Anpassbare Abmessungen und Traglasten", "Robuste, wartungsarme Konstruktion", "Schnelle und planbare Installation"],
    applications: ["Wohnanlagen und private Gebäude", "Büros und Gewerbeimmobilien", "Einkaufszentren und Hotels", "Krankenhäuser und Bildungseinrichtungen", "Öffentliche Parkhäuser und Verkehrsknoten", "Autohäuser und Industrieanlagen"],
    seoDescription: "{product} von STELZ: eine sichere, platzsparende und anpassbare mechanische Parklösung.",
    keywords: ["mechanisches Parken", "automatisches Parksystem", "platzsparende Parklösung"],
  },
  research: {
    title: ["Zukunftsfähige Lösungen aus", "Forschung und Erfahrung"],
    intro: ["Forschung und Entwicklung bilden den Kern unserer Produktinnovation. Wir investieren in moderne Konstruktion, Automatisierung und Sicherheit.", "Von Prototypen bis zur Endprüfung entwickelt unser Team platzoptimierte und benutzerfreundliche Lösungen für heutige Städte."],
    sections: [
      ["Innovatives Design", "Neue Konzepte verbinden optimale Flächennutzung, klare Ästhetik und einfache Bedienung."],
      ["Intelligente Technik", "Präzise Mechanik, Sensoren und Steuerungen ermöglichen zuverlässige automatisierte Abläufe."],
      ["Maßgeschneiderte Lösungen", "Konfigurationen werden an Standort, Nutzung und funktionale Ziele angepasst."],
      ["Produkt und Technologie", "Prototypen werden auf Tragfähigkeit, Lebensdauer, Funktion und Sicherheit geprüft."],
      ["Umweltbewusster Ansatz", "Effiziente Komponenten und verantwortungsvolle Materialien reduzieren Energie- und Ressourcenverbrauch."],
      ["Kontinuierliche Innovation", "Betriebsdaten und Kundenfeedback fließen laufend in verbesserte Modelle ein."],
      ["Sicherheit und Konformität", "Jede Komponente wird nach strengen nationalen und internationalen Standards geprüft."],
    ],
  },
} satisfies MarketingCopy;

export const overrides = createLocalizedContent(copy);
