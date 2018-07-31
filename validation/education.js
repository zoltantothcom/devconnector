const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateExperienceInput(data) {
  let errors = {};

  const school = !isEmpty(data.school) ? data.school : '';
  const degree = !isEmpty(data.degree) ? data.degree : '';
  const fieldOfStudy = !isEmpty(data.fieldofstudy) ? data.fieldofstudy : '';
  const fromDate = !isEmpty(data.from) ? data.from : '';

  if (Validator.isEmpty(school)) {
    errors.school = 'School is required.';
  }

  if (Validator.isEmpty(degree)) {
    errors.degree = 'Degree is required.';
  }

  if (Validator.isEmpty(fieldOfStudy)) {
    errors.fieldofstudy = 'Field of study is required.';
  }

  if (Validator.isEmpty(fromDate)) {
    errors.from = 'From date is required.';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
