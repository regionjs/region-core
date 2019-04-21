import Home from '../Home';
import LoadingControl from '../LoadingControl';
import UseProps from '../UseProps';
import AdvancedLoading from '../AdvancedLoading';
import CURD from '../CURD';
import SideEffect from '../SideEffect';
import SetNextCall from '../SetNextCall';
import Selector from '../Selector';
import Form from '../Form';
import RegionForm from '../RegionForm';
import AsyncValidate from '../AsyncValidate';
import Error from '../Error';
import ExtendRegion from '../ExtendRegion';
import BindForm from '../BindForm';

export default [{
  key: 'Home',
  label: 'Home',
  Component: Home,
}, {
  key: 'LoadingControl',
  label: 'Loading Control',
  Component: LoadingControl,
}, {
  key: 'UseProps',
  label: 'Use Props',
  Component: UseProps,
}, {
  key: 'CURD',
  label: 'CURD',
  Component: CURD,
}, {
  key: 'AdvancedLoading',
  label: 'Advanced Loading',
  Component: AdvancedLoading,
}, {
  key: 'SideEffect',
  label: 'Side Effect',
  Component: SideEffect,
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
  label: 'Async Validate',
  Component: AsyncValidate,
}, {
  key: 'Error',
  label: 'Error',
  Component: Error,
}, {
  key: 'ExtendRegion',
  label: 'Extend Region',
  Component: ExtendRegion,
}, {
  key: 'BindForm',
  label: 'Bind Form',
  Component: BindForm,
}];
