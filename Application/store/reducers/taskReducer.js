import {
  DELETE_TASK,
  CREATE_TASK,
  UPDATE_TASK,
  FETCH_TASK,
  FETCH_CAT_TASK,
} from '../actions/tasksActions';

const initialState = {
  availableTasks: [],
  CatTasks: [],
  // HealthTasks: [],
  // SocialTasks: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TASK:
      return {
        availableTasks: action.tasks,
        CatTasks: [],
      };
    case FETCH_CAT_TASK:
      return {
        availableTasks: state.availableTasks,
        CatTasks: action.tasks,
      };
    case CREATE_TASK:
      // console.log(action.taskData);
      return {
        ...state,
        availableTasks: state.availableTasks.concat(action.taskData),
        // userProducts: state.userProducts.concat(newProduct)
      };
    case UPDATE_TASK:
      const catIndex = state.CatTasks.findIndex(
        (cat) => cat.id === action.taskId,
      );
      const updatedCatTasks = [...state.CatTasks];
      updatedCatTasks[catIndex] = action.taskData;

      const availableTaskIndex = state.availableTasks.findIndex(
        (task) => task.id === action.taskId,
      );
      const updatedAvailableTasks = [...state.availableTasks];
      updatedAvailableTasks[availableTaskIndex] = action.taskData;
      return {
        ...state,
        availableTasks: updatedAvailableTasks,
        // userProducts: updatedUserProducts
      };
    case DELETE_TASK:
      return {
        ...state,
        availableTasks: state.availableTasks.filter(
          (task) => task.id !== action.taskId,
        ),
      };
  }
  return state;
};
