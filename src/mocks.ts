import {CamerasType, CameraType} from './types/camera-type';
import {random, name, internet, date, datatype,} from 'faker';
import {ReviewType} from './types/review-type';

export const makeCamera = (): CameraType => ({
  'id': datatype.number(),
  'name': name.title(),
  'vendorCode': internet.password(),
  'type': 'Коллекционная',
  'category': 'Видеокамера',
  'description': random.word(),
  'level': 'Профессиональный',
  'rating': datatype.number(5),
  'price': datatype.number(),
  'previewImg': internet.url(),
  'previewImg2x': internet.url(),
  'previewImgWebp': internet.url(),
  'previewImgWebp2x': internet.url(),
  'reviewCount': datatype.number(10),
});

export const makeCameraInBasket = {
  1: {camera:  makeCamera(), count: 1},
};

export const makeShoppingPosition = {
  camera:  makeCamera(), count: 1,
};

export const makeCameras = () => {
  const cameras: CamerasType = [];
  for (let i = 0; i < 2; i++) {
    cameras.push(makeCamera());
  }

  return cameras;
};

export const makeReview = (i: number): ReviewType => ({
  cameraId: datatype.number(),
  createAt: date.recent().toDateString(),
  id: datatype.number().toString(),
  rating: i + 3,
  review: random.word(),
  advantage:  random.word(),
  disadvantage:  random.word(),
  userName: name.title(),
});

export const makeReviews = (): ReviewType[] => {
  const reviews: ReviewType[] = [];
  for (let i = 0; i < 2; i++) {
    reviews.push(makeReview(i));
  }

  return reviews;
};
