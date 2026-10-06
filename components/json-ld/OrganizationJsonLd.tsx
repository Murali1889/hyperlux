import { JsonLd } from "./JsonLd"
import {
  SITE_URL,
  SITE_NAME,
  SITE_LOGO,
  ORG_SAME_AS,
  ORG_CONTACT_EMAIL,
  ORG_FOUNDING_DATE,
  SITE_DESCRIPTION,
  PARENT_ORG,
} from "@/lib/seo"

export function OrganizationJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: SITE_LOGO,
          width: 512,
          height: 512,
        },
        description: SITE_DESCRIPTION,
        foundingDate: ORG_FOUNDING_DATE,
        ...(ORG_SAME_AS.length ? { sameAs: ORG_SAME_AS } : {}),
        parentOrganization: {
          "@type": "Organization",
          name: PARENT_ORG.name,
          url: PARENT_ORG.url,
          sameAs: PARENT_ORG.sameAs,
        },
        contactPoint: {
          "@type": "ContactPoint",
          email: ORG_CONTACT_EMAIL,
          contactType: "customer support",
          availableLanguage: ["English"],
        },
      }}
    />
  )
}
