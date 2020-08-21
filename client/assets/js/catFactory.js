
//Random color
function getColor() {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return randomColor
}

function genColors(){
    var colors = []
    for(var i = 10; i < 99; i ++){
      var color = getColor()
      colors[i] = color
    }
    return colors
}

//This function code needs to modified so that it works with Your cat code.
function headColor(color,code) {
    let hsl = (rgbToHsl(hexToRgb(color)));
    let darkenHSL = scaleHslL(hsl, 0.85);
    let rgb = hslToRgb(darkenHSL);
    let darkRGB = '#' + rgb.r.toString(16) + rgb.g.toString(16) + rgb.b.toString(16);

    $('#head, .body .chest, .frontpaw').css('background', '#' + color); //This changes the color of the cat
    $('.backpaw').css('background', darkRGB);
    $('#headcode').html('code: '+code); //This updates text of the badge next to the slider
    $('#dnabody').html(code); //This updates the body color part of the DNA that is displayed below the cat
}

function faceColor(color,code) {
    $('.face, .chest .inner, .tail').css('background-color', '#' + color);
    $('#mouthcode').html('code: '+code); //This updates text of the badge next to the slider
    $('#dnamouth').html(code); //This updates the body color part of the DNA that is displayed below the cat
}

function eyesColor(color,code) {
    $('.pupil').css('background-color', '#' + color);
    $('#eyescode').html('code: '+code); //This updates text of the badge next to the slider
    $('#dnaeyes').html(code); //This updates the body color part of the DNA that is displayed below the cat
}

function earsColor(color,code) {
    let hsl = (rgbToHsl(hexToRgb(color)));
    let darkenHSL = scaleHslL(hsl, 0.85);
    let rgb = hslToRgb(darkenHSL);
    let darkRGB = '#' + rgb.r.toString(16) + rgb.g.toString(16) + rgb.b.toString(16);

    $('.ears').css('background-color', '#' + color);
    $('.ears .ears_inner').css('background-color', darkRGB);
    $('#earscode').html('code: '+code); //This updates text of the badge next to the slider
    $('#dnaears').html(code); //This updates the body color part of the DNA that is displayed below the cat
}

//###################################################
//Functions below will be used later on in the project
//###################################################
function eyeVariation(num) {

    $('#dnashape').html(num)
    switch (num) {
        case 1:
            normalEyes()
            $('#eyeName').html('Basic')
            break
    }
}

function decorationVariation(num) {
    $('#dnadecoration').html(num)
    switch (num) {
        case 1:
            $('#decorationName').html('Basic')
            normaldecoration()
            break
    }
}

async function normalEyes() {
    await $('.cat__eye').find('span').css('border', 'none')
}

async function normaldecoration() {
    //Remove all style from other decorations
    //In this way we can also use normalDecoration() to reset the decoration style
    $('.cat__head-dots').css({ "transform": "rotate(0deg)", "height": "48px", "width": "14px", "top": "1px", "border-radius": "0 0 50% 50%" })
    $('.cat__head-dots_first').css({ "transform": "rotate(0deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "50% 0 50% 50%" })
    $('.cat__head-dots_second').css({ "transform": "rotate(0deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "0 50% 50% 50%" })
}
