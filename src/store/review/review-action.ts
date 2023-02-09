import {createAction} from '@reduxjs/toolkit';
import {ReviewType} from '../../types/review-type';

export const loadReviews = createAction<ReviewType[]>('data/loadReview');
export const addReviewCount = createAction('review/addReviewCount');
