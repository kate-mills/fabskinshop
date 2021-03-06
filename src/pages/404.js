import React from "react"

import Layout from "../components/layout"
import { SEO, Btn } from "../components/Complete"

const NotFoundPage = () => (
  <Layout title="Oops!" subtitle="You just hit a route that doesn&#39;t exist.">
    <SEO title="Oops!" />
    <div className="center">
      <Btn to="/" text="Go back to the home page." />
    </div>
  </Layout>
)

export default NotFoundPage
