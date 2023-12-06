// let url = "https://api.currencyapi.com/v3/latest?apikey=cur_live_BOhPMN5xYRYdy2iyEQefLrmgspl33TKfmQAScFCL";

let curr = async (val, cur) => {
    let tb = document.querySelector("tbody");
    let str = "";
    let url = "https://api.currencyapi.com/v3/latest?apikey=cur_live_BOhPMN5xYRYdy2iyEQefLrmgspl33TKfmQAScFCL&base_currency = " + cur;

    let res = await fetch(url);
    let final = await res.json();

    // console.log(final);
// ----------------------------------------------------------------------
// this is code of codewithharry........👇
// -------------------------------------------------------------------
    // for (let key of Object.keys(final["data"])) {
    //     // console.log(key);
    //     console.log(final["data"][key]["code"]);
    //     console.log(final["data"][key]["value"]);
    // }
    // -----------------------------------------------------------------
    // ----------------------------------------------------------------

    for (let key in final.data){
        // console.log(key);
        // console.log(final.data[key].code);
        // console.log(final.data[key].value);
        str = str + `   <tr>
                            <td>${key}</td>
                            <td>${final.data[key].code}</td>
                            <td>${Math.round(final.data[key].value * val)}</td>
                        </tr>`
    }

    tb.innerHTML= str;



}

// curr()


let btn = document.querySelector("#btn");

btn.addEventListener("click", (e) => {
    e.preventDefault()
    console.log("hiiiii");

    let val = parseInt(document.querySelector("#number").value);
    // console.log(value);
    let cur = document.querySelector("#cur").value;
    // console.log(curr);
    curr(val, cur);

})





// --------------------------------------------------------------