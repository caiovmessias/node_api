<div align="center">
    <img src="src/docs/logo.png" width="250px;" alt=""/>
    <p>API Rest em NodeJs</p>
</div>
<br/>
<br/>
<div align="right">
    <div>
        <p><i>Desenvolvido por: <a href="mailto:antonio.cardoso@gerencianet.com.br">Antônio Cardoso</a>
        <br/>
        Mantido por: <a href="mailto:equipe-otimizacoes@gerencianet.com.br">equipe-otimizacoes@gerencianet.com.br</a>
        <br/>
        Atualizado em: 22/07/2021
        </i></p>
    </div>
</div>


----

<div align="center">

[Sobre o projeto](#sobre-o-projeto-) | [Instalação](#instalação) | [Comandos](#comandos) | [Wiki](#wiki)
</div>

----



<br/>

## Sobre o Projeto
<p> 
    O gn-shell consiste em ser um facilitador de configuração para nós Dev's. <br/>
    Através dele é possível clonar e configurar projetos, rodar migrations, atualizar projetos, instalar o ZSH e muito mais!
</p>

<br/>

## Instalação
<p> 
    Por padrão o projeto gn-shell já vem devidamente instalado e configurado em sua VM.<br/>
    Caso precise realizar a instalação manualmente, entre em contato com a <a href="mailto:equipe-otimizacoes@gerencianet.com.br"><b>Equipe Otimizações</b></a>
</p>

<br/>

## Comandos
<p>O gn-shell é reconhecido em qualquer diretório, para roda-lo basta estar conectado na VM via terminal.
<br/>
Os principais comandos do gn-shell são:</P>
<ul> 
    <li>gn configure</li>
    <li>gn admin</li>
</ul>
<p>Após executar um desses comandos, o projeto será executado, realizando a função escolhida. Para navegar entra as opções e menus, utilize as setas do teclado e enter.

<br/>
<h3><b>gn configure</b></h3>
<img src="docs/img/configure.png" alt="Comando gn configure"/>
<br/>
<p>Recurso mais utilizado do gn-shell, através dele conseguimos: </p>
<ul> 
    <li>Clonar e rodar o setup dos projetos da GN</li>
    <li>Atualizar todos os projetos instalados</li>
    <li>Iniciar/Parar os containers de serviços</li>
    <li>Criar conta, instalar projetos e subir os containers e serviços utilizados pelo pangeia</li>
    <li>Executar rotinas DEV que facilitam a nossa vida</li>
    <li>Instalar e configurar ferramentas como o ZSH e a AWS-cli</li>
    <li>Alternar para menu gn admin</li>
</ul>

<h3><b>gn admin</b></h3>
<img src="docs/img/admin.png" alt="Comando gn admin"/>
<br/>
<p>Recurso utilizado para gerenciamento do gn-shell, através dele conseguimos: </p>
<ul> 
    <li>Incluir projetos no gn-shell</li>
    <li>Excluir projetos do gn-shell</li>
    <li>Incluir novos times no gn-shell</li>
    <li>Excluir times do gn-shell</li>
    <li>Subir nossas alterações para uma branch nova no projeto gn-shell</li>
    <li>Alternar para menu gn configure</li>
</ul>
<br/>
<p><i>Todas as mudanças realizadas no gn admin geram uma nova branch. 
<br/>
Converse com alguem da <a href="mailto:equipe-otimizacoes@gerencianet.com.br"><b>Equipe Otimizações</b></a> para realizarem o Merge com a master.</i></p>
<br/>
<h3><b>Demais opções</b></h3>
<img src="docs/img/help.png" alt="Comando gn configure"/>
<br/>
<p>Ao digitar "gn -h" é exibido a lista de comandos disponiveis no gn-shell, além do "gn configure" e "gn admin" é possível: </p>
<ul> 
    <li>Instalar projetos diretamente via CLI</li>
    <li>Remover projetos diretamente via CLI</li>
    <li>Fazer pull em projetos via gn-shell</li>
    <li>Executar comandos make em projetos</li>
    <li>Visualizar logs de todos os projetos UP</li>
    <li>Listar projetos instalados em "/projects"</li>
    <li>Listar projetos disponiveis para instalação no gn-shell</li>
    <li>Executar <b>migrations</b> de projetos</li>
</ul>
<br/>

## Wiki
<p>Um espaço para sanar todas as duas dúvidas sobre o gn shell!</p>
<br/>
<img src="docs/img/wiki.png" alt="Wiki do gn-shell"/>
<br/>
<p>Clique <a href="https://gitlab.interno.testegerencianet.com.br/desenvolvimento/gn-shell/-/wikis/home">aqui</a> para acessar rapidamente a wiki</p>
<br/>
<p>Caso não encontre a solução para a sua duvida ou problema acesse o <a href="https://gerencianet.sharepoint.com/sites/informativo-dev/Lists/FAQ%20%20Ambiente%20Local/AllItems.aspx"><b>Informativo DEV</b></a> ou entre em contato com a <a href="mailto:equipe-otimizacoes@gerencianet.com.br"><b>Equipe Otimizações</b></a>.</p> 

