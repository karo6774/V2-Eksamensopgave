document.addEventListener(
    'focusin',
    event => onCard(event.target, card => card.classList.add("hover"))
);

document.addEventListener(
    'focusout',
    event => onCard(event.target, card => card.classList.remove("hover"))
);

const onCard = (el, cb) => {
    if (el.classList.contains("showcase-item__buy-button")) {
        const card = el.closest(".showcase-item__container");
        if (card) cb(card);
    }
};
