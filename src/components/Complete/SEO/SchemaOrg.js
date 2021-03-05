import React from "react"
import {navigationLinks} from "../../../constants/links"
import { Helmet } from "react-helmet"

export default React.memo(
  ({
    url,
    pageTitle,
    image,
    description,
    siteUrl,
    baseUrl,
    author,
    organization,
    dateModified,
  }) => {
    const linkCrumbs = navigationLinks.map((link, index) => {
      return {
        type: "ListItem",
        name: `${link.page} | ${organization.name}`,
        position: index+1,
        item: `${baseUrl}${link.path}`,
      }
    })
    const openingHoursSpecification = [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday"],
        opens: "11:30",
        closes: "22:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Wednesday", "Thursday", "Friday"],
        opens: "11:30",
        closes: "23:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "16:00",
        closes: "23:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "16:00",
        closes: "22:00",
      },
    ]

    const baseSchema = [
      {
        "@context": "http://schema.org",
        "@type": "LocalBusiness",
        "@id": organization.url,
        description: organization.description,
        email: organization.email,
        image: image,
        logo: organization.logo,
        name: organization.name,
        openingHoursSpecification: openingHoursSpecification,
        priceRange: organization.priceRange,
        sameAs: organization.otherUrls,
        telephone: organization.phone,
        url: organization.url,
        address: {
          "@type": "PostalAddress",
          addressCountry: organization.address.country,
          addressLocality: organization.address.city,
          addressRegion: organization.address.state,
          name: organization.name,
          postalCode: organization.address.zip,
          streetAddress: organization.address.street,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: organization.geo.lat,
          longitude: organization.geo.long,
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        name: `navigation`,
        itemListElement: linkCrumbs,
      },
    ]

    return (
      <Helmet>
        {/* Schema.org tags */}
        <script type="application/ld+json">{JSON.stringify(baseSchema)}</script>
      </Helmet>
    )
  }
)
