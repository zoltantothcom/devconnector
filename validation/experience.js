const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateExperienceInput(data) {
  let errors = {};

  const title = !isEmpty(data.title) ? data.title : '';
  const company = !isEmpty(data.company) ? data.company : '';
  const fromDate = !isEmpty(data.from) ? data.from : '';

  if (Validator.isEmpty(title)) {
    errors.title = 'Job title is required.';
  }

  if (Validator.isEmpty(company)) {
    errors.company = 'Company is required.';
  }

  if (Validator.isEmpty(fromDate)) {
    errors.from = 'From date is required.';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
