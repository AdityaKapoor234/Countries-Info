// JavaScript Document

onload = addCountryDetails;



function addCountryDetails(){
	
	
	function getParameterByName(name, url = window.location.href) {
    	name = name.replace(/[\[\]]/g, '\\$&');
    	var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    	if (!results) return null;
    	if (!results[2]) return '';
			return decodeURIComponent(results[2].replace(/\+/g, ' '));
	}
	
	
	
	let exp=getParameterByName("Country_ID");
	alert(exp);
	
	
	
	var xhttp= new XMLHttpRequest();
	var respJSON=[];
	
	
	xhttp.onreadystatechange = function() {
		if (this.readyState==4 && this.status==200){
			resp=this.responseText;
			respJSON=JSON.parse(resp);
			
			let head,head2,di,di2,di3,tab,tr1,tr2,tr3,tr4,tr5,tr6,tr7,tr8,tr9,tr10,td1,td2,td3,td4,td5,td6,td7,td8,td9,td10,td11,span1,span2,span3,span4,span5,span6,span7,span8,span9,span10,span11,span12,span13,span14,span15,span16,span17,span18,span19,span20,counflag;
	
			
	
			searchlist=document.createElement("datalist");
			searchlist.id="countrynamelist"
			document.body.appendChild(searchlist);
			
			
			
			
			for (var i=0; i<respJSON.length; i++){
				
				if (respJSON[i].alpha3Code==exp){
				
				head=document.createElement("h1");
				head.align="left";
				head.className="head";
				head.innerText=respJSON[i].name;
				document.body.appendChild(head);
				
				di=document.createElement("div");
				di.id="countryid";

	
				tab=document.createElement("table");
				tab.width="100%";
				

		
				tr1=document.createElement("tr");
		
				td1=document.createElement("td");
				td1.width="60%";
				td1.rowSpan="10";
	
				counflag=document.createElement("img");
				counflag.className="country-image";
				counflag.src=respJSON[i].flag;
				td1.appendChild(counflag);
	
				td2=document.createElement("td");
				td2.align="left";
	
				span1=document.createElement("span");
				span1.className="country-det";
				span1.innerText="Native Name: ";
				
				span2=document.createElement("span");
				span2.innerText=respJSON[i].nativeName;
				
				
				td2.appendChild(span1);
				td2.appendChild(span2);
			
				tr1.appendChild(td1);
				tr1.appendChild(td2);
	
				tr2=document.createElement("tr");
	
				td3=document.createElement("td");
				td3.align="left";
	
				span3=document.createElement("span");
				span3.className="country-det";
				span3.innerText="Capital: ";
				
				span4=document.createElement("span");
				span4.innerText=respJSON[i].capital;
	
				td3.appendChild(span3);
				td3.appendChild(span4);
	
				tr2.appendChild(td3);
	
				tr3=document.createElement("tr");
	
				td4=document.createElement("td");
				td4.align="left";
	
				span5=document.createElement("span");
				span5.className="country-det";
				span5.innerText="Population: ";
				
				span6=document.createElement("span");
				span6.innerText=respJSON[i].population;
	
				td4.appendChild(span5);
				td4.appendChild(span6);
	
				tr3.appendChild(td4);
	
				tr4=document.createElement("tr");
	
				td5=document.createElement("td");
				td5.align="left";
				
				span7=document.createElement("span");
				span7.className="country-det";
				span7.innerText="Region: ";
				
				span8=document.createElement("span");
				span8.innerText=respJSON[i].region;
	
				td5.appendChild(span7);
				td5.appendChild(span8);
	
				tr4.appendChild(td5);
				
				tr5=document.createElement("tr");
	
				td6=document.createElement("td");
				td6.align="left";
				
				span9=document.createElement("span");
				span9.className="country-det";
				span9.innerText="Sub-Region: ";
				
				span10=document.createElement("span");
				span10.innerText=respJSON[i].subregion;
	
				td6.appendChild(span9);
				td6.appendChild(span10);
	
				tr5.appendChild(td6);
				
				tr6=document.createElement("tr");
	
				td7=document.createElement("td");
				td7.align="left";
				
				span11=document.createElement("span");
				span11.className="country-det";
				span11.innerText="Area: ";
				
				span12=document.createElement("span");
				span12.innerText=respJSON[i].area;
	
				td7.appendChild(span11);
				td7.appendChild(span12);
	
				tr6.appendChild(td7);
				
				tr7=document.createElement("tr");
	
				td8=document.createElement("td");
				td8.align="left";
				
				span13=document.createElement("span");
				span13.className="country-det";
				span13.innerText="Country Code: ";
				
				span14=document.createElement("span");
				span14.innerText=respJSON[i].alpha3Code;
	
				td8.appendChild(span13);
				td8.appendChild(span14);
	
				tr7.appendChild(td8);
				
				tr8=document.createElement("tr");
	
				td9=document.createElement("td");
				td9.align="left";
				
				span15=document.createElement("span");
				span15.className="country-det";
				span15.innerText="Languages: ";
				
				span16=document.createElement("span");
				span16.innerText=respJSON[i].languages.map(elem=>elem.name);
	
				td9.appendChild(span15);
				td9.appendChild(span16);
	
				tr8.appendChild(td9);
				
				tr9=document.createElement("tr");
	
				td10=document.createElement("td");
				td10.align="left";
				
				span17=document.createElement("span");
				span17.className="country-det";
				span17.innerText="Currencies: ";
				
				span18=document.createElement("span");
				span18.innerText=(respJSON[i].currencies && respJSON[i].currencies.length > 0 ? respJSON[i].currencies[0].name : '');
	
				td10.appendChild(span17);
				td10.appendChild(span18);
	
				tr9.appendChild(td10);
				
				tr10=document.createElement("tr");
	
				td11=document.createElement("td");
				td11.align="left";
				
				span19=document.createElement("span");
				span19.className="country-det";
				span19.innerText="Timezones: ";
				
				span20=document.createElement("span");
				span20.innerText=respJSON[i].timezones;
	
				td11.appendChild(span19);
				td11.appendChild(span20);
	
				tr10.appendChild(td11);
				

				tab.appendChild(tr1);
				tab.appendChild(tr2);
				tab.appendChild(tr3);
				tab.appendChild(tr4);
				tab.appendChild(tr5);
				tab.appendChild(tr6);
				tab.appendChild(tr7);
				tab.appendChild(tr8);
				tab.appendChild(tr9);
				tab.appendChild(tr10);
				

				di.appendChild(tab);
				
				document.body.appendChild(di);
				
				
				di2=document.createElement("div");
				di2.className="country2";
				di2.id="countryid";

				head2=document.createElement("span");
				head2.align="left";
				head2.innerText="Neighbour Countries";
				head2.className="neighcountry";
					
				bre=document.createElement("br");
				
				di2.appendChild(head2);
				di2.appendChild(bre);
				di2.appendChild(bre);
					
				
				
				for (var z=0;z<respJSON[i].borders.length;z++){
					for (var s=0; s<respJSON.length; s++){
						if (respJSON[i].borders[z]==respJSON[s].alpha3Code){
							neighbourflag=document.createElement("img");
							neighbourflag.className="country-image2";
							neighbourflag.src=respJSON[s].flag;
							di2.appendChild(neighbourflag);
						}
					}
				}
				
				
				
				
				
				document.body.appendChild(di2);
				
	
			}	
				
				
			}
			
	
			
				
				
				
				
			
		}
	}
	xhttp.open("GET", "https://restcountries.com/v2/all", true);
	xhttp.send();
	
	
	

	
	
	
}	
	
