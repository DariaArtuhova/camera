import {ReviewType} from './types/review-type';
import {createBrowserHistory} from 'history';
import { CamerasType} from './types/camera-type';

export const sortDateDecrement = (a: ReviewType, b: ReviewType): number => {
  const reviewDate1 = +new Date(a.createAt);
  const reviewDate2 = +new Date(b.createAt);

  return Math.sign(reviewDate2 - reviewDate1);
};

const sortReviews = (reviews: ReviewType[]): ReviewType[] => {
  const sortedReviews = [...reviews];

  return sortedReviews.sort(sortDateDecrement);
};

export function getScrollLock () {
  const body = document.getElementById('body') as HTMLElement;
  body.classList.add('scroll-lock');
}

export function deleteScrollLock () {
  const body = document.getElementById('body') as HTMLElement;
  body.classList.remove('scroll-lock');
}

export const browserHistory = createBrowserHistory();
export const calcMinGuitarsPrice = (cameras: CamerasType): number => {
  if(cameras.length <= 0) {
    return 0;
  }

  let min = cameras[0].price;

  cameras.forEach((camera) => {
    if(min > camera.price) {
      min = camera.price;
    }
  });

  return min;
};

export const calcMaxGuitarsPrice = (cameras: CamerasType): number => {
  if(cameras.length <= 0) {
    return 0;
  }

  let max = cameras[0].price;

  cameras.forEach((camera) => {
    if(max < camera.price) {
      max = camera.price;
    }
  });

  return max;
};


export default sortReviews;
