export default {
  meEndpoint: 'http://135.181.165.228:8080/users/@me',
  loginEndpoint: 'http://135.181.165.228:8080/auth/login',
  registerEndpoint: '/jwt/register',
  storageTokenKeyName: 'accessToken',
  onTokenExpiration: 'refreshToken' // logout | refreshToken
}
