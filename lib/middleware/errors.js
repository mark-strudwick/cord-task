export const apiErrors = {
  INVALID_ROUTE: {
    code: 404,
    message: 'Invalid API route requested',
  },
  INVALID_REQUEST: {
    code: 422,
    message: 'Invalid parameter(s) found in the request',
  },
  JSON_MISSING_REQUIRED_FIELDS: {
    code: 422,
    message: 'Missing required field(s) in the JSON for this request.',
  },
  JSON_INVALID_TYPE: {
    code: 422,
    message: 'Invalid parameter(s) types found in the JSON for this request.',
  },
  SERVER_ERROR: {
    code: 500,
    message: 'Server failed to process your request.'
  }
}