<script>
import fetch from 'cross-fetch'

export default {
  props: {
    paragraphs: {
      type: Number,
      default: 1
    },
    sentences: {
      type: Number,
      default: 5
    }
  },
  data () {
    return {
      text: '',
      loading: true
    }
  },
  computed: {
    url () {
      return `https://mj7cp02g0a.execute-api.us-east-1.amazonaws.com/dev/?p=${this.paragraphs}&s=${this.sentences}`
    }
  },
  watch: {
    url () {
      this.getIpsum()
    }
  },
  methods: {
    async getIpsum () {
      this.loading = true

      try {
        const req = await fetch(this.url)
        const res = await req.json()
        this.text = res.data
        this.loading = false
      } catch (err) {
        console.error(err)
      }
    }
  },
  mounted () {
    this.getIpsum()
  },
  render () {
    return this.$scopedSlots.default({
      text: this.text,
      loading: this.loading
    })
  }
}
</script>
