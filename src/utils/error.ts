const ERROR_CODES: any = {
    EMAIL_NOT_FOUND: 'User with this email not is found',
    INVALID_PASSWORD: 'Invalid password',
    UNKNOWN_ERROR: 'Unknown error',
    auth: 'Please sign in to system',
}

export function error(code: string) {
    return ERROR_CODES[code] ? ERROR_CODES[code] : ERROR_CODES.UNKNOWN_ERROR;
}