// Example:
// example.com?foo=bar&bar=baz
// returns:
//     [foo: "bar", bar: "baz"]

function urlParam(){
    var kv = [];
    location.search.replace("?", "").split("&").forEach( function(pair){ var kvPair = pair.split("="); if(kvPair.length > 1){ kv[kvPair[0]] = kvPair[1]; } } );
    return kv;
}