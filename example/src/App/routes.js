import GetStarted from '../GetStarted';
import UseValue from '../UseValue';
import UseLoading from '../UseLoading';
import UseError from '../UseError';
import UseProps from '../UseProps';
import SharedValue from '../SharedValue';
import AdvancedLoading from '../AdvancedLoading';
import CURD from '../CURD';
import SelectValue from '../SelectValue';
import Form from '../Form';
import AsyncValidate from '../AsyncValidate';
import LocalStorageRegion from '../LocalStorageRegion';
import CombinedError from '../CombinedError';

export default [{
  key: 'GetStarted',
  label: 'Get Started',
  groupName: 'GetStarted',
  Component: GetStarted,
}, {
  key: 'UseValue',
  label: 'useValue',
  groupName: 'Basic',
  Component: UseValue,
}, {
  key: 'UseLoading',
  label: 'useLoading',
  groupName: 'Basic',
  Component: UseLoading,
}, {
  key: 'UseError',
  label: 'useError',
  groupName: 'Basic',
  Component: UseError,
}, {
  key: 'UseProps',
  label: 'useProps',
  groupName: 'Basic',
  Component: UseProps,
}, {
  key: 'LocalStorageRegion',
  label: 'localStorage',
  groupName: 'Basic',
  Component: LocalStorageRegion,
}, {
  key: 'CombinedError',
  label: 'Combined Error',
  groupName: 'Basic',
  Component: CombinedError,
}, {
  key: 'SharedValue',
  label: 'Shared Value',
  groupName: 'Advanced',
  Component: SharedValue,
}, {
  key: 'AdvancedLoading',
  label: 'Advanced Loading',
  groupName: 'Advanced',
  Component: AdvancedLoading,
}, {
//   key: 'SetNextCall',
//   label: 'Set Next Call',
//   Component: SetNextCall,
// }, {
  key: 'SelectValue',
  label: 'Select Value',
  groupName: 'Advanced',
  Component: SelectValue,
}, {
  key: 'CURD',
  label: 'CURD',
  groupName: 'Advanced',
  Component: CURD,
}, {
  key: 'Form',
  label: 'Form',
  groupName: 'Advanced',
  Component: Form,
}, {
  key: 'AsyncValidate',
  label: 'Async Validate',
  groupName: 'Advanced',
  Component: AsyncValidate,
}];
