export async function getItems() {
    let query = `
    query Items {
    items {
        content {
        name 
        price
        type
        categoryId
    }
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
        })
    })
        .then(r => r.json()).then((r) => {
            console.log(r);
            return r;
        })
}

