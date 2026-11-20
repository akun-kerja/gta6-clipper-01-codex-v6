# GTA 6 Clipper — Windah Basudara Reacts to the GTA VI Trailer 2 (V6)

[![make.fun bounty](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/akun-kerja/gta6-clipper-01-codex-v6/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/akun-kerja/gta6-clipper-01-codex-v6/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

Bounty page: https://make.fun/bounty/gta6-clipper-01

## The clip

Windah Basudara reacts to Rockstar's GTA VI Trailer 2 — his biggest hype
moments, cut into a 47-second vertical Short. Four 10-second passages from
his reaction video (starting 9:38 into the original), kept in their full
16:9 frame with a blurred-fill pillarbox so both Windah's facecam and the
trailer footage stay visible, plus a 7-second pitch card at the end.

- Source: Windah Basudara — "GILA TRAILER KE DUA RILIS DADAKAN! React GTA VI TRAILER 2" (https://www.youtube.com/watch?v=Hqk9SBl3stI)
- Video: https://www.youtube.com/shorts/JMMKoXhTbto
- Hook: "WINDAH REACT GTA 6 😱" over the opening moment
- Pitch card: MAKE CLIPS. MAKE MONEY. / Make cool clips with AI and earn on make.fun / JOIN THE $500 BOUNTY / make.fun/bounty/gta6-clipper-01
- Audio: the reaction's original audio, no dead time at the end

## How it was made

The clip was cut and rendered in this session with ffmpeg: the four
passages were trimmed from the downloaded reaction video, each one scaled
into a 1080x1920 frame over a blurred copy of itself, the hook text was
drawn over the first three seconds, and the pitch card was rendered as a
7-second end card. The audio is the original reaction audio (volume 1.35).

The rendered file was verified in this session: 47.00 seconds, 1080x1920,
H.264 + AAC, audio mean -13.6 dB with no dead time at the end, and it is
byte-identical to the file published as the Short.

## The entry

`VIDEO.json` holds the video's address. `main.ts` (Node 22, standard library
only) copies `VIDEO.json` into the output directory and validates that the
address is a YouTube video URL with an 11-character video id, exiting
non-zero — and copying nothing — when it is not. Run it locally:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
