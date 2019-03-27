import { connect } from 'region-shortcut';
import Loading from './Loading';
import Display from './Display';

export default connect({ loading: 'user', result: ['user', 'follower'] }, { Loading })(Display);
