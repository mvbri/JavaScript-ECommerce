export const parseRequestUrl = () => {
  const url = document.location.hash.toLowerCase();
  console.log(url.split("/"));
  const request = url.split("/");
  console.log(`resource: ${request[1]}
  id: ${request[2]}
  action:${request[3]}`);
  return {
    resource: request[1],
    id: request[2],
    action: request[3],
  };
};
