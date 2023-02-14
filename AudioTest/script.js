const video = document.querySelector('video');
let streamstarted = false
var mediaRecorder = null
var basString = ""

async function getlist() {


  let list = await navigator.mediaDevices.enumerateDevices()
  list = list.filter(device => device.kind === 'audioinput')
  console.log(list)
}



async function getConstraints() {
  let list = await navigator.mediaDevices.getSupportedConstraints();
  console.log(list)
}

const startvid = async () => {
  let camera = await navigator.mediaDevices.getUserMedia({ video: true })
  if (camera) {
    streamstarted = true
    video.srcObject = camera
    video.play()
    console.log('lol')
  }

  else {
    alert('give permission');
  }
}
const endVid = () => {
  if (streamstarted) {
    const mediaStream = video.srcObject;
    const tracks = mediaStream.getTracks();
    video.pause()
    tracks[0].stop();
    video.srcObject = null

  }
  else {
    alert('give permission');
  }
}

const recordVoice = async () => {
  audio = await navigator.mediaDevices.getUserMedia({ audio: true })
  mediaRecorder = new MediaRecorder(audio);
  mediaRecorder.start();
  console.log(mediaRecorder.state);
  console.log("recorder started");
  const audioChunks = [];

  mediaRecorder.addEventListener("dataavailable", event => {
    audioChunks.push(event.data);
  });


  mediaRecorder.addEventListener("stop", () => {
    const audioBlob = new Blob(audioChunks);
    const audioUrl = URL.createObjectURL(audioBlob);
    const audio = new Audio(audioUrl);
    audio.play();
    var reader = new window.FileReader();
    reader.readAsDataURL(audioBlob);
    reader.onloadend = function () {
      base64 = reader.result;
      base64 = base64.split(',')[1];
      basString = base64;
      console.log(basString);
    }
  });


}

const stopRecorder = () => {
  mediaRecorder.stop()
  const tracks = mediaRecorder.stream.getAudioTracks()
  tracks[0].stop();
  sendReq()
}

const sendReq = () => {
  const options = {
    method: 'POST',
    headers: {
      'content-type': 'text/plain',
      'X-RapidAPI-Key': 'e0b29ad855msh768dce17f1f3376p1038cejsn513d7caea45e',
      'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
    },
    body: basString
  };

  fetch('https://shazam.p.rapidapi.com/songs/v2/detect?timezone=America%2FChicago&locale=en-US', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
}

getlist()
getConstraints()

