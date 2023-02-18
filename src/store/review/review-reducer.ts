import {createReducer} from '@reduxjs/toolkit';
import { addReviewCount} from './review-action';
import {REVIEW_STEP} from '../../const';
import {ReviewType} from '../../types/review-type';
import {fetchReviewsAction} from '../../services/api-actions';

export type InitialState = {
  review: ReviewType[];
  currentReview: ReviewType | null;
  reviewCounter: number;
  isLoading: boolean;
}
const initialState: InitialState = {
  review: [],
  currentReview: null,
  reviewCounter: REVIEW_STEP,
  isLoading: false
};

export const reviewReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchReviewsAction.pending, (state, action) => {
      state.isLoading = true;
    })
    .addCase(fetchReviewsAction.fulfilled, (state, action) => {
      state.review = action.payload;
      state.isLoading = false;
    })
    .addCase(addReviewCount, (state) => {
      state.reviewCounter += REVIEW_STEP;
    });
});
