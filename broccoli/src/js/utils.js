import $ from 'jquery';

const duplicate = (target) => {
  $(target)
    .clone()
    .hide()
    .appendTo(target)
    .show(3000);
};

export default { duplicate };
