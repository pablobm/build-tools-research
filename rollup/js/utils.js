import $ from 'jquery';

export const duplicate = (target) => {
  $(target)
    .clone()
    .hide()
    .appendTo(target)
    .show(3000);
};

export const tap = (func) => {
  return (first, ...args) => {
    func(first, ...args);
    return first;
  }
};
