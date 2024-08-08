let btn = document.querySelector(".new-qoute")
let qoute = document.querySelector('.qoute')
let person = document.querySelector(".person")

const qoutes = [
    {
        qoute: `"In cricket, as in life, you need to have a game plan and execute it with determination."`,
        person: ` - Rahul Dravid`
    },
    {
        qoute: `"I play cricket because I love it. It's my passion."`,
        person: `- Sachin Tendulkar`
    },
    {
        qoute: `"Cricket is my life, everything else is just a hobby." `,
        person: ` - Virender Sehwag`
    },
    {
        qoute: `"Cricket is not just a sport, it's a way of life in India." `,
        person: `- Sourav Ganguly`
    },
    {
        qoute: `"I believe in giving my 100% on the field, because that's the only way I know how to play cricket."`,
        person: `- Anil Kumble`
    },
    {
        qoute: `"Cricket has taught me more about life than anything else. It has taught me discipline, perseverance, and the importance of teamwork." `,
        person: ` - Mahendra Singh Dhoni`
    },
    {
        qoute: `"Cricket is a gentleman's game, and it's our responsibility as cricketers to uphold the spirit of the game."`,
        person: ` - Kapil Dev`
    },
    {
        qoute: `"Cricket is a game that requires skill, technique, and temperament." `,
        person: `- AB de Villiers`
    },
    {
        qoute: `"Cricket is a game of passion, and the love for the sport keeps you going."`,
        person: `- Chris Gayle
        `
    },
    {
        qoute: `"Cricket is not just about playing the shots, but also understanding the game and its nuances." `,
        person: `- Kane Williamson`
    },
    {
        qoute: `"In cricket, you need to have a never-give-up attitude and keep fighting till the end."`,
        person: `- Ben Stokes`
    },
    {
        qoute: `"Every time I step onto the cricket field, I carry the hopes and dreams of millions of Indians with me."`,
        person: `- Shikhar Dhawan`
    },
]

btn.addEventListener("click",()=>

{
    let random= Math.floor(Math.random()*qoutes.length);
     qoute.innerText=qoutes[random].qoute
     person.innerText=qoutes[random].person
}

)