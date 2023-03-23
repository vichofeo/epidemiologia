import { getToken, clearDataStore } from '@/config/localStore'
export const authGuard = (to, from, next) => {
    try {
        const authUsr = getToken()
        if (!authUsr) {
            next({
                name: "Login"
            })
        }
    } catch (e) {
        clearDataStore()
        next({
            name: "Login"
        })
    }

}