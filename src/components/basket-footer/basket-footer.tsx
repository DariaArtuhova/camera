import {useAppDispatch, useAppSelector} from '../../store';
import {
  getCamerasInBasket,
  getCoupon,
} from '../../store/camera/camera-selector';
import {ChangeEvent, FormEvent, useEffect, useRef, useState} from 'react';
import {clearCart} from '../../store/basket/basket-reduser';
import { postPromocodeDiscrountAction} from '../../services/api-actions';
import {sendOrder} from '../../services/api';
import {PROMO_CODES} from '../../const';
import {deleteScrollLock} from '../../utils';
import {ProductBasketSuccess} from '../product-basket-success/product-basket-success';
import {ErrorModal} from '../error-modal/error-modal';


export function BasketFooter():JSX.Element {
  const [isModal, setModal] = useState(false);
  const [isError, setError] = useState(false);
  const shoppingPositions = useAppSelector(getCamerasInBasket);
  const dispatch = useAppDispatch();
  const [allPriceValue, setAllPriceValue] = useState(0);
  const [resultPrice, setResultPrice] = useState(0);
  const [discountValue, setDiscountValue] = useState(0);
  const coupon = useAppSelector(getCoupon);
  const promoRef = useRef<HTMLInputElement | null>(null);
  const [validation, setValidation] = useState({
    checkIsValid: false,
    className: '',
  });

  useEffect(() => {
    let allPrice = 0;

    Object.values(shoppingPositions).forEach((shoppingPosition) => {
      allPrice += shoppingPosition.camera.price * shoppingPosition.count;
    });

    setAllPriceValue(allPrice);
  }, [shoppingPositions]);

  useEffect(() => {
    setDiscountValue(Math.round(Number(coupon) * allPriceValue / 100));
    if(coupon) {
      let summ = allPriceValue - Number(coupon) * allPriceValue / 100;
      summ = Math.round(summ);
      setResultPrice(summ);
    }
  }, [dispatch, coupon, allPriceValue]);

  const handleCouponInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    dispatch((postPromocodeDiscrountAction(evt.target.value.replace(/\s/g, ''))));
  };

  const handleCouponFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if(PROMO_CODES.some((item) => item === promoRef.current?.value) && promoRef.current?.value) {
      setValidation({
        checkIsValid: true,
        className: 'is-valid',
      });
      dispatch(postPromocodeDiscrountAction(promoRef.current?.value));
    } else {
      setValidation({
        checkIsValid: true,
        className: 'is-invalid',
      });
    }
  };
  const handleSendOrderClick = () => {
    const camerasIds = Object.keys(shoppingPositions).map((id) => Number(id));
    sendOrder({camerasIds, coupon: (promoRef.current?.value) ? promoRef.current.value : null}).then((res) => {
      if(res === 201) {
        setModal(true);
        dispatch(clearCart());
      } else {
        setError(true);
      }
    });
  };

  return (
    <>
      <div className="basket__summary">
        <div className="basket__promo">
          <p className="title title--h4">Если у вас есть промокод на скидку, примените его в этом поле</p>
          <div className="basket-form">
            <form onSubmit={handleCouponFormSubmit} action="#">
              <div className={validation.checkIsValid && !validation.className ? 'custom-input' : `custom-input ${validation['className']}`}>
                <label><span className="custom-input__label">Промокод</span>
                  <input onChange={handleCouponInputChange}
                    ref={promoRef}
                    type="text"
                    name="promo"
                    placeholder="Введите промокод"
                    defaultValue={''}
                  />
                </label>
                {validation['className'] === 'is-invalid' && <p className="custom-input__error">Промокод неверный</p>}
                {validation['className'] === 'is-valid' && <p className="custom-input__success">Промокод принят!</p>}
              </div>
              <button className="btn" type="submit">Применить
              </button>
            </form>
          </div>
        </div>
        <div className="basket__summary-order">
          <p className="basket__summary-item"><span className="basket__summary-text">Всего:</span>
            <span className="basket__summary-value">{allPriceValue} ₽</span>
          </p>
          <p className="basket__summary-item"><span className="basket__summary-text">Скидка:</span>
            <span className="basket__summary-value basket__summary-value--bonus">{discountValue || 0} ₽</span>
          </p>
          <p className="basket__summary-item"><span className="basket__summary-text basket__summary-text--total">К оплате:</span>
            <span className="basket__summary-value basket__summary-value--total">{resultPrice || allPriceValue} ₽</span>
          </p>
          <button className="btn btn--purple" type="submit" onClick={handleSendOrderClick}>Оформить заказ
          </button>
        </div>
      </div>
      <ProductBasketSuccess
        openModal={isModal}
        onClose={() => {
          deleteScrollLock();
          setModal(false);
        }}
      />
      <ErrorModal openModal={isError}
        onClose={() => {
          deleteScrollLock();
          setError(false);
        }}
      />
    </>
  );
}
