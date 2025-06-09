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
    {
      component: 'Input',
      componentProps: {
        placeholder: '请输入单位',
      },
      fieldName: 'name',
      label: '单位',
      defaultValue: '',
    },
  ];
}

export function useColumns(): VxeTableGridOptions['columns'] {
  return [
    {
      field: 'name',
      title: '姓名',
    },
    {
      field: 'f2',
      title: '您的单位',
    },
    {
      field: 'f3',
      title: '您的岗位',
    },

    {
      field: 'f4',
      title: '您重点关注的领域',
    },
    {
      field: 'f5',
      title: '您的从业领域',
    },
    {
      field: 'f6',
      title: '您参与的碳捕集材料类型',
    },
    {
      field: 'f7',
      title: '目前所处研发阶段',
    },
    {
      field: 'f8',
      title: '现有碳捕集数据处理的痛点',
    },
    {
      field: 'f9',
      title: '规模化生产主要障碍',
    },
    {
      field: 'f10',
      title: '期望的产学研合作模式',
    },
    {
      field: 'f11',
      title: '是否愿意参与材料数据库共建',
    },

    {
      field: 'f12',
      title: '您认为当前碳捕集技术最需要大模型支持的环节',
    },
    {
      field: 'f13',
      title: '您期望的垂类大模型核心能力',
    },
    {
      field: 'f14',
      title: '希望获得的大模型输出形式',
    },
    {
      field: 'f15',
      title: '手机号',
    },
    {
      field: 'f16',
      title: '邮箱',
    },
  ];
}
