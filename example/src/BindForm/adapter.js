import * as Ant from 'antd';

// TODO 支持所有的组件，即使它可能是单向的

const adapter = (Component) => {
  const selectEvent = e => e.target.value;
  const selectValue = value => value;
  switch (Component) {
    case Ant.Input:
    case Ant.Input.TextArea:
    case Ant.Input.Search:
    case Ant.Input.Password:
    case Ant.Radio.Group:
      return ['value', 'onChange', selectEvent];
    case Ant.AutoComplete:
    case Ant.Cascader:
    case Ant.DatePicker:
    case Ant.DatePicker.MonthPicker:
    case Ant.DatePicker.RangePicker:
    case Ant.DatePicker.WeekPicker:
    case Ant.InputNumber:
    case Ant.Mention:
    case Ant.Rate:
    case Ant.Switch:
    case Ant.Slider:
    case Ant.Select:
    case Ant.TreeSelect:
    case Ant.TimePicker:
      return ['value', 'onChange', selectValue];
    case Ant.Checkbox.Group:
      return ['checked', 'onChange', selectValue];
    case Ant.Dropdown:
      return ['visible', 'onVisibleChange', selectValue];
    case Ant.Menu:
      return ['openKeys', 'onOpenChange', selectValue];
      // TODO support Menu selectedKeys
      // const selectSelectKeys = ({ selectKeys }) => selectKeys;
      // return ['selectedKeys', 'onSelect', selectSelectKeys];
      // return ['selectedKeys', 'onDeselect', selectSelectKeys];
    case Ant.Pagination:
      return ['current', 'onChange', selectValue];
    case Ant.Transfer:
      return ['targetKeys', 'onChange', selectValue];
    default: {
      const name = Component && Component.name;
      console.warn(`Can not unrecognized Component ${name || 'Unknown'}, data is bind on props.value and callback is bind on props.onChange`); // eslint-disable-line no-console
      return ['value', 'onChange', selectValue];
    }
  }
};


export default adapter;
