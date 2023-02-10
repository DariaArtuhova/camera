import {Review} from '../review/review';
import {useAppSelector} from '../../store';
import { getMoreReviews, getSortedReviews} from '../../store/review/review-selector';
import {memo, useState} from 'react';
import {NewComment} from '../new-comment/new-comment';
import {getCurrentCameras} from '../../store/camera/camera-selector';
import {CameraType} from '../../types/camera-type';
import {deleteScrollLock, getScrollLock} from '../../utils';

export function ReviewList():JSX.Element {
  const reviewCounter = useAppSelector(getMoreReviews);
  const [isModal, setModal] = useState(false);
  const currentCamera = useAppSelector(getCurrentCameras) as CameraType;
  const sortedReviews = useAppSelector(getSortedReviews).slice(0, 30);
  return (
    <>
      <section className="review-block">
        <div className="container">
          <div className="page-content__headed">
            <h2 className="title title--h3">Отзывы</h2>
            <button className="btn" type="button" onClick={() => {
              getScrollLock();
              setModal(true);
            }}
            >Оставить свой отзыв
            </button>
          </div>
          <ul className="review-block__list">
            {sortedReviews
              .slice(0, reviewCounter)
              .map((reviews) => <Review reviews={reviews} key={reviews.id}/>)}
          </ul>
        </div>
      </section>
      <NewComment
        isVisible={isModal}
        onClose={() => {
          deleteScrollLock();
          setModal(false);
        }}
        cameraId={currentCamera.id}
      />
    </>
  );
}
export default memo(ReviewList);
