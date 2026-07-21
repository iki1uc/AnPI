# DE‑System — EPOCHE • RAUM • FÄHIGKEIT • VECTOR • OPTA • SLI

version: 1.0  
type: system‑mass  
zero: 0

---

## 1. EPOCHE (81‑Matrix)

Die EPOCHE ist die äußere Schicht des Systems.  
Sie besteht aus **81 Feldern** und wird als:

x(81)1


definiert.

### Eigenschaften
- 81 Felder  
- jede Zeile enthält mindestens eine **0**  
- jede Spalte enthält mindestens eine **0**  
- jede 3×3‑Zone enthält mindestens eine **0**  
- die **0** ist Geburts‑ und Endpunkt  
- die **0** ist Anker, Gate, API‑Nullpunkt  
- EPOCHE ist **Beschreibung**, nicht Bewegung

### Datei
- `EX/port.matrix`

---

## 2. RAUM (27‑E‑Raum)

Der RAUM ist die **Fähigkeit 1** des Systems.  
Er besteht aus **27 Einheiten** und ist vollständig drehbar.

### Eigenschaften
- 27 Einheiten  
- 3 Achsen: X, Y, Z  
- 3 Ebenen pro Achse  
- 3 Richtungen pro Drehung  
- jede Drehung ist eine **Fähigkeit**, nicht Physik  
- die **0** ist Raum‑Anker

### Datei
- `Morph.room`  
- `port.room` (Bindung)

---

## 3. FÄHIGKEITEN (6‑System)

Das System besitzt **6 Fähigkeiten**, jede mit mindestens einer **0**.

1. drehraum0  
2. vector‑field0  
3. opta‑field0  
4. score‑field0  
5. sync‑field0  
6. morph‑field0

### Datei
- `port.room`  
- `EX/morph0.room`

---

## 4. VECTOR‑System (6d0 / 12e0 / 6e0)

Jeder GEN‑Strang besitzt einen Vector:

| GEN | Vector | Achse |
|-----|--------|-------|
| 4u  | 6d0    | X     |
| WHY | 12e0   | Y     |
| onu | 6e0    | Z     |

### Datei
- `port.room`

---

## 5. OPTA‑System (port.*0)

Jedes Vector‑Feld besitzt eigene Opta‑Module:

### DE (6d0)
- [port.fit0](ca://s?q=port_fit0_definieren)  
- [port.fix0](ca://s?q=port_fix0_definieren)  
- [port.allign0](ca://s?q=port_allign0_definieren)

### EN (12e0)
- [port.score0](ca://s?q=port_score0_definieren)  
- [port.capture0](ca://s?q=port_capture0_definieren)  
- [port.tweak0](ca://s?q=port_tweak0_definieren)

### TR (6e0)
- [port.fix0](ca://s?q=port_fix0_definieren)  
- [port.win0](ca://s?q=port_win0_definieren)  
- [port.tweak0](ca://s?q=port_tweak0_definieren)

---

## 6. SLI‑Layer (Schicht‑Link‑Interface)

SLI verbindet die Schichten DE, EN und TR.

### Eigenschaften
- jede Öffnung besitzt mindestens eine **0**  
- jede Zone besitzt mindestens eine **0**  
- SLI ist epochen‑ und raum‑kompatibel  
- SLI ist vector‑ und opta‑gebunden

### Datei
- `SLI.layer`

---

## 7. EX‑Layer (Erkenntnis‑Schicht)

Der EX‑Layer speichert **Erkenntnisse**, nicht Daten.

### Beispiele
- morph0.room  
- anwaerter0.room

### Eigenschaften
- Erkenntnis‑Anker  
- 0‑basiert  
- nicht physikalisch  
- nicht vector‑gebunden  
- nicht pipeline‑gebunden

---

## 8. Pipeline‑System

Pipeline ist linear (A → B).  
Morph ist nicht linear (Sprung).

### Datei
- `port.data`

---

## 9. index.html

index.html ist die **neutrale UI‑Schicht**.  
Sie lädt nur:

- EPOCHE  
- RAUM  
- FÄHIGKEITEN  
- SLI  
- port.room

---

## 10. System‑Regel

0 ist Geb/Ende‑Punkt jeder EPOCHE, jedes RAUMs und jeder FÄHIGKEIT.


EPOCHE beschreibt.
RAUM bewegt.
FÄHIGKEIT wechselt.
VECTOR richtet.
OPTA optimiert.
SLI öffnet.
EX erkennt.

Nächster Kandidat

[capture0]
version = 1.0
type = "opta-capture"
zero = 0

# Capture-Funktion (EN / 12e0)
capture.axis   = "Y"
capture.vector = "12e0"

# Capture-Bereich (EPOCHE)
capture.zone = [27,28,29, 36,37,38, 45,46,47]

# Capture-Regel
capture.rule = "Erfasst Score-relevante Zustände aus der EPOCHE"

# Bindung
capture.bind = "port.room"

