import React from "react"

import Layout from "../components/layout"
import { SEO, Banner, Btn } from "../components/Complete"

const Success = () => (
  <Layout>
    <SEO title="Success" />
    <Banner title="Message Sent!" subtitle="Your message has been sent! We will be in contact shortly.">
      <Btn to="/" text="return to home page"/>
    </Banner>
  </Layout>
)

export default Success
