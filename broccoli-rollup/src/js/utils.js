import $ from 'jquery';

export const duplicate = (target) => {
  $(target)
    .clone()
    .hide()
    .appendTo(target)
    .show(3000);
};
