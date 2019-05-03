// production settings
let addSaleUri,redirectUri,logoutUri

if(process.env.NODE_ENV === 'production') {
  addSaleUri = "https://yeg.azurewebsites.net/api/sale"
  redirectUri = "https://yegwheel.com/callback"
  logoutUri = "https://yegwheel.com"
}
else  {
  addSaleUri = "https://localhost:7071/api/sale"
  redirectUri = 'http://localhost:3000/callback'
  logoutUri = 'http://localhost:3000'
}

export {addSaleUri, redirectUri, logoutUri}
