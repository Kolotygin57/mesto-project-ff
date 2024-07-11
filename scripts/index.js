// @todo: Темплейт карточки
const places = document.querySelector('.places__list'); 
const template = document.querySelector("#card-template").content; 
// @todo: DOM узлы

// @todo: Функция создания карточки
function createCard (item, deleteCard) {
 const card = template.cloneNode(true);
 const cardImage = card.querySelector('.card__image');

 card.querySelector('.card__title').textContent = item.name;
 cardImage.src = item.link;
 cardImage.alt = item.name;

 const deleteButtons = card.querySelector('.card__delete-button');
 deleteButtons.addEventListener('click', deleteCard);

 return card;
};

// @todo: Функция удаления карточки
function deleteCard(event){
  const card = event.target.closest('.places__item');
  card.remove();
}

// @todo: Вывести карточки на страницу
initialCards.forEach((item) => {
  const newCard = createCard(item, deleteCard);
  places.append(newCard);
});