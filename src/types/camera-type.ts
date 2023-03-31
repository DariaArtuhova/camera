export type CameraType = {
  'id': number;
  'name': string;
  'vendorCode': string;
  'type': string;
  'category': string;
  'description': string;
  'level': string;
  'rating': number;
  'price': number;
  'previewImg': string;
  'previewImg2x': string;
  'previewImgWebp': string;
  'previewImgWebp2x': string;
  'reviewCount': number;
}

export type CamerasType = CameraType[];

export const cameras: CameraType[] = [
  {
    'id': 1,
    'name': 'Ретрокамера Dus Auge lV',
    'vendorCode': 'DA4IU67AD5',
    'type': 'Коллекционная',
    'category': 'Видеокамера',
    'description': 'Немецкий концерн BRW разработал видеокамеру Das Auge IV в начале 80-х годов, однако она до сих пор пользуется популярностью среди коллекционеров и яростных почитателей старинной техники.',
    'level': 'Любительский',
    'rating': 1,
    'price': 73450,
    'previewImg': '../img/cameras/das-auge.jpg',
    'previewImg2x': '../img/cameras/das-auge@2x.jpg',
    'previewImgWebp': '../img/cameras/das-auge.webp',
    'previewImgWebp2x': '../img/cameras/das-auge@2x.webp',
    'reviewCount': 16
  },
  {
    'id': 2,
    'name': 'Dus Auge lV',
    'vendorCode': 'DA4IU67AD5',
    'type': 'Коллекционная',
    'category': 'Видеокамера',
    'description': 'Немецкий концерн BRW разработал видеокамеру Das Auge IV в начале 80-х годов, однако она до сих пор пользуется популярностью среди коллекционеров и яростных почитателей старинной техники.',
    'level': 'Любительский',
    'rating': 4,
    'price': 4,
    'previewImg': '../img/cameras/das-auge.jpg',
    'previewImg2x': '../img/cameras/das-auge@2x.jpg',
    'previewImgWebp': '../img/cameras/das-auge.webp',
    'previewImgWebp2x': '../img/cameras/das-auge@2x.webp',
    'reviewCount': 16
  },
  {
    'id': 3,
    'name': 'Ретрокамера ',
    'vendorCode': 'DA4IU67AD5',
    'type': 'Коллекционная',
    'category': 'Видеокамера',
    'description': 'Немецкий концерн BRW разработал видеокамеру Das Auge IV в начале 80-х годов, однако она до сих пор пользуется популярностью среди коллекционеров и яростных почитателей старинной техники.',
    'level': 'Любительский',
    'rating': 3,
    'price': 2,
    'previewImg': '../img/cameras/das-auge.jpg',
    'previewImg2x': '../img/cameras/das-auge@2x.jpg',
    'previewImgWebp': '../img/cameras/das-auge.webp',
    'previewImgWebp2x': '../img/cameras/das-auge@2x.webp',
    'reviewCount': 16
  }
];


export type PromoType =
  {
    'id': number;
    'name': string;
    'previewImg': string;
    'previewImg2x': string;
    'previewImgWebp': string;
    'previewImgWebp2x': string;
  }

export const promo: PromoType =
    {
      'id': 1,
      'name': 'Ретрокамера Dus Auge lV',
      'previewImg': '../img/cameras/promo.jpg',
      'previewImg2x': 'img/cameras/promo@2x.jpg',
      'previewImgWebp': 'img/cameras/promo.webp',
      'previewImgWebp2x': 'img/cameras/promo@2x.webp'
    };


export type SortParams = {
  sort?: string;
  order?: string;
  priceStart?: string;
  priceEnd?: string;
  count?: string[];
  type?: string[];
  category?: string[];
  level?: string[];
}
