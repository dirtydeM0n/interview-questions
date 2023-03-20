// Send parallel requests to an endpoint
// to fetch data by userIds
// use a non-blocking approach using built-in modules

const http = require('http');

const endpoint = "https://example.com"; // replace with your endpoint URL

// random ids
const userIds = [12, 56, 7789, 097, -98];


const makeRequest = (id) => {
  return new Promise((resolve, reject) => {
    const options = {
      method: 'GET',
      hostname: endpoint,
      path: `/${id}`
    };

    const req = http.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        resolve(data);
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.end();
  });
};

const execMe = async () => {
  const requests = userIds.map((id) => makeRequest(id));
  const results = await Promise.allSettled(requests);
  return results.map((result) => result.status === 'fulfilled' ? result.value : result.reason);
  // console.log(data);
};

execMe().catch(err => console.error(err))