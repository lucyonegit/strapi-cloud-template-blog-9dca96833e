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
    coverImageAlt: Schema.Attribute.String;
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

export interface ArticleHeader extends Struct.ComponentSchema {
  collectionName: 'components_article_headers';
  info: {
    displayName: 'header';
  };
  attributes: {
    article_status: Schema.Attribute.Enumeration<['draft', 'published']> &
      Schema.Attribute.Required;
    isFeatured: Schema.Attribute.Boolean;
    readingTime: Schema.Attribute.Integer;
    slug: Schema.Attribute.String & Schema.Attribute.Required;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ArticleSeoMatadata extends Struct.ComponentSchema {
  collectionName: 'components_article_seo_matadata';
  info: {
    displayName: 'seo_matadata';
  };
  attributes: {
    seoDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    seoKeywords: Schema.Attribute.Text;
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
      'article.header': ArticleHeader;
      'article.seo-matadata': ArticleSeoMatadata;
      'article.share-config': ArticleShareConfig;
      'article.share-platform-item': ArticleSharePlatformItem;
    }
  }
}
