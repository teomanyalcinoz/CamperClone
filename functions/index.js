const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const typeDefs = require("./schema/schema");
const resolvers = require("./resolvers/resolvers");

const app = express();
const server = new ApolloServer({ typeDefs, resolvers, playground: true });
server.start().then(() => { server.applyMiddleware({ app, path: '/', cors: true }); });

exports.graphql = functions.https.onRequest(app);


const items = [
    {
        content: {
            categoryId: 2,
            id: 1,
            type: "Camper Erkek",
            name: "Runner K21",
            price: 1599.00,
            colorOptions: [
                {
                    name: "Gri",
                    color: "#808080"
                },
                {
                    name: "Mavi",
                    color: "#0000FF"
                },
                {
                    name: "Siyah",
                    color: "#000000"
                },
                {
                    name: "Beyaz",
                    color: "#FFFFFF"
                }
            ],
            sizes: [
                "39",
                "40",
                "41",
                "42",
                "43",
                "44",
                "45"
            ],
            details: {
                explaination: "Runner K21, retro esintili bir yaklaşıma, çağdaş bir dokunuşla oluşturulmuş Camper Runner ailesinin son üyesidir.",
                properties: [
                    "Deri (Leather Working Group Sertifikalı",
                    "Gri",
                    "Hafiflik için EVA Taban (20% geri dönüştürülmüş XL EXTRALIGHT® Hafiflik için",
                    "OrthoLite® Üst Düzey Rahatlık İçin",
                    "51% Deri 49% Tekstil (100% geri dönüştürülmüş PET)"
                ]
            }
        },
        cartImage: "https://cloud.camper.com/is/image/JGVzaG9wMDNtYmlnZ3JleSQ=/K100744-005_LF.webp",
        photos: [
            "https://cloud.camper.com/is/image/JGVzaG9wMDNtYmlnZ3JleSQ=/K100744-005_DF.webp",
            "https://cloud.camper.com/is/image/JGVzaG9wMDNtYmlnZ3JleSQ=/K100744-005_LF.webp",
            "https://cloud.camper.com/is/image/JGVzaG9wMDNtYmlnZ3JleSQ=/K100744-005_TF.webp",
            "https://cloud.camper.com/is/image/JGVzaG9wMDNtYmlnZ3JleSQ=/K100744-005_CF.webp",
            "https://cloud.camper.com/is/image/JGVzaG9wMDNtYmlnZ3JleSQ=/K100744-005_SF.webp"
        ]
    },
    {
        content: {
            categoryId: 2,
            id: 2,
            type: "Camper Erkek",
            name: "Beetle GORE-TEX",
            price: 1871.00,
            colorOptions: [
                {
                    name: "Siyah",
                    color: "#000000"
                }
            ],
            sizes: [
                "39",
                "40",
                "41",
                "42",
                "43",
                "44",
                "45"
            ],
            details: {
                explaination: "GORE-TEX™ teknolojisi ve %51 geri dönüştürülmüş EVA dış tabana sahip koyu kahverengi deri erkek spor ayakkabısı.",
                properties: [
                    "Deri (Leather Working Group Sertifikalı",
                    "Koyu Kahverengi",
                    "Hafiflik için EVA Taban (51% geri dönüştürülmüş EVA Taban XL EXTRALIGHT® Hafiflik için",
                    "54% Polyamide 22% Tekstil (70% Polyester- 30% yün) 15% Deri 9% Polyester GORE-TEX: tam su geçirmezlik ve yüksek konfor"
                ]
            }
        },
        cartImage: "https://cloud.camper.com/is/image/JGVzaG9wMDNtYmlnZ3JleSQ=/K300005-022_CF.webp",
        photos: [
            "https://cloud.camper.com/is/image/JGVzaG9wMDNtYmlnZ3JleSQ=/K300005-022_DF.webp",
            "https://cloud.camper.com/is/image/JGVzaG9wMDNtYmlnZ3JleSQ=/K300005-022_LF.webp",
            "https://cloud.camper.com/is/image/JGVzaG9wMDNtYmlnZ3JleSQ=/K300005-022_TF.webp",
            "https://cloud.camper.com/is/image/JGVzaG9wMDNtYmlnZ3JleSQ=/K300005-022_CF.webp",
            "https://cloud.camper.com/is/image/JGVzaG9wMDNtYmlnZ3JleSQ=/K300005-022_SF.webp"
        ]
    },
    {
        content: {
            categoryId: 2,
            id: 3,
            type: "Camper Erkek",
            name: "Peu",
            price: 1871.00,
            colorOptions: [
                {
                    name: "Yeşil",
                    color: "#008000"
                },
                {
                    name: "Koyu Gri",
                    color: "#696969"
                }
            ],
            sizes: [
                "39",
                "40",
                "41",
                "42",
                "43",
                "44",
                "45"
            ],
            details: {
                explaination: "Her sezon gelişen bir Camper simgesi olan Peu, yalınayak yürümekten ilham alan işlevsel ve sade bir modelimizdir. 360 derece dikiş ve Strobel yapım tekniği ile inşa edilmiş olup, her koşulda eşsiz esneklik ve dayanıklılığı garanti eder.",
                properties: [
                    "Nubuk (Leather Working Group Sertifikalı)",
                    "Mavi",
                    "Olağanüstü kavrama özelliğine sahip TPU (20% geri dönüştürülmüş) Elastik bağcıklar",
                    "55% Deri 45% Tekstil (100% geri dönüştürülmüş PET)"
                ]
            }
        },
        cartImage: "https://cloud.camper.com/is/image/JGVzaG9wMDNtYmlnZ3JleSQ=/17665-236_CF.webp",
        photos: [
            "https://cloud.camper.com/is/image/JGVzaG9wMDNtYmlnZ3JleSQ=/17665-236_DF.webp",
            "https://cloud.camper.com/is/image/JGVzaG9wMDNtYmlnZ3JleSQ=/17665-236_LF.webp",
            "https://cloud.camper.com/is/image/JGVzaG9wMDNtYmlnZ3JleSQ=/17665-236_TF.webp",
            "https://cloud.camper.com/is/image/JGVzaG9wMDNtYmlnZ3JleSQ=/17665-236_CF.webp",
            "https://cloud.camper.com/is/image/JGVzaG9wMDNtYmlnZ3JleSQ=/17665-236_SF.webp"
        ]
    },
    {
        content: {
            categoryId: 1,
            id: 4,
            type: "Camper Kadın",
            name: "Pelotas XLite",
            price: 1499.00,
            colorOptions: [
                {
                    name: "Siyah",
                    color: "#000000"
                }
            ],
            sizes: [
                "35",
                "36",
                "37",
                "38",
                "39",
                "40",
                "41"
            ],
            details: {
                explaination: "Yenilenmiş şekli ve yumuşak tabanıyla geliştirilmiş Pelotas XLF, kentsel ayakkabılara yeni bir yaklaşım getiriyor.",
                properties: [
                    "Deri / Teknik kumaş",
                    "Beyaz",
                    "Hafiflik için Eva",
                    "Yastıklama için OrthoLite®",
                    "70% Polyester 30% Kumaş (50% Polyester - 50% PU)"
                ]
            }
        },
        cartImage: "https://cloud.camper.com/is/image/JGVzaG9wMDNtYmlnZ3JleSQ=/K201060-001_CF.webp",
        photos: [
            "https://cloud.camper.com/is/image/JGVzaG9wMDNtYmlnZ3JleSQ=/K201060-001_DF.webp",
            "https://cloud.camper.com/is/image/JGVzaG9wMDNtYmlnZ3JleSQ=/K201060-001_LF.webp",
            "https://cloud.camper.com/is/image/JGVzaG9wMDNtYmlnZ3JleSQ=/K201060-001_TF.webp",
            "https://cloud.camper.com/is/image/JGVzaG9wMDNtYmlnZ3JleSQ=/K201060-001_CF.webp",
            "https://cloud.camper.com/is/image/JGVzaG9wMDNtYmlnZ3JleSQ=/K201060-001_SF.webp"
        ]
    },
    {
        content: {
            categoryId: 1,
            id: 5,
            type: "Camper Kadın",
            name: "Milah",
            price: 1819.00,
            colorOptions: [
                {

                }
            ],
            sizes: [
                "35",
                "36",
                "37",
                "38",
                "39",
                "40",
                "41"
            ],
            details: {
                explaination: "Milah, kendine özgü kentsel bir görünüme sahip kalın bir kışlık bottur.",
                properties: [
                    "Deri (Leather Working Group Sertifikalı)",
                    "Kırmızı",
                    "Hafiflik için EVA Taban",
                    "5.4 cm"
                ]
            }
        },
        cartImage: "https://cloud.camper.com/is/image/JGVzaG9wMDNtYmlnZ3JleSQ=/K400577-004_CF.webp",
        photos: [
            "https://cloud.camper.com/is/image/JGVzaG9wMDNtYmlnZ3JleSQ=/K400577-004_DF.webp",
            "https://cloud.camper.com/is/image/JGVzaG9wMDNtYmlnZ3JleSQ=/K400577-004_LF.webp",
            "https://cloud.camper.com/is/image/JGVzaG9wMDNtYmlnZ3JleSQ=/K400577-004_TF.webp",
            "https://cloud.camper.com/is/image/JGVzaG9wMDNtYmlnZ3JleSQ=/K400577-004_CF.webp",
            "https://cloud.camper.com/is/image/JGVzaG9wMDNtYmlnZ3JleSQ=/K400577-004_SF.webp"
        ]
    },
    {
        content: {
            categoryId: 1,
            id: 6,
            type: "Camper Kadın",
            name: "Brutus",
            price: 1699.00,
            colorOptions: [
                {

                }
            ],
            sizes: [
                "35",
                "36",
                "37",
                "38",
                "39",
                "40",
                "41"
            ],
            details: {
                explaination: "1986'dan beri ikonik bir Camper modeli olan Brutus, hafifliği ve dayanıklılığı ile bilinen 360° dikişli bir modelimizdir.",
                properties: [
                    "Geri Dönüştürülmüş Pamuk",
                    "Çok Renkli",
                    "Hafiflik için EVA Hafiflik için XL EXTRALIGHT®",
                    "%100 Tekstil"
                ]
            }
        },
        cartImage: "https://cloud.camper.com/is/image/JGVzaG9wMDNtYmlnZ3JleSQ=/K400620-001_CF.webp",
        photos: [
            "https://cloud.camper.com/is/image/JGVzaG9wMDNtYmlnZ3JleSQ=/K400620-001_DF.webp",
            "https://cloud.camper.com/is/image/JGVzaG9wMDNtYmlnZ3JleSQ=/K400620-001_LF.webp",
            "https://cloud.camper.com/is/image/JGVzaG9wMDNtYmlnZ3JleSQ=/K400620-001_TF.webp",
            "https://cloud.camper.com/is/image/JGVzaG9wMDNtYmlnZ3JleSQ=/K400620-001_CF.webp",
            "https://cloud.camper.com/is/image/JGVzaG9wMDNtYmlnZ3JleSQ=/K400620-001_SF.webp"
        ]
    },
    {
        content: {
            categoryId: 3,
            id: 7,
            type: "Camper Cocuk",
            name: "Driftie",
            price: 999.00,
            colorOptions: [

                {
                    name: "Koyu Mavi",
                    color: "#0000c8"
                }

            ],
            sizes: [
                "25",
                "26",
                "27",
                "28",
                "29",
                "30",
                "31",
                "32",
                "33"
            ],
            details: {
                explaination: "Hafif Drift modelimiz, nefes alması ve yüksek konforu ile Camper'ın kendine özgü kentsel spor modelidir.",
                properties: [
                    "Geri Dönüşümlü Polyester / Nubuk",
                    "Mavi / Beyaz",
                    "Hafiflik için EVA Hafiflik için XL EXTRALIGHT®",
                    "%100 Tekstil (%100 geri dönüştürülmüş PET)"
                ]
            }
        },
        cartImage: "https://cloud.camper.com/is/image/JGVzaG9wMDNtYmlnZ3JleSQ=/K800422-007_CF.webp",
        photos: [
            "https://cloud.camper.com/is/image/JGVzaG9wMDNtYmlnZ3JleSQ=/K800422-007_DF.webp",
            "https://cloud.camper.com/is/image/JGVzaG9wMDNtYmlnZ3JleSQ=/K800422-007_LF.webp",
            "https://cloud.camper.com/is/image/JGVzaG9wMDNtYmlnZ3JleSQ=/K800422-007_TF.webp",
            "https://cloud.camper.com/is/image/JGVzaG9wMDNtYmlnZ3JleSQ=/K800422-007_CF.webp",
            "https://cloud.camper.com/is/image/JGVzaG9wMDNtYmlnZ3JleSQ=/K800422-007_SF.webp"
        ]
    },
    {
        content: {
            categoryId: 3,
            id: 8,
            type: "Camper Cocuk",
            name: "Runner",
            price: 551.00,
            colorOptions: [

                {
                    name: "Kırmızı",
                    color: "#ff0000 "
                }

            ],
            sizes: [
                "25",
                "26",
                "27",
                "28",
                "29",
                "30",
                "31",
                "32",
                "33"
            ],
            details: {
                explaination: "Runner çocuk spor ayakkabılarımız, 1992'de doğan orijinal spor tarzımızın minyatür bir versiyonudur.",
                properties: [
                    "Deri",
                    "Beyaz / Mavi / Kırmızı",
                    "OrthoLite® yastıklama ve nefes alabilirlik için",
                    "100% Kumaş (100% Geri dönüştürülmüş PET) Leather Working Group Certified "
                ]
            }
        },
        cartImage: "https://cloud.camper.com/is/image/JGVzaG9wMDNtYmlnZ3JleSQ=/K800436-006_CF.webp",
        photos: [
            "https://cloud.camper.com/is/image/JGVzaG9wMDNtYmlnZ3JleSQ=/K800436-006_DF.webp",
            "https://cloud.camper.com/is/image/JGVzaG9wMDNtYmlnZ3JleSQ=/K800436-006_LF.webp",
            "https://cloud.camper.com/is/image/JGVzaG9wMDNtYmlnZ3JleSQ=/K800436-006_TF.webp",
            "https://cloud.camper.com/is/image/JGVzaG9wMDNtYmlnZ3JleSQ=/K800436-006_CF.webp",
            "https://cloud.camper.com/is/image/JGVzaG9wMDNtYmlnZ3JleSQ=/K800436-006_SF.webp"
        ]
    },
    {
        content: {
            categoryId: 3,
            id: 9,
            type: "Camper Cocuk",
            name: "Peu",
            price: 999.00,
            colorOptions: [

                {
                    name: " Mavi",
                    color: "#0000c8"
                }

            ],
            sizes: [
                "25",
                "26",
                "27",
                "28",
                "29",
                "30",
                "31",
                "32",
                "33"
            ],
            details: {
                explaination: "Her sezon gelişen bir Camper Simgesi. Peu, yalınayak yürümekten ilham alan sade bir modelimizdir. 360 derece dikişli ve Strobel yapım tekniği ile inşa edilmiş olup, her koşulda eşsiz esneklik ve dayanıklılık garanti eder.",
                properties: [
                    "Deri",
                    "Kırmızı",
                    "Olağanüstü tutuş için kauçuk (%20 geri dönüştürülmüş) Geri dönüştürülmüş PET elastik bağcıklar",
                    "%100 Tekstil (%100 geri dönüştürülmüş PET)",
                    "%48 Tekstil (%100 geri dönüştürülmüş PET), %52 Deri"
                ]
            }
        },
        cartImage: "https://cloud.camper.com/is/image/JGVzaG9wMDNtYmlnZ3JleSQ=/80003-127_CF.webp",
        photos: [
            "https://cloud.camper.com/is/image/JGVzaG9wMDNtYmlnZ3JleSQ=/80003-127_DF.webp",
            "https://cloud.camper.com/is/image/JGVzaG9wMDNtYmlnZ3JleSQ=/80003-127_LF.webp",
            "https://cloud.camper.com/is/image/JGVzaG9wMDNtYmlnZ3JleSQ=/80003-127_TF.webp",
            "https://cloud.camper.com/is/image/JGVzaG9wMDNtYmlnZ3JleSQ=/80003-127_CF.webp",
            "https://cloud.camper.com/is/image/JGVzaG9wMDNtYmlnZ3JleSQ=/80003-127_SF.webp"
        ]
    },

]