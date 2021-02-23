import Vue from 'vue'
// import Menu from 'ant-design-vue/lib/menu'
// import Pagination from 'ant-design-vue/lib/pagination'
// import Button from 'ant-design-vue/lib/button'
// import Layout from 'ant-design-vue/lib/layout'
// import Icon from 'ant-design-vue/lib/icon'
// import Breadcrumb from 'ant-design-vue/lib/breadcrumb'
import { Pagination, Button, Layout, Menu, Breadcrumb, Icon } from 'ant-design-vue'

Vue.component(Menu.name, Menu)
  .component(Pagination.name, Pagination)
  .component(Button.name, Button)
  .component(Layout.name, Layout)
  .component(Breadcrumb.name, Breadcrumb)
  .component(Icon.name, Icon)
