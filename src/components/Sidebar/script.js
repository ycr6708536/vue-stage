export default {
  name: 'Sidebar',
  computed: {
    time() {
      return this.$store.state.totalTime
    }
  }
}
