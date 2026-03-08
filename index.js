<!DOCTYPE html>
< html  lang = "pt-br" >
  < cabeçalho >
    < meta  charset = "utf-8"  / >
    <title> Comandos de voz </title>​​​
    < estilo >
      corpo, html {
        margem: 0;
      }
 
      html {
        altura: 100%;
      }
 
      corpo {
        altura: herdar;
        overflow: oculto;
        largura máxima: 800px;
        margem: 0 automático;
      }
 
      h1, p {
        família-da-fonte: sem serifa;
        alinhamento do texto: centralizado;
        preenchimento: 15px;
      }
 
      .control {
        altura: 100px;
        estouro: automático;
        posição: absoluta;
        parte inferior: 0px;
        direita: 0;
        esquerda: 0;
        cor de fundo: rgba(255,255,255,0.2);
        alinhamento do texto: centralizado;
      }
 
      #caixa{
        largura: 100px;
        altura: 100px;
        borda: 2px preta sólida;
        raio da borda: 4px;
        posição: absoluta;
        esquerda: 300px;
        topo:300px;
        Transição: 2s superiores, 2s da esquerda;
      }
    </style>​​​
  </head>​​​
  < corpo >
    < h1 > Comandos por voz com a Web Speech API < / h1 >
    < div  id = " box " > </div>
    < p  class = "hints" > Use os comandos: 'azul', 'verde',
      'vermelho', 'branco', 'mover para a direita',
      'mover para a esquerda', 'mover para cima',
      'mover para baixo'.' ' . </p>
    < div  class = "control" >
      < p  class = "output" >< em > ...Mensagens < / em >< / p >
      < button  id = "btn-start" > Iniciar</button> " start " </button>
      < botão  id = "btn-stop" > Parar " stop " </button>
    <​​​    
    < script >
      var x = 300;
      var y = 300;
      var cor = 'branco';
 
      var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
      var reconhecimento = new SpeechRecognition();
      reconhecimento.contínuo = verdadeiro;
      recognition.lang = 'pt-BR';
      reconhecimento.resultadosinterinos = falso;
      reconhecimento.maxAlternativas = 1;
 
      var diagnostic = document.querySelector('.output');
      var box = document.querySelector('#box');
 
      reconhecimento.onresultado = função(evento) {
        
        seja length = event.results.length;  
        let command = event.results[length-1][0].transcript;
        diagnostic.textContent = 'Resultado recebido: ' + comando + '.';
 
        if (command.toLowerCase().indexOf("") > -1){
          x += 50;
          atualizarPropriedadesCaixa();
        }
        senão se (comando.toLowerCase().indexOf("esquerda") > -1){
          x == 50;
          atualizarPropriedadesCaixa();
        }
        senão se (comando.toLowerCase().indexOf("cima") > -1){
          y = 50;
          atualizarPropriedadesCaixa();
        }
        senão se (comando.toLowerCase().indexOf("baixo") > -1){
          y += 50;
          atualizarPropriedadesCaixa();
        }
        senão se (comando.toLowerCase().indexOf("verde") > -1){
          cor = 'verde';
          atualizarPropriedadesCaixa();
        }
        senão se (comando.toLowerCase().indexOf("azul") > -1){
          cor = 'azul';
          atualizarPropriedadesCaixa();
        }
        senão if (command.toLowerCase().indexOf("vermelho") > -1){
          cor = 'vermelho';
          atualizarPropriedadesCaixa();
        }
        senão se (comando.toLowerCase().indexOf("branco") > -1){
          cor = 'branco';
          atualizarPropriedadesCaixa();
        }
      }
 
      função atualizarPropriedadesCaixa(){
        box.style.left = x+"px";
        box.style.top = y+"px";
        box.style.backgroundColor = cor;
      }
 
      document.querySelector('#btn-start').onclick = function() {
        reconhecimento.iniciar();
      }
 
      document.querySelector('#btn-stop').onclick = function() {
        reconhecimento.parar();
      }
    </script>​​​
  </body>​​​
</html>
