const axios = require('axios');

const host = process.ENV ? process.ENV.HOST : 'http://localhost:3001';

//insert page:
//verified working:
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

axios.post(`${host}/mysql/insertProduct`, dummyProduct);

//-----------------------------------------------------------------------------

//get page:
//verified working:
const productName = 'product1234'
axios.get(`${host}/mysql/getProduct/${productName}`);

//-----------------------------------------------------------------------------

//update shipping:
//verified working:
const shippingDate = {
  shippingDate: 'new day after update', 
  productName: 'keyboard'
}
axios.post(`${host}/mysql/updateShipping`, shippingDate);

//-----------------------------------------------------------------------------

//update description:
//verified working:
const description = {
	"header": "this is a new header after update",
	"content": "this is a new paragraph replacing the old content",
	"descriptionId": 12345,
};

axios.post(`${host}/mysql/updateDescription`, description);

//-----------------------------------------------------------------------------

//add description: 
//verfified working:
const newDescription = {
	"header": "this is the header for a new description",
	"content": "this is the content for a new description",
	"productId": 12345
};

axios.post(`${host}/mysql/addDescription`, newDescription);

//-----------------------------------------------------------------------------

//delete descrioption:
//verified working:
const descriptionId = {
  data: {
    id: 123
  }
};

axios.delete(`${host}/mysql/deleteDescription`, descriptionId);

//-----------------------------------------------------------------------------

//add image:
//verified working:
const image = {
	"url": "this is a new image url after insert",
	"descriptionId" : 50000
};

axios.post(`${host}/mysql/addImage`, image);

//-----------------------------------------------------------------------------

//delete image:
//verified working:
const imageId = {
  data: {
    id: 123456
  }
};
axios.delete(`http://localhost:3001/mysql/deleteImage`, imageId);


