let movieName = document.getElementById("searchByWord");
let movieRate = document.getElementById("searchByRate");
let heading = document.querySelectorAll("ul li");
let username = document.getElementById("username");
let userPhone = document.getElementById("userPhone");
let userPassword = document.getElementById("userPassword");
let userEamil = document.getElementById("userEamil");
let userAge = document.getElementById("userAge");
let userRepassword = document.getElementById("userRepassword");
let usernameError = document.getElementById("username-error");
let userPhoneError = document.getElementById("userPhone-error");
let userPasswordError = document.getElementById("userPassword-error");
let userEamilError = document.getElementById("userEamil-error");
let userAgeError = document.getElementById("userAge-error");
let userRepasswordError = document.getElementById("userRepassword-error");

getMovies(`now_playing`);

for (let i = 0; i < heading.length; i++) {
    heading[i].addEventListener("click", function (e) {
        if (e.target.innerText == "Now playing") {
            getMovies(`now_playing`);

        }

        else if (e.target.innerText == "Top Rated") {
            getMovies(`top_rated`);
        }
        else if (e.target.innerText == "latest") {
            getMovies(`latest`);

        }
        else {
            getMovies(`${e.target.innerText.toLowerCase()}`);

        }
    })
}
let movies = [];
async function getMovies(movieId) {
    let res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=5525678880f36b6b47ac993ed81b521d&language=en-US`)
    let preMovies = await res.json();
    movies = preMovies.results;
    console.log(movies);
    displayMovies(movies);

}



function displayMovies(moveArray) {
    let cartona = ``;
    for (let i = 0; i < moveArray.length; i++) {
        cartona += `
        <div class=" card col-md-4">
                    <img src="https://image.tmdb.org/t/p/w500${moveArray[i].poster_path}">
                    <div class="card-info">
                        <h2>${moveArray[i].title}</h2>
                        <p>${moveArray[i].overview}</p>
                        <p>${moveArray[i].vote_average}</p>
                        <p>${moveArray[i].release_date}</p>
                    </div>
                </div>
        
        `
    }
    document.getElementById("movie-cards").innerHTML = cartona;
}

function searchMovie() {
    let moveArray = [];
    for (let i = 0; i < movies.length; i++) {
        if (movies[i].title.toLowerCase().includes(movieName.value.toLowerCase())) {
            moveArray.push(movies[i]);
            console.log(movies[i].title.toLowerCase());
        }


    }
    displayMovies(moveArray);
}
movieName.addEventListener('keyup', searchMovie);

function searchMovieByRate() {
    let moveArray = [];
    for (let i = 0; i < movies.length; i++) {
        if (movies[i].vote_average >= movieRate.value) {
            moveArray.push(movies[i]);
            console.log(movieRate.value);
        }


    }
    displayMovies(moveArray);
}
movieRate.addEventListener('keyup', searchMovieByRate);
$(document).ready(function () {
    $(".sidebar-toggle").click(function () {
        $("aside").toggleClass("open-sidebar");

    });

});

username.addEventListener('keyup', function (e) {
    console.log(e.target.value);
    let pattern = /^[\w]{2,8}$/;
    let currentvalue = e.target.value;
    let valid = pattern.test(currentvalue);
    if (valid) {
        usernameError.style.display = "none"
    }
    else {
        usernameError.style.display = "block"
    }

})
userPhone.addEventListener('keyup', function (e) {
    console.log(e.target.value);
    let pattern = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
    let currentvalue = e.target.value;
    let valid = pattern.test(currentvalue);
    if (valid) {
        userPhoneError.style.display = "none"
    }
    else {
        userPhoneError.style.display = "block"
    }

})
userPassword.addEventListener('keyup', function (e) {
    console.log(e.target.value);
    let pattern = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
    let currentvalue = e.target.value;
    let valid = pattern.test(currentvalue);
    if (valid) {
        userPasswordError.style.display = "none"
    }
    else {
        userPasswordError.style.display = "block"
    }

})
userEamil.addEventListener('keyup', function (e) {
    console.log(e.target.value);
    let pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let currentvalue = e.target.value;
    let valid = pattern.test(currentvalue);
    if (valid) {
        userEamilError.style.display = "none"
    }
    else {
        userEamilError.style.display = "block"
    }

})
userAge.addEventListener('keyup', function (e) {
    console.log(e.target.value);
    let pattern = /^(?:1[01][0-9]|120|1[7-9]|[2-9][0-9])$/;
    let currentvalue = e.target.value;
    let valid = pattern.test(currentvalue);
    if (valid) {
        userAgeError.style.display = "none"
    }
    else {
        userAgeError.style.display = "block"
    }

})
userRepassword.addEventListener('keyup', function (e) {
    console.log(e.target.value);
    let pattern = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
    let currentvalue = e.target.value;
    let valid = pattern.test(currentvalue);
    if (valid && currentvalue === userPassword.value) {
        userRepasswordError.style.display = "none"
    }
    else {
        userRepasswordError.style.display = "block"
    }

})
document.addEventListener('contextmenu', event => event.preventDefault());
// document.addEventListener('keydown', function (e) { 
//     if (e.key === 'F12') {
//          e.cancelable = true; e.stopPropagation(); e.preventDefault();
//         }
//      });


