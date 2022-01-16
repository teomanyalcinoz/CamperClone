<template>
<div style="display:flex; flex-direction:row; padding-left:200px; padding-right:200px; margin-top:30px; margin-bottom:100px; column-gap:80px;">
    <div style="display:flex; flex-direction:column;">
        <span style="font-size:xx-large">Alisveris SEPETİNİZDE</span>
        <div style="display:flex; flex-direction:row; width:800px; justify-content:space-between; ">
            <span>SEPETİNİZDE 3 ÜRÜN VAR.</span>
            <div style="display:flex; flex-direction:row;  ">
                <a href="javascript:void(0)" style="font-size:12px; color:black;">ALIŞVERİŞE DEVAM ET</a>
                <v-icon small>mdi-plus-circle-outline</v-icon>
            </div>
        </div>
        

    </div>
    <div>
        <v-select
          :items="items"
          label="Nakliye"
          outlined
          style="border-radius:0px; width:300px;"
        ></v-select>
    </div>

</div>


</template>

<style scoped>

</style>

<script>
export default {
    data: () => ({
      items: ['NAKLİYE', 'Mağazadan Teslim', 'Fizz', 'Buzz'],
    }),
}
</script>