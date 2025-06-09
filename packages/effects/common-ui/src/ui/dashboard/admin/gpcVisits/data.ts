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
    },
    {
      field: 'f2',
      title: '矿渣含量',
    },
    {
      field: 'f3',
      title: '粉煤灰含量',
    },
    {
      field: 'f4',
      title: '其他矿渣含量',
    },
    {
      field: 'f5',
      title: 'SiO₂含量',
    },
    {
      field: 'f6',
      title: 'Na₂O含量',
    },
    {
      field: 'f7',
      title: '水胶比',
    },
    {
      field: 'f8',
      title: 'CA胶凝材料比',
    },
    {
      field: 'f9',
      title: 'FA胶凝材料比',
    },
    {
      field: 'f10',
      title: '养护时间 (h)',
    },
    {
      field: 'f11',
      title: '养护温度 (°C)',
    },
    {
      field: 'f12',
      title: '抗压强度(MPa)',
    },
    {
      field: 'f13',
      title: '访问时间',
    },
  ];
}
