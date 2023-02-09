import {useAppDispatch} from '../../store';
import {addReviewCount} from '../../store/review/review-action';

export function ShowMoreButton() :JSX.Element {

  const dispatch = useAppDispatch();

  return (
    <div className="review-block__buttons">
      <button className="btn btn--purple" type="button"
        onClick={() => dispatch(addReviewCount())}
      >Показать больше отзывов
      </button>
    </div>
  );
}
