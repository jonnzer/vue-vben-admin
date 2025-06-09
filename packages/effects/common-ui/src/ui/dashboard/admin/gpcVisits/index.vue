<script lang="ts" setup>
import type { VxeTableGridOptions } from '../adapter/vxe-table';

import { Card, CardContent } from '@vben-core/shadcn-ui';

import { useVbenVxeGrid } from '../adapter/vxe-table';
import { useColumns, useGridFormSchema } from './data';

const getResultList = async (obj: any) => {
  console.log(obj);
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        code: 0,
        data: {
          list: [],
          total: 0,
        },
      });
    }, 1000);
  });
};

const [Grid, gridApi] = useVbenVxeGrid({
  formOptions: {
    schema: useGridFormSchema(),
    submitOnChange: true,
  },
  gridOptions: {
    columns: useColumns(),
    height: '700',
    keepSource: true,
    proxyConfig: {
      ajax: {
        query: async ({ page }, formValues) => {
          console.log('formValues:', formValues);
          return await getResultList({
            page: page.currentPage,
            pageSize: page.pageSize,
            ...formValues,
          });
        },
      },
    },
    headerCellStyle: {
      fontWeight: 300,
      color: '#000',
    },
    separator: false,
    // separator: { backgroundColor: 'rgba(100,100,0,0.5)' },
    rowConfig: {
      keyField: 'id',
    },
    formConfig: {
      CollapseStatus: false,
      data: {
        name: '',
        phone: '',
      },
    },
    toolbarConfig: {
      search: false,
      // custom: true,
      // export: false,
      // refresh: { code: 'query' },
      // search: true,
      // zoom: true,
    },
  } as VxeTableGridOptions,
});
</script>
<template>
  <Card>
    <CardContent>
      <Grid />
    </CardContent>
  </Card>
</template>
<style scoped></style>
