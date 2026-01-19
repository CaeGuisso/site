function toggleMode() {
    const html = document.documentElement

 //   if(html.classList.contains("light")) {
//      html.classList.remove('light')
  //  } else {                                
    //    html.classList.add('light')
   // }
//}

html.classList.toggle('light')         // ESSE COMANDO FAZ TUDO OQ O A CIMA FAZ EM UMA LINHA POR
                                         // POR CAUSA DO CLASSLIST
    const img = document.querySelector('#profile img')
    if (html.classList.contains('light')){
        img.setAttribute('src', 'https://cdn.discordapp.com/attachments/1440704804438409290/1462602760024363151/508281729_18044741225533391_8200680434979298507_n.png?ex=696eca77&is=696d78f7&hm=ddabfbe9a4d3618f0f876deffde8e42fd2d2e075a5092fc9b8e4f8b808afe5fe&')
    } else{
        img.setAttribute('src', './assets/nft.ico')
    }
}                                      

