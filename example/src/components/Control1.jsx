import { connectWith } from 'redux-loadings';
import Loading from '../ui/Loading';
import DisplayComponent from '../ui/Display';

export default connectWith(['user', 'follower'], DisplayComponent, Loading);
