# GSAP Help

## Création d'une animation :
De base, une animation se lance directement au chargement de la page.  
```javascript
  let container = document.querySelectorAll('.background');
  gsap.from(".circle", {duration: 0.5, y:100, ease:"back", stagger:0.1});
  gsap.to(container, {opacity: 0, x: 500});
```
`from()/to` correspond au départ ou à la finalité de l'animation
`".circle"` sélecteur de l'objet à animer
`duration/opacity/ease/...` les différents attributs de l'animation  
  
Il est possible de déclarer des fonctions dans les attributs.
```javascript
  gsap.from(".circle", {duration: 1, y: () => Math.random()*400 - 200});
```  

## Création d'une timeline :
La timeline permet d'organiser de manière réactive le déclenchement des animations.  
```javascript
  let tl = gsap.timeline({reapeat: -1, yoyo: true});
  tl.addLabel("timer", "+=3");
  tl.from(circle, {duration: 1, y: 100, opacity: 0, stagger: 0.5, ease: 'elastic'}, "-=1");
  tl.to(background, {duration: 2, rotation: 360, ease: 'elastic'}, "timer");
```
`tl.addLabel` Permet de définir une variable de temps. 
`"-=1"` Permet de définir le départ de l'animation par rapport à l'animation qui la précède.
