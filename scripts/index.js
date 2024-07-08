// @todo: Темплейт карточки
const places = document.querySelector('.places__list'); 
const template = document.querySelector("#card-template").content; 
// @todo: DOM узлы

// @todo: Функция создания карточки
function createdCard (item) {
 const card = template.cloneNode(true);

 card.querySelector('.card__title').textContent = item.name;
 card.querySelector('.card__image').src = item.link;
 card.querySelector('.card__image').alt = item.link;

 const deleteButtons = card.querySelector('.card__delete-button');
 deleteButtons.addEventListener('click', deleteCard);

 return card;
};

// @todo: Функция удаления карточки
function deleteCard(event){
  const cardRemove = event.target.closest('.places__item');
  cardRemove.remove();
}

// @todo: Вывести карточки на страницу
initialCards.forEach((item) => {
  const newCard = createdCard(item, deleteCard);
  places.append(newCard);
});
