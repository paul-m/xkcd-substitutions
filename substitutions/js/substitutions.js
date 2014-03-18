// Tribute to  justin.giancola and the s/keyboard/leopard chrome extension.
// Icon and idea are from www.xkcd.com/1288
substitute = function(node) {
    replacements = [
    ['grit', 'grits'],
    ['Grit', 'Grits'],
    ['CommonCore', 'bacon']
    ];
    var ignore = { "STYLE":0, "SCRIPT":0, "NOSCRIPT":0, "IFRAME":0, "OBJECT":0, "INPUT":0, "FORM":0, "TEXTAREA":0 };
    if (node.tagName in ignore){
        return;
    }

    for (var i = replacements.length - 1; i >= 0; i--) {
        original = RegExp("\\b" + replacements[i][0] + "\\b", 'g');
        node.data = node.data.replace(original, replacements[i][1]);
    };
}

$(function() {
    var iter =  document.createNodeIterator(document.body, NodeFilter.SHOW_TEXT);
    var nodes = [];
    while(node = iter.nextNode()) {
        substitute(node);
    }
});


