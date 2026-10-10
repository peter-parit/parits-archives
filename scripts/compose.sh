#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
ENV_FILE="${ENV_FILE:-$ROOT_DIR/.env}"

if [[ "$ENV_FILE" != /* ]]; then
  ENV_FILE="$PWD/$ENV_FILE"
fi

if [[ ! -f "$ENV_FILE" ]]; then
  printf 'Environment file not found: %s\n' "$ENV_FILE" >&2
  printf 'Create it from the example: cp "%s/.env.example" "%s/.env"\n' "$ROOT_DIR" "$ROOT_DIR" >&2
  exit 1
fi

if ! command -v docker >/dev/null 2>&1; then
  printf 'Docker is required but was not found in PATH.\n' >&2
  exit 1
fi

if [[ $# -eq 0 ]]; then
  set -- up -d
fi

exec docker compose \
  --env-file "$ENV_FILE" \
  --file "$ROOT_DIR/docker-compose.yaml" \
  "$@"
