const videoElement = document.getElementById('video');
const button = document.getElementById('btn');

//Promt to select media Stream, pass to vido element, then play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (e) {
    console.log('Whoooops, Error Here:', e);
  }
}

button.addEventListener('click', async () => {
  //Disable the btn
  button.disabled = true;
  //Start Picture in picture
  await videoElement.requestPictureInPicture();
  //Reset Button
  button.disabled = false;
});

//On load
selectMediaStream();
