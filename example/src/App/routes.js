import LoadingControl from '../LoadingControl';
import LoadingFull from '../LoadingFull';
import LoadingMore from '../LoadingMore';
import Clear from '../Clear';
import SideEffect from '../SideEffect';
import AsyncSideEffect from '../AsyncSideEffect';
import LoadingSideEffect from '../LoadingSideEffect';

export default [{
  key: 'LoadingControl',
  label: 'Loading Control',
  Component: LoadingControl,
}, {
  key: 'LoadingFull',
  label: 'Loading Full',
  Component: LoadingFull,
}, {
  key: 'LoadingMore',
  label: 'Loading More',
  Component: LoadingMore,
}, {
  key: 'Clear',
  label: 'Clear',
  Component: Clear,
}, {
  key: 'SideEffect',
  label: 'Side Effect',
  Component: SideEffect,
}, {
  key: 'AsyncSideEffect',
  label: 'Async Side Effect',
  Component: AsyncSideEffect,
}, {
  key: 'LoadingSideEffect',
  label: 'Loading Side Effect',
  Component: LoadingSideEffect,
}];
