#!/usr/bin/env sh
set -eu

cat <<'MSG'
bapX AVM installer

The public installer URL is reserved at:
  https://avm.bapx.in/install.sh

The AVM npm package is not published from this repository yet. The installer must not modify your VPS until the package, runtime layout, secrets handling, rollback, diagnostics, and tests are complete.

Expected launch shape:
  curl -fsSL https://avm.bapx.in/install.sh | bash
  # bootstraps @bapX/vm or the registry-safe package name
  # connects the runtime to api.bapx.in/mcp

Contact info@bapx.in for private onboarding while the package is finalized.
MSG

exit 1
