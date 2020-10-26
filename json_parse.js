 const json_input = [
     {
         "orderId": 554,
         "creationDate": "2017-03-25T10:35:20", // Saturday
         "orderLines": [
             {"productId": 9872, "name": "Pencil", "quantity": 3, "unitPrice": 3.00} ]
     },
     {
         "orderId": 555,
         "creationDate": "2017-03-25T11:24:20", // Saturday
         "orderLines": [
             {"productId": 9872, "name": "Pencil", "quantity": 1, "unitPrice": 3.00}, {"productId": 1746, "name": "Eraser", "quantity": 1, "unitPrice": 1.00} ]
     },
     {
         "orderId": 453,
         "creationDate": "2017-03-27T14:53:12", // Monday
         "orderLines": [
             {"productId": 5723, "name": "Pen", "quantity": 4, "unitPrice": 4.22}, {"productId": 9872, "name": "Pencil", "quantity": 3, "unitPrice": 3.12}, {"productId": 3433, "name": "Erasers Set", "quantity": 1, "unitPrice": 6.15} ]
     },
     {
         "orderId": 431,
         "creationDate": "2017-03-20T12:15:02", // Monday
         "orderLines": [
             {"productId": 5723, "name": "Pen", "quantity": 7, "unitPrice": 4.22}, {"productId": 3433, "name": "Erasers Set", "quantity": 2, "unitPrice": 6.15} ]
     },
     {
         "orderId": 690,
         "creationDate": "2017-03-26T11:14:00", // Sunday
         "orderLines": [
             {"productId": 9872, "name": "Pencil", "quantity": 4, "unitPrice": 3.12}, {"productId": 4098, "name": "Marker", "quantity": 5, "unitPrice": 4.50} ]
     }
 ]

const weekday = ["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"];
 let arr=[1746,3433,4098,5723,9872]

 function findProductQuantity(productId)
 {

     let productQuantity={"MONDAY" : 0,
         "TUESDAY" : 0,
         "WEDNESDAY" : 0,
         "THURSDAY" : 0,
         "FRIDAY " : 0,
         "SATURDAY" : 0,
         "SUNDAY" : 0
     }
      json_input.forEach(input => {
        let d = new Date(input.creationDate);
        let day=weekday[d.getDay()]

        let store =input.orderLines.find(arrayInput=>arrayInput.productId===productId)

        if(store!=undefined)
        {
            productQuantity[day]= store.quantity + productQuantity[day]
        }


    })
     return productQuantity


 }

 function allPost()                                                   //Find quantites for all the products                      
 {
     let allProducts={}
     let arr=[1746,3433,4098,5723,9872]
     arr.forEach((id)=>{
         let productQuantity=findProductQuantity(id)
         allProducts[id.toString()]=productQuantity

     })
    console.log(allProducts)
 }

 function findByProductId().                                        //Find quantites for particular product
 {
     const readline = require('readline').createInterface({
         input: process.stdin,
         output: process.stdout
     });
     readline.question("Enter the product Id:", name => {
         console.log(findProductQuantity(Number(name))) });

 }

 console.log(`Output of function 2:\n\n`)
 allPost()
console.log(`\n\nOutput of function 1:`)
 findByProductId()

