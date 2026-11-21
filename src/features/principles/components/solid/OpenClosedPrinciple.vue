<template>
  <section id="ocp" class="mb-5">
    <h2 class="h4">O — Open/Closed Principle</h2>
    <p class="mb-3">Software entities should be open for extension but closed for modification.</p>

    <img alt="Open/Closed Principle diagram" class="img-fluid rounded mb-3" />
    <small class="text-muted d-block mb-3">
      New functionality is added through extensions, not modifications.
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
