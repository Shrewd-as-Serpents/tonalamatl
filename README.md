# 𝕋𝕠𝕟𝕒𝕝𝕒𝕞𝕒𝕥𝕝: Nahuatl-Maya Sacred Calendar Reference & Strategy Planner

Tonalamatl is a modern interactive reference book and strategy planner for the Mesoamerican 260-day sacred calendar (Tonalpohualli/Tzolk’in), built to support calendar-based divination, ritual timing, and spiritual self-reflection. It features authentic Nahuatl and Maya day signs, Unicode symbolism, ritual guides, and advanced calendrical calculations anchored on historical evidence.

The Alfonso Caso correlation aligns the Tonalpohualli system to the Gregorian/Julian calendar using the recorded date of the fall of Tenochtitlan (1-Coatl on August 13, 1521, Julian). This anchors the cyclical calendar to a continuous date stream, allowing modern conversion and accurate day sign calculation. Not all Daykeepers agree.

In brief: The cycle restarts every 260 days. August 13, 1521 (Julian), is 1-Coatl. (but not all Daykeepers agree)

Time zone and calendar changes (Julian to Gregorian), leap year handling, and exact local day boundaries can all cause minor issues (e.g., UTC vs. local midnight).

***


Find the ordinal distance (in days) between your anchor date (1-Coatl: August 13, 1521 Julian) and any target date (like today).

Account for the Julian-to-Gregorian switchover if needed (usually, you can work in Proleptic Gregorian for modern code).

Modulo 260: The result modulo 260 gives you the position in the sacred cycle.

Map index to day number/sign:

The number cycles 1–13, the sign cycles 1–20. Start at 1-Coatl; iterate forward a day at a time, incrementing number and sign.


needing test suite for edge cases (1500s, 2000s, leap centuries, etc.).


predicting common issues:

Date library quirks (esp. across Julian/Gregorian boundaries)

Off-by-one errors due to local time/UTC

Remember: The Julian day change is at noon in astronomical calendars, but for civil calendars, you want midnight


