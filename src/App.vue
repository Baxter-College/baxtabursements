<template>
  <div id="app">
    <header>
      <h1 class="title logo">Baxtabursements</h1>
    </header>
    <div style="height:50px;"></div>
    <div class="columns is-centered">
      <div class="column is-8">
        <h3 class="title is-3">New Reimbursement</h3>
        <div class="form">
          <div class="field">
            <label for="name" class="label">Name</label>
            <input class="input" v-model="name" type="text" placeholder="Name" />
          </div>
          <div class="field">
            <label for="zid" class="label">zID</label>
            <input class="input" v-model="zid" type="text" placeholder="zID" />
          </div>
          <hr />
          <div class="field">
            <label for="description" class="label">Expense Description</label>
            <input
              class="input"
              v-model="description"
              type="text"
              placeholder="Expense Description"
            />
          </div>

          <div class="field">
            <label for="price" class="label">Price</label>
            <input class="input" v-model="price" type="number" placeholder="$69.00" />
          </div>
          <b-field class="file">
            <b-upload v-model="file">
              <a class="button is-primary">
                <span>Click to upload proof of purchase</span>
              </a>
            </b-upload>
            <span class="file-name" v-if="file">{{ file.name }}</span>
          </b-field>
          <button @click="addExpense" class="button is-info">Add Expense</button>
          <hr />
          <!-- <Expense
            v-for="expense in expenses"
            :key="expense.description"
            :description="expense.description"
            :price="expense.price"
          />-->
          <table class="table is-fullwidth is-bordered">
            <thead>
              <th>Expense</th>
              <th>Price</th>
            </thead>
            <tbody>
              <tr v-for="expense in expenses" :key="expense.description">
                <td>{{expense.description}}</td>
                <td>{{expense.price}}</td>
              </tr>
            </tbody>
          </table>
          <p>
            <b>Total:</b>
            ${{total}}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Expense from "@/components/Expense";

export default {
  name: "app",
  components: {},
  data() {
    return {
      name: null,
      zid: null,
      description: null,
      price: null,
      expenses: [],
      file: null
    };
  },
  computed: {
    total() {
      let result = 0;
      for (let i = 0; i < this.expenses.length; i++) {
        result += Number(this.expenses[i].price);
      }
      return Math.round(result * 100) / 100;
    }
  },
  methods: {
    addExpense() {
      this.expenses.push({
        description: this.description,
        price: this.price
      });

      this.description = null;
      this.price = null;
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto+Mono:300,400,400i,500,700");

html,
body {
  margin: 0;
  padding: 0;
  background: #f1f3f4;
  font-family: "Roboto Mono", monospace;
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
a {
  font-family: "Roboto Mono", monospace;
}

hr {
  background: #d9dcde;
}

header {
  padding: 10px 50px;
  background-color: #3d78f6;
  color: #f1f3f4;
}

.logo {
  color: #f1f3f4 !important;
}
</style>
