
let btn_operador = ''
let valor = []

function operador(btn_operador){
    content = document.getElementById('resultado').value
    if (content == ''){
        return document.getElementById('resultado').value = '' //Corrigido
    }
    else {
        document.getElementById('resultado').value += btn_operador
    }
}

function split_op(btn_operador){
    content = document.getElementById('resultado').value
    if(btn_operador != ''){
        valor = content.split(btn_operador)
    }else
        {valor = content}
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
    else{
        if(btn_operador !=''){
            split_op()
            if(valor[0].split('.').length == 2){
                return set_content()
            }
        }
        
    }
}


function calcular(){
    if(content == '' || valor[1] ==''){
        return result = 'Erro de operação'
    }
    else if(btn_operador == ''){
        return result = valor
    }
    else {
        if(btn_operador == '+'){
            return result = parseFloat(valor[0]) + parseFloat(valor[1])
        }
        if(btn_operador == '-'){
            return result = parseFloat(valor[0]) - parseFloat(valor[1])
        }
        if(btn_operador == '*'){
            return result = parseFloat(valor[0]) * parseFloat(valor[1])
        }
        if(btn_operador == '/'){
            return result = parseFloat(valor[0]) / parseFloat(valor[1])
        }
    }
}

function set_content(){
    document.getElementById('resultado').value += btn_click
}

let btn = document.getElementsByTagName('button')

btn[0].onclick = function(){
    btn_click = btn[0].innerHTML;
    set_content()
}

btn[1].onclick = function(){
    btn_click = btn[1].innerHTML;
    set_content()
}

btn[2].onclick = function(){
    btn_click = btn[2].innerHTML;
    set_content()
}
//botão soma
btn[3].onclick = function(){
    btn_operador = btn[3].innerHTML;
    operador(btn_operador)
}

btn[4].onclick = function(){
    btn_click = btn[4].innerHTML;
    set_content()
}

btn[5].onclick = function(){
    btn_click = btn[5].innerHTML;
    set_content()
}

btn[6].onclick = function(){
    btn_click = btn[6].innerHTML;
    set_content()
}

btn[7].onclick = function(){
    btn_operador = btn[7].innerHTML;
    operador(btn_operador)
}

btn[8].onclick = function(){
    btn_click = btn[8].innerHTML;
    set_content()
}

btn[9].onclick = function(){
    btn_click = btn[9].innerHTML;
    set_content()
}

btn[10].onclick = function(){
    btn_click = btn[10].innerHTML;
    set_content()
}

btn[11].onclick = function(){
    btn_operador = btn[11].innerHTML;
    operador(btn_operador)
}

btn[12].onclick = function(){
    btn_click = btn[12].innerHTML;
    set_content()
}

btn[13].onclick = function(){
    btn_click = btn[13].innerHTML; dot()
}

btn[14].onclick = function(){
    btn_click = btn[14].innerHTML;
    split_op(btn_operador);
    calcular();
    document.getElementById('resultado').value = result
}

btn[15].onclick = function(){
    btn_operador = btn[15].innerHTML;
    operador(btn_operador)
}
