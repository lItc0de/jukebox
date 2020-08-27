<template>
  <img :src="imgSrc" v-bind="attrs" v-on="$listeners" ref="lazyImg" />
</template>

<script>
const options = {
  root: null,
  threshold: 0,
};

export default {
  name: 'LazyImg',

  props: {
    src: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      observer: null,
      loaded: false,
      imgSrc: null,
    };
  },

  computed: {
    attrs() {
      const { src, ...attrs } = this.$attrs; // eslint-disable-line no-unused-vars
      return attrs;
    },
  },

  mounted() {
    this.observer = new IntersectionObserver(this.loadImg, options);
    this.observer.observe(this.$refs.lazyImg);
  },

  methods: {
    loadImg(entries) {
      if (this.loaded) return;
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        this.imgSrc = this.src;
        this.loaded = true;
        this.observer.unobserve(this.$refs.lazyImg);
      });
    },
  },
};
</script>
