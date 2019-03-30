searchQuery = prompt('Enter search query: ')
queryUrl = "https://newsapi.org/v2/everything?q=" + searchQuery + "&apiKey=533183e049bb499a9ea32e1cfd66dd16"
console.log(queryUrl)
$.ajax({
    url: queryUrl,
    method: "GET"
})
    .then(function (response) {
        var results = response.articles
        console.log(response)
        console.log(results)
    });