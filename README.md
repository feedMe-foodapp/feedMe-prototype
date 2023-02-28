# Applikation feedMe

<br />

## Receipt Processor

<br />

Als **Receipt Processor (kurz RP)** wird eine Funktionalität der Applikation **feedMe** bezeichnet, die den grundlegenden Prozess der Extraktion von relevanten Informatione, wie z.B Produktname, Füllmenge oder Preis umfasst, welche auf dem Kassenbeleg (Kassenbon) eines Supermarkts aufgelistet sind und die mithilfe gängiger Verfahren und Methoden von **OCR (Optical Character Recognition)** verarbeitet werden können. 

Dabei soll die Aufzeichnung und Verfolgung, sprich die Verwaltung von Lebensmitteln, vereinfacht und die smarte Digitalisierung eines Kassenbelegs ermöglicht werden, um den Prozess der manuellen Eingabe bereits erworbener Lebensmittel, entsprechend zu automatisieren. Als OCR wird grundsätzlich das Erkennen, sowie die Aufteilung eines Dokuments (Bildes) mit textlichem Inhalt, in dessen einzelne Bestandteile, wie z.B. Wörter, Buchstaben und Zeichen bezeichnet, um die maschinelle Verarbeitung von Informationen zu ermöglichen, vereinfachen und effizienter zu gestalten.  

<br />

### Prototyp - Minimal Viable Product

<br />

Die Phasen der Implementierung des Prototyps **Receipt Processor** umfasst unter anderem:

- Erkennen von Lebensmitteln auf einem Kassenbeleg eines Supermarkts
- Verwendung von cloudbasierten Lösungen und Modellen, um die Komplexität möglichst gering und die Lernkurve linear zu halten
- Einfache und grundlegende Interaktion des Benutzers mit der Applikation (Verzicht auf eine vollständige und komplexe UI)

<br />

Die Texterkennung erfolgt mithilfe des cloudbasierten AI-Service **Form Recognizer** von **Microsoft Azure**, um Texte, Tabellen, Strukturen und Key-Values (Schlüsselwertpaare), mithilfe der Verfahren und Methoden der optischen Zeichenerkennung OCR, sowie diverser Technologien für ein besserers Dokumentenverständnis, zu extrahieren. Dabei wird das vortrainierte Model **PrebuiltModels.Receipt**

https://learn.microsoft.com/de-de/azure/applied-ai-services/form-recognizer/overview?view=form-recog-3.0.0

