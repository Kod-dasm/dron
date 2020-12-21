import { ButtonRouterComponent } from '@/components'

export default {
  components: {
    ButtonRouterComponent
  },
  data () {
    return {
      drawer: false,
      routes: [
        { nameRoute: 'ГЛАВНАЯ', linkRoute: '/' },
        { nameRoute: 'СЕНСОРЫ', linkRoute: '/essay' },
        { nameRoute: 'ЮРИДИЧЕСКИЕ ЗАКОНЫ', linkRoute: '/portfolio' },
        { nameRoute: 'НАУЧНАЯ ШКОЛА', linkRoute: '/businesscard' },
        { nameRoute: 'КОНТАКТЫ', linkRoute: '/pedagogicalactivitieswithchildren' }
      ]
    }
  }
}
