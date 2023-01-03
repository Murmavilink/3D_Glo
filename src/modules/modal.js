const modal = () => {
    const popupBtns = document.querySelectorAll('.popup-btn');
    const popup = document.querySelector('.popup');
    const popupContent = document.querySelector('.popup-content');
    const popupClose = popup.querySelector('.popup-close');

    let count = 0;
    let idRequest;

    const screenCheck = () => {
        return document.documentElement.clientWidth < 768 ? true : false;
    };

    const modalAnim = () => {
        count++;

        idRequest = requestAnimationFrame(modalAnim);
        popupContent.style.top = count + '%';

        if(count > 30) cancelAnimationFrame(idRequest);
    };

    popupBtns.forEach(popupBtn => {
        popupBtn.addEventListener('click', () => {
            popup.style.display = 'block';

            !screenCheck() ? idRequest = requestAnimationFrame(modalAnim) : '';
            
        });
    });
    
    popupClose.addEventListener('click', () => {
        count = 0;
        popupContent.style.top = 10 + '%';
        popup.style.display = 'none';
    });

};

export default modal;