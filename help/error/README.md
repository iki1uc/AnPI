# ERROR / RESPO – Version 1.01

## Zweck
ERROR ist der zentrale RESPO-Knotenpunkt für:
- NChelpU (User)
- NChelpPRO (Overlay)
- PR0 (Zero-Modus)
- µ# (Mini-Modus)
- RAW (Grundmodus)
- MASTER (Meta-Modus)

ERROR trägt alle bindenden Daten:
- ID
- EICH
- GEN
- ORT
- ZEIT
- DATUM
- TECH
- POS
- MODE

## Versionierung
Aktuelle Version: **1.01**

## EICH
EICH bestätigt die Position eines Frames oder einer Instanz.
EICH darf nur gesetzt werden, wenn:
- ID vorhanden ist
- GEN vorhanden ist
- ORT/Zeit gültig sind

## GEN
GEN beschreibt die Herkunft oder Ableitung eines Frames.
GEN ist optional, aber empfohlen.

## ORT / ZEIT
ORT = EarthRoom / Quadrant
ZEIT = itime:rtime
DATUM = ISO-Format

## TECH
TECH beschreibt den technischen Stand:
- NC
- R1
- MS
- RP
- LS

## POS
POS ist die NC-Position (Schlangenlogik).

## MODE
MODE kann sein:
- NC
- HELP
- PRO
- PR0
- µ#
- RAW
- MASTER

## Update-Pfad
Alte Situationen (vor 1.01) bleiben kompatibel.
Neue Situationen nutzen ID/EICH/GEN/DATUM.

