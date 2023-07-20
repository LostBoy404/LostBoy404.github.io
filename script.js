// Define an array of image URLs
const imageUrls = [
  'image1.jpg',
  'image2.jpg',
  'image3.jpg',
  // Add more image URLs as needed
];

// Function to get a random image URL from the array
function getRandomImageUrl() {
  const randomIndex = Math.floor(Math.random() * imageUrls.length);
  return imageUrls[randomIndex];
}

// Function to change the image of a flex item
function changeImage(flexItem) {
  const imageUrl = getRandomImageUrl();
  flexItem.style.backgroundImage = `url('${imageUrl}')`;
}

// Function to create and append flex items to the container
function createFlexItems(container, count) {
  for (let i = 0; i < count; i++) {
    const flexItem = document.createElement('div');
    flexItem.classList.add('flex-item');
    container.appendChild(flexItem);
    changeImage(flexItem); // Set a random image initially

    // Change the image every 3 seconds
    setInterval(() => {
      changeImage(flexItem);
    }, 3000);
  }
}

// Get the container and create the flex items
const imageContainer = document.getElementById('imageContainer');
createFlexItems(imageContainer, 12); // Change 12 to the number of flex items you want
