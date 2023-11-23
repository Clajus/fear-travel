

// $('#next').on('click', function () {
//     $('#menuhbgt ul').animate({
//         scrollLeft: '+=100'
//     }, 300, 'swing');
// });

// $('#prev').on('click', function () {
//     $('#menuhbgt ul').animate({
//         scrollLeft: '-=100'
//     }, 300, 'swing');
// });

document.querySelector('#next').addEventListener('click', function () {
    console.log(document.querySelector('#menuhbgt ul').scrollLeft);
    document.querySelector('#menuhbgt ul').scrollLeft += 200;
});
document.querySelector('#prev').addEventListener('click', function () {
    document.querySelector('#menuhbgt ul').scrollLeft -= 200;
});