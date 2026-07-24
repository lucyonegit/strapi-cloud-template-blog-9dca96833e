export default (config) => {
  return {
    ...config,
    optimizeDeps: {
      ...config.optimizeDeps,
      // Strapi excludes prebuilt admin plugins from optimization. CKEditor and
      // its editor/Markdown dependencies still contain nested CommonJS modules.
      include: [
        ...(config.optimizeDeps?.include ?? []),
        'yup > property-expr',
        'yup > toposort',
        '@ckeditor/ckeditor5-emoji > fuzzysort',
        '@ckeditor/ckeditor5-image > es-toolkit/compat/isEqual',
        'unified > extend',
        'micromark > debug',
        '@_sh/strapi-plugin-ckeditor > sanitize-html',
      ],
    },
  };
};
