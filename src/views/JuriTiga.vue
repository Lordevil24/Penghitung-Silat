<template>
    <div class="container">
      <div class="row">
        <h1 class="text-center mt-5">Juri 3</h1> 
        
        <div class="col-6">
          <h4>KONTIGEN F</h4>
        </div>
        <div class="col-6 text-end">
          <h4>KONTIGEN G</h4>
        </div>
        
        <h2 class="text-center fs-3">Arena A</h2>
        
        <div class="col-6">
          <h1 class="text-danger">PESILAT 21</h1>
        </div>
        <div class="col-6 text-end">
          <h1 class="text-primary">PESILAT 22</h1>
        </div>
        
        <table class="table border">
          <thead>
            <tr class="text-center">
              <th class="col-5 border border-dark bg-danger text-light">Nilai</th>
              <th class="col-2 border border-dark">Babak</th>
              <th class="col-5 border border-dark bg-primary text-light">Nilai</th>
            </tr>
          </thead>
          <tbody :class="{ 'bg-warning': babakSekarang === 1 }">
            <tr>
              <th class="col-5 border border-dark">{{ nilaiPesilat21Babak1 }}</th>
              <th 
              class="col-2 text-center border-dark" 
              :class="{ 'bg-warning': babakSekarang === 1 }"
            >I</th>
              <th class="col-5 border border-dark">{{ nilaiPesilat22Babak1 }}</th>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <th class="col-5 border border-dark">{{ nilaiPesilat21Babak2 }}</th>
              <th class="col-2 text-center border-dark">II</th>
              <th class="col-5 border border-dark">{{ nilaiPesilat22Babak2 }}</th>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <th class="col-5 border border-dark">{{ nilaiPesilat21Babak3 }}</th>
              <th class="col-2 text-center border-dark">III</th>
              <th class="col-5 border border-dark">{{ nilaiPesilat22Babak3 }}</th>
            </tr>
          </tbody> 
        </table>
        
        <div class="col-6">
          <button @click="tambahNilai(21, 'pukulan')" type="button" class="btn btn-danger p-3">
            <h3>Pukulan</h3>
          </button>
        </div>
        <div class="col-6 text-end">
          <button @click="tambahNilai(22, 'pukulan')" type="button" class="btn btn-primary p-3">
            <h3>Pukulan</h3>
          </button>
        </div>
        <div class="col-6 mt-2">
          <button @click="tambahNilai(21, 'tendangan')" type="button" class="btn btn-danger p-3">
            <h3>Tendangan</h3>
          </button>
        </div>
        <div class="col-6 mt-2 text-end">
          <button @click="tambahNilai(22, 'tendangan')" type="button" class="btn btn-primary p-3">
            <h3>Tendangan</h3>
          </button>
        </div>
      </div>   
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const babakSekarang = ref(1);
  const nilaiPesilat21Babak1 = ref(0);
  const nilaiPesilat22Babak1 = ref(0);
  const nilaiPesilat21Babak2 = ref();
  const nilaiPesilat22Babak2 = ref();
  const nilaiPesilat21Babak3 = ref();
  const nilaiPesilat22Babak3 = ref();
  
  function tambahNilai(pesilat, tipe) {
    const nilai = tipe === 'pukulan' ? 1 : 3;
  
    if (babakSekarang.value === 1) {
      if (pesilat === 21) {
        nilaiPesilat21Babak1.value += nilai;
      } else if (pesilat === 22) {
        nilaiPesilat22Babak1.value += nilai;
      }
    } else if (babakSekarang.value === 2) {
      if (pesilat === 21) {
        nilaiPesilat21Babak2.value += nilai;
      } else if (pesilat === 22) {
        nilaiPesilat22Babak2.value += nilai;
      }
    } else if (babakSekarang.value === 3) {
      if (pesilat === 21) {
        nilaiPesilat21Babak3.value += nilai;
      } else if (pesilat === 22) {
        nilaiPesilat22Babak3.value += nilai;
      }
    }
  
   
  }
  </script>
  
  <style scoped>
  .bg-warning {
    background-color: yellow !important;
  }
  </style>
  
