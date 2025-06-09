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
    {
      component: 'Input',
      componentProps: {
        placeholder: '请输入手机号',
      },
      fieldName: 'phone',
      label: '手机号',
      defaultValue: '',
    },
  ];
}

export function useColumns(): VxeTableGridOptions['columns'] {
  return [
    {
      field: 'order',
      title: '序号',
    },
    {
      field: 'id',
      title: '用户ID',
    },
    {
      field: 'name',
      title: '姓名',
    },
    {
      field: 'phone',
      title: '手机号',
    },
    {
      field: 'Time',
      title: '注册时间',
    },
  ];
}
