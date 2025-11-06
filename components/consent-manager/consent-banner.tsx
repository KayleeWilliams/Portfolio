import { CookieBanner } from "@c15t/react";

export default function ConsentBanner() {
  return (
    <CookieBanner.Root>
      <CookieBanner.Card>
        <CookieBanner.Header>
          <CookieBanner.Title>Privacy & Cookies</CookieBanner.Title>
          <CookieBanner.Description>
            Hi! I use analytics to understand how visitors interact with my
            portfolio. This helps me improve the site and see what's working. No
            personal data is collected-just basic usage statistics.
          </CookieBanner.Description>
        </CookieBanner.Header>
        <CookieBanner.Footer>
          <CookieBanner.RejectButton
            className="grow"
            themeKey="banner.footer.reject-button"
          >
            Reject Analytics
          </CookieBanner.RejectButton>
          <CookieBanner.AcceptButton
            className="grow"
            themeKey="banner.footer.accept-button"
          >
            Accept Analytics
          </CookieBanner.AcceptButton>
        </CookieBanner.Footer>
      </CookieBanner.Card>
    </CookieBanner.Root>
  );
}
