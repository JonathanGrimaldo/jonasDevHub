<template>
  <section id="dip" class="mb-5">
    <h2 class="h4">D — Dependency Inversion</h2>
    <p class="mb-3">Depend on abstractions, not on concrete implementations.</p>

    <img alt="Dependency Inversion diagram" class="img-fluid rounded mb-3" />
    <small class="text-muted d-block mb-3"> Abstractions decouple the layers. </small>

    <div class="alert alert-light border">
      <strong>Example:</strong>
      <pre class="mb-0"><code>
      public interface INotificationService 
      {
        void Send(string message);
      }

      public class EmailNotificationService : INotificationService 
      {
        public void Send(string message) 
        {
          // Send email logic
        }
      }
</code></pre>
    </div>
  </section>
</template>
