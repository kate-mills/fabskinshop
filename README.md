<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby SEO Business Starter
</h1>
<p>
Gatsby SEO Business Starter - This is for businesses (with postal address). Just put your info in siteMetadata.
</p>

# 1 - Local Terminal

1.  **New local repo**

    ```shell
    gatsby new new-site https://github.com/kate-mills/gatsby-seo-business-starter
    ```

    ```shell
    cd new-site/
    gatsby develop
    ```


# 2 - GitHub & Netlify

1.  Create **GitHub** repo - https://github.com/kate-mills?tab=repositories

2.  Create new **Netlify** site from GitHub -  https://app.netlify.com/teams/kate-mills/sites 


# 3 -  Local Terminal

1.  Connect local & remote repos

    ```shell
    git ls-remote # nothing 
    git remote add origin <New_Repo> 
    git ls-remote # New Repo
    git push origin master
    ```

# 4 - Edit gatsby-config.js

####  1.  siteMetadata
      image - replace './static/images/default-image.jpg'
      twitterUsername

      organization
          address
          email
          logo  - replace './static/images/logo.png'
          phone
          priceRange
          otherUrls


# 5 - Edit ./src/constants/links.js
#### links & social-links


# 6 - Edit ./src/components/Complete/SEO/SchemaOrg.js
#### hardcode business hours

# 7 - Contact Page Map
    Go To GoogleMaps: https://www.google.com/maps/
    Click Share
    Click Embed a map


# 7 - Start Customizing!!


## 💫 Status

[![Netlify Status](https://api.netlify.com/api/v1/badges/13c71e24-fe72-46e0-8d20-9eda5d165a44/deploy-status)](https://app.netlify.com/sites/gatsby-seo-business-starter/deploys)



## Helpful Links

1. Geo - https://www.latlong.net/convert-address-to-lat-long.html
2. GoogleMaps - https://www.google.com/maps/  # right clk to get lat/lng
2. GitHub - https://github.com/kate-mills?tab=repositories
3. Netlify - https://app.netlify.com/teams/kate-mills/sites  
4. Example - https://gatsby-seo-business-starter.netlify.app
