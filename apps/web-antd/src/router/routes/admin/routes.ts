import type { RouteRecordRaw } from 'vue-router';

import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
  {
    name: 'registerUsers',
    path: '/registerUsers',
    component: () => import('#/views/admin/registerUsers/index.vue'),
    meta: {
      icon: 'lucide:user',
      order: -1,
      title: $t('page.admin.registerUsers'),
    },
  },
  {
    name: 'potentialUsers',
    path: '/potentialUsers',
    component: () => import('#/views/admin/potentialUsers/index.vue'),
    meta: {
      icon: 'mdi-light:signal',
      order: -1,
      title: $t('page.admin.potentialUsers'),
    },
  },
  {
    name: 'gpcVisits',
    path: '/gpcVisits',
    component: () => import('#/views/admin/gpcVisits/index.vue'),
    meta: {
      icon: 'lucide:backpack',
      order: -1,
      title: $t('page.admin.GPCVisits'),
    },
  },
  {
    name: 'SolidMaterialsVisits',
    path: '/solidMaterialsVisits',
    component: () => import('#/views/admin/solidMaterialsVisits/index.vue'),
    meta: {
      icon: 'lucide-lab:bag-hand',
      order: -1,
      title: $t('page.admin.SolidMaterialsVisits'),
    },
  },
];

export default routes;
