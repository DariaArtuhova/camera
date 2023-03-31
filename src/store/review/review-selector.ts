import {Store} from '../../types/store';
import {createSelector} from '@reduxjs/toolkit';
import sortReviews from '../../utils';
import {ReviewType} from '../../types/review-type';


export const getAllReviews = (state: Store):ReviewType[] => state.review.review;
export const getMoreReviews = (state: Store) => state.review.reviewCounter;
export const getCurrentOfferReviews = (state: Store): ReviewType[] =>
  state.review.review;
export const getSortedReviews = createSelector(
  getCurrentOfferReviews,
  (reviews) => sortReviews(reviews)
);
export const getReviewsDataLoadingStatus = (state: Store): boolean => state.review.isLoading;

