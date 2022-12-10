const main = document.querySelector('main');
const firstJoke = "Did you hear about the claustrophobic astronaut? He just needed a little space."
const secondJoke = "What sits at the bottom of the sea and twitches? A nervous wreck."
const thirdJoke = "What did the bald man exclaim when he received a comb for a present? Thanks- I'll never part with it!"
const template = `
<section>
<h1>My Jokes</h1>
<ul>
<li>${firstJoke}</li>
<li>${secondJoke}</li>
<li>${thirdJoke}</li>
</ul>
</section>
`
main.innerHTML = template
const p = document.createElement('p');
p.textContent = "That's all folks!"
main.appendChild(p);