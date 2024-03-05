# GSAP Help

The global syntax look like :  
```javascript
  gsap.from(".circle", {duration: 0.5, y:100, ease:"back", stagger:0.1});
```

Each attribute of this function can take a function in value. For exemple : 
```javascript
  gsap.from(".circle", {duration: 1, y: () => Math.random()*400 - 200})
```

You can use different native function like : 
> - pause
  - reverse
  - timescale
  - progress
  - ...