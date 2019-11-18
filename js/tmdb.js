const key = 'eb6b7eba8a8fcec3769b2610e7c06efe';
const endpoint_url = 'https://api.themoviedb.org/3/';

// Blok kode untuk melakukan request API

function getListMovie(){
  fetch(endpoint_url + "/movie/now_playing?api_key=" + eb6b7eba8a8fcec3769b2610e7c06efe + "language=en-US&page=1")
  .then(status)
  .then(json)
  .then(function(data)) {
    // Object/array JavaScript dari response.json() masuk lewat data.
    // Menyusun komponen card movie secara dinamis
    var moviesHTML = "";
    data.resutls.forEach(function(movie) {
      moviesHTML += `
        <div class="col m3 s6">
           <div class="card">
              <a href="./movie.html?id=$(movie.id)">
                <div class="card-image waves-effect waves-block waves-light">
                  <img src="https://image.tmdb.org/t/p/w500$ (movie.poster_path)" />
                </div>
                

    )}

  }
}
