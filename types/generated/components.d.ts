import type { Schema, Attribute } from '@strapi/strapi';

export interface FaktaMenarikFaktaMenariks extends Schema.Component {
  collectionName: 'components_fakta_menarik_fakta_menariks';
  info: {
    displayName: 'fakta menarik';
    description: '';
  };
  attributes: {
    judul: Attribute.String;
    deskripsi: Attribute.String;
    gambar: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'fakta-menarik.fakta-menariks': FaktaMenarikFaktaMenariks;
    }
  }
}
