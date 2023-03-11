export enum AppRoute {
  Basket = '/basket',
  Catalog = '/page_:pageNumber/',
  Root = '/',
  Card = '/cameras',
  Error = '*'
}

export enum ApiRoute {
  Cameras = '/cameras',
  Reviews = '/reviews',
  Similar = '/similar',
  Promo = '/promo',
}

export const pages = [
  1, 2, 3, 4, 5, 6, 7, 8, 9 ,10
];
export const REVIEW_STEP = 3;

export const DEFAULT_RATING = 0;

export const CONTENT_PER_PAGE = 9;

export const MAX_RATING = 5;

export enum SortOder {
  LowToHigh = 'CamerasAscending',
  HighToLow = 'CamerasDescending',
}

export enum OrderTypes {
  Asc = 'asc',
  Desc = 'desc',
}

export enum CameraDetailsTypes {
  Feature = 'feature',
  Description = 'description',
}

export const sort = [
  {
    type: SortOder.LowToHigh,
    name: 'sort-icon',
    id: 'up',
    label:'По возрастанию'
  },
  {
    type: SortOder.HighToLow,
    name: 'sort-icon',
    id: 'down',
    label:'По убыванию'
  },
];

export enum SortTypes {
  Price = 'price',
  Popular = 'rating'
}

export const sortTypes = [
  {
    type: SortTypes.Price,
    id: 'sortPrice',
    name: 'по цене'
  },
  {
    type: SortTypes.Popular,
    id: 'sortPopular',
    name: 'по популярности'
  }];
export const enum QueryParameter {
  Limit = '_limit',
  Page = '_page',
  NameLike = 'name_like',
  Sort = '_sort',
  Order = '_order',
  Type = 'type',
  Category = 'category',
  Level = 'level',
  PriceFloor = 'price_gte',
  PriceCeil = 'price_lte'
}

export enum QueryParamsList {
  PriceEnd = 'priceEnd',
  PriceStart = 'priceStart',
  Order = 'order',
  Sort = 'sort',
  Type = 'type',
  Level = 'level',
  Category = 'category',
  Count = 'count',
  Feature = 'feature'
}
export enum CameraCategory {
  PhotoCamera = 'Фотоаппарат',
  VideoCamera = 'Видеокамера',
}

export const LimitedFilter = {
  Category: 'Видеокамера',
  Type: {
    'Моментальная': 'Моментальная',
    'Плёночная': 'Плёночная'
  }
} as const;

export enum CameraType {
  Digital = 'Фотокамера',
  Film ='Плёночная',
  Snapshot = 'Моментальная',
  Collection = 'Коллекционная',
}

export enum CameraLevel {
  Junior = 'Нулевой',
  Middle = 'Любительский',
  Senior = 'Профессиональный'
}

export const FILTER_LEVEL_TYPES = [
  {
    id: 'Нулевой',
    type: CameraLevel.Junior,
    name: 'Нулевой',
    isChecked: false
  },
  {
    id: 'CameraLevel',
    type: CameraLevel.Middle,
    name: 'Любительский',
    isChecked: false
  },
  {
    id: 'Профессиональный',
    type: CameraLevel.Senior,
    name: 'Профессиональный',
    isChecked: false
  },
];

export const FILTER_CATEGORY_TYPES = [
  {
    id: 'Фотоаппарат',
    type: CameraCategory.PhotoCamera,
    name: 'Цифровая',
    isChecked: false
  },
  {
    id: 'Видеокамера',
    type: CameraCategory.VideoCamera,
    name: 'Видеокамера',
    isChecked: false
  },
];

export const FILTER_CAMERA_TYPES = [
  {
    id: 'Фотокамера',
    type: CameraType.Digital,
    name: 'Фотокамера',
    isChecked: false
  },
  {
    id: 'Плёночная',
    type: CameraType.Film,
    name: 'Плёночная',
    isChecked: false
  },
  {
    id: 'Моментальная',
    type: CameraType.Snapshot,
    name: 'Моментальная',
    isChecked: false
  },
  {
    id: 'Коллекционная',
    type: CameraType.Collection,
    name: 'Коллекционная',
    isChecked: false
  },
];
