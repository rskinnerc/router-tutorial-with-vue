<template>
  <main style="{ padding: '1rem 0' }">
    <h2>Invoices</h2>
    <div style="{ display: 'flex' }">
      <nav style="{
          borderRight: 'solid 1px',
          padding: '1rem',
        }">
        <RouterLink v-for="invoice in invoices" style="{ display: 'block', margin: '1rem 0' }"
          :to="'/invoices/' + invoice.number" :key="invoice.number">
          {{ invoice.name }}
        </RouterLink>
      </nav>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue';
import { getInvoices } from '../data';

const invoices = ref(getInvoices());


</script>