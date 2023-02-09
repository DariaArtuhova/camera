import {ReviewType} from './types/review-type';

const sortDateDecrement = (a: ReviewType, b: ReviewType): number => {
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
  body.classList.add('scroll-lock')
}

export function deleteScrollLock () {
  const body = document.getElementById('body') as HTMLElement;
  body.classList.remove('scroll-lock')
}

export default sortReviews;
