/**
 * Generator function = function*
 */

function* getStop(){
    yield "Station1";
    yield "Station2";
    yield "Station3";
    yield "Station4";
    yield "Station5";
}

const nycTrainLine = getStop();
const nextStop = document.querySelector("#next-stop");
nextStop = addEventListener("click", () => {
    let currStop = nycTrainLine.next();
    if(currStop.done){
        console.log("We made it!");
        nextStop.setAttribute("disabled", true);
    }else{
        console.log(currStop.value);
    }
});