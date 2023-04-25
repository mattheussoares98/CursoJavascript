import $ from "./cscc/index.scss"

function loadIncludes(parent) {
    /* parent vai pesquisar tudo que tiver wm-includes */
    if (!parent) parent = "body";
    /* se o parent não estiver setado, vai aplicar "body" como padrão */
    $(parent).find("[wm-include]").each(function (i, e) {
        const url = $(e).attr("wm-include")
        $.ajax({
            url,
            success(data) {
                $(e).html(data)
                $(e).removeAttr("wm-include")

                loadIncludes(e)
            }
        })
    })
}

loadIncludes