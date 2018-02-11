var inspirations = [ /*array in square brackets*/ /*... in html*/
"Nothing in the world is worth having or worth doing unless it means effort, pain, difficulty&hellip",
"I have never in my life envied a human being who led an easy life",
"I have envied a great many people who led difficult lives and led them well Theodore Roosevelt",
"Options are a distraction from action.-EZM",
"If youre serious about changing your life, youll find a way If youre not, youll find an excusen Jen Sincero",
"I dont have to know an answer. I dont feel frightened by not knowing things,by being lost in a mysterious universe without any purpose, which is the way it really is, so far as I can tell. It doesnt frighten me -Richard P. Feynman',
"Because so often when we say we're unqualified for something, what we're really saying is that we're too scared to try it, not that we cant do it. -Jen Sincero",
"The secret of change is to focus all of your energy, not on fighting the old but on building the new. -Socrates",
"A dream is your creative vision for your life in the future.You must break out of your current comfort zone and become comfortable with the unfamiliar and the unknown.Denis Waitley",
"Don't dwell on what went wrong. Instead, focus on what to do next. Spend your energies on moving forward toward finding the answer.-Denis Waitley",
"Don't ask yourself what the world needs. Ask yourself what makes you come alive and then go do that. Because what the world needs is people who have come alive. -Howard Thurman",
"The harder the struggle, the more glorious the truimph.-Thomas Paine",
"If you feel like giving up, just look back on how far you are already.If you feel like quitting, think about why you started.",
"The people who are crazy enough to think they can change the world are the ones who do.-Steve Jobs"

]
/*random whole numbers will be generated based on length of array*/
function newInspiration() {
    var randomNumber = Math.floor(Math.random() * inspirations.length) /*Math.random is a decimal btw 0-1*/
    /*use value of randomNumber to get inspiration from inspiration array*/
    document.getElementById('inspirationDisplay').innerHTML = inspirations[randomNumber] /*document is DOM document object model which makes html interactive*/
} /*innerHTML is the html of a dom element*/
