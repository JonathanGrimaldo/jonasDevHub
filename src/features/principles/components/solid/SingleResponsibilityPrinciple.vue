<template>
  <section id="srp" class="mb-5">
    <h2 class="h4">S — Single Responsibility</h2>

    <p class="mb-3">
      A class should have <strong>one, and only one, reason to change</strong>. If you can name two
      things a class is responsible for, it has two responsibilities — split it.
    </p>

    <img alt="SRP diagram" class="img-fluid rounded mb-3" />
    <small class="text-muted d-block mb-4">
      Each box has one job. If one changes, only that box is touched.
    </small>

    <h3 class="h6 text-uppercase text-muted">Why it matters</h3>
    <p class="mb-3">
      When a class does two things, a bug in one forces you to touch the other. You can't test one
      without the other. You can't reuse one without dragging the other along.
    </p>

    <h3 class="h6 text-uppercase text-muted">Violation</h3>
    <div class="alert alert-light border mb-3">
      <pre class="mb-0"><code>class Order {
  // Responsibility 1: business logic
  calculateTotal() { /* ... */ }
  applyDiscount() { /* ... */ }

  // Responsibility 2: persistence
  save() { /* writes to DB */ }

  // Responsibility 3: presentation
  toHtml() { /* renders a string */ }
}</code></pre>
    </div>
    <p class="text-muted mb-3">
      Three reasons to change: pricing rules, database schema, or HTML template. Any one of those
      changes means editing this class.
    </p>

    <h3 class="h6 text-uppercase text-muted">After</h3>
    <div class="alert alert-light border mb-3">
      <pre class="mb-0"><code>class Order {
  calculateTotal() { /* ... */ }
  applyDiscount() { /* ... */ }
}

class OrderRepository {
  save(order: Order) { /* ... */ }
}

class OrderPresenter {
  toHtml(order: Order) { /* ... */ }
}</code></pre>
    </div>

    <h3 class="h6 text-uppercase text-muted">How to detect a violation</h3>
    <ul class="mb-0">
      <li>
        Ask: <em>"What would make me change this class?"</em> If you get two unrelated answers,
        split it.
      </li>
      <li>Long method lists are a smell — 15+ methods usually means 3+ responsibilities.</li>
      <li>
        If you'd describe the class with <em>"and"</em> ("saves <strong>and</strong> renders"), it's
        doing too much.
      </li>
    </ul>

    <h3 class="h6 text-uppercase text-muted mt-3">Common mistake</h3>
    <p class="mb-0">
      SRP ≠ "one method per class." A class with 5 methods that all serve the
      <em>same</em> responsibility is fine. The test is <strong>reasons to change</strong>, not
      number of methods.
    </p>
  </section>
</template>
