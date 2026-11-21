<template>
  <section id="yagni" class="mb-5">
    <h2 class="h4">YAGNI — You Aren't Gonna Need It</h2>

    <p class="mb-3">
      Don't build features, add abstractions, or write code for requirements that
      <strong>don't exist yet</strong>. Build what you need <em>today</em>. If the need appears
      tomorrow, add it tomorrow.
    </p>

    <h3 class="h6 text-uppercase text-muted">Why it matters</h3>
    <p class="mb-3">
      Every "just in case" feature is a tax you pay forever: you write it, test it, document it,
      maintain it, and debug it — for a problem that may never arrive. And when the real problem
      <em>does</em> arrive, it's rarely the one you predicted.
    </p>

    <h3 class="h6 text-uppercase text-muted">Violation</h3>
    <div class="alert alert-light border mb-3">
      <pre class="mb-0"><code>// You need to display a user's name on a profile page.

class User {
  firstName: string
  lastName: string
  middleName: string      // "maybe they have one"
  honorific: string       // "Dr., Mr., etc."
  nickname: string        // "for the social features we'll add later"
  displayName: string     // "in case we want a custom display"
  locale: string          // "for i18n, probably"
  timezone: string        // "for the scheduling feature"
}

// You use: firstName + lastName. That's it.</code></pre>
    </div>
    <p class="text-muted mb-3">
      Seven fields for a two-field need. Each one is a migration, a validation rule, a test case,
      and a question in a code review — for a feature that doesn't exist.
    </p>

    <h3 class="h6 text-uppercase text-muted">After</h3>
    <div class="alert alert-light border mb-3">
      <pre class="mb-0"><code>class User {
  firstName: string
  lastName: string
}

// Next month, the product team says "we need nicknames."
// Now you add:
nickname?: string
// One line. One migration. One test. Done.</code></pre>
    </div>
    <p class="text-muted mb-3">
      You added the complexity <em>when the need was real</em>, not three months earlier when it was
      a guess.
    </p>

    <h3 class="h6 text-uppercase text-muted">How to detect a violation</h3>
    <ul class="mb-3">
      <li>
        Did you write it because a requirement says so, or because you <em>imagined</em> a
        requirement?
      </li>
      <li>
        Is there a `// TODO: use when we add X` comment? That's YAGNI in action — delete the code,
        keep the TODO.
      </li>
      <li>Are you adding a parameter to a function that no caller passes yet?</li>
      <li>Are you designing for "scale" when you have 3 users?</li>
      <li>If a colleague asked "what feature uses this?" and you can't name one, it's YAGNI.</li>
    </ul>

    <h3 class="h6 text-uppercase text-muted">Common mistake</h3>
    <p class="mb-3">
      YAGNI ≠ "never plan ahead." If you know the next sprint will need multi-tenancy, design for it
      now. The distinction is:
    </p>
    <ul class="mb-3">
      <li>
        <strong>Known requirement, not yet built</strong> → design for it (it's in the backlog, it's
        real).
      </li>
      <li>
        <strong>Speculative requirement, not in the backlog</strong> → don't build it (YAGNI).
      </li>
    </ul>
    <p class="mb-3">
      Also: YAGNI doesn't mean "write throwaway code." It means
      <strong>don't add complexity you can't justify with a current requirement.</strong> Clean,
      simple code that's easy to extend is the goal — not code that's hard to extend but "handles
      everything."
    </p>

    <h3 class="h6 text-uppercase text-muted">Practical rule</h3>
    <p class="mb-0">
      Before adding a feature, abstraction, or parameter, ask:
      <strong>"What specific, current requirement does this solve?"</strong>
      If the answer is "maybe" or "in the future," don't build it. Write the simplest version, ship
      it, and let real usage tell you what to add next.
    </p>
  </section>
</template>
