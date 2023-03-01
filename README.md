# Applikation feedMe

<br />

## Receipt Processor

<br />

Als **Receipt Processor (kurz RP)** wird eine Funktionalität der Applikation **feedMe** bezeichnet, die den grundlegenden Prozess der Extraktion von relevanten Informatione, wie z.B Produktname, Füllmenge oder Preis umfasst, welche auf dem Kassenbeleg (Kassenbon) eines Supermarkts aufgelistet sind und die mithilfe gängiger Verfahren und Methoden von **OCR (Optical Character Recognition)** verarbeitet werden können. 

Dabei soll die Aufzeichnung und Verfolgung, sprich die Verwaltung von Lebensmitteln, vereinfacht und die smarte Digitalisierung eines Kassenbelegs ermöglicht werden, um den Prozess der manuellen Eingabe bereits erworbener Lebensmittel, entsprechend zu automatisieren. Als OCR wird grundsätzlich das Erkennen, sowie die Aufteilung eines Dokuments (Bildes) mit textlichem Inhalt, in dessen einzelne Bestandteile, wie z.B. Wörter, Buchstaben und Zeichen bezeichnet, um die maschinelle Verarbeitung von Informationen zu ermöglichen, zu vereinfachen und effizienter zu gestalten.  

<br />

### Prototyp - Minimal Viable Product

<br />

#### Allgemeine Beschreibung

<br />

Die erste Phase der Umsetzung des Prototyps **Receipt Processor** umfasst unter anderem:

- Erkennen von Lebensmitteln und den dazugehörigen Informationen, die auf dem Kassenbeleg eines Supermarkts abgebildet werden
- Integration und Anwendung von cloudbasierten Technologien, Modellen und Strategien, um die grundlegende Funktionsweise der Textanalyse zu veranschaulichen
- Einfache Interaktion des Benutzers mit der Applikation

<br />

Die Texterkennung erfolgt mithilfe des cloudbasierten AI-Service **Form Recognizer** von Microsoft Azure, um Texte, Tabellen, Strukturen und Key-Values (Schlüsselwertpaare), anhand der Verfahren und Methoden der optischen Zeichenerkennung OCR, sowie zusätzlicher Technologien für ein besseres Dokmentenverständnis, zu extrahieren. Dabei wird das vortrainierte Model **PrebuiltModels.Receipt (Belegmodell)** verwendet, welches leistungsstarke OCR-Funktionen mit Deep Learning-Modellen verbindet. Die Kassenbelege können verschiedene Strukturen und Formen (Layouts) aufweisen, sowie eine unterschiedliche Qualität besitzen. Neben dem vortrainierten Modell, soll im weiteren Verlauf der Implementierung, ein benutzerdefiniertes Modell erstellt und trainiert werden, um entsprechend individueller auf die gängigen Kassenbelege reagieren zu können. 

<br />

### Referenz-Kassenbeleg

<br />

Der **Referenz-Kassenbeleg (kurz RKB)** orientiert sich an den Kassenbeleg eines herkömmlichen Supermarkts, der folglich eine Auswahl an fiktiven Lebensmitteln mit relevanten Informationen enthält:

//TODO: Erstellen und Anzeigen eines Kassenbelegs (Referenz-Kassenbeleg)

<br />

#### <ins>Vor- & Nachteile</ins>

<br />

Zusammenfassung der grundlegenden Vor- und Nachteile des RKB gegenüber einem realen Kassenbeleg:

- Gleichbleibende und optimale Qualität des Kassenbelegs 
- Kein Qualitätsverlust durch Kamera, Belichtung, sowie Zustand des Papiers

Die Vorteile des RKB gegenüber einem realen Kassenbeleg beziehen sich großteils auf die Qualität in der Darstellung und Repräsentation der einzelnen Textbausteine. 
Die Genauigkeit der Analyse wird folglich nicht von Störfaktoren, wie z.B. Bildrauschen durch eine schlechte Kamera, fehlender Kontrast durch eine zu geringe Belichtung, oder nicht erkennbare Zeichen durch eine miserable Druckqualität, negativ beeinflusst. Dadurch kann der Fokus auf die eigentliche Anwendung der Methoden von OCR gelegt werden, ohne dabei die **Pre-Procssing-Verfahren** weiter berücksichtigen zu müssen, die nicht Bestandteil der ersten Phase der Implementierung des Prototyps sind.

https://learn.microsoft.com/de-de/azure/applied-ai-services/form-recognizer/overview?view=form-recog-3.0.0

