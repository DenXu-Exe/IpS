// netlify/functions/get-ip.js
exports.handler = async (event) => {
  // Netlify injects the real client IP in the header
  const ip = event.headers['x-nf-client-connection-ip'] || 'unknown';

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ip })
  };
};
