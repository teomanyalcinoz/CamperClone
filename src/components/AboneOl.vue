<template>
  <div id="app">
    <button @click="showModal = true" class="button" outlined>Abone Ol</button>
    <transition name="fade" appear>
      <div
        class="modal-overlay"
        v-if="showModal"
        @click="showModal = false"
      ></div>
    </transition>
    <transition name="slide" appear>
      <div class="modal" role="dialog" v-if="showModal">
        <h1>Lorem Ipsum</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button @click="showModal = false" class="button">Hide Modal</button>
      </div>
    </transition>
  </div>
</template>

<style lang="scss">
body {
  font-family: "montserrat", sans-serif;
}
#app {
  height: 50px;
  width: 200px;
  overflow: hidden;
}

.button {
  appearance: none;
  border: none;
  background: none;
  cursor: pointer;
  margin-left: 50px;
  display: inline-block;
  padding: 15px 25px;

  border-radius: 8px;
  color: #222;
  font-size: 11px;
  font-weight: 500;
  box-shadow: 3px 3px rgba(0, 0, 0, 0.4);
  transition: 0.4s;
  &:hover {
    box-shadow: 6px 6px rgba(0, 0, 0, 0.4);
  }
}

.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 98;
  background-color: rgba(0, 0, 0, 0.2);
}

.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 99;

  width: 100%;
  max-width: 414px;
  transform: translate(-50%, -50%);

  background-color: #fff;
  border-radius: 16px;

  padding: 25px;

  h1 {
    color: #222;
    font-size: 32px;
    font-weight: 300;
    margin-bottom: 15px;
  }

  p {
    color: #666;
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 15px;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s;
}
.slide-enter,
.slide-leave-to {
  transform: translateY(-50%) translateX(100vw);
}
</style>
<script>
export default {
  data() {
    return {
      showModal: false,
    };
  },
};
</script>