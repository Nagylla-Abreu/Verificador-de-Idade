function verificar() {
const txtnumber = window.document.querySelector('input#number')
const ano = Number(txtnumber.value)
const anoatual = new Date().getFullYear()
const idade = anoatual - ano
const sexo = document.querySelector('input[name="opcao"]:checked')
const conteudo = document.querySelector('#circulo')

if (idade > 0 && idade < 110) {
    if (sexo !== null) {
        if (idade < 18) {
            if (sexo.value == 'masculino') {
                resultado.innerHTML = `Detectamos Homem com ${idade} anos.`
                circulo.style.display = 'block';
                circulo.style.backgroundImage = 'url(https://img.magnific.com/fotos-gratis/garoto-feliz-com-sorriso-adoravel_23-2149352353.jpg?semt=ais_hybrid&w=740&q=80)'
            } else{
                resultado.innerHTML = `Detectamos Mulher com ${idade} anos.`
                circulo.style.display = 'block';
                circulo.style.backgroundImage = 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjOVhLFunZrp9CN2KT9YtDmNYIgtn3Xf6GAAHfCSr8elr8e8iayJDy78Q&s=10)'
            }
        } else if (idade < 60) {
            if (sexo.value == 'masculino')  {
                resultado.innerHTML = `Detectamos Homem com ${idade} anos.`
                circulo.style.display = 'block'
                circulo.style.backgroundImage = 'url(https://media.istockphoto.com/id/1392528328/pt/foto/portrait-of-smiling-handsome-man-in-white-t-shirt-standing-with-crossed-arms.jpg?s=612x612&w=0&k=20&c=bE3zYrWmF6tJ3omKxaUxOEzNWe0LGux8st_XgthV9b8=)'
            } else {
                resultado.innerHTML = `Detectamos Mulher com ${idade} anos.`
                circulo.style.display = 'block'
                circulo.style.backgroundImage = 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_w13EIQMUbGeWB32JHgv3B4kHECDG9ZkkjUsnGXBd2w&s)'
            }             
        } else if (idade >= 60) {
            if(sexo.value == 'masculino') {
                resultado.innerHTML = `Detectamo Homem com ${idade} anos.`
                circulo.style.display = 'block'
                circulo.style.backgroundImage = 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfoOui71XNBAptg1Yf27Bs2eUsLbZCfF20D2qVxZQ4PgFUA-9YNKrfpxmd&s=10)'
            }else{
                resultado.innerHTML = `Detectamos Mulher com ${idade} anos.`
                circulo.style.display = 'block'
                circulo.style.backgroundImage = 'url(https://img.criativodahora.com.br/homologacao/thumbs/2025/09/08/01992b6c-33ec-7293-ae59-6b90916ec3e3.jpg)'
            }
        }
        }else {
            window.alert('[ERRO] Insira dados válidos e tente novamente.')
        } 
    }else {
        window.alert('[ERRO] Insira dados válidos e tente novamente.')
    }
}
