<template>
  <section id="kiss" class="mb-5">
    <h2 class="h4">KISS — Keep It Simple, Stupid</h2>

    <p class="mb-3">
      The simplest solution that works is the right one. Complexity is a
      <strong>cost</strong>, not a feature — every line you add is a line that can break, confuse,
      or need refactoring later.
    </p>

    <h3 class="h6 text-uppercase text-muted">Why it matters</h3>
    <p class="mb-3">
      Over-engineered code is harder to read, harder to test, harder to modify, and harder to
      delete. The "clever" solution that handles 10 edge cases you'll never hit costs more than the
      "boring" one that handles the 2 you actually have.
    </p>

    <h3 class="h6 text-uppercase text-muted">Violation</h3>
    <div class="alert alert-light border mb-3">
      <pre class="mb-0"><code>// 40 lines to format a date for one page
function formatDate(date: Date, locale: string, pattern: string,
  useUTC: boolean, includeSeconds: boolean, customMap?: Record&lt;string, string&gt;): string {
  // ... abstraction factory for locale resolution
  // ... pattern parser with fallback chains
  // ... 15 lines of conditional logic
}

// Called once:
formatDate(new Date(), 'en', 'MM/DD/YYYY', false, false)</code></pre>
    </div>
    <p class="text-muted mb-3">
      You'll never need `locale`, `pattern`, or `customMap`. You added flexibility for a problem
      that doesn't exist.
    </p>

    <h3 class="h6 text-uppercase text-muted">After</h3>
    <div class="alert alert-light border mb-3">
      <pre class="mb-0"><code>const date = new Date().toLocaleDateString('en-US')
// "11/19/2026" — done.</code></pre>
    </div>

    <h3 class="h6 text-uppercase text-muted">How to detect a violation</h3>
    <ul class="mb-3">
      <li>Could you delete half the parameters and nothing would break?</li>
      <li>Does the solution have more abstraction layers than the problem has moving parts?</li>
      <li>If you can't explain it to a junior dev in 30 seconds, it's probably too complex.</li>
      <li>
        Are you using a design pattern because it <em>fits</em> or because you
        <em>read about it</em>?
      </li>
    </ul>

    <h3 class="h6 text-uppercase text-muted">Common mistake</h3>
    <p class="mb-3">
      KISS ≠ "write the least code possible." It means
      <strong>don't add complexity you don't need yet</strong>. A well-structured 200-line module is
      simpler than a 50-line spaghetti file. The test is: does each piece of complexity solve a
      <em>real, current</em> problem?
    </p>

    <h3 class="h6 text-uppercase text-muted">Practical rule</h3>
    <p class="mb-0">
      Write the simplest version first. If it breaks or doesn't scale,
      <em>then</em> add complexity — and only the amount needed to fix the specific problem. You can
      always refactor; you can't un-refactor a design that was over-built from day one.
    </p>
  </section>
</template>
