export type UserInfo = {
    id: string
    username: string
    name: string
    status: string
    imagePath: string
}

export type AuthResponse = {
    accessToken: string
    expiresAt: string
    refreshToken: string
    tokenType: string
}
