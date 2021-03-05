import React from "react"
import { GrFacebook, GrInstagram } from 'react-icons/gr'

const navigationLinks = [
  {
    page: "Home",
    path: "/",
    links: [],
  },
  {
    page: "Treatments",
    path: "/treatments/",
    links: [
      {
        page: "Facials & Peels",
        path: "/facials-peels/",
      },
      {
        page: "Waxing & Lashes",
        path: "/wax-and-lash",
      },
      {
        page: "Makeup Services",
        path: "/makeup",
      },
    ],
  },
  {
    page: "Schedule",
    path: "/schedule/",
    links: [],
  },
];

const socialLinks = [
  {
    icon: <GrFacebook />,
    id: 1,
    label: "Go to our Facebook Page",
    name: 'facebook',
    url: "https://www.facebook.com/pages/",
  },
  {
    icon: <GrInstagram />,
    id: 2,
    label: "Go to our Instagram Page",
    name: 'instagram',
    url: "https://instagram.com/",
  },
]

export { navigationLinks, socialLinks}
