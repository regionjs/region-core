import Home from '../Home';
import LoadingControl from '../LoadingControl';
import LoadingFull from '../LoadingFull';
import LoadingMore from '../LoadingMore';
import Clear from '../Clear';
import SideEffect from '../SideEffect';
import AsyncSideEffect from '../AsyncSideEffect';
import LoadingSideEffect from '../LoadingSideEffect';
import SetNextCall from '../SetNextCall';
import Form from '../Form';
import RegionForm from '../RegionForm';
import AsyncValidate from '../AsyncValidate';
import DeepSet from '../DeepSet';
import ErrorTodo from '../ErrorTodo';
import Selector from '../Selector';

export default [{
  key: 'home',
  label: '首页',
  Component: Home,
}, {
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
}, {
  key: 'SetNextCall',
  label: 'Set Next Call',
  Component: SetNextCall,
}, {
  key: 'Selector',
  label: 'Selector',
  Component: Selector,
}, {
  key: 'Form',
  label: 'Form',
  Component: Form,
}, {
  key: 'RegionForm',
  label: 'Region Form',
  Component: RegionForm,
}, {
  key: 'AsyncValidate',
  label: 'Async Validate(Pending)',
  Component: AsyncValidate,
}, {
  key: 'DeepSet',
  label: 'Deep Set(Abandoned)',
  Component: DeepSet,
}, {
  key: 'Error',
  label: 'Error(Todo)',
  Component: ErrorTodo,
}];
