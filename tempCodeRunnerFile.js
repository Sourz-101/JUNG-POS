// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('JungPOS');

// Create a new document in the collection.
db.getCollection('products').insertMany([{'Name': 'AL101KO5D',
'Category': 'rocker',
'Image': 'https://downloads.jung.de/catalogue/images/200x200_png/JUNG_AL101KO5D.png',
'Quantity': 10.0,
'Added Date': 1672012800000,
'Series': 'AL',
'Color': 'green',
'Added_by': 'JUNG_XL'},
{'Name': 'AL102KO5AN',
'Category': 'rocker',
'Image': 'https://downloads.jung.de/catalogue/images/200x200_png/JUNG_AL102KO5AN.png',
'Quantity': 29.0,
'Added Date': 1687910400000,
'Series': 'AL',
'Color': 'golden',
'Added_by': 'JUNG_XL'},
{'Name': 'AL102KO5D',
'Category': 'rocker',
'Image': 'https://downloads.jung.de/catalogue/images/200x200_png/JUNG_AL102KO5D.png',
'Quantity': 14.0,
'Added Date': 1706140800000,
'Series': 'AL',
'Color': 'yellow',
'Added_by': 'JUNG_XL'},
{'Name': 'AL12-0DK01',
'Category': 'rocker',
'Image': 'https://downloads.jung.de/catalogue/images/200x200_png/JUNG_AL12-0DK01.png',
'Quantity': 3.0,
'Added Date': 1617235200000,
'Series': 'AL',
'Color': 'yellow',
'Added_by': 'JUNG_XL'},
{'Name': 'AL12-0DR01',
'Category': 'rocker',
'Image': 'https://downloads.jung.de/catalogue/images/200x200_png/JUNG_AL12-0DR01.png',
'Quantity': 2.0,
'Added Date': 1617235200000,
'Series': 'AL',
'Color': 'blue',
'Added_by': 'JUNG_XL'},
{'Name': 'AL12-0R0',
'Category': 'rocker',
'Image': 'https://downloads.jung.de/catalogue/images/200x200_png/JUNG_AL12-0R0.png',
'Quantity': 1.0,
'Added Date': 1617235200000,
'Series': 'AL',
'Color': 'yellow',
'Added_by': 'JUNG_XL'},
{'Name': 'AL12-5DK01',
'Category': 'rocker',
'Image': 'https://downloads.jung.de/catalogue/images/200x200_png/JUNG_AL12-5DK01.png',
'Quantity': 1.0,
'Added Date': 1662508800000,
'Series': 'AL',
'Color': 'golden',
'Added_by': 'JUNG_XL'},
{'Name': 'AL12-5DR01',
'Category': 'rocker',
'Image': 'https://downloads.jung.de/catalogue/images/200x200_png/JUNG_AL12-5DR01.png',
'Quantity': 7.0,
'Added Date': 1617235200000,
'Series': 'AL',
'Color': 'white',
'Added_by': 'JUNG_XL'},
{'Name': 'AL1565.07SW',
'Category': 'rocker',
'Image': 'https://jung.by/upload/iblock/4e2/ls1561-07sw-klavisha-korotkogo-khoda-jung.png',
'Quantity': 1.0,
'Added Date': 1617235200000,
'Series': 'AL',
'Color': 'golden',
'Added_by': 'JUNG_XL'},
{'Name': 'AL1740AN',
'Category': 'rocker',
'Image': 'https://downloads.jung.de/catalogue/images/200x200_png/JUNG_AL1740AN.png',
'Quantity': 1.0,
'Added Date': 1698710400000,
'Series': 'AL',
'Color': 'red',
'Added_by': 'JUNG_XL'},
{'Name': 'AL1940.20',
'Category': 'rocker',
'Image': null,
'Quantity': 31.0,
'Added Date': 1617235200000,
'Series': 'AL',
'Color': 'red',
'Added_by': 'JUNG_XL'},
{'Name': 'AL1940.20AN',
'Category': 'rocker',
'Image': null,
'Quantity': 3.0,
'Added Date': 1679443200000,
'Series': 'AL',
'Color': 'white',
'Added_by': 'JUNG_XL'},
{'Name': 'AL1940.20D',
'Category': 'rocker',
'Image': null,
'Quantity': 19.0,
'Added Date': 1672012800000,
'Series': 'AL',
'Color': 'red',
'Added_by': 'JUNG_XL'},
{'Name': 'AL1940.20D-L',
'Category': 'rocker',
'Image': null,
'Quantity': 5.0,
'Added Date': 1617235200000,
'Series': 'AL',
'Color': 'red',
'Added_by': 'JUNG_XL'},
{'Name': 'AL1969USBAN',
'Category': 'Frame',
'Image': 'https://downloads.jung.de/catalogue/images/200x200_png/JUNG_AL1969USBAN.png',
'Quantity': 10.0,
'Added Date': 1662508800000,
'Series': 'AL',
'Color': 'golden',
'Added_by': 'JUNG_XL'},
{'Name': 'AL1969USBD',
'Category': "MISC",
'Image': 'https://www.jung.de/image-downloads/catalogue/images/400x400_png/JUNG_AF581BFANM.png',
'Quantity': 13.0,
'Added Date': 1708905600000,
'Series': 'AL',
'Color': 'white',
'Added_by': 'JUNG_XL'},
{'Name': 'AL2074NABS',
'Category': "MISC",
'Image': 'https://www.jung.de/image-downloads/catalogue/images/400x400_png/JUNG_AF581BFANM.png',
'Quantity': 2.0,
'Added Date': 1617235200000,
'Series': 'AL',
'Color': 'blue',
'Added_by': 'JUNG_XL'},
{'Name': 'AL2402TSAAN',
'Category': "MISC",
'Image': 'https://www.jung.de/image-downloads/catalogue/images/400x400_png/JUNG_AF581BFANM.png',
'Quantity': 1.0,
'Added Date': 1682467200000,
'Series': 'AL',
'Color': 'golden',
'Added_by': 'JUNG_XL'},
{'Name': 'AL2402TSAD',
'Category': "MISC",
'Image': 'https://www.jung.de/image-downloads/catalogue/images/400x400_png/JUNG_AF581BFANM.png',
'Quantity': 1.0,
'Added Date': 1682467200000,
'Series': 'AL',
'Color': 'green',
'Added_by': 'JUNG_XL'},
{'Name': 'AL2403TSAAN',
'Category': "MISC",
'Image': 'https://www.jung.de/image-downloads/catalogue/images/400x400_png/JUNG_AF581BFANM.png',
'Quantity': 2.0,
'Added Date': 1682467200000,
'Series': 'AL',
'Color': 'red',
'Added_by': 'JUNG_XL'},
{'Name': 'AL2403TSAD',
'Category': "MISC",
'Image': 'https://www.jung.de/image-downloads/catalogue/images/400x400_png/JUNG_AF581BFANM.png',
'Quantity': 6.0,
'Added Date': 1662508800000,
'Series': 'AL',
'Color': 'blue',
'Added_by': 'JUNG_XL'},
{'Name': 'AL2404TSAD',
'Category': "MISC",
'Image': 'https://www.jung.de/image-downloads/catalogue/images/400x400_png/JUNG_AF581BFANM.png',
'Quantity': 36.0,
'Added Date': 1684713600000,
'Series': 'AL',
'Color': 'white',
'Added_by': 'JUNG_XL'},
{'Name': 'AL2501TSA',
'Category': "MISC",
'Image': 'https://www.jung.de/image-downloads/catalogue/images/400x400_png/JUNG_AF581BFANM.png',
'Quantity': 2.0,
'Added Date': 1617235200000,
'Series': 'AL',
'Color': 'green',
'Added_by': 'JUNG_XL'},
{'Name': 'AL2502TSA',
'Category': "MISC",
'Image': 'https://www.jung.de/image-downloads/catalogue/images/400x400_png/JUNG_AF581BFANM.png',
'Quantity': 3.0,
'Added Date': 1617235200000,
'Series': 'AL',
'Color': 'blue',
'Added_by': 'JUNG_XL'},
{'Name': 'AL2503TSA',
'Category': "MISC",
'Image': 'https://www.jung.de/image-downloads/catalogue/images/400x400_png/JUNG_AF581BFANM.png',
'Quantity': 1.0,
'Added Date': 1617235200000,
'Series': 'AL',
'Color': 'white',
'Added_by': 'JUNG_XL'},
{'Name': 'AL2503TSAD',
'Category': "MISC",
'Image': null,
'Quantity': 8.0,
'Added Date': 1682467200000,
'Series': 'AL',
'Color': 'red',
'Added_by': 'JUNG_XL'},
{'Name': 'AL2504TSAD',
'Category': "MISC",
'Image': 'https://www.jung.de/image-downloads/catalogue/images/400x400_png/JUNG_AF581BFANM.png',
'Quantity': 5.0,
'Added Date': 1617235200000,
'Series': 'AL',
'Color': 'yellow',
'Added_by': 'JUNG_XL'},
{'Name': 'AL2520KIPL',
'Category': "MISC",
'Image': 'https://www.jung.de/image-downloads/catalogue/images/400x400_png/JUNG_AF581BFANM.png',
'Quantity': 5.0,
'Added Date': 1703635200000,
'Series': 'AL',
'Color': 'red',
'Added_by': 'JUNG_XL'},
{'Name': 'AL2521-5CN',
'Category': "MISC",
'Image': 'https://www.jung.de/image-downloads/catalogue/images/400x400_png/JUNG_AF581BFANM.png',
'Quantity': 2.0,
'Added Date': 1708905600000,
'Series': 'AL',
'Color': 'golden',
'Added_by': 'JUNG_XL'},
{'Name': 'AL2521INANPL',
'Category': "MISC",
'Image': 'https://www.jung.de/image-downloads/catalogue/images/400x400_png/JUNG_AF581BFANM.png',
'Quantity': 14.0,
'Added Date': 1617235200000,
'Series': 'AL',
'Color': 'blue',
'Added_by': 'JUNG_XL'},
{'Name': 'AL2521INDPL',
'Category': "MISC",
'Image': 'https://www.jung.de/image-downloads/catalogue/images/400x400_png/JUNG_AF581BFANM.png',
'Quantity': 21.0,
'Added Date': 1617235200000,
'Series': 'AL',
'Color': 'white',
'Added_by': 'JUNG_XL'},
{'Name': 'AL2521INPL',
'Category': "MISC",
'Image': 'https://www.jung.de/image-downloads/catalogue/images/400x400_png/JUNG_AF581BFANM.png',
'Quantity': 2.0,
'Added Date': 1690243200000,
'Series': 'AL',
'Color': 'blue',
'Added_by': 'JUNG_XL'},
{'Name': 'AL2539-0ANLEDW',
'Category': "MISC",
'Image': 'https://www.jung.de/image-downloads/catalogue/images/400x400_png/JUNG_AF581BFANM.png',
'Quantity': 1.0,
'Added Date': 1708905600000,
'Series': 'AL',
'Color': 'blue',
'Added_by': 'JUNG_XL'},
{'Name': 'AL2539N71ANRGB',
'Category': "MISC",
'Image': 'https://www.jung.de/image-downloads/catalogue/images/400x400_png/JUNG_AF581BFANM.png',
'Quantity': 2.0,
'Added Date': 1617235200000,
'Series': 'AL',
'Color': 'white',
'Added_by': 'JUNG_XL'},
{'Name': 'Al2941',
'Category': "MISC",
'Image': 'https://www.jung.de/image-downloads/catalogue/images/400x400_png/JUNG_AF581BFANM.png',
'Quantity': 31.0,
'Added Date': 1617235200000,
'Series': 'AL',
'Color': 'blue',
'Added_by': 'JUNG_XL'},
{'Name': 'AL2941AN',
'Category': "MISC",
'Image': 'https://www.jung.de/image-downloads/catalogue/images/400x400_png/JUNG_AF581BFANM.png',
'Quantity': 16.0,
'Added Date': 1617235200000,
'Series': 'AL',
'Color': 'yellow',
'Added_by': 'JUNG_XL'},
{'Name': 'AL2964AN',
'Category': "MISC",
'Image': 'https://www.jung.de/image-downloads/catalogue/images/400x400_png/JUNG_AF581BFANM.png',
'Quantity': 1.0,
'Added Date': 1617235200000,
'Series': 'AL',
'Color': 'white',
'Added_by': 'JUNG_XL'},
{'Name': 'AL2969-1NAUA',
'Category': "MISC",
'Image': 'https://www.jung.de/image-downloads/catalogue/images/400x400_png/JUNG_AF581BFANM.png',
'Quantity': 1.0,
'Added Date': 1617235200000,
'Series': 'AL',
'Color': 'blue',
'Added_by': 'JUNG_XL'},
{'Name': 'AL2969-1UA',
'Category': "MISC",
'Image': 'https://www.jung.de/image-downloads/catalogue/images/400x400_png/JUNG_AF581BFANM.png',
'Quantity': 2.0,
'Added Date': 1617235200000,
'Series': 'AL',
'Color': 'red',
'Added_by': 'JUNG_XL'},
{'Name': 'AL2969-1UAD',
'Category': "MISC",
'Image': 'https://www.jung.de/image-downloads/catalogue/images/400x400_png/JUNG_AF581BFANM.png',
'Quantity': 14.0,
'Added Date': 1617235200000,
'Series': 'AL',
'Color': 'green',
'Added_by': 'JUNG_XL'},
{'Name': 'AL2969-1UAD-L',
'Category': "MISC",
'Image': 'https://www.jung.de/image-downloads/catalogue/images/400x400_png/JUNG_AF581BFANM.png',
'Quantity': 11.0,
'Added Date': 1617235200000,
'Series': 'AL',
'Color': 'red',
'Added_by': 'JUNG_XL'},
{'Name': 'AL2969-25NWED',
'Category': "MISC",
'Image': 'https://www.jung.de/image-downloads/catalogue/images/400x400_png/JUNG_AF581BFANM.png',
'Quantity': 2.0,
'Added Date': 1682467200000,
'Series': 'AL',
'Color': 'yellow',
'Added_by': 'JUNG_XL'},
{'Name': 'AL2969-2UA',
'Category': "MISC",
'Image': 'https://www.jung.de/image-downloads/catalogue/images/400x400_png/JUNG_AF581BFANM.png',
'Quantity': 4.0,
'Added Date': 1617235200000,
'Series': 'AL',
'Color': 'yellow',
'Added_by': 'JUNG_XL'},
{'Name': 'AL2969-2UAAN',
'Category': "MISC",
'Image': 'https://www.jung.de/image-downloads/catalogue/images/400x400_png/JUNG_AF581BFANM.png',
'Quantity': 1.0,
'Added Date': 1617235200000,
'Series': 'AL',
'Color': 'blue',
'Added_by': 'JUNG_XL'},
{'Name': 'AL2969T',
'Category': "MISC",
'Image': 'https://www.jung.de/image-downloads/catalogue/images/400x400_png/JUNG_AF581BFANM.png',
'Quantity': 1.0,
'Added Date': 1617235200000,
'Series': 'AL',
'Color': 'green',
'Added_by': 'JUNG_XL'},
{'Name': 'AL2969TD-L',
'Category': "MISC",
'Image': 'https://www.jung.de/image-downloads/catalogue/images/400x400_png/JUNG_AF581BFANM.png',
'Quantity': 16.0,
'Added Date': 1662508800000,
'Series': 'AL',
'Color': 'blue',
'Added_by': 'JUNG_XL'},
{'Name': 'AL2969TNA',
'Category': "MISC",
'Image': 'https://www.jung.de/image-downloads/catalogue/images/400x400_png/JUNG_AF581BFANM.png',
'Quantity': 6.0,
'Added Date': 1617235200000,
'Series': 'AL',
'Color': 'red',
'Added_by': 'JUNG_XL'},
{'Name': 'AL2981',
'Category': "MISC",
'Image': 'https://www.jung.de/image-downloads/catalogue/images/400x400_png/JUNG_AF581BFANM.png',
'Quantity': 1.0,
'Added Date': 1617235200000,
'Series': 'AL',
'Color': 'golden',
'Added_by': 'JUNG_XL'},
{'Name': 'AL2981AN',
'Category': "MISC",
'Image': 'https://www.jung.de/image-downloads/catalogue/images/400x400_png/JUNG_AF581BFANM.png',
'Quantity': 7.0,
'Added Date': 1617235200000,
'Series': 'AL',
'Color': 'golden',
'Added_by': 'JUNG_XL'},
{'Name': 'AL2981D',
'Category': "MISC",
'Image': 'https://www.jung.de/image-downloads/catalogue/images/400x400_png/JUNG_AF581BFANM.png',
'Quantity': 21.0,
'Added Date': 1655683200000,
'Series': 'AL',
'Color': 'red',
'Added_by': 'JUNG_XL'},
{'Name': 'AL2982',
'Category': "MISC",
'Image': 'https://www.jung.de/image-downloads/catalogue/images/400x400_png/JUNG_AF581BFANM.png',
'Quantity': 4.0,
'Added Date': 1682467200000,
'Series': 'AL',
'Color': 'golden',
'Added_by': 'JUNG_XL'},
{'Name': 'AL2982AN',
'Category': "MISC",
'Image': 'https://www.jung.de/image-downloads/catalogue/images/400x400_png/JUNG_AF581BFANM.png',
'Quantity': 1.0,
'Added Date': 1708905600000,
'Series': 'AL',
'Color': 'blue',
'Added_by': 'JUNG_XL'},
{'Name': 'AL2982D',
'Category': "MISC",
'Image': 'https://www.jung.de/image-downloads/catalogue/images/400x400_png/JUNG_AF581BFANM.png',
'Quantity': 11.0,
'Added Date': 1617235200000,
'Series': 'AL',
'Color': 'red',
'Added_by': 'JUNG_XL'},
{'Name': 'AL2983AN',
'Category': "MISC",
'Image': 'https://www.jung.de/image-downloads/catalogue/images/400x400_png/JUNG_AF581BFANM.png',
'Quantity': 2.0,
'Added Date': 1703635200000,
'Series': 'AL',
'Color': 'white',
'Added_by': 'JUNG_XL'},
{'Name': 'AL2983D',
'Category': "MISC",
'Image': 'https://www.jung.de/image-downloads/catalogue/images/400x400_png/JUNG_AF581BFANM.png',
'Quantity': 8.0,
'Added Date': 1708905600000,
'Series': 'AL',
'Color': 'golden',
'Added_by': 'JUNG_XL'},
{'Name': 'AL2984D',
'Category': "MISC",
'Image': 'https://www.jung.de/image-downloads/catalogue/images/400x400_png/JUNG_AF581BFANM.png',
'Quantity': 10.0,
'Added Date': 1698710400000,
'Series': 'AL',
'Color': 'blue',
'Added_by': 'JUNG_XL'},
{'Name': 'AL2985',
'Category': "MISC",
'Image': 'https://www.jung.de/image-downloads/catalogue/images/400x400_png/JUNG_AF581BFANM.png',
'Quantity': 1.0,
'Added Date': 1708905600000,
'Series': 'AL',
'Color': 'blue',
'Added_by': 'JUNG_XL'},
{'Name': 'AL2985AN',
'Category': "MISC",
'Image': 'https://www.jung.de/image-downloads/catalogue/images/400x400_png/JUNG_AF581BFANM.png',
'Quantity': 1.0,
'Added Date': 1708905600000,
'Series': 'AL',
'Color': 'yellow',
'Added_by': 'JUNG_XL'},
{'Name': 'AL2985D-L',
'Category': "MISC",
'Image': 'https://www.jung.de/image-downloads/catalogue/images/400x400_png/JUNG_AF581BFANM.png',
'Quantity': 8.0,
'Added Date': 1617235200000,
'Series': 'AL',
'Color': 'white',
'Added_by': 'JUNG_XL'},
{'Name': 'AL2990',
'Category': "MISC",
'Image': 'https://www.jung.de/image-downloads/catalogue/images/400x400_png/JUNG_AF581BFANM.png',
'Quantity': 18.0,
'Added Date': 1687910400000,
'Series': 'AL',
'Color': 'green',
'Added_by': 'JUNG_XL'},
{'Name': 'AL2990AN',
'Category': "MISC",
'Image': 'https://www.jung.de/image-downloads/catalogue/images/400x400_png/JUNG_AF581BFANM.png',
'Quantity': 7.0,
'Added Date': 1617235200000,
'Series': 'AL',
'Color': 'yellow',
'Added_by': 'JUNG_XL'},
{'Name': 'AL2990D',
'Category': "MISC",
'Image': 'https://www.jung.de/image-downloads/catalogue/images/400x400_png/JUNG_AF581BFANM.png',
'Quantity': 19.0,
'Added Date': 1617235200000,
'Series': 'AL',
'Color': 'blue',
'Added_by': 'JUNG_XL'},
{'Name': 'AL2990KAN',
'Category': "MISC",
'Image': 'https://www.jung.de/image-downloads/catalogue/images/400x400_png/JUNG_AF581BFANM.png',
'Quantity': 10.0,
'Added Date': 1662508800000,
'Series': 'AL',
'Color': 'red',
'Added_by': 'JUNG_XL'},
{'Name': 'AL2990KLSOCD',
'Category': "MISC",
'Image': 'https://www.jung.de/image-downloads/catalogue/images/400x400_png/JUNG_AF581BFANM.png',
'Quantity': 1.0,
'Added Date': 1708905600000,
'Series': 'AL',
'Color': 'red',
'Added_by': 'JUNG_XL'},
{'Name': 'AL2990KO5',
'Category': "MISC",
'Image': 'https://www.jung.de/image-downloads/catalogue/images/400x400_png/JUNG_AF581BFANM.png',
'Quantity': 9.0,
'Added Date': 1657238400000,
'Series': 'AL',
'Color': 'blue',
'Added_by': 'JUNG_XL'},
{'Name': 'AL2990SATAN',
'Category': "MISC",
'Image': 'https://www.jung.de/image-downloads/catalogue/images/400x400_png/JUNG_AF581BFANM.png',
'Quantity': 1.0,
'Added Date': 1617235200000,
'Series': 'AL',
'Color': 'blue',
'Added_by': 'JUNG_XL'},
{'Name': 'AL2990TV',
'Category': "MISC",
'Image': 'https://www.jung.de/image-downloads/catalogue/images/400x400_png/JUNG_AF581BFANM.png',
'Quantity': 4.0,
'Added Date': 1617235200000,
'Series': 'AL',
'Color': 'green',
'Added_by': 'JUNG_XL'},
{'Name': 'AL2990TVD-L',
'Category': "MISC",
'Image': 'https://www.jung.de/image-downloads/catalogue/images/400x400_png/JUNG_AF581BFANM.png',
'Quantity': 1.0,
'Added Date': 1617235200000,
'Series': 'AL',
'Color': 'golden',
'Added_by': 'JUNG_XL'},
{'Name': 'AL2994B',
'Category': "MISC",
'Image': 'https://www.jung.de/image-downloads/catalogue/images/400x400_png/JUNG_AF581BFANM.png',
'Quantity': 8.0,
'Added Date': 1617235200000,
'Series': 'AL',
'Color': 'yellow',
'Added_by': 'JUNG_XL'},
{'Name': 'AL2994BAN',
'Category': "MISC",
'Image': 'https://www.jung.de/image-downloads/catalogue/images/400x400_png/JUNG_AF581BFANM.png',
'Quantity': 9.0,
'Added Date': 1617235200000,
'Series': 'AL',
'Color': 'blue',
'Added_by': 'JUNG_XL'},
{'Name': 'AL2995',
'Category': "MISC",
'Image': 'https://www.jung.de/image-downloads/catalogue/images/400x400_png/JUNG_AF581BFANM.png',
'Quantity': 2.0,
'Added Date': 1617235200000,
'Series': 'AL',
'Color': 'yellow',
'Added_by': 'JUNG_XL'},
{'Name': 'AL2995AN',
'Category': "MISC",
'Image': 'https://www.jung.de/image-downloads/catalogue/images/400x400_png/JUNG_AF581BFANM.png',
'Quantity': 10.0,
'Added Date': 1665532800000,
'Series': 'AL',
'Color': 'yellow',
'Added_by': 'JUNG_XL'},
{'Name': 'AL2995D',
'Category': "MISC",
'Image': 'https://www.jung.de/image-downloads/catalogue/images/400x400_png/JUNG_AF581BFANM.png',
'Quantity': 8.0,
'Added Date': 1617235200000,
'Series': 'AL',
'Color': 'golden',
'Added_by': 'JUNG_XL'},
{'Name': 'AL2995KO5AN',
'Category': "MISC",
'Image': 'https://www.jung.de/image-downloads/catalogue/images/400x400_png/JUNG_AF581BFANM.png',
'Quantity': 7.0,
'Added Date': 1701734400000,
'Series': 'AL',
'Color': 'red',
'Added_by': 'JUNG_XL'},
{'Name': 'AL2995PKO5AN',
'Category': "MISC",
'Image': 'https://www.jung.de/image-downloads/catalogue/images/400x400_png/JUNG_AF581BFANM.png',
'Quantity': 1.0,
'Added Date': 1708905600000,
'Series': 'AL',
'Color': 'blue',
'Added_by': 'JUNG_XL'},
{'Name': 'AL3180-1AAN',
'Category': "MISC",
'Image': 'https://www.jung.de/image-downloads/catalogue/images/400x400_png/JUNG_AF581BFANM.png',
'Quantity': 2.0,
'Added Date': 1617235200000,
'Series': 'AL',
'Color': 'red',
'Added_by': 'JUNG_XL'},
{'Name': 'AL4093TSAD',
'Category': "MISC",
'Image': 'https://www.jung.de/image-downloads/catalogue/images/400x400_png/JUNG_AF581BFANM.png',
'Quantity': 5.0,
'Added Date': 1617235200000,
'Series': 'AL',
'Color': 'green',
'Added_by': 'JUNG_XL'},
{'Name': 'AL4171MSSWDPL',
'Category': "MISC",
'Image': 'https://www.jung.de/image-downloads/catalogue/images/400x400_png/JUNG_AF581BFANM.png',
'Quantity': 15.0,
'Added Date': 1617235200000,
'Series': 'AL',
'Color': 'golden',
'Added_by': 'JUNG_XL'},
{'Name': 'AL459D1SD',
'Category': "MISC",
'Image': 'https://www.jung.de/image-downloads/catalogue/images/400x400_png/JUNG_AF581BFANM.png',
'Quantity': 1.0,
'Added Date': 1708905600000,
'Series': 'AL',
'Color': 'yellow',
'Added_by': 'JUNG_XL'},
{'Name': 'AL50NAAN-L',
'Category': "MISC",
'Image': 'https://www.jung.de/image-downloads/catalogue/images/400x400_png/JUNG_AF581BFANM.png',
'Quantity': 1.0,
'Added Date': 1708905600000,
'Series': 'AL',
'Color': 'golden',
'Added_by': 'JUNG_XL'},
{'Name': 'AL50NAD-L',
'Category': "MISC",
'Image': null,
'Quantity': 8.0,
'Added Date': 1708905600000,
'Series': 'AL',
'Color': 'blue',
'Added_by': 'JUNG_XL'},
{'Name': 'AL50NA-L',
'Category': "MISC",
'Image': 'https://www.jung.de/image-downloads/catalogue/images/400x400_png/JUNG_AF581BFANM.png',
'Quantity': 6.0,
'Added Date': 1677369600000,
'Series': 'AL',
'Color': 'white',
'Added_by': 'JUNG_XL'},
{'Name': 'AL7521UNVDPL',
'Category': "MISC",
'Image': 'https://www.jung.de/image-downloads/catalogue/images/400x400_png/JUNG_AF581BFANM.png',
'Quantity': 20.0,
'Added Date': 1708905600000,
'Series': 'AL',
'Color': 'white',
'Added_by': 'JUNG_XL'},
{'Name': 'AL7521UNVPL',
'Category': "MISC",
'Image': 'https://www.jung.de/image-downloads/catalogue/images/400x400_png/JUNG_AF581BFANM.png',
'Quantity': 10.0,
'Added Date': 1617235200000,
'Series': 'AL',
'Color': 'white',
'Added_by': 'JUNG_XL'},
{'Name': 'AL993AN',
'Category': "MISC",
'Image': 'https://www.jung.de/image-downloads/catalogue/images/400x400_png/JUNG_AF581BFANM.png',
'Quantity': 1.0,
'Added Date': 1682467200000,
'Series': 'AL',
'Color': 'golden',
'Added_by': 'JUNG_XL'},
{'Name': 'ALD2981',
'Category': "MISC",
'Image': 'https://www.jung.de/image-downloads/catalogue/images/400x400_png/JUNG_AF581BFANM.png',
'Quantity': 6.0,
'Added Date': 1708905600000,
'Series': 'AL',
'Color': 'blue',
'Added_by': 'JUNG_XL'},
{'Name': 'ALD2981AN',
'Category': "MISC",
'Image': 'https://www.jung.de/image-downloads/catalogue/images/400x400_png/JUNG_AF581BFANM.png',
'Quantity': 7.0,
'Added Date': 1682467200000,
'Series': 'AL',
'Color': 'red',
'Added_by': 'JUNG_XL'},
{'Name': 'ALD2982AN',
'Category': "MISC",
'Image': 'https://www.jung.de/image-downloads/catalogue/images/400x400_png/JUNG_AF581BFANM.png',
'Quantity': 11.0,
'Added Date': 1698710400000,
'Series': 'AL',
'Color': 'golden',
'Added_by': 'JUNG_XL'},
{'Name': 'ALD2983AN',
'Category': "MISC",
'Image': 'https://www.jung.de/image-downloads/catalogue/images/400x400_png/JUNG_AF581BFANM.png',
'Quantity': 4.0,
'Added Date': 1617235200000,
'Series': 'AL',
'Color': 'golden',
'Added_by': 'JUNG_XL'},
{'Name': 'MAAL1112',
'Category': "MISC",
'Image': 'https://www.jung.de/image-downloads/catalogue/images/400x400_png/JUNG_AF581BFANM.png',
'Quantity': 4.0,
'Added Date': 1617235200000,
'Series': 'AL',
'Color': 'red',
'Added_by': 'JUNG_XL'},
{'Name': 'MAAL1133AN',
'Category': "MISC",
'Image': 'https://www.jung.de/image-downloads/catalogue/images/400x400_png/JUNG_AF581BFANM.png',
'Quantity': 1.0,
'Added Date': 1617235200000,
'Series': 'AL',
'Color': 'white',
'Added_by': 'JUNG_XL'},
{'Name': 'MAAL1163',
'Category': "MISC",
'Image': 'https://www.jung.de/image-downloads/catalogue/images/400x400_png/JUNG_AF581BFANM.png',
'Quantity': 3.0,
'Added Date': 1617235200000,
'Series': 'AL',
'Color': 'red',
'Added_by': 'JUNG_XL'}
]);
