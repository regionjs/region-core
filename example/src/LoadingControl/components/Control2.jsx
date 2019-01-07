import { connectWith } from 'region-shortcut';
import Loading from './Loading';
import Display from './Display';

export default connectWith({ loading: 'user', result: ['user', 'follower'] }, Display, Loading);
