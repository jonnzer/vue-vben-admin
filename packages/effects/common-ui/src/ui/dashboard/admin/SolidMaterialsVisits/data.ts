import type { VbenFormSchema } from '../adapter/form';
import type { VxeTableGridOptions } from '../adapter/vxe-table';

export function useGridFormSchema(): VbenFormSchema[] {
  return [
    {
      component: 'Input',
      componentProps: {
        placeholder: '请输入姓名',
      },
      fieldName: 'name',
      label: '姓名',
      defaultValue: '',
    },
  ];
}

export function useColumns(): VxeTableGridOptions['columns'] {
  return [
    {
      field: 'f1',
      title: '姓名',
      width: 100,
    },
    {
      field: 'f2',
      title: 'amine loading',
    },
    {
      field: 'f3',
      title: 'support pore diameter',
    },
    {
      field: 'f4',
      title: 'support pore volume',
    },
    {
      field: 'f5',
      title: 'support BET surface area',
    },
    {
      field: 'f6',
      title: 'CO2 concentration',
    },
    {
      field: 'f7',
      title: 'adsorption temperature',
    },
    {
      field: 'f8',
      title: 'relative humidity (RH) ',
    },
    {
      field: 'f9',
      title: 'type of support',
    },
    {
      field: 'f10',
      title: '吸附容量(mmol/g)',
    },
    {
      field: 'f11',
      title: '访问时间',
    },
  ];
}
