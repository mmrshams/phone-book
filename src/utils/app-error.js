const AppError = (field) => ({
  RECORD_NOT_FOUND: {
    code: 'RECORD_NOT_FOUND',
    field
  },
  DUPLICATED_KEY: {
    code: 'DUPLICATED_KEY',
    field
  },
  FOREIGN_KEY: {
    code: 'FOREIGN_KEY',
    field
  },
  DUPLICATED_ORGANIZATION: {
    code: 'DUPLICATED_ORGANIZATION',
    field
  },
  DUPLICATED_STAFF: {
    code: 'DUPLICATED_STAFF',
    field
  },
  DUPLICATED_CLIENT_ADMIN: {
    code: 'DUPLICATED_CLIENT_ADMIN',
    field
  },
  DUPLICATED_EMAIL: {
    code: 'DUPLICATED_EMAIL',
    field
  },
  SURVEYGROUP_NOT_FOUND: {
    code: 'SURVEYGROUP_NOT_FOUND',
    field
  },
  PROJECT_NOT_FOUND: {
    code: 'PROJECT_NOT_FOUND',
    field
  },
  STAFF_NOT_FOUND: {
    code: 'STAFF_NOT_FOUND',
    field
  },
  ORGANIZATION_NOT_FOUND: {
    code: 'ORGANIZATION_NOT_FOUND',
    field
  },
  LOGIN_FAILED: {
    code: 'LOGIN_FAILED',
    field
  },
  UNAUTHORIZED: {
    code: 'UNAUTHORIZED',
    field
  }
})

export default { AppError }
