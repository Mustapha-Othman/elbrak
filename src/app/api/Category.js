// common variable to use in all API object functions
import useAxios from "../_utils/useAxios";
const baseUrl = process.env.NEXT_PUBLIC_API_URL;
// other common logic...
async function get(options = undefined) {
  const response = await fetch(`${baseUrl}/categories/?populate=*`, {
    method: "GET",
    ...options,
  });

  return await response.json();
}
