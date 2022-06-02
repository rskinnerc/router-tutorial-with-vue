import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Expenses from "../views/Expenses.vue";
import Invoices from "../views/Invoices.vue";
import NotFound from "../views/NotFound.vue";
import Invoice from "../views/Invoice.vue";
import InvoicesHome from "../views/InvoicesHome.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      children: [
        {
          path: "/expenses",
          name: "expenses",
          component: Expenses,
        },
        {
          path: "/invoices",
          name: "invoices",
          component: Invoices,
          children: [
            {
              path: "",
              name: "invoices-home",
              component: InvoicesHome,
            },
            {
              path: ":invoiceId",
              component: Invoice,
              name: "invoice",
            },
          ],
        },
      ],
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: NotFound,
    },
  ],
});

export default router;
