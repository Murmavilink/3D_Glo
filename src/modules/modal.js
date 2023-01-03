const modal = () => {
    const popupBtns = document.querySelectorAll('.popup-btn');
    const popup = document.querySelector('.popup');
    const popupClose = popup.querySelector('.popup-close');


    popupBtns.forEach(popupBtn => {
        popupBtn.addEventListener('click', () => {
            popup.style.display = 'block';
        });
    });
    
    popupClose.addEventListener('click', () => {
        popup.style.display = 'none';
    });


};

export default modal;