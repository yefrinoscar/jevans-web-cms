import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksAddress extends Struct.ComponentSchema {
  collectionName: 'components_blocks_addresses';
  info: {
    displayName: 'address';
  };
  attributes: {
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    label: Schema.Attribute.Text;
    url: Schema.Attribute.String;
  };
}

export interface BlocksBlockCta extends Struct.ComponentSchema {
  collectionName: 'components_blocks_block_ctas';
  info: {
    displayName: 'block-cta';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    href: Schema.Attribute.String & Schema.Attribute.Required;
    textButton: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksSchedule extends Struct.ComponentSchema {
  collectionName: 'components_blocks_schedules';
  info: {
    displayName: 'schedule';
  };
  attributes: {
    description: Schema.Attribute.Text;
    type: Schema.Attribute.String;
  };
}

export interface SharedAboutUs extends Struct.ComponentSchema {
  collectionName: 'components_shared_about_uses';
  info: {
    displayName: 'about-us';
  };
  attributes: {
    description: Schema.Attribute.Text;
    keys: Schema.Attribute.Component<'shared.value', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedBanner extends Struct.ComponentSchema {
  collectionName: 'components_shared_banners';
  info: {
    displayName: 'Banner';
    icon: 'alien';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos'> &
      Schema.Attribute.Required;
    link: Schema.Attribute.Component<'shared.link', false>;
    title: Schema.Attribute.String;
  };
}

export interface SharedBannerV2 extends Struct.ComponentSchema {
  collectionName: 'components_shared_banner_v2s';
  info: {
    displayName: 'Banner-v2';
    icon: 'cursor';
  };
  attributes: {
    headingLeft: Schema.Attribute.Text & Schema.Attribute.Required;
    headingRight: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface SharedBenefit extends Struct.ComponentSchema {
  collectionName: 'components_shared_benefits';
  info: {
    displayName: 'Benefit';
    icon: 'shield';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedBlockService extends Struct.ComponentSchema {
  collectionName: 'components_shared_block_services';
  info: {
    displayName: 'block-service';
    icon: 'oneWay';
  };
  attributes: {
    benefits: Schema.Attribute.Component<'shared.item-check', true>;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedCopy extends Struct.ComponentSchema {
  collectionName: 'components_shared_copies';
  info: {
    displayName: 'copy';
  };
  attributes: {
    buttonText: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedEmail extends Struct.ComponentSchema {
  collectionName: 'components_shared_emails';
  info: {
    displayName: 'email';
  };
  attributes: {
    descripcion: Schema.Attribute.String;
    email: Schema.Attribute.Email;
    label: Schema.Attribute.String;
  };
}

export interface SharedItemCheck extends Struct.ComponentSchema {
  collectionName: 'components_shared_item_checks';
  info: {
    displayName: 'itemCheck';
    icon: 'check';
  };
  attributes: {
    description: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedKeyMetric extends Struct.ComponentSchema {
  collectionName: 'components_shared_key_metrics';
  info: {
    displayName: 'KeyMetric';
    icon: 'connector';
  };
  attributes: {
    descripcion: Schema.Attribute.String;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
    icon: 'car';
  };
  attributes: {
    href: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'#'>;
    isExternal: Schema.Attribute.Boolean;
    label: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedNumber extends Struct.ComponentSchema {
  collectionName: 'components_shared_numbers';
  info: {
    displayName: 'phoneNumber';
  };
  attributes: {
    value: Schema.Attribute.BigInteger &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'2323'>;
  };
}

export interface SharedOurValue extends Struct.ComponentSchema {
  collectionName: 'components_shared_our_values';
  info: {
    displayName: 'ourValue';
  };
  attributes: {
    color: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedPhones extends Struct.ComponentSchema {
  collectionName: 'components_shared_phones';
  info: {
    displayName: 'HelpDesk';
  };
  attributes: {
    description: Schema.Attribute.String;
    values: Schema.Attribute.Component<'shared.value', true>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    company: Schema.Attribute.String;
    description: Schema.Attribute.String;
    position: Schema.Attribute.String;
  };
}

export interface SharedResponseTime extends Struct.ComponentSchema {
  collectionName: 'components_shared_response_times';
  info: {
    displayName: 'response_time';
  };
  attributes: {
    label: Schema.Attribute.String;
    priority: Schema.Attribute.Enumeration<['alta', 'media', 'baja']>;
    time: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSectionBenefit extends Struct.ComponentSchema {
  collectionName: 'components_shared_section_benefits';
  info: {
    displayName: 'Section-Benefit';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    sectionBenefits: Schema.Attribute.Component<'shared.benefit', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedSectionSuccessCase extends Struct.ComponentSchema {
  collectionName: 'components_shared_section_success_cases';
  info: {
    displayName: 'section-success-case';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
    values: Schema.Attribute.Component<'shared.value', true>;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedTimeline extends Struct.ComponentSchema {
  collectionName: 'components_shared_timelines';
  info: {
    displayName: 'timeline';
  };
  attributes: {
    description: Schema.Attribute.String;
    timelineItem: Schema.Attribute.Component<'shared.timeline-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedTimelineItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_timeline_items';
  info: {
    displayName: 'timelineItem';
  };
  attributes: {
    description: Schema.Attribute.Text;
    label: Schema.Attribute.String;
    year: Schema.Attribute.BigInteger;
  };
}

export interface SharedValue extends Struct.ComponentSchema {
  collectionName: 'components_shared_values';
  info: {
    displayName: 'value';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    value: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.address': BlocksAddress;
      'blocks.block-cta': BlocksBlockCta;
      'blocks.schedule': BlocksSchedule;
      'shared.about-us': SharedAboutUs;
      'shared.banner': SharedBanner;
      'shared.banner-v2': SharedBannerV2;
      'shared.benefit': SharedBenefit;
      'shared.block-service': SharedBlockService;
      'shared.copy': SharedCopy;
      'shared.email': SharedEmail;
      'shared.item-check': SharedItemCheck;
      'shared.key-metric': SharedKeyMetric;
      'shared.link': SharedLink;
      'shared.media': SharedMedia;
      'shared.number': SharedNumber;
      'shared.our-value': SharedOurValue;
      'shared.phones': SharedPhones;
      'shared.quote': SharedQuote;
      'shared.response-time': SharedResponseTime;
      'shared.rich-text': SharedRichText;
      'shared.section-benefit': SharedSectionBenefit;
      'shared.section-success-case': SharedSectionSuccessCase;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.timeline': SharedTimeline;
      'shared.timeline-item': SharedTimelineItem;
      'shared.value': SharedValue;
    }
  }
}
