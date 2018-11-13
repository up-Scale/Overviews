const axios = require('axios');

//insert page:
const dummyProduct = {
  "productName": "keyboard",
  "category": "gaming",
  "attributes": {
    "video": "some random url fake",
    "shippingDate": "today",
    "included": ["partone", "parttwo"],
    "specs": ["specone", "spectwo", "specthree"]
  },
  "descriptions": [
    {
      "header": "this is the title of the first description",
      "content": "hello this is hello world",
      "images": [
        "image url number one",
        "image url number two",
        "image url number three",
        "image url number four"
      ]
    }
  ]
};



axios.post(`http://localhost:3001/mysql/insertProduct`, dummyProduct);

//get page:
const productName = 'product1234'
axios.get(`http://localhost:3001/mysql/getProduct/${productName}`);

//update shipping:
const shippingDate = {shippingDate: 'a new day', productName: 'product1234'}
axios.post(`http://localhost:3001/mysql/updateShipping`, shippingDate);

//update description:
const description = {
	"header": "this is a new header",
	"content": "this is a new paragraph replacing the old content",
	"descriptionId": 12345,
};

axios.post(`http://localhost:3001/mysql/updateDescription`, description);

//add description: 
const newDescription = {
	"header": "this is the header for a new description",
	"content": "this is the content for a new description",
	"productId": 1234
};

axios.post(`http://localhost:3001/mysql/addDescription`, newDescription);

//delete descrioption:
const descriptionId = {
  id: 5678
};

axios.delete(`http://localhost:3001/mysql/deleteDescription`, descriptionId);

//add image:
const image = {
	"url": "this is a new image url",
	"descriptionId" : 50000
};

axios.post(`http://localhost:3001/mysql/addImage`, image);

//delete image:
const imageId = {id: 123456};
axios.delete(`http://localhost:3001/mysql/deleteImage`, imageId);


