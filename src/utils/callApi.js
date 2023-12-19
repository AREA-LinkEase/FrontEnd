async function callApi(url, method = 'GET', data = null) {
    const apiUrl = `http://135.181.165.228:8080${url}`;
  
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
      // Ajoutez des en-têtes supplémentaires si nécessaire
    };
  
    const options = {
      method,
      headers,
    };
  
    if (data) {
      options.body = new URLSearchParams(Object.entries(data)).toString();
    }
  
    try {
      const response = await fetch(apiUrl, options);
      console.log(response);
      if (!response.ok) {
        // Si la réponse n'est pas OK, rejet de la promesse avec le statut de la réponse
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      // Rejet de la promesse avec l'erreur rencontrée lors de la requête
      throw new Error(`API request failed: ${error.message}`);
    }
};

export default callApi;