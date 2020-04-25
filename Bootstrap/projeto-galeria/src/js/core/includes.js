// Funcionalidade que interpreta propriedade personalizada definida no HTML

import $ from 'jquery'

const loadHtmlSuccessCallbacks = []
// Definido array com várias funções, registrada na função abaixo
export function onLoadHtmlSuccess(callback) {
    if(!loadHtmlSuccessCallbacks.includes(callback)) {
        loadHtmlSuccessCallbacks.push(callback) // Será chamado sempre que carregar html de forma bem sucedida
    }
}

function loadIncludes(parent) {
    if(!parent) parent = 'body' // Se parent retonar vazio, como padrão procura no body inteiro
    // Procure dentro do parent todos os elementos com a propriedade wm-include e faça um forEach para cada elemento encontrado
    $(parent).find('[wm-include]').each(function(i, e) {
        const url = $(e).attr('wm-include') // url recebe o atributo da propriedade wm-include, neste caso o link
        $.ajax({
            url, 
            success(data) {
                $(e).html(data)
                $(e).removeAttr('wm-include') // Evita o processamento duas vezes da mesma propriedade
                
                loadHtmlSuccessCallbacks.forEach(callback => callback(data))
                // Em cima do elemento realiza a função recursivamente
                loadIncludes(e)
            }
        })
    })
}

// Será importado pelo index.js
loadIncludes()