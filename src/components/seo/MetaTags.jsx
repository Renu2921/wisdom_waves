import React from 'react';
import { Helmet } from 'react-helmet-async';

const MetaTags = ({ 
    title = "WisdomWaves - The Pinnacle of Recognition", 
    description = "Global academic recognition platform offering Honorary Doctorates, PhD, and DBA programs.",
    imageUrl = "/assets/favicon.png",
    schema = null,
    keywords = ""
}) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}
            
            {/* Open Graph Architecture for Social Previews */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={imageUrl} />
            <meta property="og:type" content="website" />
            
            {/* Advanced JSON-LD Schema Configuration */}
            {schema && (
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            )}
        </Helmet>
    );
};

export default MetaTags;
