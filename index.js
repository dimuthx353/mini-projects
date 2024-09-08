console.log('object');
const main = document.getElementById('main');

fetch('./pages.json')
  .then(function (response) {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // If you want to parse the JSON
  })
  .then(function (data) {
    console.log(data.pages.length);
    createEl(data);
  })
  .catch(function (error) {
    console.error('There has been a problem with your fetch operation:', error);
  });

function createEl(data) {
  data.pages.forEach(({ id, title, pagePath, imagePath, description }) => {
    console.log(id);

    const template = `
        <div
        class="me-16 my-5 max-w-sm bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <a href=${pagePath}>
          <img
            class="rounded-t-lg"
            src=${imagePath}
            alt=""
          />
        </a>
        <div class="p-5">
          <a href="#">
            <h5
              class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              ${title}
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
           ${description}
          </p>
          <a
            href=${pagePath}
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Live Demo
            <svg
              class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    `;

    main.innerHTML += template;
  });
}
