function findNegative() {
    for(let i=1; getId(i.toString()) !== null; i++) {
        if (getId(i.toString()).value < 0){
            getId(i.toString()).focus();
            break;
        }
    }
}
function getId(x) {
    return document.getElementById(x);
}