import { createApp } from 'vue'
import App from './App.vue'
// 라우터를 연결합니다.
// 파일의 확장자기 .js 라서 생략합니다.
import router from './router/index.js'
// vuex를 연결합니다.
// 파일의 확장자가 .js라서 생략했어요.
import store from './store/store.js'

createApp(App).use(router).use(store).mount('#app')
// vue 가 실행이 될때 제일 처음 불러서 실행하는 .js 파일입니다.
// Entry Point 역활을 합니다.
