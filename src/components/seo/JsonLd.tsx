type JsonLdProps = {
  data: object;
};

/**
 * JSON-LD for trusted site configuration only.
 * Callers must not pass request data, query strings, or unsanitized text.
 */
export function JsonLd({ data }: JsonLdProps) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
