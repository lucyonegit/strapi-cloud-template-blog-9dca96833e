import type { Schema, Struct } from '@strapi/strapi';

export interface ArticleArticleContent extends Struct.ComponentSchema {
  collectionName: 'components_article_article_contents';
  info: {
    displayName: 'rich_text';
  };
  attributes: {
    body: Schema.Attribute.RichText &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultMarkdown';
        }
      >;
    faq: Schema.Attribute.Component<'article.faq', true>;
  };
}

export interface ArticleCoverInfo extends Struct.ComponentSchema {
  collectionName: 'components_article_cover_infos';
  info: {
    displayName: 'coverInfo';
  };
  attributes: {
    coverImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    > &
      Schema.Attribute.Required;
    coverImageAlt: Schema.Attribute.String & Schema.Attribute.Required;
    videoEmbed: Schema.Attribute.String;
  };
}

export interface ArticleCta extends Struct.ComponentSchema {
  collectionName: 'components_article_ctas';
  info: {
    displayName: 'cta';
  };
  attributes: {
    ctaButtonText: Schema.Attribute.String;
    ctaButtonUrl: Schema.Attribute.String;
    ctaDescription: Schema.Attribute.String;
    ctaPosition: Schema.Attribute.Enumeration<['top', 'middle', 'bottom']>;
    ctaTitle: Schema.Attribute.String;
    ctaType: Schema.Attribute.Enumeration<['inline', 'banner', 'sidebar']>;
  };
}

export interface ArticleFaq extends Struct.ComponentSchema {
  collectionName: 'components_article_faqs';
  info: {
    displayName: 'faq';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    question: Schema.Attribute.String;
  };
}

export interface ArticleRelatedConfig extends Struct.ComponentSchema {
  collectionName: 'components_article_related_configs';
  info: {
    displayName: 'related_config';
  };
  attributes: {
    autoRelated: Schema.Attribute.Boolean;
    related_posts: Schema.Attribute.Relation<
      'oneToMany',
      'api::article.article'
    >;
    relatedCount: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<3>;
  };
}

export interface ArticleSeoMatadata extends Struct.ComponentSchema {
  collectionName: 'components_article_seo_matadata';
  info: {
    displayName: 'seo_matadata';
  };
  attributes: {
    seoDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    seoKeywords: Schema.Attribute.Text & Schema.Attribute.Required;
    seoTitle: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ArticleShareConfig extends Struct.ComponentSchema {
  collectionName: 'components_article_share_configs';
  info: {
    displayName: 'share_config';
  };
  attributes: {
    enableShare: Schema.Attribute.Boolean;
    sharePlatforms: Schema.Attribute.Component<
      'article.share-platform-item',
      true
    >;
    shareText: Schema.Attribute.String;
  };
}

export interface ArticleSharePlatformItem extends Struct.ComponentSchema {
  collectionName: 'components_article_share_platform_items';
  info: {
    displayName: 'share_platform_item';
  };
  attributes: {
    name: Schema.Attribute.Enumeration<
      ['twitter', 'linkedin', 'reddit', 'copyLink']
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'article.article-content': ArticleArticleContent;
      'article.cover-info': ArticleCoverInfo;
      'article.cta': ArticleCta;
      'article.faq': ArticleFaq;
      'article.related-config': ArticleRelatedConfig;
      'article.seo-matadata': ArticleSeoMatadata;
      'article.share-config': ArticleShareConfig;
      'article.share-platform-item': ArticleSharePlatformItem;
    }
  }
}
