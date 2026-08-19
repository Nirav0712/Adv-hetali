import React from 'react';
import { Helmet } from 'react-helmet-async';

export const DOMAIN = import.meta.env.VITE_DOMAIN || 'https://advocatehetali.com';

const SEO = ({
    title,
    description,
    schema,
    type = 'website',
    url = '',
    image = `${DOMAIN}/favicon.svg`
}) => {
    const fullUrl = `${DOMAIN}${url}`;

    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={fullUrl} />

            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content={type} />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:image" content={image} />
            <meta property="og:site_name" content="Advocate Hetali H. Prajapati" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {schema && (
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            )}
        </Helmet>
    );
};

export default SEO;
