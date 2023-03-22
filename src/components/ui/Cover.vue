<template>
  <div>
    <p>
      {{ coverTxt }}
    </p>
    <img src="../../assets/images/element-4.png" />
  </div>
</template>

<script>
export default {
  props: ["coverTxt"],
};
</script>

<style scoped>
div {
  height: 500px;
  width: 100%;
  background-image: url("../../assets/images/bg-section-handrawn-2a-wide.jpg");
  background-size: cover;
  text-align: center;
  padding-top: 10%;
  position: relative;
}

p {
  font-size: 3.5em;
  font-weight: 900;
  width: 60%;
  text-transform: capitalize;
  display: inline-block;
}

img {
  position: absolute;
  right: 15%;
  height: 20%;
  top: 20%;
}

@media only screen and (max-width: 768px) {
  div {
    height: 400px;
    padding-top: 15%;
  }
  p {
    font-size: 3em;
    width: 70%;
  }
  img {
    right: 5%;
    height: 10%;
  }
}

@media only screen and (max-width: 600px) {
  div {
    height: 200px;
    padding-top: 20%;
  }
  p {
    font-size: 2em;
    width: 70%;
  }
  img {
    display: none;
  }
}

@media only screen and (max-width: 600px) {
  p {
    font-size: 1em;
    width: 90%;
  }
}
</style>
