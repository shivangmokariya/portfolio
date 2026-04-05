# Shivang Mokariya Portfolio

## Development

```bash
npm run dev
```

## SEO Notes

- Production domain: `https://shivangmokariya.dev`
- Sitemap URL: `https://shivangmokariya.dev/sitemap.xml`
- Robots URL: `https://shivangmokariya.dev/robots.txt`
- Web manifest URL: `https://shivangmokariya.dev/manifest.webmanifest`

## Google Search Console

Add your Google site verification token in `.env.local`:

```bash
GOOGLE_SITE_VERIFICATION=your-google-token
```

The token is wired into the App Router metadata in [src/app/layout.tsx](/d:/codes/shivang_portfolio/src/app/layout.tsx).

After deployment:

1. Add the verification token and redeploy.
2. Submit `https://shivangmokariya.dev/sitemap.xml` in Google Search Console.
3. Request indexing for the home page and priority pages.
4. Validate structured data using Google's Rich Results Test and Schema Markup Validator.
