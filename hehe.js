var fotoInputVisible = false;

  function subs() {
    var inputContainer = document.getElementById('sosial');

    var urlInputGroup = document.createElement('div');
    urlInputGroup.className = 'url-input-group form-group fade-in';
    urlInputGroup.innerHTML = `
       <i class="fab fa-youtube text-white"> </i> <label for="url">Url Channel</label>
      <div class="input-group">
        <input id="subs" placeholder="Url Channel..." type="text" class="form-control url-input " min="0">
        <div class="input-group-append">
          <button type="button" class="btn btn-danger remove-button" onclick="removeInput(this)">Remove</button>
        </div>
      </div>
    `;

    inputContainer.appendChild(urlInputGroup);
  }
  
  function like() {
    var inputContainer = document.getElementById('sosial');

    var urlInputGroup = document.createElement('div');
    urlInputGroup.className = 'url-input-group form-group fade-in';
    urlInputGroup.innerHTML = `
    <i class="fas fa-thumbs-up text-white"></i>  <label for="url">Url Video</label>
      <div class="input-group">
        <input id="like" placeholder="Url Video..." type="text" class="form-control url-input " min="0">
        <div class="input-group-append">
          <button type="button" class="btn btn-danger remove-button" onclick="removeInput(this)">Remove</button>
        </div>
      </div>
    `;

    inputContainer.appendChild(urlInputGroup);
  }

  // Fungsi untuk menambahkan inputan URL tujuan
  function dwn() {
    var inputContainer = document.getElementById('tujuan');

    var urlInputGroup = document.createElement('div');
    urlInputGroup.className = 'url-input-group form-group fade-in';
    urlInputGroup.innerHTML = `
    <i class="fas fa-download text-white"></i>  <label for="url">Url Download</label>
      <div class="input-group">
        <input id="dwn" placeholder="Url Download..." type="text" class="form-control url-input" pattern="https?://.+">
        <div class="input-group-append">
          <button type="button" class="btn btn-danger remove-button" onclick="removeInput(this)">Remove</button>
        </div>
      </div>
    `;

    inputContainer.appendChild(urlInputGroup);
  }
  
  function ig() {
    var inputContainer = document.getElementById('sosial');

    var urlInputGroup = document.createElement('div');
    urlInputGroup.className = 'url-input-group form-group fade-in';
    urlInputGroup.innerHTML = `
    <i class="fab fa-instagram text-white"></i>  <label for="url">Url Frofil IG</label>
      <div class="input-group">
        <input id="ig" placeholder="Url Frofil Instagram..." type="text" class="form-control url-input " pattern="https?://.+">
        <div class="input-group-append">
          <button type="button" class="btn btn-danger remove-button" onclick="removeInput(this)">Remove</button>
        </div>
      </div>
    `;

    inputContainer.appendChild(urlInputGroup);
  }
  
  function fb() {
    var inputContainer = document.getElementById('sosial');

    var urlInputGroup = document.createElement('div');
    urlInputGroup.className = 'url-input-group form-group fade-in';
    urlInputGroup.innerHTML = `
    <i class="fab fa-facebook text-white"></i>  <label for="url">Url Frofil FB</label>
      <div class="input-group">
        <input id="fb" placeholder="Url Frofil Facebook..." type="text" class="form-control url-input " pattern="https?://.+">
        <div class="input-group-append">
          <button type="button" class="btn btn-danger remove-button" onclick="removeInput(this)">Remove</button>
        </div>
      </div>
    `;

    inputContainer.appendChild(urlInputGroup);
  }
  
  function tiktok() {
    var inputContainer = document.getElementById('sosial');

    var urlInputGroup = document.createElement('div');
    urlInputGroup.className = 'url-input-group form-group fade-in';
    urlInputGroup.innerHTML = `
    <i class="fab fa-tiktok text-white"></i>  <label for="url">Url Tiktok</label>
      <div class="input-group ">
        <input id="tiktok" placeholder="Url Tiktok Channel..." type="text" class="form-control url-input " pattern="https?://.+">
        <div class="input-group-append">
          <button type="button" class="btn btn-danger remove-button" onclick="removeInput(this)">Remove</button>
        </div>
      </div>
    `;

    inputContainer.appendChild(urlInputGroup);
  }

