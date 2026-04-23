# Website Audit (April 23, 2026)

## Snapshot
- **Platform:** Jekyll static site using Hyde/Poole-era templates.
- **Primary risks:** legacy dependencies, mixed/insecure HTTP resources, outdated analytics, and stale content.
- **Opportunity:** modernize in small phases without a full redesign.

## Findings

### 1) Platform and dependency risk (High)
- `_config.yml` still references legacy settings (`redcarpet`, `pygments`) that are deprecated in modern Jekyll ecosystems. This can break local builds and future maintenance.
- Theme/layout structure appears to be a customized historical Hyde template without current dependency management.

**Why it matters:** Build reproducibility and portability are fragile; onboarding and updates become difficult.

### 2) Security and transport issues (High)
- Multiple external resources are loaded over `http://` or protocol-relative URLs (`//...`), including social/profile links, jQuery CDN, and other assets.
- Home page and templates include legacy third-party endpoints that may redirect, fail, or be blocked under stricter browser policies.

**Why it matters:** HTTPS-only best practices are now standard; mixed content can reduce trust and cause intermittent loading issues.

### 3) Analytics/telemetry is obsolete (High)
- `UA-...` Google Analytics snippet indicates Universal Analytics-era tracking, which is no longer current.

**Why it matters:** Current analytics may be nonfunctional or incomplete.

### 4) Accessibility gaps (Medium)
- Icon-only social links in `index.html` lack accessible labels.
- `target="_blank"` links are used without `rel="noopener noreferrer"`.
- Potential heading/semantic structure improvements are available across home sections.

**Why it matters:** Accessibility and security/compliance expectations have increased since the site was last maintained.

### 5) SEO and metadata gaps (Medium)
- Global head includes basic title and RSS, but no modern Open Graph/Twitter metadata strategy.
- Canonical URL and richer page-specific meta descriptions are limited.

**Why it matters:** Share previews and discoverability are weaker than current standards.

### 6) Content freshness and credibility (Medium)
- Resume file appears dated (`resume15.pdf`).
- Several timeline entries, tool mentions, and phrasing are from mid-2010s context.
- A few spelling/wording issues are present (e.g., "Bachalor", "breifcase").

**Why it matters:** First impressions and professional positioning are mostly content-driven on personal sites.

### 7) Front-end modernization opportunities (Low-Medium)
- JavaScript depends on older jQuery patterns for simple scroll behavior.
- CSS and structure are workable but could benefit from incremental responsive/accessibility cleanup.

**Why it matters:** Smaller JS/CSS footprint and semantic cleanup improves long-term maintainability.

## Prioritized improvement plan

### Phase 1 (1-2 sessions): Safety + trust
1. Force HTTPS links site-wide (internal and external) and remove protocol-relative URLs.
2. Replace/modernize analytics (or remove if no longer needed).
3. Add `rel="noopener noreferrer"` for external `target="_blank"` links.
4. Add accessibility labels to icon links.

### Phase 2 (1-2 sessions): Build reliability
1. Update Jekyll configuration to supported markdown/highlighter settings.
2. Add/refresh a minimal `README` runbook (local build, deploy flow).
3. Add a light CI check (build + broken link smoke test).

### Phase 3 (ongoing): Content + presentation
1. Refresh About, timeline, and contact sections for current role/focus.
2. Replace resume artifact with current version.
3. Add modern social/share metadata and a concise homepage value proposition.
4. Optional: simplify JS interactions to vanilla JS where practical.

## Suggested first concrete task
If you want, next I can implement a **"safe modernization pass"** in one PR that only:
- upgrades links to HTTPS,
- adds link security/accessibility attributes,
- and removes clearly obsolete analytics code,
without changing your visual design.
