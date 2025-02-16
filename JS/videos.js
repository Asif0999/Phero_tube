// Fetch and Load Data
const loadCategories = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((error) => console.log(error));
};
// Display Cateagories
const displayCategories = (data) => {
  const categoryContainer = document.getElementById("categories");
  data.forEach((item) => {
    // create button
    const button = document.createElement("button");
    button.classList = "btn btn-warning";
    button.innerText = item.category;
    categoryContainer.append(button);
  });
};
// ---- ---- ----- ----- ---- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----
// Load Videos
const loadVideos = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => displayVideos(data.videos))
    .catch((error) => console.log(error));
};

// Get Time
function getTime(time) {
  let hour = parseInt(time / 3600);
  let remainingSecond = time % 3600;
  let minute = parseInt(remainingSecond / 60);
  remainingSecond = remainingSecond % 60;
  return `${hour} hour ${minute} minute ${remainingSecond} second ago`;
}
// displayVideos
const displayVideos = (data) => {
  const videoSection = document.getElementById("videos");
  data.forEach((item) => {
    const card = document.createElement("div");
    card.classList = "card card-compact";
    card.innerHTML = `
        <figure class="h-[200px] relative">
    <img
      src=${item.thumbnail}
      class="h-full w-full object-cover"
      alt="Shoes" />
      ${
        item.others.posted_date?.length == 0
          ? ""
          : `
         <span class="absolute right-2 bottom-2 bg-black rounded p-1 text-white">${getTime(
           item.others.posted_date
         )}</span>
        `
      }
     
  </figure>
  <div class="px-0 py-2 flex gap-2">
    <div>
        <img class="w-10 h-10 rounded-full object-cover" src="${
          item.authors[0].profile_picture
        }" alt="">
      </div>
      <div>
        <h2 class="font-bold">${item.title}</h2>
        <div class="flex items-center gap-2">
          <p class="text-gray-400">${item.authors[0].profile_name}</p>
          ${
            item.authors[0].verified == true
              ? `<img class="w-5" src="https://img.icons8.com/?size=48&id=D9RtvkuOe31p&format=png" alt="">`
              : ""
          }
        </div>
        <p></p>
      </div>
  </div>
        `;
    videoSection.append(card);
  });
};
loadCategories();
loadVideos();
