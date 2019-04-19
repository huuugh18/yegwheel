export const toCatalogItem = (productCode, catalog) =>  catalog.find(item => item.productCode === productCode)
export const withCommas = n => n.toLocaleString(undefined, {minimumFractionDigits:2})

export const addDelta = (n, delta, lb=0, ub=10) => 
  n + delta < lb ? lb :
  n + delta > ub ? ub :
  n + delta

export const FormatAddress = (oAddress, format=0) => {
  if(format !== 0) return JSON.stringify(oAddress)
  const {address, city, province, country, postalCode} = oAddress
  const A = address ? 1 : 0
  const B = city ? 2 : 0
  const C = province ? 4 : 0
  const D = country ? 8 : 0
  const E = postalCode ? 16 : 0
  const map = A + B + C + D + E
  switch(map) {
    case 0: return ['---']
    case 1: return [address]
    case 2: return [city]
    case 4: return [province]
    case 8: return [country]
    case 16: return [postalCode]
    case 3: return [address, city]
    default: return [address, `${city}, ${province}`, `${country}, ${postalCode}`]
  }
}