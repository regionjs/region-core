import { connectWith } from 'region-shortcut';
import Loading from './Loading';
import Display from './Display';

export default connectWith(['user', 'follower'], Display, Loading);
