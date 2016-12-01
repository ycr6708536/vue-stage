export default {
  data() {
    return {

    }
  },
  components: {

  },
  methods: {
    handleSelect(key, keyPath) {
      let self = this;
      switch (key) {
        case '1':
        case '2':
          break;
        case '3':
          self.$parent.$router.push('/time-entries');
          break;
      }
    },
  },
}
