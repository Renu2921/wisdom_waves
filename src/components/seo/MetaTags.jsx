import { useEffect } from 'react';

const MetaTags = ({ 
    title = "WisdomWaves - The Pinnacle of Recognition", 
    description = "Global academic recognition platform offering Honorary Doctorates, PhD, and DBA programs.",
    imageUrl = "/assets/favicon.png",
    schema = null
}) => {
    useEffect(() => {
        // 1. Dynamic DOM Title Manipulation
        document.title = title;

        // Helper string to mutate head arrays reliably safely across routing boundaries
        const setMetaTag = (attr, key, content) => {
            if (!content) return;
            let element = document.querySelector(`meta[${attr}="${key}"]`);
            if (!element) {
                element = document.createElement('meta');
                element.setAttribute(attr, key);
                document.head.appendChild(element);
            }
            element.setAttribute('content', content);
        };

        // 2. Standard Descriptive HTML Meta
        setMetaTag('name', 'description', description);

        // 3. Open Graph Architecture for Social Previews (WhatsApp, LinkedIn, etc.)
        setMetaTag('property', 'og:title', title);
        setMetaTag('property', 'og:description', description);
        setMetaTag('property', 'og:image', imageUrl);
        setMetaTag('property', 'og:type', 'website');

        // 4. Advanced JSON-LD Schema Configuration
        if (schema) {
            const scriptId = 'schema-json-ld';
            let scriptElement = document.getElementById(scriptId);
            if (!scriptElement) {
                scriptElement = document.createElement('script');
                scriptElement.setAttribute('type', 'application/ld+json');
                scriptElement.id = scriptId;
                document.head.appendChild(scriptElement);
            }
            scriptElement.text = JSON.stringify(schema);
        }

        // Cleanup configuration removes isolated payload artifacts to ensure 0 crossover bugs
        return () => {
            const scriptElement = document.getElementById('schema-json-ld');
            if (scriptElement) {
                scriptElement.remove();
            }
        }
    }, [title, description, imageUrl, schema]); // Rerun mapping execution anytime deep route components shuffle this content

    return null; // Silent logic wrapper parsing behind the operational view
};

export default MetaTags;
