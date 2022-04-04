<template>
  <tbody>
    <tr>
        <td>{{item.num_factura}}</td>
        <td>{{item.fecha}}</td>
        <td>{{item.emisor_nombre}}</td>
        <td>{{item.emisor_num_doc}}-{{item.emisor_num_doc_dv}}</td>

        <td>{{item.comprador_nombre}}</td>
        <td>{{item.comprador_num_doc}}-{{item.comprador_num_doc_dv}}</td>
        <td>{{item.subtotal}}</td>
        <td>{{item.iva}}</td>
        <td>{{item.iva_value}}</td>
        <td>{{item.total}}</td>
    </tr>
  </tbody>
</template>
<script>
export default {
  props: {
    item: {}
  },

  data: () => {
    return {
     
    };
  },
};
</script>
