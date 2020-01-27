// Randomly load a image in a given range
function update_image(){
    var image_num = Math.floor(Math.random() * 13) + 1;

    var main_img = document.getElementById("main_photo");
    main_img.src = "static/images/pic_" + image_num + ".jpg";
}

const interval = setInterval(function() {
    update_image()
 }, 5000);

