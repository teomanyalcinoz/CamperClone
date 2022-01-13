const admin = require("../database/database");


const resolvers = {
    Query: {
        items: () => {
            return db.collection('items').get().then(snapshot => {
                return snapshot.docs.map(doc => {
                    console.log(doc.data().content);
                    return {
                        id: doc.id,
                        content: {
                            ...doc.data().content
                        },
                        cartImage: doc.data().cartImage,
                        photos: doc.data().photos
                    }
                })
            })
        },
        getItemById: async (_, args) => {
            let item = {};
            let snapshot = await db.collection("items").get()
            for (let i = 0; i < snapshot.docs.length; i++) {
                if (snapshot.docs[i].data().content.id == args.id) {
                    item = {
                        id: snapshot.docs[i].id,
                        content: {
                            ...snapshot.docs[i].data().content
                        },
                        cartImage: snapshot.docs[i].data().cartImage,
                        photos: snapshot.docs[i].data().photos
                    }
                    return item;
                }
            }
            return null;
        },
        getItemByCategoryId: async (_, args) => {
            let items = [];
            let snapshot = await db.collection("items").get()
            for (let i = 0; i < snapshot.docs.length; i++) {
                if (snapshot.docs[i].data().content.categoryId == args.id) {
                    item = {
                        id: snapshot.docs[i].id,
                        content: {
                            ...snapshot.docs[i].data().content
                        },
                        cartImage: snapshot.docs[i].data().cartImage,
                        photos: snapshot.docs[i].data().photos
                    }
                    items.push(item);
                }
            }
            return items;

        },
    }
};

module.exports = resolvers;