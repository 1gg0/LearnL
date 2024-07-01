<?php
/* 
Template Name: Ferramenta de Aprendizado de Idiomas
*/
get_header(); ?>

<!-- Conteúdo do aplicativo -->
<div id="app-aprendizado">
    <header>
        <h1>Ferramenta de Aprendizado de Idiomas</h1>
    </header>
    <main>
        <section id="adicionar-palavra">
            <h2>Adicionar Palavra/Frase</h2>
            <form id="form-adicionar">
                <label for="palavra">Palavra/Frase:</label>
                <input type="text" id="palavra" required>
                <label for="traducao">Tradução:</label>
                <input type="text" id="traducao" required>
                <button type="submit">Adicionar</button>
            </form>
        </section>
        <section id="lista-palavras">
            <h2>Palavras/Frases para Estudo</h2>
            <ul id="palavras"></ul>
        </section>
        <section id="quizz">
            <h2>Quizz</h2>
            <button id="iniciar-quizz">Iniciar Quizz</button>
            <div id="quizz-area" style="display: none;">
                <p id="pergunta"></p>
                <input type="text" id="resposta" placeholder="Digite a tradução">
                <button id="verificar-resposta">Verificar</button>
                <p id="resultado"></p>
            </div>
        </section>
    </main>
</div>

<!-- Inclui o arquivo script.js -->
<script src="<?php echo get_template_directory_uri(); ?>/js/script.js"></script>

<?php get_footer(); ?>
