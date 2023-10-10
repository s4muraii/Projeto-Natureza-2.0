export default function initModal(){
    const form = document.querySelector('modal-forms')
    const dados = {}

    function pegarValorForm(event){
        dados[event.target.name] = event.target.value
        console.log(dados)
    }
    form.addEventListener('change', pegarValorForm)

    function pegarValorForm(event){
        dados[event.target.name] = event.target.value
        console.log(dados)
    }
    localStorage.setItem('nome', 'Rafael')
    const nome = localStorage.getItem('nome')
    console.log(nome)
}