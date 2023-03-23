const _storeVar = sessionStorage //LocalStore
const _token = process.env.TOKEN

export const getDataStore = () => {
  return _storeVar.getItem(_token)
}

export const removeDatStore = () => {
  _storeVar.removeItem(_token)
}

export const clearDataStore = () => {
  _storeVar.clear()
}

export const getToken = () => {
  try {
    const auth = JSON.parse(atob(getDataStore()));
    return auth.access_token;  
  } catch (e) {
    return false
  }
  
}