// @todo: Темплейт карточки
const places = document.querySelector('.places__list'); //Блок куда загружаются карточки
const template = document.querySelector("#card-template").content; // Заготовка верстки
// @todo: DOM узлы

// @todo: Функция создания карточки

function createdCard (name, link){
 const card = template.cloneNode(true);

 card.querySelector('.card__title').textContent = name;
 card.querySelector('.card__image').src = link;

 return card;
};

// @todo: Функция удаления карточки



// @todo: Вывести карточки на страницу
initialCards.forEach((card) => {
  const newCard = createdCard(card.name, card.link);
  places.append(newCard);
});