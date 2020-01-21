import { JSONSchema7Array } from 'json-schema';
import React from 'react';
import Helmet from 'react-helmet';
import urljoin from 'url-join';

import { config } from '../../config';

class SEO extends React.Component {
  render() {
    const {
      title = config.siteTitle,
      description = config.siteDescription,
      image = config.siteLogo,
      schemaOrgJSONLD = []
    } = this.props;

    const currentUrl = window.location.href;
    const baseUrl = `${window.location.protocol}//${window.location.hostname}`;
    const imageUrl = urljoin(baseUrl, image);

    schemaOrgJSONLD.push({
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      alternateName: config.siteTitleAlt,
      name: config.siteTitle,
      url: baseUrl
    });

    return (
      <Helmet>
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="application-name" content={config.siteTitleShort} />
        <meta name="description" content={description} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:site_name" content={config.siteTitleShort} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imageUrl} />
        <meta name="twitter:url" content={currentUrl} />
        <meta name="twitter:site" content={config.siteTitleShort} />

        <script type="application/ld+json">{JSON.stringify(schemaOrgJSONLD)}</script>
      </Helmet>
    );
  }
}

export default SEO;
