'use strict';

const additionalInfoController = module.exports;
additionalInfoController.get = async function (req, res) {
  const data = {
    title: 'Additional Information'
  };
  res.render('additional-info', data);
};