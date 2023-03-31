import {useAppDispatch} from '../../store';
import {Fragment, useEffect, useState} from 'react';
import {DEFAULT_RATING} from '../../const';
import {useForm} from 'react-hook-form';
import {Ratings, ReviewType} from '../../types/review-type';
import {NewReviewSuccess} from '../new-review-success/new-review-success';
import {sendNewReview} from '../../services/api-actions';
import {deleteScrollLock, getScrollLock} from '../../utils';

type newCommentProps = {
  isVisible: boolean;
  onClose: () => void;
  cameraId: number;
}

export function NewComment({isVisible, onClose, cameraId}: newCommentProps): JSX.Element {
  const {register, handleSubmit, formState: {errors}} = useForm<NewReview>();
  const onKeydown = ({ key }: KeyboardEvent) => {
    switch (key) {
      case 'Escape':
        deleteScrollLock();
        onClose();
        break;
    }
  };
  useEffect(() => {
    document.addEventListener('keydown', onKeydown);
    return () => document.removeEventListener('keydown', onKeydown);
  }, []);
  type NewReview = Pick<ReviewType, 'userName' | 'advantage' | 'disadvantage' | 'rating' | 'cameraId' | 'review'>;

  const [isModal, setModal] = useState(false);
  const [isSend, setSend] = useState(false);

  const [review, setReview] = useState<NewReview>({
    userName: '',
    advantage: '',
    disadvantage: '',
    rating: DEFAULT_RATING,
    review: '',
    cameraId: 0
  });

  const dispatch = useAppDispatch();

  const onSubmit = async () => {
    const formData = {
      review: review.review,
      cameraId: cameraId,
      userName: review.userName,
      advantage: review.advantage,
      disadvantage: review.disadvantage,
      rating: review.rating,
    };
    setSend(true);
    await dispatch(sendNewReview(formData));
    onClose();
    getScrollLock();
    setModal(true);
  };
  return (
    <>
      <div className={`modal ${
        isVisible ? 'is-active' : ''
      }`}
      >
        <div className="modal__wrapper">
          <div className="modal__overlay" onClick={onClose}/>
          <div className="modal__content">
            <p className="title title--h4">Оставить отзыв</p>
            <div className="form-review">
              <form method="post"
                onSubmit={(e) => {
                  handleSubmit(onSubmit)(e);
                }}

              >
                <div className="form-review__rate">
                  <fieldset className="rate form-review__item">
                    <legend className="rate__caption">Рейтинг
                      <svg width="9" height="9" aria-hidden="true">
                        <use xlinkHref="#icon-snowflake"/>
                      </svg>
                    </legend>
                    <div className="rate__bar">
                      <div className="rate__group">
                        {
                          Ratings.map(({value, title}) => {
                            const id = `${value}-stars`;
                            return (
                              <Fragment key={id}>
                                <input
                                  className="visually-hidden"
                                  type="radio"
                                  id={id}
                                  value={value}
                                  checked={review.rating === value}
                                  {...register('rating',
                                    {
                                      required: true
                                    })}
                                  onChange={(evt) => setReview({...review, rating: +evt.target.value})}
                                  aria-invalid={errors.rating ? 'true' : 'false'}
                                />
                                <label
                                  className="rate__label"
                                  htmlFor={id}
                                  title={title}
                                >
                                </label>
                              </Fragment>
                            );
                          })
                        }
                      </div>
                      <div className="rate__progress"><span className="rate__stars">{review.rating}</span>
                        <span>/</span>
                        <span className="rate__all-stars">5</span>
                      </div>
                    </div>
                    {errors.rating?.type === 'required' &&
                    <><br/>
                      <p className="rate__message" style={{opacity: 1}}>Нужно оценить товар</p>
                    </>}
                  </fieldset>
                  <div className="custom-input form-review__item">
                    <label>
                      <span className="custom-input__label">Ваше имя
                        <svg width="9" height="9" aria-hidden="true">
                          <use xlinkHref="#icon-snowflake"/>
                        </svg>
                      </span>
                      <input type="text" id="name" placeholder="Введите ваше имя"
                        {...register('userName',
                          {
                            required: true,
                            pattern: /^[А-Яа-яЁёA-Za-z']/i,
                            minLength: {value: 2, message: 'error'},
                            maxLength: {value: 15, message: 'error'},
                          })}
                        onChange={(evt) => setReview({...review, userName: evt.target.value})}
                        aria-invalid={errors.userName ? 'true' : 'false'}
                      />
                    </label>
                    {errors.userName?.type === 'required' &&
                    <><br/>
                      <p className="custom-input__error" style={{opacity: 1}}>Нужно указать имя</p>
                    </>}
                    {errors.userName && errors.userName.message &&
                    <p className="custom-input__error" style={{opacity: 1}}>Длина должна быть от 2 до 15 символов</p>}
                  </div>
                  <div className="custom-input form-review__item">
                    <label>
                      <span className="custom-input__label">Достоинства
                        <svg width="9" height="9" aria-hidden="true">
                          <use xlinkHref="#icon-snowflake"/>
                        </svg>
                      </span>
                      <input type="text" placeholder="Основные преимущества товара"
                        {...register('advantage',
                          {
                            required: true,
                            pattern: /^[А-Яа-яЁёA-Za-z']/i,
                          })}
                        onChange={(evt) => setReview({...review, advantage: evt.target.value})}
                        aria-invalid={errors.advantage ? 'true' : 'false'}
                      />
                    </label>
                    {errors.advantage?.type === 'required' &&
                    <><br/>
                      <p className="custom-input__error" style={{opacity: 1}}>Нужно указать достоинства</p>
                    </>}
                  </div>
                  <div className="custom-input form-review__item">
                    <label>
                      <span className="custom-input__label">Недостатки
                        <svg width="9" height="9" aria-hidden="true">
                          <use xlinkHref="#icon-snowflake"/>
                        </svg>
                      </span>
                      <input type="text" placeholder="Главные недостатки товара"
                        {...register('disadvantage',
                          {
                            required: true,
                            pattern: /^[А-Яа-яЁёA-Za-z']/i,
                          })}
                        onChange={(evt) => setReview({...review, disadvantage: evt.target.value})}
                        aria-invalid={errors.disadvantage ? 'true' : 'false'}
                      />
                    </label>
                    {errors.disadvantage?.type === 'required' &&
                    <><br/>
                      <p className="custom-input__error" style={{opacity: 1}}>Нужно указать недостатки</p>
                    </>}
                  </div>
                  <div className="custom-textarea form-review__item">
                    <label>
                      <span className="custom-textarea__label">Комментарий
                        <svg width="9" height="9" aria-hidden="true">
                          <use xlinkHref="#icon-snowflake"/>
                        </svg>
                      </span>
                      <textarea
                        placeholder="Поделитесь своим опытом покупки"
                        {...register('review',
                          {
                            required: true,
                            pattern: /^[А-Яа-яЁёA-Za-z']/i,
                            minLength: {value: 5, message: 'error'},
                          })}
                        onChange={(evt) => setReview({...review, review: evt.target.value})}
                        aria-invalid={errors.review ? 'true' : 'false'}
                      />
                    </label>
                    {errors.review?.type === 'required' &&
                    <><br/>
                      <div className="custom-textarea__error" style={{opacity: 1}}>Нужно добавить комментарий</div>
                    </>}
                    {errors.review && errors.review.message &&
                    <p className="custom-input__error" style={{opacity: 1}}>Длина должна быть от 5 символов</p>}
                  </div>
                </div>
                <button className="btn btn--purple form-review__btn" type="submit" disabled={isSend}>{isSend ? 'Отправляю...' : 'Отправить отзыв'}</button>
              </form>
            </div>
            <button className="cross-btn" type="button" aria-label="Закрыть попап" onClick={onClose}>
              <svg width="10" height="10" aria-hidden="true">
                <use xlinkHref="#icon-close"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <NewReviewSuccess
        isVisible={isModal}
        onClose={() => {
          deleteScrollLock();
          setModal(false);
        }}
      />
    </>
  );
}
