#!/usr/bin/env sh
set -eu

cat <<'MSG'
bapX AVM installer

The public installer URL is reserved at:
  https://avm.bapx.in/install.sh

This installer is for the headless bapXvm/AVM npm package. It does not install a local product UI.

The visible runtime surface is created only after connector registration, using a generated hostname like:
  ACM<8chrandomid>.vm.bapx.in

The AVM npm package is not published from this repository yet. The installer must not modify your VM until the package, runtime layout, secrets handling, rollback, diagnostics, and tests are complete.

Expected launch shape:
  curl -fsSL https://avm.bapx.in/install.sh | bash
  # bootstraps @bapX/vm or the registry-safe package name
  # connects the runtime to api.bapx.in and api.bapx.in/mcp

Contact bapxmediahub@gmail.com for private onboarding while the package is finalized.
MSG

exit 1
