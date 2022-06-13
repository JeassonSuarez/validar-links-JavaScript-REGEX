const $d = document;

$d.querySelector(".form").addEventListener("submit", e=>{
    e.preventDefault();
    console.log(e);
    const $link = ($d.querySelector(".dir").value),
    regex = /^(https:|http:)\/{2}\u0077?\u0077?\u0077?(\.|\w*)*/g;
    //console.log($link.match(regex));
    if ($link.match(regex)===null) {
        console.log("no es link");
    }else{
        console.log(`${$link.match(regex)} es un link`);
    }
});