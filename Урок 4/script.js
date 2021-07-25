'use strict'

let text = prompt();
//текст для промта
// The young man put forward pram. Baby in pram shouting loudly. The young man paused and said softly, 'You need to calm down, Tom. You have to control yourself, Tom.'Child calm for a minute, but then she started to cry again.The young man stopped, took out a small toy out of the bag, and gave the toy to the child and said, 'You need to calm down, Tom. You have to control yourself, Tom.'They continued, but soon the baby began to cry again.The young man stopped, took a little bit of chocolate from her bag and gave it to the child. 'Do not worry, Tom. It's all right, Tom.You'll be all right, Tom,' he said.But the child does not calm down.This is just screaming louder and louder.The old woman, who was watching a man came up to him and smiled. 'You - a great father,' she said, 'You know how to talk to your child good, quiet voice.' Then she learned the baby carriage and asked, 'What happened to you, Tom, why are you shouting?'The father looked at the strange woman and said, 'The child - a girl.Sabrina's behalf.Tom - my name.'
console.log(text);
let change = /(^'|' | '|'$)/g;
let changed_text = text.replace(change, '"');
console.log(changed_text);