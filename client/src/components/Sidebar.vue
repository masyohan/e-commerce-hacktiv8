<template>
  <div>
    <sidebar-menu @toggle-collapse="onToggleCollapse" :menu="menu" />
  </div>
</template>

<script>
import { SidebarMenu } from 'vue-sidebar-menu';

export default {
  name: 'Sidebar',
  components: {
    SidebarMenu,
  },
  data() {
    return {
      menu: [
        {
          header: true,
          title: 'Main',
          hiddenOnCollapse: false,
        },
        {
          href: 'admin/products',
          title: 'Dashboard',
          icon: 'fa fa-user',
        },
        {
          href: 'admin/products',
          title: 'Actions',
          icon: 'fa fa-chart-area',
          child: [
            {
              href: 'admin/products/add',
              title: 'Add Products',
            },
          ],
        },
      ],
    };
  },
  methods: {
    onToggleCollapse(collapsed) {
      if (collapsed) {
        this.$emit('collapsed', true);
      } else {
        this.$emit('collapsed', false);
      }
    },
  },
};
</script>

<style>

</style>
