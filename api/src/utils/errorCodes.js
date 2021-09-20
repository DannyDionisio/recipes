module.exports.DB_CODE_ERRORS = {
  // https://github.com/mongodb/mongo/blob/master/src/mongo/base/error_codes.yml
  11000: "DUPLICATED_FIELD",
};

module.exports.VALIDATION_ERRORS = {
  required: "FIELD_REQUIRED",
  invalidFileType: "INVALID_FILE_TYPE",
  ObjectId: "INVALID_OBJECT_ID",
  invalidUrl: "INVALID_URL",
};
