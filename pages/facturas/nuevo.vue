<template>
  <div class="container flex-wrap flex-col mx-auto px-4">
    
    <div>

      <h3 class="font-bold text-2xl">Nueva Factura</h3>
    </div>
    <div class="h-12 p-3">
      <NuxtLink class="btn bg-green-500 p-3 rounded-md" to="/facturas">Ver listado</NuxtLink>
    </div>

    <div>
     
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class=" w-1/3 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                Nombre emisor
              </label>
              <input v-model="factura.emisor_nombre" class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="">
            </div>
            <div class=" w-1/3 px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                Documento
              </label>
              <input v-model="factura.emisor_num_doc" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="">
            </div>
            <div class="w-1/3 px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                DV
              </label>
              <input v-model="factura.emisor_num_doc_dv" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="">
            </div>
          </div>

         <div class="flex flex-wrap -mx-3 mb-6">
            <div class=" w-1/3 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                Nombre Comprador
              </label>
              <input v-model="factura.comprador_nombre" class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="">
            </div>
            <div class=" w-1/3 px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                Documento
              </label>
              <input v-model="factura.comprador_num_doc" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="">
            </div>
            <div class="w-1/3 px-3">
              <label  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                DV
              </label>
              <input v-model="factura.comprador_num_doc_dv" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="">
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class=" w-1/3 px-3 mb-6 md:mb-0"> </div>
            <div class=" w-1/3 px-3"> </div>
            <div class="w-1/3 px-3">
              <label  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                Sub Total
              </label>
              {{subtotal}}
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class=" w-1/3 px-3 mb-6 md:mb-0"> </div>
            <div class=" w-1/3 px-3"> </div>
            <div class="w-1/3 px-3">
              <label  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                Iva
              </label>
              <input v-model="factura.iva" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="%">
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class=" w-1/3 px-3 mb-6 md:mb-0"> </div>
            <div class=" w-1/3 px-3"> </div>
            <div class="w-1/3 px-3">
              <label  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
               Total
              </label>
              {{total}}
            </div>
          </div>
          <button type="button" class="p-2 bg-green-500" @click="addPr">Agregar Producto</button>
          <table class="border-collapse table-auto w-full text-sm">
            <thead>
              <tr>
                <th class="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Descripcion</th>
                <th class="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Cantidad</th>
                <th class="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Valor </th> 
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item,index ) in factura.items" :key="index">
                <td> <input type="text" class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded  px-4 py-3  leading-tight focus:outline-none focus:bg-white"  v-model="item.descripcion"> </td>
                <td> <input type="text" class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded  px-4 py-3  leading-tight focus:outline-none focus:bg-white"  v-model="item.cantidad"> </td>
                <td> <input type="text" class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded  px-4 py-3  leading-tight focus:outline-none focus:bg-white"  v-model="item.valor"> </td>
                <td>
                    <button type="button" class="bg-red-700 p-3 rounded-md text-white" @click="eliminar(index)" >Borrar</button>
                </td>
              </tr>
            </tbody>

        </table>
          <button type="button" class="bg-green-700 p-3 rounded-md text-white" @click="guardar(index)" >Guardar</button>
     
    </div>

  </div>
</template>

<script>
export default {
  data(){
    return{
      factura:{
        items:[]
      },
    }
  },
  computed:{
    
    subtotal(){
      let total = 0;
      this.factura.items.forEach((key,value)=>{
        const cantidad = !isNaN(key.cantidad)?key.cantidad:1;
        if(!isNaN(key.valor)){
          total += parseInt(key.valor)*cantidad;
        }
        
      })
      return total;
    },
    total(){
      let total = this.subtotal;
      if(!isNaN(this.factura.iva)){
        if(this.factura.iva > 0){
           total += ((this.factura.iva * total)/100);
        }
        
      }
      return total;
    }
  },
  methods:{
    addPr(){
      this.factura.items.push({});
    },
    eliminar(index){

      this.factura.items.splice(index,1);
    },
    async guardar(){
      try {
        const data = await this.$axios.$post( 'facturas',this.factura );
        this.$route.push("/facturas");
       
      } catch (error) {
        
        console.log(error);
      }
    }

  }
  
};
</script>


