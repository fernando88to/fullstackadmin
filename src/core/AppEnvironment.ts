export function CheckAppEnvironmentDevelopemnt() {
    if (process && process.env.NODE_ENV === 'development') {
        return true
    }
    return false
}