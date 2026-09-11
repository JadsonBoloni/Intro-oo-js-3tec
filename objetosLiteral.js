const user = {
  nome: "Jadson",
  email: "jadson@jadson.com",
  nascimento: "2009/02/02",
  role: "admin",
  ativo: true,
  exibirInfos: function() {
    console.log(this.nome, this.email)
  }
}    
user.exibirInfos()

const exibir = function(){
  console.log(this)
}
exibir()
const admin = {
  nome: "Mariana",
  email: "m@m.com",
  role: "admin",
  criarCurso() {
    console.log('curso criado!')
  }
}

Object.setPrototypeOf(admin, user)
admin.criarCurso()
admin.exibirInfos()





