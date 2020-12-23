import { Drag, Drop } from 'vue-drag-drop'
import { PartialsDronComponent } from '@/components'
import initialCopter from '@/copter.json'

export default {
  components: {
    PartialsDronComponent, Drag, Drop
  },
  data () {
    return {
      copters: initialCopter.map(c => ({ ...c, installed: false }))
    }
  },
  computed: {
    assembled () {
      return !this.copters.find(c => c.installed === false)
    }
  },
  mounted () {
    console.log('this', this)
  },
  methods: {
    handleDrop (copterId) {
      console.log('copterId', copterId)
      const copter = this.copters.find(c => c.id === copterId)
      copter.installed = true
    }
  }
}
