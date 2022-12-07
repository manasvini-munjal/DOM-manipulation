const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text content!'

container.appendChild(content);

const para = document.createElement('p');
para.textContent = `Hey I'm red!`;
para.style.color = 'red';

const h3 = document.createElement('h3');
h3.textContent = `I'm a blue h3!!`;
h3.style.color = 'blue';

container.appendChild(para);
container.appendChild(h3);

const anotherContent = document.createElement('div');
anotherContent.style.cssText = 'border: 1px solid black; background: pink';

const h1 = document.createElement('h1');
h1.textContent = `I'm in a div`;

const anotherPara = document.createElement('p');
anotherPara.textContent = `ME TOO!`;

anotherContent.appendChild(h1);
anotherContent.appendChild(anotherPara);

container.appendChild(anotherContent);