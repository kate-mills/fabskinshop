import React from "react"

import {Link} from "gatsby"
import Layout from "../components/layout"
import { SEO, Banner } from "../components/Complete"

const NotFoundPage = () => (
  <Layout>
    <SEO title="Oops!" />
    <Banner title="Oops!" subtitle="You just hit a route that doesn&#39;t exist.">
      <Link to="/">Go back to the home page.</Link>
    </Banner>
  </Layout>
)

export default NotFoundPage
