<template>
  <div class="sidemenu">
    <img src="../assets/arcada_logo.png" />
    <div class="line"></div>
    <div class="item block">
      <p>Block</p>
      <div class="circle" style="background-color: #812990">A</div>
      <div class="circle" style="background-color: #812990">B</div>
      <div class="circle" style="background-color: #812990">C</div>
      <div class="circle" style="background-color: #812990">D</div>
      <div class="circle" style="background-color: #812990">E</div>
      <div class="circle" style="background-color: #812990">F</div>
    </div>
    <div class="item">
      <p>ADB-klass</p>
      <font-awesome-icon class="chevron-right" icon="chevron-right" />
    </div>
    <div class="item">
      <p>Auditorium</p>
      <font-awesome-icon class="chevron-right" icon="chevron-right" />
    </div>
    <div class="item">
      <p>Klassrum</p>
      <font-awesome-icon class="chevron-right" icon="chevron-right" />
    </div>
    <div class="item">
      <p>Mötesrum</p>
      <font-awesome-icon class="chevron-right" icon="chevron-right" />
    </div>
    <div class="item">
      <p>Specialrum</p>
      <font-awesome-icon class="chevron-right" icon="chevron-right" />
    </div>
    <div class="item">
      <p>Auditorium</p>
      <font-awesome-icon class="chevron-right" icon="chevron-right" />
    </div>
    <div class="item">
      <p>Torg</p>
      <font-awesome-icon class="chevron-right" icon="chevron-right" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.sidemenu {
  display: flexbox;
  flex-wrap: wrap;
  position: fixed;
  height: 100%;
  width: 500px;
  background: #f0f0f0;
  z-index: 100;
  box-shadow: 0 0 20px rgb(0 0 0 / 30%);
}
img {
  margin-top: -25px;
  height: 100px;
}

.item {
  display: flex;
  color: #444;
  background: #fff;
  font-size: 1.4rem;
  text-align: left;
  height: 60px;
  padding-left: 25px;
  border-top: 1px solid #e8eaed;
  border-bottom: 1px solid #e8eaed;
  justify-content: space-between;
}

.item > p {
  margin: auto 0;
  align-items: flex-end;
}

.chevron-right {
  color: #666;
  margin: auto 25px;
  transform: 0.3s;
}

.item.block {
  text-align: center;
  line-height: 30px;
  height: 100px;
  display: flex;
  flex-wrap: wrap;

  justify-content: space-evenly;
  margin: 0 0 15px;
  padding: 0 0 30px;
}

.block .circle {
  font-weight: bold;
  font-size: 2rem;
  display: block;
  height: 70px;
  width: 70px;
  border-radius: 50%;
  line-height: 70px;
  color: #fff;
  margin: 0;
}

.block p {
  width: 100%;
  margin: 5px 0 10px;
}

.line {
  height: 1px;
  background: #e8eaed;
  margin-top: -20px;
}
</style>
