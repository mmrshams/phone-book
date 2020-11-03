const getColumnFromObject = (entity) =>
  Object.keys(entity).map((name) =>
    name.match(/[A-Z]/g) ? `"${name}"` : name
  )

const getValuesFromObject = (entity) =>
  Object.values(entity).map((v) =>
    v === undefined ? 'null' : typeof v === 'string' ? `'${v}'` : v
  )

const generateRawUpsertQuery = (tableName, columns, values) => {
  values = Array.isArray(values) ? [values] : values
  return `
    INSERT INTO ${tableName}
      (${columns.join(',')})
    VALUES
      ${values.map((record) => `(${record.join(',')})`).join(',')}
    ON CONFLICT (id) DO UPDATE SET
      ${columns.map((column) => `${column} =excluded.${column}`).join(',')}
  `
}

export default {
  getColumnFromObject,
  getValuesFromObject,
  generateRawUpsertQuery
}
