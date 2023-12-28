export const setCustomizerVisibility = (isVisible) => ({
    type: 'SET_CUSTOMIZER_VISIBILITY',
    payload: isVisible,
  });

  const initialState = {
    togglerVisible: true,
  };
  
  const customizerReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_CUSTOMIZER_VISIBILITY':
        return { ...state, togglerVisible: action.payload };
      default:
        return state;
    }
  };
  
  export default customizerReducer;
  