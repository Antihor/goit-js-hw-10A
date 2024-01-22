import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const formRef = document.querySelector('.form');

formRef.addEventListener('submit', onSubmit);

function onSubmit(ev) {
  ev.preventDefault();

  let delay = Number(ev.target.elements.delay.value);
  let state = ev.target.elements.state.value;

  createPromise(delay)
    .then(({ delay }) => {
      iziToast.success({
        title: '',
        message: `'✅ Fulfilled promise in ${delay} ms'`,
        position: 'topCenter',
      });
      console.log(`✅ Fulfilled promise in ${delay} ms`);
    })
    .catch(({ delay }) => {
      iziToast.error({
        title: '',
        message: `'❌ Rejected promise in ${delay} ms'`,
        position: 'topCenter',
      });
      console.log(`❌ Rejected promise in ${delay} ms`);
    });

  ev.target.reset();

  function createPromise(delay) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (state === 'fulfilled') {
          resolve({ delay });
        } else {
          reject({ delay });
        }
      }, delay);
    });
  }
}
