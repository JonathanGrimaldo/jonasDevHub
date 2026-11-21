<script setup lang="ts"></script>

<template>
  <section>
    <h1 class="h3 mb-3">Encapsulation</h1>

    <p class="mb-3">
      Hide the internals. Expose a clean interface. The outside world shouldn't need to know
      <em>how</em> you do something — only <em>what</em> it does.
    </p>

    <h3 class="h6 text-uppercase text-muted">Before</h3>
    <div class="alert alert-light border mb-3">
      <pre class="mb-0"><code>class BankAccount {
  balance: number  // public — anyone can do: account.balance = -999999
}</code></pre>
    </div>

    <h3 class="h6 text-uppercase text-muted">After</h3>
    <div class="alert alert-light border mb-3">
      <pre class="mb-0"><code>class BankAccount {
  private _balance: number

  deposit(amount: number) {
    if (amount > 0) this._balance += amount
  }

  withdraw(amount: number): boolean {
    if (amount <= this._balance) {
      this._balance -= amount
      return true
    }
    return false
  }

  get balance(): number {
    return this._balance
  }
}</code></pre>
    </div>

    <p class="mb-0">
      <strong>Rule:</strong> If changing the internal representation would break external code,
      you've leaked your implementation. Keep it private.
    </p>
  </section>
</template>
