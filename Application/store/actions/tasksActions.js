import AsyncStorage from '@react-native-community/async-storage';

export const DELETE_TASK = 'DELETE_TASK';
export const CREATE_TASK = 'CREATE_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';
export const FETCH_TASK = 'FETCH_TASK';
export const FETCH_CAT_TASK = 'FETCH_CAT_TASK';

export const fetchTasks = (token) => {
  let taskData = [];
  console.log('fetch token' + token);
  return async (dispatch) => {
    try {
      const response = await fetch('https://tudu-node.herokuapp.com/tasks', {
        headers: {
          Authorization: 'Bearer  ' + token,
          'Content-Type': 'application/json',
        },
      });

      if (response.status == 200) {
        const responseData = await response.json();
        taskData = [...responseData];
      }
    } catch (error) {
      console.log(error);
    }
    console.log('fetch');
    console.log(taskData);
    dispatch({type: FETCH_TASK, tasks: taskData});
  };
};
export const fetchTasksByCat = (token, category) => {
  let taskData = [];
  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://tudu-node.herokuapp.com/tasks/category/${category}`,
        {
          headers: {
            Authorization: 'Bearer  ' + token,
            'Content-Type': 'application/json',
          },
        },
      );
      const responseData = await response.json();
      if (response.status == 200) {
        taskData = [...responseData];
      } else if (response.status == 404) {
        alert(responseData.message);
      }
    } catch (error) {
      console.log(error);
    }

    console.log(' fetch CAT DATA');
    console.log(taskData);
    dispatch({type: FETCH_CAT_TASK, tasks: taskData});
  };
};
export const createTask = (task, category, timestamp, token) => {
  return async (dispatch) => {
    try {
      const response = await fetch('https://tudu-node.herokuapp.com/tasks', {
        method: 'POST',
        headers: {
          Authorization: 'Bearer  ' + token,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: task,
          category,
          timestamp,
        }),
      });
      const responseData = await response.json();
      if (response.status == 400) {
        alert(responseData.message);
      } else {
        alert('Data added successfully');
      }
    } catch (error) {
      alert(error.message);
    }
    console.log('create tassk');
    dispatch({
      type: CREATE_TASK,
      taskData: {
        task,
        category,
        timestamp,
      },
    });
  };
};
export const deleteTask = (taskId, token) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://tudu-node.herokuapp.com/tasks/${taskId}`,
        {
          method: 'DELETE',
          headers: {
            Authorization: 'Bearer  ' + token,
            'Content-Type': 'application/json',
          },
        },
      );
      const responseData = await response.text();
      if (response.status == 404) {
        alert('Task ' + responseData.error);
      } else {
        alert('Task deleted successfully');
      }
    } catch (error) {
      console.log(error);
    }

    dispatch({type: DELETE_TASK, taskId: taskId});
  };
};
export const updateTask = (
  title,
  category,
  status,
  taskId,
  date,
  time,
  token,
) => {
  console.log(taskId + 'update');
  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://tudu-node.herokuapp.com/tasks/${taskId}`,
        {
          method: 'POST',
          headers: {
            Authorization: 'Bearer  ' + token,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            title,
            category,
            status,
          }),
        },
      );
      console.log(response);
      if (response.status == 201) {
        alert('Data updated successfully');
      } else {
        alert('Task not found');
      }
    } catch (error) {
      console.log(error);
    }
    console.log('update task');
    dispatch({
      type: UPDATE_TASK,
      taskId: taskId,
      taskData: {
        title,
        category,
        status,
      },
    });
  };
};
