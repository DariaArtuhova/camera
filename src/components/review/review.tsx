import {ReviewType} from '../../types/review-type';
import { format } from 'date-fns';
import ru from 'date-fns/locale/ru';
import Rating from '@mui/material/Rating';
import {Icon} from '../icon/icon';


type ReviewProps = {
  reviews: ReviewType;
}

export function Review({reviews}:ReviewProps):JSX.Element {
  const { userName, rating, advantage, disadvantage, review, createAt} = reviews;

  return (
    <li className="review-card">
      <div className="review-card__head">
        <p className="title title--h4">{userName}</p>
        <time className="review-card__data" dateTime="2022-04-13" >{format(new Date(createAt), 'd MMMM ', {locale: ru})}</time>
      </div>
      <div className="rate review-card__rate">
        <Rating
          value={rating}
          icon={<Icon style={{color:'#ED9E41'}}/>}
          emptyIcon={<Icon style={{color:'#EAEAF8'}}/>}
          readOnly
        />
        <p className="visually-hidden">Оценка: {rating}</p>
      </div>
      <ul className="review-card__list">
        <li className="item-list"><span className="item-list__title">Достоинства:</span>
          <p className="item-list__text">{advantage}</p>
        </li>
        <li className="item-list"><span className="item-list__title">Недостатки:</span>
          <p className="item-list__text">{disadvantage}</p>
        </li>
        <li className="item-list"><span className="item-list__title">Комментарий:</span>
          <p className="item-list__text">{review}</p>
        </li>
      </ul>
    </li>

  );
}
