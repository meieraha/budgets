$.get('./data/index.yml', function(data) {
    var data = yaml.load(data)
  
    var menu = ''
    data.forEach(function(item, ixd) {
        menu += '<li><a href="./?id=' + ixd + '">' + item.title + '</a></li>'
    })
    $('.menu').html(menu)
    
    var id = getUrlParameter('id') || 0
    
    $('head title').text(data[id].title)    
    $('.menu li').removeClass('active')
    $('.menu li').eq(id).addClass('active')
    
    
    $.get(data[id].file, function(data) {
        data = yaml.load(data)
        console.log(data)
        BubbleTree({
    		data: data,
    		container: '.bubbletree'
    	});
    })
})

function getUrlParameter(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}