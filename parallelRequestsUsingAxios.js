// Send parallel requests to an endpoint
// to fetch data by userIds
// use a non-blocking approach
const axios = require("axios");

const endpoint = "https://example.com"; // replace with your endpoint URL

// random ids
const userIds = [12, 56, 7789, 097, -98];

const makeRequest = async (id) => {
  try {
    const response = await axios.get(`${endpoint}/id=${id}`);
    return response.data;
  } catch (error) {
    return { error: error.message };
  }
};

const runMe = async () => {
  const reqs = userIds.map((id) => makeRequest(id));
  const results = await Promise.allSettled(reqs);
  return results.map((result) =>
    result.status === "fulfilled" ? result.value : result.reason
  );
//   console.log(data);
};

runMe();