<template>
  <section id="ocp" class="mb-5">
    <h2 class="h4">L — Liskov Substitution Principle</h2>
    <p class="mb-3">
      Objects of a superclass should be replaceable with objects of its subclasses without affecting
      the correctness of the program.
    </p>

    <img alt="Liskov Substitution Principle diagram" class="img-fluid rounded mb-3" />
    <small class="text-muted d-block mb-3">
      Subtypes must be substitutable for their base types.
    </small>

    <div class="alert alert-light border">
      <strong>Example:</strong>
      <pre class="mb-0"><code>
public class Bird 
{
    public virtual void Fly() 
    {
        // Default flying behavior
    }
}

public class Penguin : Bird 
{
    public override void Fly() 
    {
        throw new NotSupportedException("Penguins can't fly!");
    }
}

public class Sparrow : Bird 
{
    public override void Fly() 
    {
        // Sparrow's flying behavior
    }
} 
</code></pre>
    </div>
  </section>
</template>
