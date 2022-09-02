<template>
   <section class="sitemap">
      <div class="inner">
        <ul class="sitemap-menu clearfix">
          <li v-for="(item, index) in siteMenu" :key="index">
            <a :href="item.titleurl">{{item.title}}</a>
            <ul class="sitemap-submenu">
              <li v-for="(subitem, subindex) in item.subarr" :key="subindex">
                <a :href="subitem.suburl" v-html="subitem.subtitle"></a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
</template>

<script>
import { useStore } from 'vuex'
import {computed} from 'vue'
export default {
  setup(){
    const store = useStore();
    const siteMenu = computed(() => store.getters.getSiteMenu)
    store.dispatch('fetchSite')
    return{
      siteMenu
    }
  }
}
</script>

<style>
/* 사이트맵 */
  .sitemap {
    position: relative;
    display: block;
    padding: 35px 0;
    border-top: 1px solid #dcdcdc;
  }

  .sitemap .inner {
    display: flex;
    justify-content: center;
  }

  .sitemap-menu {
    position: relative;
    display: table;
    width: 770px;
  }

  .sitemap-menu>li {
    position: relative;
    display: table-cell;
  }

  .sitemap-menu>li>a {
    position: relative;
    display: inline-block;
    font-size: 14px;
    font-weight: 500;
  }

  .sitemap-menu>li>a:hover {
    color: #ffcc00;
  }

  .sitemap-submenu {
    position: relative;
    display: block;
    margin-top: 15px;
  }

  .sitemap-submenu li {
    position: relative;
    display: block;
    margin-bottom: 15px;
  }

  .sitemap-submenu li a {
    position: relative;
    display: inline-block;
    font-size: 12px;
  }

  .sitemap-submenu li a:hover {
    color: #ffcc00;
  }

  .sitemap-menu>li:hover>a {
    color: #ffcc00;
  }

  /*사이트맵 반응형*/
  @media all and (max-width: 800px) {
    .sitemap-menu {
      padding: 0 20px;
    }

    .sitemap-submenu li a {
      font-size: 10px;
    }
  }
</style>