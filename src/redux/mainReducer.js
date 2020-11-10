import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn43170510Reducer from '../features/SignIn43170510/redux/reducers'
import SignUp24170509Reducer from '../features/SignUp24170509/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn43170510: SignIn43170510Reducer,
SignUp24170509: SignUp24170509Reducer,

});