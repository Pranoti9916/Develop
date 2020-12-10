
import AsyncStorage from '@react-native-community/async-storage';

export const DELETE_TASK = 'DELETE_TASK';
export const CREATE_TASK = 'CREATE_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';
export const FETCH_TASK = 'FETCH_TASK';
const getData = async () => {
    let token = '';
    try {
        token = await AsyncStorage.getItem('accessToken');
        return token;
    } catch (error) {
        console.error(error);
    }
};
export const fetchTasks = () => {
    let token1=''
    getData()
        .then((token) => token1=token)
        .catch((error) => console.error(error));
  let taskData = [];
  return (dispatch) => {
    fetch('https://tudu-node.herokuapp.com/tasks', {
      headers: {
        // Accept: 'application/json',
        Authorization: 'Bearer  ' + token1,
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((responseJson) => {
        console.log(responseJson);
        taskData = responseJson;
        // console.log(token1)
        // setToken1(responseJson)
        // console.log(token1)
      })
      .catch((error) => {
        console.error(error);
      });

    // for (const key in resData) {
    //     loadedProducts.push(
    //         new Product(
    //             key,
    //             'u1',
    //             resData[key].title,
    //             resData[key].imageUrl,
    //             resData[key].description,
    //             resData[key].price
    //         )
    //     );
    //
    // }

    dispatch({type: FETCH_TASK, tasks: taskData});
  };
};

// export const deleteProduct = productId => {
//     return { type: DELETE_PRODUCT, pid: productId };
// };
//
// export const createProduct = (title, description, imageUrl, price) => {
//     return async dispatch => {
//         // any async code you want!
//         const response = await fetch(
//             'https://rn-complete-guide.firebaseio.com/products.json',
//             {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({
//                     title,
//                     description,
//                     imageUrl,
//                     price
//                 })
//             }
//         );
//
//         const resData = await response.json();
//
//         dispatch({
//             type: CREATE_PRODUCT,
//             productData: {
//                 id: resData.name,
//                 title,
//                 description,
//                 imageUrl,
//                 price
//             }
//         });
//     };
// };
//
// export const updateProduct = (id, title, description, imageUrl) => {
//     return {
//         type: UPDATE_PRODUCT,
//         pid: id,
//         productData: {
//             title,
//             description,
//             imageUrl
//         }
//     };
// };
