;
(function () {


    'use strict';


    var divEditor = document.createElement('div');
    var h3 = document.createElement('h3');
    var divText = document.createElement('div');
    var buttonEdit = document.createElement('button');
    var buttonSave = document.createElement('button');
    var buttonCancel = document.createElement('button');
    var divColor = document.createElement('div');
    var inputColor = document.createElement('input');
    var labelColor = document.createElement('label');
    var divLoad = document.createElement('div');
    var h4 = document.createElement('h4');
    var select = document.createElement('select');
    var buttonClear = document.createElement('button');
    var buttonOk = document.createElement('button');
    var style = document.createElement('style');


    document.head.appendChild(style);
    document.body.appendChild(divEditor);
    document.body.appendChild(divLoad);
    divEditor.appendChild(h3);
    divEditor.appendChild(divText);
    divEditor.appendChild(buttonEdit);
    divEditor.appendChild(buttonSave);
    divEditor.appendChild(buttonCancel);
    divEditor.appendChild(divColor);
    divLoad.appendChild(h4);
    divLoad.appendChild(select);
    divLoad.appendChild(buttonOk);
    divLoad.appendChild(buttonClear);
    divColor.appendChild(labelColor);
    labelColor.appendChild(inputColor);


    style.innerHTML = '\
        body {\
            background-image : url(https://rb124.ru/assets/cache_image/assets/gallery/2/151_990x800_fdd.jpg);\
            color : black;\
        }\
        .editor {\
            width : 30%;\
            height : 60%;\
            min-width : 400px;\
            min-height : 400px;\
            position : absolute;\
            top : 25%;\
            left : 15%;\
            background-color : rgba(240, 240, 240, 0.8);\
            border : 3px solid black;\
            box-shadow : 8px 8px 8px black;\
        }\
        .editor h3 {\
            width : 100%;\
            font-style : italic;\
            font-weight : 400;\
            font-family : Roboto, sans-serif\
        }\
        .editor > button{\
            width : 100px;\
            height : 20px;\
            margin-top : 10px;\
            margin-right : 5px;\
            position : relative;\
            top : 100px;\
            background-color : white\
        }\
        .editor__divText {\
            width : 250px;\
            height : 80%;\
            margin-left : 5%;\
            margin-right : 5%;\
            float : left;\
            background-color : white;\
            border : 1px solid black;\
            padding-top : 10px;\
            overflow : auto\
        }\
        .editor__divText em {\
            margin-left : 120px;\
        }\
        .divLoad {\
            position : absolute;\
            top : 35%;\
            left : 40%;\
            z-index : 1;\
            width : 250px;\
            height : 100px;\
            background-color : rgba(255, 255, 255, 0.8);\
            border : 3px solid red;\
            box-shadow : 8px 8px 8px black;\
            tetx-align : center;\
        }\
        .divLoad select {\
                width : 80px;\
                height : 20px; \
                margin-left: 10px;\
                margin-right : 10px;\
        }\
        .divLoad button {\
            width : 70px;\
            height : 20px;\
            margin-right : 5px;\
        }\
        .editor__divColor {\
            position : relative;\
            top : 120px;\
            font-family : Roboto, sans-serif;\
            font-style : italic;\
            font-weight : 400;\
            font-size : 10pt\
        }\
        .editor__divColor input {\
            margin-top : 10px;\
            width : 20px;\
            border-radius : 15px;\
        }\
        ';


    divEditor.classList.add('editor');
    divText.classList.add('editor__divText');
    divLoad.classList.add('divLoad');
    h3.innerHTML = 'Text editor :';
    h4.innerHTML = 'Select version of the text:';
    buttonEdit.innerHTML = 'Edit';
    buttonSave.innerHTML = 'Save';
    buttonCancel.innerHTML = 'Cancel';
    buttonOk.innerHTML = '<b>ok</b>';
    buttonClear.innerHTML = '<b>clear</b>';
    buttonSave.setAttribute('disabled', true);
    buttonCancel.setAttribute('disabled', true);
    divLoad.hidden = true;
    divColor.classList.add('editor__divColor');
    inputColor.setAttribute('type', 'color');
    labelColor.innerHTML = 'Change color: ' + labelColor.innerHTML;
    divColor.hidden = true;


    var defaultText = '\
        <b>Auguries of Innocence:</b><br><br>\
        To see a world in a grain of sand<br>\
        And a heaven in a wild flower,<br>\
        Hold infinity in the palm of your hand<br>\
        And eternity in an hour.<br>\
        …<br>\
        <em>W. Blake</em>\
    ';


    var text;
    if (localStorage.length !== 0) {
        divText.innerHTML = '<b>...</b>';
        divLoad.hidden = false;
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            let option = document.createElement('option');
            option.innerHTML = key;
            select.appendChild(option);
        }
    } else {
        divText.innerHTML = defaultText;
        text = divText.innerHTML;
    }


    buttonEdit.onclick = function () {
        divText.setAttribute('contentEditable', 'true');
        buttonEdit.setAttribute('disabled', 'true');
        buttonSave.removeAttribute('disabled');
        buttonCancel.removeAttribute('disabled');
        divColor.hidden = false;
    }


    buttonSave.onclick = function () {
        if (divText.innerHTML !== text) {
            var date = new Date();
            text = divText.innerHTML;
            localStorage.setItem(date, text);
        }
        divText.removeAttribute('contentEditable');
        buttonEdit.removeAttribute('disabled');
        buttonSave.setAttribute('disabled', true);
        buttonCancel.setAttribute('disabled', true);
        divColor.hidden = true;
    }


    buttonCancel.onclick = function () {
        divText.innerHTML = text;
        divText.removeAttribute('contentEditable');
        buttonEdit.removeAttribute('disabled');
        buttonSave.setAttribute('disabled', true);
        buttonCancel.setAttribute('disabled', true);
        divColor.hidden = true;
    }


    buttonOk.onclick = function () {
        divLoad.hidden = true;
        let index = select.selectedIndex;
        let version = select.options[index].innerHTML;
        divText.innerHTML = localStorage.getItem(version);
        text = divText.innerHTML;
    }


    buttonClear.onclick = function () {
        divLoad.hidden = true;
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            localStorage.removeItem(key);
            i--;
        }
        divText.innerHTML = defaultText;
        text = divText.innerHTML;
    }


    divText.onclick = function () {
        if (buttonEdit.hasAttribute('disabled')) {
            var color = document.getElementsByTagName('INPUT');
            document.execCommand('foreColor', false, color[0].value);
        } else {
            return
        }
    }

})();
