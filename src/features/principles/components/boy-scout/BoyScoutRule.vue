<template>
  <section id="boy-scout" class="mb-5">
    <h2 class="h4">Boy Scout Rule</h2>

    <p class="mb-3">
      Every time you touch a file, leave it <strong>slightly cleaner</strong>
      than you found it.
    </p>

    <h3 class="h6 text-uppercase text-muted">Before</h3>
    <div class="alert alert-light border mb-3">
      <pre class="mb-0"><code>// You're fixing a null check in this function:

function calculateTotal(items: Item[], discount: number,
  taxRate: number, currency: string, useOldPricing: boolean): number {
  // TODO: rename 'x'
  const x = items.reduce((acc, i) => acc + i.price, 0)
  // old logic, kept for reference
  // const total = items.length * 10
  return x * (1 - discount) * (1 + taxRate)
}</code></pre>
    </div>

    <h3 class="h6 text-uppercase text-muted">After</h3>
    <div class="alert alert-light border mb-3">
      <pre
        class="mb-0"
      ><code>function calculateTotal(items: Item[], discount: number, taxRate: number): number {
  const subtotal = items.reduce((acc, item) => acc + item.price, 0)
  return subtotal * (1 - discount) * (1 + taxRate)
}</code></pre>
    </div>

    <p class="mb-0">
      <strong>Rule:</strong> If the cleanup takes under 30 seconds and is in the file you're already
      editing, do it. If it takes longer or touches other files, leave a TODO and move on.
    </p>
  </section>
</template>
