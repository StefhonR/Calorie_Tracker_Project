import { getToken } from './users-service';

const BASE_URL = '/api/healthData';

export function addData(formData) {
  return sendRequest(BASE_URL, 'POST', formData);
}

export function getHealthData() {
  return sendRequest(`${BASE_URL}/data`)
}
async function sendRequest(url, method = 'GET', payload = null) {
  // Fetch accepts an options object as the 2nd argument
  // used to include a data payload, set headers, etc.
  const options = { method };
  if (payload) {
    options.headers = { 'Content-Type': 'application/json' };
    options.body = JSON.stringify(payload);
  }

  const token = getToken();
  if (token) {
    // Ensure the headers object exists
    options.headers = options.headers || {};

    // Add token to an Authorization header
    // Prefacing with 'Bearer' is recommended in the HTTP specification
    options.headers.Authorization = `Bearer ${token}`;
  }

  const backendResponse = await fetch(url, options);
  // res.ok will be false if the status code set to 4xx in the controller action
  if (backendResponse.ok) return backendResponse.json();
  throw new Error('Bad Request');
}