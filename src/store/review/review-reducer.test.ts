import { makeReview, makeReviews} from '../../mocks';
import {InitialState, reviewReducer} from './review-reducer';
import {REVIEW_STEP} from '../../const';
import {ReviewType} from '../../types/review-type';
import {fetchCurrentCameraAction, fetchReviewsAction} from '../../services/api-actions';

describe('Reducer: cameraReducer', ()=> {
  let state: InitialState;
  const reviews: ReviewType[] = makeReviews();
  const currentReview = makeReview(5);

  beforeEach(() => {
    state = {
      review: [],
      currentReview: null,
      reviewCounter: REVIEW_STEP,
      isLoading: false
    };
  });

  it('without additional parameters should return initial state', () => {
    expect(reviewReducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual(state);
  });

  it('should update state by load reviews', () => {
    state = {...state, review: reviews};
    expect(reviewReducer(state, {type: fetchReviewsAction.fulfilled.type, payload: reviews}))
      .toEqual({...state, review: reviews});
  });

  it('should set current review by load review', () => {
    state = {...state, review: reviews, currentReview: currentReview};
    expect(reviewReducer(state, {type: fetchCurrentCameraAction.fulfilled.type, payload: currentReview}))
      .toEqual({...state, currentReview: currentReview});
  });
});
