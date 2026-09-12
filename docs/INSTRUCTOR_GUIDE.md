# Localization and globalization instructor guide

This is the single answer key for the training website. All 58 defects are always enabled in normal website routes. There is no separate lab, toggle, clean mode, or SEO defect set.

Do not provide this document to candidates before an assessment. Ask candidates to report the route, locale, viewport, reproduction steps, actual result, expected result, severity and evidence.

## Complete defect and solution catalogue

| ID | Where to reproduce | Intentional failure | Recommended solution |
| --- | --- | --- | --- |
| L10N-001 | German navbar and product cards | Expanded translations are clipped | Allow wrapping, flexible sizing and content-driven height |
| I18N-002 | Footer in any non-English locale | “Last updated” falls back to English | Add the message to every locale dictionary |
| L10N-003 | Arabic home footprint | Project counts use `en-US` digits | Format with the active locale’s `Intl.NumberFormat` |
| L10N-004 | Footer | `09/11/2026` is ambiguous | Use `Intl.DateTimeFormat` with the selected regional locale |
| I18N-005 | Arabic navbar/services | Component flow is forced to the wrong direction | Use logical layout and derive direction from locale configuration |
| MOBILE-006 | Home hero on a phone | Carousel dots are about 10px high | Provide a minimum 44×44 CSS-pixel hit target |
| I18N-007 | Product listing | Translated labels are joined into a sentence | Use a complete translated template with placeholders |
| I18N-008 | Home footprint | One label is used for every count | Select a message through `Intl.PluralRules` or ICU plural syntax |
| L10N-009 | Product listing | Every locale displays `$1,234.50` | Use the locale currency and `Intl.NumberFormat` currency style |
| L10N-010 | Product listing | Product names retain source order | Sort display names with `Intl.Collator` for the active locale |
| I18N-011 | Product enquiry form | Unicode customer names are rejected | Remove the ASCII pattern and accept Unicode input |
| L10N-012 | Product form/Arabic footer | International phone syntax and bidi display are mishandled | Accept `tel` input, store E.164 and isolate display as LTR |
| L10N-013 | Japanese footer | Postal address is reversed and forced into one LTR line | Use locale-approved address fields and line order |
| L10N-014 | Footer | UTC time is shown without regional conversion | Format the instant with the intended local time zone |
| L10N-015 | Product listing | Distance is written as `25 kms` | Use `Intl.NumberFormat` with `style: "unit"` |
| L10N-016 | Product listing | `0.18` is rendered as `0.18%` instead of 18% | Pass the ratio to percent formatting rather than appending `%` manually |
| I18N-017 | Product listing | Relative time reads “1 days ago” | Use `Intl.RelativeTimeFormat` and locale plural rules |
| L10N-018 | Product listing | A comma is used as a universal list separator | Use `Intl.ListFormat` |
| MOBILE-019 | Traditional Chinese products | Product names cannot wrap at CJK boundaries | Remove `nowrap/keep-all` and test native CJK line breaking |
| I18N-020 | Arabic/Hindi navbar | Tight line height clips complex glyphs | Use script-safe, content-driven line height |
| I18N-021 | Arabic page headers | Breadcrumb direction icon points the wrong way | Mirror directional icons in RTL or use logical icons |
| L10N-022 | Contact form in non-English locales | Validation feedback is hardcoded English | Localize validation copy and connect it with `aria-describedby` |
| I18N-023 | Korean footer | Text is intentionally mojibake | Preserve UTF-8 end-to-end and remove double encoding |
| I18N-024 | German product cards | Truncation can split visible graphemes/content | Avoid truncating critical names; use `Intl.Segmenter` when truncation is required |
| L10N-025 | Product enquiry form | Short Latin first/last-name assumptions are enforced | Use one flexible full-name field with Unicode and generous length |
| L10N-026 | Contact form | Address/place input is numeric-only | Use text input and support alphanumeric international postal data |
| MOBILE-027 | Footer at 200% text zoom | Content does not reflow | Remove fixed inline dimensions and verify WCAG reflow |
| I18N-028 | Arabic footer | Mixed-direction phone values are not isolated | Wrap values in `bdi` or use `dir="ltr"` on the value only |
| L10N-029 | Home hero in non-English locales | English CTA text is embedded over imagery | Keep translatable text outside images and use locale messages |
| A11Y-030 | Non-English home hero | Image alternative contains an English prefix | Localize the entire alternative or mark decorative imagery empty |
| A11Y-031 | Home hero | Pagination buttons are removed from tab order | Keep native buttons keyboard-focusable with visible focus styles |
| L10N-032 | Product enquiry form | Decimal value is fixed to `1.5` in a number input | Parse/format using locale decimal conventions and normalize on submission |
| I18N-037 | Traditional Chinese page → Korean | Switching language drops the current route and opens Korean home | Translate the current canonical route before navigation |
| RTL-038 | Arabic mobile navbar | Drawer enters from the left | Enter from logical start, which is right in RTL |
| L10N-039 | Japanese navbar | Current-language indicator shows `EN` | Derive the short label from the URL locale |
| L10N-040 | Language menu | Hindi endonym is displayed as “Hindi” | Display the approved native label `हिन्दी` |
| MOBILE-041 | German navbar | Long links are clipped | Permit wrapping or adapt layout based on measured content |
| A11Y-042 | Inner-page breadcrumb | Accessible name is always English | Read the breadcrumb label from localized messages |
| RTL-043 | Arabic page header | Breadcrumb separator is not mirrored | Use RTL-aware logical direction |
| L10N-044 | Home hero | Alternative text begins with English “STELZ Parking” | Use a fully localized alternative-text template |
| A11Y-045 | Home hero with reduced motion enabled | Slides continue changing automatically | Disable autoplay when `prefers-reduced-motion: reduce` matches |
| MOBILE-046 | Home hero | Visible pagination control is too small to tap | Separate the visual dot from a 44×44 button target |
| L10N-047 | Arabic footprint | Counts use Western digits/English grouping | Use the configured `ar-AE` formatter |
| MOBILE-048 | Parking-model carousel on touch | Model title appears only on hover | Keep titles visible or expose them through an explicit tap interaction |
| L10N-049 | Japanese parking models | Disclaimer appears in English | Use the Japanese message bundle |
| MOBILE-050 | Products at 768–900px | Grid forces approximately 1088px width | Remove minimum width and use responsive columns |
| L10N-051 | German products | Product titles are ellipsized | Preserve complete product names and allow wrapping |
| I18N-052 | Product enquiry form | Name is restricted to ASCII and 12 characters | Remove Latin-only validation and use Unicode-safe limits |
| L10N-053 | Product enquiry form | Phone field uses `type="number"` | Use `type="tel"` and accept `+`, spaces and extensions |
| L10N-054 | Services | Step numbers are padded Western strings | Format numbers with the active locale |
| RTL-055 | Arabic services | Decorative heading applies a bidi override | Remove bidi override and use RTL-safe writing-mode styling |
| RTL-056 | Services form | Message input is forced LTR | Use `dir="auto"` for user-generated free text |
| RTL-057 | Arabic contact form | Email field is forced RTL | Keep email input LTR while the surrounding form remains RTL |
| MOBILE-058 | Japanese contact form | Submit button is below recommended touch height | Enforce a minimum 44px target |
| RTL-059 | Arabic footer | Phone values inherit RTL flow | Isolate international phone values as LTR |
| MOBILE-060 | German footer | Addresses are clipped to one line | Allow postal lines to wrap and grow vertically |
| L10N-061 | Hindi footer | Copyright displays stale Western year `2024` | Generate the current year and apply the agreed digit policy |
| MOBILE-062 | Every route at 360px or narrower | Footer forces a 432px inline width | Remove the fixed minimum and test narrow viewport reflow |

## Required assessment matrix

- Languages: English, German, Arabic, Hindi, Traditional Chinese, Korean and Japanese.
- Viewports: 320×568, 360×800, 390×844, 412×915, 768×1024 and 1024×768.
- Accessibility states: keyboard only, 200% text zoom, reduced motion and a screen-reader inspection.
- Arabic scenarios: RTL layout plus mixed LTR values such as phone, email, model code and order/reference number.
- CJK scenarios: line breaking, glyph fallback, vertical metrics and touch interaction.
- Forms: Unicode names, alphanumeric postal data, international telephone syntax and localized decimal entry.

## Instructor scoring suggestion

Score each report for reproducibility, correct locale context, expected result, user impact, severity, evidence and remediation quality. A candidate should not receive credit for identifying an intentional visual difference without explaining the relevant globalization or localization rule.

The machine-readable count and IDs remain in `data/training/siteDefects.ts`; instructors only need this guide for normal operation.
