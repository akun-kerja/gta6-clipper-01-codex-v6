// gta6-clipper-01 V6 — entry program (Node 22, standard library only).
//
// The video is the entry; this program only hands in its address. It reads
// VIDEO.json from the repository, checks that it names a real YouTube video,
// and copies it byte for byte into the output directory, where the gate
// reads it. It prints nothing on success and exits non-zero on any failure,
// copying nothing when the address is not a valid YouTube video URL.
//
// Local run (the grader sets the two variables itself):
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import * as fs from "node:fs";
import * as path from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
const sourcePath = path.join(botDir, "VIDEO.json");

// A YouTube video address as the Share button gives it. The id is exactly
// eleven characters of letters, digits, underscore or dash; anything after
// it must be a query string or a fragment, never more path.
const YOUTUBE_URL =
  /^https:\/\/(?:www\.|m\.)?youtube\.com\/(?:shorts\/|watch\?v=)([A-Za-z0-9_-]{11})(?:[?&#].*)?$|^https:\/\/youtu\.be\/([A-Za-z0-9_-]{11})(?:[?&#].*)?$/;

function die(reason: string): never {
  console.error(`main.ts: ${reason}`);
  process.exit(1);
}

if (!fs.existsSync(sourcePath)) {
  die(`VIDEO.json not found in ${botDir}`);
}

let parsed: unknown;
try {
  parsed = JSON.parse(fs.readFileSync(sourcePath, "utf8"));
} catch {
  die("VIDEO.json is not valid JSON");
}

if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) {
  die('VIDEO.json must be a JSON object with a string "url" field');
}

const url = (parsed as { url?: unknown }).url;
if (typeof url !== "string") {
  die('VIDEO.json must be a JSON object with a string "url" field');
}

const found = YOUTUBE_URL.exec(url);
if (found === null) {
  die(`not a YouTube video address: ${url}`);
}
const videoId = found[1] ?? found[2];
if (videoId.length !== 11) {
  die(`YouTube video id must be 11 characters, got ${videoId.length}: ${videoId}`);
}

fs.mkdirSync(outDir, { recursive: true });
fs.copyFileSync(sourcePath, path.join(outDir, "VIDEO.json"));
