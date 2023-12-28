// ** React Imports
import { createContext, useEffect, useState } from 'react'

// ** Next Import
import { useRouter } from 'next/router'

// ** Axios
import axios from 'axios'

// ** Config
import authConfig from 'src/configs/auth'

// ** Defaults
const defaultProvider = {
  user: null,
  loading: true,
  setUser: () => null,
  setLoading: () => Boolean,
  login: () => Promise.resolve(),
  logout: () => Promise.resolve()
}
const AuthContext = createContext(defaultProvider)

const AuthProvider = ({ children }) => {
  // ** States
  const [user, setUser] = useState(defaultProvider.user)
  const [loading, setLoading] = useState(defaultProvider.loading)

  // ** Hooks
  const router = useRouter()
  useEffect(() => {
    const initAuth = async () => {
      const storedToken = window.localStorage.getItem(authConfig.storageTokenKeyName)
      if (storedToken) {
        setLoading(true)
        await axios
          .get(authConfig.meEndpoint, {
            headers: {
              Authorization: storedToken
            }
          })
          .then(async response => {
            const userData = filterDatas(response.data);
            setLoading(false)
            setUser(userData)
          })
          .catch(() => {
            localStorage.removeItem('userData')
            localStorage.removeItem('refreshToken')
            localStorage.removeItem('accessToken')
            setUser(null)
            setLoading(false)
            if (authConfig.onTokenExpiration === 'logout' && !router.pathname.includes('login')) {
              router.replace('/login')
            }
          })
      } else {
        setLoading(false)
      }
    }
    initAuth()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const filterDatas = userData => {
    if (userData.hasOwnProperty('password')) {
      const { password, ...filteredData } = userData;
      return { ...filteredData, role: 'admin' };
    }
    return userData;
  };
  

  const handleLogin = (params, errorCallback) => {
    axios
      .post(authConfig.loginEndpoint, params)
      .then(async response => {
        console.log('Login response:', response);
        window.localStorage.setItem(authConfig.storageTokenKeyName, response.data.jwt);
        const returnUrl = router.query.returnUrl;
        
        // Set loading to false before making the redirect
        setLoading(false);
  
        axios.get(authConfig.meEndpoint, {
          headers: {
            Authorization: response.data.jwt
          }
        })
        .then(userResponse => {
          console.log(userResponse);
          const userData = filterDatas(userResponse.data);
          setUser(userData);
          window.localStorage.setItem('userData', JSON.stringify(userData));
          
          const redirectURL = returnUrl && returnUrl !== '/' ? returnUrl : '/';
          router.replace(redirectURL);
        })
        .catch(err => {
          console.error('Error fetching user data:', err);
          if (errorCallback) errorCallback(err);
        });
      })
      .catch(err => {
        if (errorCallback) errorCallback(err);
      });
  };
  

  const handleLogout = () => {
    setUser(null)
    window.localStorage.removeItem('userData')
    window.localStorage.removeItem(authConfig.storageTokenKeyName)
    router.push('/login')
  }

  const values = {
    user,
    loading,
    setUser,
    setLoading,
    login: handleLogin,
    logout: handleLogout
  }

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }
