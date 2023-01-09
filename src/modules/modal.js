import { animate } from "./helpers";

const modal = () => {
    const modal = document.querySelector('.popup');
    const buttons = document.querySelectorAll('.popup-btn');
    const popupContent = modal.querySelector('.popup-content');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = 'block';
            if (screen.width > 768) {
                animate({
                    duration: 800,
                    timing(timeFraction) {
                        return timeFraction;
                    },
                    draw(progress) {
                        popupContent.style.top = progress * 30 + '%';
                    }
                });
            }
        });
    });


    modal.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            animate({
                duration: 800,
                timing(timeFraction) {
                    return timeFraction;
                },
                draw(progress) {
                    popupContent.style.top = (progress * -100) + '%';
                }
            });

            setTimeout(() => {
                modal.style.display = 'none';
            }, 500);
        }
    });

};

export default modal;