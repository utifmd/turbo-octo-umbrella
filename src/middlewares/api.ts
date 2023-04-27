export const CALL_API = "CALL_API"

const httpRequest = (store: any) => (next: any) => (action: {}) => {
    return next(action)
}
export default httpRequest