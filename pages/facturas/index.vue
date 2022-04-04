<template>
  <div class="container flex flex-wrap flex-col mx-auto px-4">
    <div>

      <h3 class="font-bold text-2xl">Facturas</h3>
    </div>
    <div class="h-12 p-3">
      <NuxtLink class="btn bg-green-500 p-3 rounded-md" to="/facturas/nuevo">Nueva factura</NuxtLink>
    </div>
    
    <div class="w-full">

     <table class="border-collapse table-auto w-full text-sm">
      <thead>
        <tr>
          <th class="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left"># Factura</th>
          <th class="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Fecha</th>
          <th class="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Vendedor </th>
          <th class="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Vendedor Doc</th>
          <th class="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Comprador</th>
          <th class="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Comprador Doc</th>
          <th class="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Subtotal</th>
          <th class="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">iva</th>
          <th class="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Valor Iva</th>
          <th class="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Total</th>
        </tr>
      </thead>
     
        <factura-item v-for="(item, index ) in info.results"  :key="index"  :item="item">  </factura-item>
     
    </table>
    </div>
    
  </div>
</template>

<script>
export default {
  data(){
    return{
      info:[]
    }
  },
  async created(){
      this.info = await this.$axios.$get( 'facturas' );

  }
};
</script>


