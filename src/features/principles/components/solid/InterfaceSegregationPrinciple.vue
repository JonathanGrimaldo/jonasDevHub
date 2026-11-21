<template>
  <section id="ocp" class="mb-5">
    <h2 class="h4">I — Interface Segregation Principle</h2>
    <p class="mb-3">Clients should not be forced to depend on interfaces they do not use.</p>

    <img alt="Interface Segregation Principle diagram" class="img-fluid rounded mb-3" />
    <small class="text-muted d-block mb-3">
      Many client-specific interfaces are better than one general-purpose interface.
    </small>

    <div class="alert alert-light border">
      <strong>Example:</strong>
      <pre class="mb-0"><code>
public interface IShape 
{
    double Area();
}

public class Circle : IShape 
{
    public double Radius { get; set; }
    
    public double Area() 
    {
        return Math.PI * Radius * Radius;
    }
}
</code></pre>
    </div>
  </section>
</template>
