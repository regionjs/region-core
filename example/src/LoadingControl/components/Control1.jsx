import { connect } from 'region-shortcut';
import Loading from './Loading';
import Display from './Display';

export default connect(['user', 'follower'], { Loading })(Display);
