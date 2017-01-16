import $ from 'jquery';

const activateIndicator = () => {
  $('.load-indicator')
    .addClass('load-indicator__active')
    .text("YES");
}

const print = (...args) => {
  console.log(...args);
};

export default {
  activateIndicator,
  print,
};
