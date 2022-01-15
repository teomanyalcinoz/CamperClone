export async function getItemById(getItemByIdId) {
  let query = `
  query GetItemById($getItemByIdId: ID!) {
    getItemById(id: $getItemByIdId) {
      content {
        name
        price
        colorOptions {
          name
          color
        }
        sizes
        details {
          explaination
          properties
        }
      }
      photos
    }
  }  
  `

  return fetch('http://localhost:5000/camper-f60d4/us-central1/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables: { getItemByIdId },
    })
  })
    .then(r => r.json()).then((r) => {
      console.log(r);
      return r;
    })
}
