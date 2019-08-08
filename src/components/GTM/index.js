import React from 'react';
import Helmet from 'react-helmet';

import { config } from '../../config';

const GTM = () => (
  <>
    <Helmet>
      <script>{`
        {(function(w, d, s, l, i) {
          w[l] = w[l] || [];
          w[l].push({
            'gtm.start': new Date().getTime(),
            event: 'gtm.js'
          });
          var f = d.getElementsByTagName(s)[0],
            j = d.createElement(s),
            dl = l !== 'dataLayer' ? '&l=' + l : '';
          j.async = true;
          j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
          f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', '${config.gtmCode}')}
      `}</script>
      <script>
        {`{(function(h, o, t, j, a, r) {
        h.hj =
          h.hj ||
          function() {
            (h.hj.q = h.hj.q || []).push(arguments);
          };
        h._hjSettings = { hjid: ${config.hotjarCode}, hjsv: 6 };
        a = o.getElementsByTagName('head')[0];
        r = o.createElement('script');
        r.async = 1;
        r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
        a.appendChild(r);
      })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=')}`}
      </script>
    </Helmet>
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${config.gtmCode}`}
        height="0"
        width="0"
        title="GTM Tracking"
        style={{ display: 'none', visibility: 'hidden' }}
      />
    </noscript>
  </>
);

export default GTM;
