#!/usr/bin/env bash
set -euo pipefail

rg "node_modules" || true
rg "dist/" || true
rg "\.(mp4|zip|psd)" || true
du -sh .git
