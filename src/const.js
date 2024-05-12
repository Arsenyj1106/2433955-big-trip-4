const pointTypes = [
  'Taxi',
  'Bus',
  'Train',
  'Ship',
  'Drive',
  'Flight',
  'Check-in',
  'Sightseeing',
  'Restaurant'
];

const destinations = [
  'Miass',
  'Chelyabinsk',
  'Amsterdam',
  'Prague',
  'Luxembourg',
];

const dates = [
  {
    start: new Date(Date.UTC(2024, 5, 11, 8, 15, 0, 0)),
    end: new Date(Date.UTC(2024, 5, 11, 10, 15, 0, 0))
  },
  {
    start: new Date(Date.UTC(2024, 3, 1, 18, 30, 10, 0)),
    end: new Date(Date.UTC(2024, 3, 1, 20, 30, 10, 0))
  },
  {
    start: new Date(Date.UTC(2024, 8, 11, 12, 0, 0, 0)),
    end: new Date(Date.UTC(2024, 8, 11, 14, 0, 0, 0))
  },
];

const BLANC_TEST =
{
  type: null,
  destination: null,
  cost: 0,
  date: {
    start: null,
    end: null,
  },
  offers: [

  ],
  description:'',
  photosSrc: []
};

const DATE_FORMAT_EDIT = 'DD/MM/YY hh:mm';
const DATE_FORMAT_POINT_DAY = 'MMM DD';
const DATE_FORMAT_POINT_HOURS = 'hh-mm';

const PHOTOS_COUNT = 20;
const MAX_PRICE = 2000;
const MAX_OFFER_ID = 5;
const POINTS_COUNT = 12;

const PresenterModes = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING',
};

const SortTypes = {
  DEFAULT: 'default',
  BY_PRICE: 'price',
  BY_TIME: 'time',
  BY_OFFERS: 'offers',
  BY_NAME: 'name',
};

export {pointTypes, destinations, BLANC_TEST, DATE_FORMAT_EDIT, DATE_FORMAT_POINT_DAY,
  DATE_FORMAT_POINT_HOURS, PHOTOS_COUNT, MAX_PRICE, MAX_OFFER_ID, POINTS_COUNT, dates, PresenterModes, SortTypes};
