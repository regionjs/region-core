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
import FormTodo from '../FormTodo';
import ErrorTodo from '../ErrorTodo';
import OwnPropsTodo from '../OwnPropsTodo';

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
  key: 'Form',
  label: 'Form',
  Component: Form,
}, {
  key: 'FormTodo',
  label: 'Form(Todo)',
  Component: FormTodo,
}, {
  key: 'ErrorTodo',
  label: 'Error(Todo)',
  Component: ErrorTodo,
}, {
  key: 'OwnPropsTodo',
  label: 'Own Props(Todo)',
  Component: OwnPropsTodo,
}];
