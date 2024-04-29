import { combineReducers } from 'redux';
import ContentReducer from './nowPlayingContent.slice';
import UserReducer from './user.slice';

const reducers = combineReducers({
    content: ContentReducer,
    user: UserReducer,
});

export default reducers;