function lon() {
    var inputContainer = document.getElementById('sosial');

    var urlInputGroup = document.createElement('div');
    urlInputGroup.className = 'url-input-group form-group fade-in';
    urlInputGroup.innerHTML = `
    <i class="fas fa-bell text-white"></i>  <label for="url">Url Channel</label>
      <div class="input-group ">
        <input id="lon" placeholder="Url Youtube Channel..." type="text" class="form-control url-input " pattern="https?://.+">
        <div class="input-group-append">
          <button type="button" class="btn btn-danger remove-button" onclick="removeInput(this)">Remove</button>
        </div>
      </div>
    `;

    inputContainer.appendChild(urlInputGroup);
  }
  
  // Fungsi untuk mengirim data ke agungdev.id
  

  // Fungsi untuk menampilkan atau menyembunyikan inputan file foto
  function showFotoInput() {
    var fotoInputContainer = document.getElementById('fotoInputContainer');
    var fotoInput = document.getElementById('foto');

    if (!fotoInputVisible) {
      fotoInputContainer.style.display = 'block';
      fotoInputVisible = true;
    } else {
      fotoInputContainer.style.display = 'none';
      fotoInputVisible = false;
    }
  }

  // Fungsi untuk menghapus inputan URL
  function removeInput(button) {
    var urlInputGroup = button.closest('.url-input-group');
    urlInputGroup.parentNode.removeChild(urlInputGroup);
  }

  // Fungsi untuk menyalin link ke clipboard dan menampilkan pesan
  function copyLink() {
    var shortlinkInput = document.getElementById('shortlink');
    shortlinkInput.select();
    shortlinkInput.setSelectionRange(0, 99999);
    document.execCommand('copy');

    Swal.fire({
      title: 'Berhasil!',
      text: 'Tautan berhasil disalin!',
      icon: 'success',
      timer: 2000,
      showConfirmButton: false
    });
  }
  
  function copyLink2() {
    var shortlinkInput = document.getElementById('shortlink2');
    shortlinkInput.select();
    shortlinkInput.setSelectionRange(0, 99999);
    document.execCommand('copy');

    Swal.fire({
      title: 'Berhasil!',
      text: 'Tautan berhasil disalin!',
      icon: 'success',
      timer: 2000,
      showConfirmButton: false
    });
  }
  
  function copyLink3() {
    var shortlinkInput = document.getElementById('shortlink3');
    shortlinkInput.select();
    shortlinkInput.setSelectionRange(0, 99999);
    document.execCommand('copy');

    Swal.fire({
      title: 'Berhasil!',
      text: 'Tautan berhasil disalin!',
      icon: 'success',
      timer: 2000,
      showConfirmButton: false
    });
  }

  // Fungsi untuk menampilkan atau menyembunyikan indikator loading
  function showLoadingIndicator(show) {
    var loadingIndicator = document.getElementById('loadingIndicator');
    if (show) {
      loadingIndicator.style.display = 'block';
    } else {
      loadingIndicator.style.display = 'none';
    }
  }

  // Fungsi untuk menampilkan atau menyembunyikan inputan hasil link
  function showShortlinkContainer(show) {
    var shortlinkContainer = document.getElementById('shortlinkContainer');
    if (show) {
      shortlinkContainer.style.display = 'block';
    } else {
      shortlinkContainer.style.display = 'none';
    }
  }

  // Fungsi untuk mengenerate link
