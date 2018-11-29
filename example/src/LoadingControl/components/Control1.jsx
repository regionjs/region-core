import { connectWith } from 'redux-loadings';
import Loading from './Loading';
import Display from './Display';

export default connectWith(['user', 'follower'], Display, Loading);
