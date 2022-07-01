// console.log(document.head);
// console.log(document.documentElement);
// console.log(document.body.childNodes);   // позволяет путешествовать по дом дереву, получать все ноды родителя 
// console.log(document.body.firstChild);    // первый узел родителя
// console.log(document.body.firstElementChild);      // первый элемент родителя
// console.log(document.body.lastChild);

// console.log(document.querySelector('#current').parentNode.parentNode);   // путешестуем по дереву, сначала указываем выбор элемента по id , потом указываем его родителя, и еще раз родителя чтобы подняться по структуре выше на 1 шаг
// console.log(document.querySelector('#current').parentElement);  // получаем именно ЭЛЕМЕНТ а не ноду

// console.log(document.querySelector('[data-current="3"]').nextElementSibling);  // следущий соседний элемент 

for (let node of document.body.childNodes) {
    if (node.nodeName == '#text') {
        continue;
    }

    console.log(node);
}                                                               // с помощью for of можем перебоать массив , тк это удобно делать из-за break и continue