function generateLink() {
  showShortlinkContainer(false);
  showLoadingIndicator(true);

  var judulInput = document.getElementById('judul');
  var judulValue = judulInput.value;
  var encodedJudul = btoa(judulValue); // Base64 encode judul

  var urlInputs = document.getElementsByClassName('url-input');
  var inputCount = {};
  var urlArray = [];
  var urlCounter = {};

  for (var i = 0; i < urlInputs.length; i++) {
    if (urlInputs[i].value) {
      var inputId = urlInputs[i].id;
      if (!inputCount[inputId]) {
        inputCount[inputId] = 1;
      } else {
        inputCount[inputId]++;
      }
      var encodedUrl = btoa(urlInputs[i].value); // Base64 encode URL
      var parameterName = inputId + (inputCount[inputId] > 1 ? inputCount[inputId] : '');

      // Update the URL counter
      if (!urlCounter[inputId]) {
        urlCounter[inputId] = 1;
      } else {
        urlCounter[inputId]++;
      }
      parameterName = inputId + urlCounter[inputId];

      urlArray.push({ id: parameterName, value: encodedUrl });
    }
  }

  var fotoInput = document.getElementById('foto');
  var fotoFile = fotoInput.files[0];

  if (fotoFile) {
    var formData = new FormData();
    formData.append('image', fotoFile);

    var imgbbAPIKey = '54e38a2c97e1a04f6860fb07718272be'; // Replace with your ImgBB API key

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://api.imgbb.com/1/upload?key=' + imgbbAPIKey, true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
        var imageURL = response.data.url;
        var encodedImageURL = btoa(imageURL); // Base64 encode URL

        var queryParameters = [];
        queryParameters.push('judul=' + encodeURIComponent(encodedJudul));
        queryParameters.push('foto=' + encodeURIComponent(encodedImageURL));

        for (var j = 0; j < urlArray.length; j++) {
          var urlParam = urlArray[j].id + '=' + encodeURIComponent(urlArray[j].value);
          queryParameters.push(urlParam);
        }

        var targetURL = 'https://www.pagedownload.my.id/2022/12/download-inject-skin-fanny.html?' + queryParameters.join('&');

        // Use fetch to get shortlinks from different APIs
        Promise.all([
          fetch('https://api.shrtco.de/v2/shorten?url=' + encodeURIComponent(targetURL)).then(response => response.json()),
          fetch('https://clck.ru/--?url=' + encodeURIComponent(targetURL)).then(response => response.text())
        ])
          .then(data => {
            var shrtcoResponse = data[0];
            var clckruResponse = data[1];

            var shortlink = shrtcoResponse.result.full_short_link;
            var shortlink2 = shrtcoResponse.result.full_short_link2;
            var shortlink3 = clckruResponse;

            document.getElementById('shortlink').value = shortlink;
            document.getElementById('shortlink2').value = shortlink2;
            document.getElementById('shortlink3').value = shortlink3;

            showLoadingIndicator(false);
            showShortlinkContainer(true);

            // Send data to agungdev.id
            sendDataToAgungDev({ judul: judulValue, foto: imageURL, urls: urlArray });
          })
          .catch(error => {
            // Handle error if any of the shortlink requests fail
            console.error('Failed to get shortlinks:', error);
            showLoadingIndicator(false);
          });
      }
    };
    xhr.send(formData);
  } else {
    var queryParameters = [];
    queryParameters.push('judul=' + encodeURIComponent(encodedJudul));

    for (var j = 0; j < urlArray.length; j++) {
      var urlParam = urlArray[j].id + '=' + encodeURIComponent(urlArray[j].value);
      queryParameters.push(urlParam);
    }

    var targetURL = 'https://www.pagedownload.my.id/2022/12/download-inject-skin-fanny.html?' + queryParameters.join('&');

    // Use fetch to get shortlinks from different APIs
    Promise.all([
      fetch('https://api.shrtco.de/v2/shorten?url=' + encodeURIComponent(targetURL)).then(response => response.json()),
      fetch('https://clck.ru/--?url=' + encodeURIComponent(targetURL)).then(response => response.text())
    ])
      .then(data => {
        var shrtcoResponse = data[0];
        var clckruResponse = data[1];

        var shortlink = shrtcoResponse.result.full_short_link;
        var shortlink2 = shrtcoResponse.result.full_short_link2;
        var shortlink3 = clckruResponse;

        document.getElementById('shortlink').value = shortlink;
        document.getElementById('shortlink2').value = shortlink2;
        document.getElementById('shortlink3').value = shortlink3;

        showLoadingIndicator(false);
        showShortlinkContainer(true);

        // Send data to agungdev.id
        sendDataToAgungDev({ judul: judulValue, urls: urlArray });
      })
      .catch(error => {
        // Handle error if any of the shortlink requests fail
        console.error('Failed to get shortlinks:', error);
        showLoadingIndicator(false);
      });
  }
}

// Bind the generateLink() function to the onSubmit event of the form
document.getElementById('myForm').addEventListener('submit', function (e) {
  e.preventDefault();
  generateLink();
});
