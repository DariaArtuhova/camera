import {createReducer} from '@reduxjs/toolkit';
import { addReviewCount, loadReviews} from './review-action';
import {REVIEW_STEP} from '../../const';
import {ReviewType} from '../../types/review-type';

export type InitialState = {
  review: ReviewType[];
  currentReview: ReviewType | null;
  reviewCounter: number;
}
const initialState: InitialState = {
  review: [],
  currentReview: null,
  reviewCounter: REVIEW_STEP

};

export const reviewReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadReviews, (state, action) => {
      state.review = action.payload;
    })
    .addCase(addReviewCount, (state) => {
      state.reviewCounter += REVIEW_STEP;
    });
});
