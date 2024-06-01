let btn=document.getElementById('btn')
let cel=document.getElementById('cel')
let far=document.getElementById('far')
let inpt=document.getElementById('inpt')
let txt=document.getElementById('txt')
btn.onclick=function()
{
    let c=Number(inpt.value)
if(cel.checked)
    {
        let f=((9*c)+160)/5;
        console.log(f,c)
        txt.innerText=f+"°F"
    }
    else if(far.checked)
        {
            let f=((5*c)-160)/9;
            txt.innerText=f+"°C"
        }
}
