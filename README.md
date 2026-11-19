# EDSAVIN CONSULT AND TRADING

Website for EDSAVIN CONSULT AND TRADING, a Ghanaian farm business. It presents four lines of work — livestock, meat, crops, and cassava processed into gari and starch — and takes enquiries. There is no shop and no checkout.

The company name is always **EDSAVIN CONSULT AND TRADING**. Do not rename it.

Built with Next.js (App Router) so it deploys on Vercel with the default Next.js preset. No `vercel.json` is required.

## Pages

| Page | Path |
|---|---|
| Home | `/` |
| About & Team | `/about` |
| Livestock | `/livestock` |
| Meat | `/meat` |
| Crops | `/crops` |
| Processing (Gari & Starch) | `/processing` |
| Gallery | `/gallery` |
| Enquiry / Order | `/enquiry` |
| Contact | `/contact` |
| Privacy | `/privacy` |

## Setup

Use Node.js 20 or newer.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
npm run lint
```

## Environment variables

Copy `.env.example` to `.env.local` for local work. On Vercel, add the same names under Project Settings → Environment Variables, then redeploy. Do not commit `.env.local`.

| Variable | Required to send mail | Purpose |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | No | Canonical URLs, Open Graph and the sitemap. No trailing slash. Until this is the real domain, those URLs use `https://example.com`. |
| `ENQUIRY_TO_EMAIL` | Yes | Inbox that receives each enquiry. |
| `ENQUIRY_FROM_EMAIL` | Yes | From address. With Resend it must be on a domain you have verified there. |
| `RESEND_API_KEY` | One of these | If this is set, the form sends with [Resend](https://resend.com). |
| `SMTP_HOST` | One of these | SMTP host, used only when `RESEND_API_KEY` is empty. |
| `SMTP_PORT` | With SMTP | Usually `587`. Port `465` turns on implicit TLS. |
| `SMTP_USER` / `SMTP_PASS` | With SMTP | Login for the SMTP server. Leave blank only if the server needs no login. |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | No | Google Analytics 4 id, such as `G-XXXXXXXX`. Empty means Analytics stays off. |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | No | Search Console meta tag content, if you want the tag in the page head. |

The form refuses to pretend a message was delivered when `ENQUIRY_TO_EMAIL`, `ENQUIRY_FROM_EMAIL`, and a provider (Resend or SMTP) are not all set. The page then tells the visitor to use WhatsApp.

Spam protection on `POST /api/enquiry`:

- a hidden fax field that people do not see (filled-in copies are dropped)
- a short wait after the form is shown, when JavaScript recorded the open time
- at most 8 posts in 10 minutes for one address, remembered in that server instance
- length checks, a real product id, and a consent tick
- same-origin check when the browser sends an `Origin` header

The in-memory limit resets when a new server instance starts. It is there to cut down form spam, not to replace a mail provider's own filters.

## Replacing placeholders

Almost all draft copy is in [`content/site.ts`](content/site.ts). Search for `[PLACEHOLDER]` on the site, or edit the fields named in `clientChecklist` at the bottom of that file. After saving, the next page load shows the new text. No other file needs a wording change unless you add a page.

When a string is real, delete the surrounding placeholder treatment by clearing the matching flag:

- `contact.whatsappIsPlaceholder = false` after `whatsappDigits` is the real number (digits only, country code, no `+`, for example `233XXXXXXXXX`)
- `contact.emailIsPlaceholder = false` after `contact.email` is the real public address
- `contact.phoneTel` can be set to the same number with a leading `+` once the phone should be tappable
- `site.showDraftBanner = false` when the draft note at the top of every page should disappear

Photographs are AI-generated stand-ins for a Ghanaian farm. They are not the client's pictures. Replace each file in [`public/images`](public/images) with the farm's own photo, keeping the file name, or change `src` in the `photos` object and update `alt` to describe the new picture. Do not download photos from other websites.

Team portraits are empty frames on purpose. Do not drop in a picture of a person and leave the biography as a placeholder.

Logos in [`public/brand`](public/brand) are the approved brand-kit files. Use them as they are. Do not redraw, recolour, stretch or retype the logo. Favicons in `app/` are the brand-kit favicons.

Colours are Signal Red `#E30613`, Ink Black `#1A1A1A`, White `#FFFFFF`, Mist Grey `#F4F4F4` and Steel Grey `#6B6B6B`. Type is Montserrat (labels and headings) and Source Sans 3 (body), loaded through `next/font`. The font licences are in [`licenses`](licenses).

## What the client still needs to send

The full list is `clientChecklist` in `content/site.ts`. In short:

- About story, mission, and values (the four value cards are suggestions only)
- Mr Saaka's biography and photograph, plus any other team names, roles, biographies and photographs
- Product details, availability, seasons and pack sizes for every livestock type, meat cut, crop, gari and starch
- What the meat expansion includes, how buyers pay, and where orders are delivered or collected
- This farm's own gari and starch method, if it should replace the short general outline
- Real photographs of animals, fields, meat, processing, premises and the team
- Phone, WhatsApp, public email, street address, town, region, map pin and social profile URLs
- How long enquiry messages are kept, whether Analytics should be on, and any registered address or registration number
- The domain, the enquiry inbox, and either a Resend key or SMTP login

Prices are not shown. The site takes enquiries rather than payment. Add prices in `content/site.ts` only if they should be published.

## Deploying to Vercel

1. Import the GitHub repository. Framework preset: Next.js. Root directory: the repository root.
2. Add the environment variables above for Production (and Preview, if you want the form to send there too).
3. Deploy. `npm run build` is the build command Vercel will detect.
4. Put the real domain in `NEXT_PUBLIC_SITE_URL` and redeploy so the sitemap and share cards use it.
5. In Google Search Console, add the property and submit `https://YOUR-DOMAIN/sitemap.xml`. SSL is provided by Vercel once the domain is attached.

The first deploy will build before the inbox is connected. That is expected: the form returns a clear message until `ENQUIRY_TO_EMAIL` and a mail provider are set.

## Brand files

| File | Use |
|---|---|
| `public/brand/logo-horizontal-light.svg` | Header and other light backgrounds |
| `public/brand/logo-horizontal-dark.svg` | Footer |
| `public/brand/logo-avatar.svg` | Small header mark, from the approved avatar |
| `app/favicon.ico`, `app/icon.svg`, `app/apple-icon.png` | Browser icons from the brand kit |
| `public/og.png` | Link preview, made from the approved horizontal logo on Ink Black |

On screens wide enough for it, the header shows the horizontal logo at 280px, above the brand kit's 260px on-screen minimum. Narrow screens use the avatar mark (48px, above the 32px minimum) so the logo is not squeezed.
