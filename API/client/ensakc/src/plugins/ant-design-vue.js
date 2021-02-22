import Vue from 'vue'
import { Pagination, Button ,Menu ,Icon} from 'ant-design-vue'
import { Modal } from 'ant-design-vue'

//To register simple components globally
Vue.component(Pagination.name, Pagination)
Vue.component(Icon.name, Icon)
Vue.component(Button.name, Button)
Vue.component(Modal.name, Modal)

//To register Nested components globally
// Instead of Vue.component(Menu.name, Menu)
// For more info refer to : https://i.imgur.com/SXyOTLo.png
// Use this :
Vue.use(Menu);




