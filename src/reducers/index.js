import { combineReducers } from 'redux';
import ConvertReducer from './ConvertReducer';

export default combineReducers({
  output: ConvertReducer
});