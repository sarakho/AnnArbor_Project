window.onload = () => {
    filterObjects('all')
  };

function filterObjects(c) {
    var x, i;
    x = document.getElementsByClassName("card");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
        removeClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
    }
}

function addClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

function removeClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i <arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ")
}







/* another version of filterting*/

// const btns = document.querySelectorAll('.buttons');
// const imgs = document.querySelectorAll('.card');

// for(let i = 1; i < btns.legnth; i++) {
//     btns[i].addEventListener('click', filterImg);
// }

// function setActiveBtn(e) {
//     btns.forEach(btn => {
//         btn.classList.remove('btn-clicked');
//     });
//     e.target.classList.add('btn-clicked');
// }

// function filterImg(e) {
//     setActiveBtn(e);

//     imgs.forEach(img => {
//         img.classList.remove('img-shrink');
//         img.classList.add('img-expand');

//         const imgType = parseInt(img.dataset.img);
//         const btnType = parseInt(e.target.dataset.btn);

//         if(imgType !== btnType) {
//             img.classList.remove('img-expand');
//             img.classList.add('img-shrink');
//         }
//     });
// }

// btns[0].addEventListener('click', (e) => {
//     setActiveBtn(e);
//     imgs.forEach(img => {
//         img.classList.remove('img-shrink');
//         img.classList.add('img-expanded');
//     });
// })