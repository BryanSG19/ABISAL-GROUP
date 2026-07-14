# ABISAL GROUP — Notes for Claude

## Deploy flow (Hostinger, static export)

This is a Next.js project (`abisal-group`) configured for static export
(`output: "export"` in `next.config.mjs`, output dir `out/`).

Deploy pipeline to Hostinger, domain `abisalgroup.com`:

1. `npm run build` — produces the static site in `out/`.
2. `cd out && zip -r ../site.zip . && cd ..` — zip the export (Linux, use `zip -r`, not a Windows-style archiver).
3. Deploy the zip with the Hostinger MCP tool `hosting_deployStaticWebsite`, targeting domain `abisalgroup.com`.
4. Verify with `curl -o /dev/null -s -w "%{http_code}\n" https://abisalgroup.com/` and confirm it returns `200`.

Notes:
- Deploying overwrites the live production site — confirm with the user before running step 3 for real, don't run it automatically as part of unrelated tasks.
- MCP server: `hostinger` (package `hostinger-api-mcp`, run via `npx -y hostinger-api-mcp@latest`), configured at user scope (`claude mcp add hostinger -s user -e HOSTINGER_API_TOKEN=... -- npx -y hostinger-api-mcp@latest`) so it's available across sessions in this environment without editing repo files. The token is **not** stored in this repo.
- Relevant tools once the MCP server is loaded: `hosting_deployStaticWebsite`, `domains_getDomainListV1`, `hosting_listWebsitesV1`.
- Newly added MCP servers only become available in a **new** Claude Code session (they connect at session startup) — adding one mid-session won't surface its tools in that same conversation.
- **Known blocker (as of 2026-07-14):** this environment's network egress policy rejects outbound HTTPS to `developers.hostinger.com` and `api.hostinger.com` (proxy returns 403 policy denial). Until that policy allows those hosts, the Hostinger MCP tools will fail when actually invoked, even though the server itself starts fine. This needs to be fixed in the environment's network settings, not worked around.
