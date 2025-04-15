// utils/fetchWrapper.ts
export async function fetchWithInterceptor(url: string, options: RequestInit = {}): Promise<Response | void> {
    try {
      const response = await fetch(url, options);
  
      // Check if the response is a 500 error
      if (response.status === 500) {
        // Redirect to login page
        window.location.href = "/login";
        return; // Stop further execution
      }
  
      return response;
    } catch (error) {
      console.error("Fetch error:", error);
      throw error; // Re-throw the error to handle it in the calling code
    }
  }
  