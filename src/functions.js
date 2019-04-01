export const toCatalogItem = (productCode, catalog) => catalog.find(item => item.productCode === productCode)


export const withCommas = n => n.toLocaleString(undefined, {minimumFractionDigits:2})

export const addDelta = (n, delta, lb=0, ub=10) => 
  n + delta < lb ? lb :
  n + delta > ub ? ub :
  n + delta
