exports.simulatePost = async (destination, payload) => {
  console.log(`POST to ${destination}:`, payload);
  return 200;
};