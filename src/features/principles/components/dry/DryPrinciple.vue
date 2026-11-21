<template>
  <section id="dry" class="mb-5">
    <h2 class="h4">DRY — Don't Repeat Yourself</h2>

    <p class="mb-3">
      Every piece of knowledge should have a
      <strong>single, unambiguous, authoritative representation</strong> within a system. If the
      same logic, rule, or data appears in more than one place, it's a violation.
    </p>

    <h3 class="h6 text-uppercase text-muted">Why it matters</h3>
    <p class="mb-3">
      When you repeat yourself, a change in one place requires you to remember to change it
      everywhere else. Miss one spot and you have a subtle bug. The more copies exist, the higher
      the chance of drift.
    </p>

    <h3 class="h6 text-uppercase text-muted">Violation</h3>
    <div class="alert alert-light border mb-3">
      <pre class="mb-0"><code>// In UserService.ts
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// In RegistrationForm.vue
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// In AdminPanel.vue
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// In api/validators.ts
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// ...you know the rule changed to allow subdomains,
// but only updated 3 of the 5 places.</code></pre>
    </div>
    <p class="text-muted mb-3">
      Five copies of the same rule. One change means editing five files. Miss one and validation
      silently diverges.
    </p>

    <h3 class="h6 text-uppercase text-muted">After</h3>
    <div class="alert alert-light border mb-3">
      <pre class="mb-0"><code>// src/shared/validators.ts
export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
export const isValidEmail = (s: string) => EMAIL_REGEX.test(s)

// Anywhere in the app:
import { isValidEmail } from '@/shared/validators'
if (!isValidEmail(input)) { /* ... */ }</code></pre>
    </div>
    <p class="text-muted mb-3">One place. Change the rule once, it propagates everywhere.</p>

    <h3 class="h6 text-uppercase text-muted">How to detect a violation</h3>
    <ul class="mb-3">
      <li>Copy-paste is the #1 smell. If you pasted code, you should have extracted it.</li>
      <li>Two functions that differ only by one parameter → extract a shared function.</li>
      <li>Two components with the same 10-line template block → extract a sub-component.</li>
      <li>A magic number or string that appears in 3+ files → constant or config.</li>
      <li>When you fix a bug, do you have to fix it in multiple places? That's DRY violated.</li>
    </ul>

    <h3 class="h6 text-uppercase text-muted">Common mistake</h3>
    <p class="mb-3">
      DRY ≠ "never write similar code." Two functions that <em>look</em>
      similar but solve different problems should stay separate. Forcing them into one "generic"
      function creates a worse violation than the duplication you were trying to remove.
    </p>
    <p class="mb-3">
      The rule is:
      <strong
        >if two pieces of code express the same knowledge, they should be the same code.</strong
      >
      If they express different knowledge that happens to look similar, leave them alone.
    </p>

    <h3 class="h6 text-uppercase text-muted">Practical rule</h3>
    <p class="mb-0">
      Extract on the <strong>third</strong> repetition, not the second. Two similar lines might be a
      coincidence; three means it's a pattern. Extracting too early (on the second) often produces
      an abstraction that's wrong because you didn't see the third case yet.
    </p>
  </section>
</template>
