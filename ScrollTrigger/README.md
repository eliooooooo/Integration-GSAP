# ScrollTrigger Plugin [See doc](https://gsap.com/docs/v3/Plugins/ScrollTrigger/)

## Utilisation minimale :  
L'animation commencera lorsque l'objet apparaît sur le viewport. Attention, pas de s majuscule !
```javascript
  gsap.to(".box", {scrollTrigger: ".box", x:500});
```

## Personalisation de l'animation :
L'attribut `scrollTrigger` est un objet, il contient donc plusieurs attributs.
```javascript
  gsap.to(".box",
    scrollTrigger: {
      trigger : ".box",
      start: "top center",
      end: "bottom bottom",
      // end: "+=300",
      // endTrigger: ".box2",
      // scrub: true,
      scrub: 1,
      pin: true,
      pinSpacing: false,
      markers: true,
      toggleActions: "restart pause resume pause"
    }
  )
```
`trigger` correspond à l'objet à animer.  
`start` correspond à la position de départ de l'animation. la première valeur correspond à l'objet et la seconde au viewport. Il est possible d'utiliser top, center, bottom mais aussi px, %, qui sont alors relatifs par rapport au top.  
`end` correspond à la position de fin de l'animation. Il est possible d'utiliser une valeur relatiove (avec +=) qui sera relative au point de départ.  
`endTrigger` permet de définir un point d'arrêt à l'animation correspondant à un autre élément.  
`scrub` permet de lien l'animation au scroll de l'utilisateur. Peut être un boolean mais aussi un nombre, en seconde qui permettra de rendre l'animation plus smooth.  
`pin` permet de garder un élément à sa place malgré le scroll. peut contenir 1 pour le trigger ou alors ".element" pour tout autre elements. Si le end point est relatif au début de l'animation, pin un élément ajoutera du padding sous celui ci.
`pinSpacing` permet de supprimer le padding causé par le pin.  
`markers` permet d'afficher les arkers d'animation de l'objet.  
`toggleActions` permet de gérer les actions de l'object au passage de différents états/positions (entrée dans l'écran, sortie par le haut, entrée par le haut, offscreen) ça peut être : play pause resume reverse restart.  

## ScrollTrigger une Timeline :  
Il est possible d'affecter ces caractéristiques à une Timeline.  
```javascript
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".a",
      toggleActions: "restart pause resume pause",  // reverse
      start: "top 100px",
      scrub: 5,
      markers: true,
    },
  });

  tl.to(".a"
    // Suite des animations...
  );
```

## Scroll trigger indépendant :  
Il est possible de créer un ScrollTrigger qui n'est pas dépendant d'un élément ou d'une timeline puis de lui affecter les éléments sur lesquels elle doit se jouer.  
```javascript
  scrollTrigger.create({
    animation: tl,
    trigger: "#container",
    start: "top top",
  })
```

## Horizontal scroll :
Pour cette partie, voir la doc à 15:00. Cela peut varier selon les cas d'utilisation.

## Callbacks :
à voir dans la doc