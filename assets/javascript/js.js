
$('#submit').on('click', function (event) {
    event.preventDefault();
    var searchQuery = $('#search').val();
    var resultNumber = $('#num-of-records').val();
    var queryUrl = "https://newsapi.org/v2/everything?q=" + searchQuery + "&apiKey=533183e049bb499a9ea32e1cfd66dd16" + "&pagesize=" + resultNumber
    console.log(queryUrl)
    $.ajax({
        url: queryUrl,
        method: "GET"
    })
        .then(function (response) {
            var results = response.articles
            console.log(response)
            console.log(results)
            console.log(results[2].url)
        });

}
)