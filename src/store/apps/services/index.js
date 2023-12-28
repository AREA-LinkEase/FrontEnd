const initialState = {
    services: [],
    error: null,
  };
  
  const servicesReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_SERVICES_SUCCESS':
        return {
          ...state,
          services: action.payload,
          error: null,
        };
      case 'FETCH_SERVICES_FAILURE':
        return {
          ...state,
          services: [],
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default servicesReducer;
  