let btn = document.getElementsByTagName('button')

function set_content(){
    document.getElementById('resultado').value += btn_click
}

btn[0].onclick = function(){
    btn_click = btn[0].innerHTML; set_content()
}

btn[1].onclick = function(){
    btn_click = btn[1].innerHTML; set_content()
}

btn[2].onclick = function(){
    btn_click = btn[2].innerHTML; set_content()
}
//botão soma
btn[3].onclick = function(){
    btn_click = btn[3].innerHTML; operador()
}

btn[4].onclick = function(){
    btn_click = btn[4].innerHTML; set_content()
}

btn[5].onclick = function(){
    btn_click = btn[5].innerHTML; set_content()
}

btn[6].onclick = function(){
    btn_click = btn[6].innerHTML; set_content()
}

btn[7].onclick = function(){
    btn_click = btn[7].innerHTML; operador()
}

btn[8].onclick = function(){
    btn_click = btn[8].innerHTML; set_content()
}

btn[9].onclick = function(){
    btn_click = btn[9].innerHTML; set_content()
}

btn[10].onclick = function(){
    btn_click = btn[10].innerHTML; set_content()
}

btn[11].onclick = function(){
    btn_click = btn[11].innerHTML; operador()
}

btn[12].onclick = function(){
    btn_click = btn[12].innerHTML; set_content()
}

btn[13].onclick = function(){
    btn_click = btn[13].innerHTML; dot()
}

btn[14].onclick = function(){
    btn_click = btn[14].innerHTML; calcular() 
}

btn[15].onclick = function(){
    btn_click = btn[15].innerHTML; operador()
}

function operador(){
    op = btn_click
    content = document.getElementById('resultado').value
    if(content == ''){
        return document.getElementById('resultado').value = ''
    }
    if(isNaN(content)){
        return document.getElementById('resultado').value = ('erro operador duplo')
    }
    else{
        return set_content()
    }
}

function split_op(){
    content = document.getElementById('resultado').value
    num = content.split(op)
}

function dot(){
    content = document.getElementById('resultado').value
    if(content == ''){
        return set_content()
    }
    else if(content == '.' ){
        return console.log('erro ja existe um ponto')
    }
    else if(content.split('.').length == 1){
        return set_content()
    }
    else if(content.split('.').length == 1){
        return set_content()
    }
    else{
        split_op()
        if(num[1].split('.').length == 1){
            return set_content()
        }
    }
}


function calcular(){
    content = document.getElementById('resultado').value
    if(content == ''){
        document.getElementById('resultado').value = 'Erro de operação'
    }
    //else if(content.split('.').length ==1){
        //return parseFloat(document.getElementById('resultado').value)
    //
    else {
        if(op == '+'){
            split_op()
            result = parseFloat(num[0]) + parseFloat(num[1])
            document.getElementById('resultado').value = result
        }
        if(op == '-'){
            split_op()
            result = parseFloat(num[0]) - parseFloat(num[1])
            document.getElementById('resultado').value = result
        }
        if(op == '*'){
            split_op()
            result = parseFloat(num[0]) * parseFloat(num[1])
            document.getElementById('resultado').value = result
        }
        if(op == '/'){
            split_op()
            result = parseFloat(num[0]) / parseFloat(num[1])
            document.getElementById('resultado').value = result
        }
    }
    
}/*
*/



