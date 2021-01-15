fetch("https://api.ratesapi.io/api/latest")
.then(response => response.json())
.then((response)=>{

euro.addEventListener("input", function (){convMonnaie(this.id, this.value);});
aud.addEventListener("input", function(){convMonnaie(this.id, this.value);});
gbp.addEventListener("input", function(){convMonnaie(this.id, this.value);});
jpy.addEventListener("input", function(){convMonnaie(this.id, this.value);});
pln.addEventListener("input", function(){convMonnaie(this.id, this.value);});
nzd.addEventListener("input", function(){convMonnaie(this.id, this.value);});
inr.addEventListener("input", function(){convMonnaie(this.id, this.value);});
php.addEventListener("input", function(){convMonnaie(this.id, this.value);});


function convMonnaie(id, valeur)
{
    if(id == "EUR"){
        euro.value = valeur / 1;
        gbp.value = valeur * 0.889736;
        usd.value = valeur * 1,21414;
        jpy.value = valeur * 125,808;
        aud.value = valeur * 1,56628;
        mxn.value = valeur * 24.0418 ;
        pln.value = valeur * 4.5379;
        php.value = valeur * 58.232;
        nzd.value = valeur * 1.6853 ;
        php.value = valeur * 58.232;
        nzd.value = valeur * 1.6853 ;
    }else if(id == "USD"){
        usd.value = valeur * 1000;
        gbp.value = valeur * 2.2046;
    }else if(id == "AUD")
    {
        grammes.value = valeur /0.0022046;
        kilos.value = valeur / 2.2046;
    }
    else if(id == "GBP")
    {
    gbp.value = valeur /0.0022046;
    kilos.value = valeur / 2.2046;
    }
}
})
