import $ from 'jquery';

export const activateIndicator = () => {
  $('.load-indicator')
    .addClass('load-indicator__active')
    .text("YES");
}

export const print = (...args) => {
  console.log(...args);
};
