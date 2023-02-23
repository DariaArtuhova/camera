import { MAX_RATING } from '../../const';

type RatingProps = {
  rating: number | undefined;
}

export function Rating({rating}: RatingProps): JSX.Element {
  return (
    <>
      {Array.from({length: MAX_RATING}, (_, min) => {
        const iconClass = min < rating! ? '#icon-full-star' : '#icon-star';

        return (
          <svg width={17} height={16} aria-hidden="true" key={min} data-testid='stars'>
            <use xlinkHref={iconClass} />
          </svg>
        );
      })}
    </>
  );
}
