<template>
  <main :style="{ padding: '1rem' }">
    <h2>Total Due: {{ invoice.amount }}</h2>
    <p>
      {{ invoice.name }}: {{ invoice.number }}
    </p>
    <p>Due Date: {{ invoice.due }}</p>
  </main>
</template>

<script setup>
import { getInvoice } from '../data';
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const invoice = ref(getInvoice(parseInt(route.params.invoiceId, 10)))

watch(
  () => route.params.invoiceId,
  invoiceId => { invoice.value = getInvoice(parseInt(invoiceId, 10)) }
)
</script>