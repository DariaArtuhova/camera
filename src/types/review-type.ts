
export type ReviewType = {
  id: string;
  userName: string;
  advantage: string;
  disadvantage: string;
  review: string;
  rating: number;
  createAt: string;
  cameraId: number;
};

export type ReviewPostType = {
  'cameraId': number;
  'userName': string;
  'advantage': string;
  'disadvantage': string;
  'review': string;
  'rating': number;
};

export const Ratings: { value: number; title: string }[] = [
  {
    value: 5,
    title: 'Отлично',
  },
  {
    value: 4,
    title: 'Хорошо',
  },
  {
    value: 3,
    title: 'Нормально',
  },
  {
    value: 2,
    title: 'Плохо',
  },
  {
    value: 1,
    title: 'Ужасно',
  },
];
