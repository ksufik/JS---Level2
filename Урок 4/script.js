'use strict'

let text = `One: 'Hi Mary.' Two: 'Oh, hi.'
One: 'How are you doing?'
Two: 'I'm doing alright. How about you?'
One: 'Not too bad. The weather is great isn't it?'
Two: 'Yes. It's absolutely beautiful today.'
One: 'I wish it was like this more frequently.'
Two: 'Me too.'
One: 'So where are you going now?'
Two: 'I'm going to meet a friend of mine at the department store'
One: 'Going to do a little shopping?'
Two: 'Yeah, I have to buy some presents for my parents.'
One: 'What's the occasion?'
Two: 'It's their anniversary.'
One: 'That's great. Well, you better get going. You don't want to be late.'
Two: 'I'll see you next time.'
One: 'Sure.' Bye.'`;
//текст для промта
// The young man put forward pram. Baby in pram shouting loudly. The young man paused and said softly, 'You need to calm down, Tom. You have to control yourself, Tom.'Child calm for a minute, but then she started to cry again.The young man stopped, took out a small toy out of the bag, and gave the toy to the child and said, 'You need to calm down, Tom. You have to control yourself, Tom.'They continued, but soon the baby began to cry again.The young man stopped, took a little bit of chocolate from her bag and gave it to the child. 'Do not worry, Tom. It's all right, Tom.You'll be all right, Tom,' he said.But the child does not calm down.This is just screaming louder and louder.The old woman, who was watching a man came up to him and smiled. 'You - a great father,' she said, 'You know how to talk to your child good, quiet voice.' Then she learned the baby carriage and asked, 'What happened to you, Tom, why are you shouting?'The father looked at the strange woman and said, 'The child - a girl.Sabrina's behalf.Tom - my name.'
console.log(text);
{
    let change = /'/g;
    let changed_text = text.replace(change, '"');
    console.log('Task 1:\n' + changed_text);
}
//let change = /(^'|' | '|'$)/g;

{
    let change = /(\B'|'\B)/g;
    let changed_text = text.replace(change, '"');
    console.log('Task 2:\n' + changed_text);
}