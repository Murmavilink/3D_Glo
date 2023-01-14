const sendForm = ({ formId, someElem = [] }) => {
    const form = document.getElementById(formId);
    const preloader = document.createElement('div');
    const statusBlock = document.createElement('h3');
    const errorText = 'Ошибка...';
    const succesText = 'Спасибо! Наш менеджер с вами свяжется';


    preloader.insertAdjacentHTML("beforeend", `
        <div id="preloader">
            <div id="loader"></div>
        </div>
    `);
    
    preloader.style.display = "none";

    const clearStatusBlock = () => statusBlock.textContent = '';

    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json());
    };

    const submitForm = () => {
        const formElements = form.querySelectorAll('input');
        const formData = new FormData(form);
        const formBody = {};

        clearStatusBlock();
        preloader.style.display = "block";

        formData.forEach((val, key) => {
            formBody[key] = val;
        });

        someElem.forEach(elem => {
            const element = document.getElementById(elem.id);

            if(elem.type === 'block') {
                formBody[elem.id] = element.textContent;
            } else if (elem.type === 'input') {
                formBody[elem.id] = element.value;
            }
        });

        sendData(formBody).then(data => {
            preloader.style.display = "none";
            statusBlock.textContent = succesText;

            formElements.forEach(input => {
                input.value = '';
            });

            setTimeout(clearStatusBlock, 5000);

        }).catch(error => {
            statusBlock.textContent = errorText;
            setTimeout(clearStatusBlock, 5000);
        });

        setTimeout(() => {
            statusBlock.textContent = '';
        }, 5000);
    };

    try {
        if(!form) {
            throw new Error('Верните форму на место, пожааааалуйста))');
        }

        form.append(preloader);
        form.append(statusBlock);

        form.addEventListener('submit', (e) => {
            e.preventDefault();
    
            submitForm();
        });
    } catch(error) {
        console.log(error.message);
    }
   


};

export default sendForm;