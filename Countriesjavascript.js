// JavaScript Document

onload = addCountry;



function addCountry(){
	
	
	var xhttp= new XMLHttpRequest();
	var respJSON=[];
	
	

			

	
	xhttp.onreadystatechange = function() {
		if (this.readyState==4 && this.status==200){
			resp=this.responseText;
			respJSON=JSON.parse(resp);
			
			let bo,di,tab,tr1,tr2,tr3,tr4,td1,td2,td3,td4,td5,counflag,counhead,councurr,councurrval,coundate,coundateval,mapbut,detailbut,hyper1,hyper2,mapcoor,coundeta,searchlist,searchop,exp,utc_offset,sign,dandt,dateandtime;
	
			bo=document.getElementsByTagName("body")[0];
	
			searchlist=document.createElement("datalist");
			searchlist.id="countrynamelist";
			document.body.appendChild(searchlist);
			
			
			
			
			
			let div1,div2,mainheading,searchtext,searchbutton,searchbuttonlink;
			
			div1=document.createElement("div");
			
			mainheading=document.createElement("h1");
			mainheading.align="left";
			mainheading.innerText="Countries";
			mainheading.className="mainheading";
			
			div1.appendChild(mainheading);
			
			document.body.appendChild(div1);
			
			div2=document.createElement("div");
			div2.className="search-box";
			
			searchtext=document.createElement("input");
			searchtext.className="search-txt";
			searchtext.type="search";
			searchtext.placeholder="Type to Search";
			searchtext.list="countrynamelist";
			searchtext.id="searchelement";
			
			searchbuttonlink=document.createElement("a");
			searchbuttonlink.className="search-btn";
			searchbuttonlink.href="#";
			
			searchbutton=document.createElement("input");
			searchbutton.type="button";
			searchbutton.className="fas fa-search";
			searchbutton.id="search";
			
			searchbuttonlink.appendChild(searchbutton);
			
			div2.appendChild(searchtext);
			div2.appendChild(searchbuttonlink);
	
			document.body.appendChild(div2);
			
			
			function createCountryList(i){
				di=document.createElement("div");
				di.id="countryid";
				di.className="country";
	
				tab=document.createElement("table");
				tab.width="100%";
				
				tab.cellPadding="2";

		
				tr1=document.createElement("tr");
		
				td1=document.createElement("td");
				td1.width="40%";
				td1.rowSpan="4";
	
				counflag=document.createElement("img");
				counflag.className="country-image";
				counflag.src=respJSON[i].flag;
				td1.appendChild(counflag);
	
				td2=document.createElement("td");
				td2.align="left";
	
				counhead=document.createElement("span");
				counhead.className="country-name";
				counhead.innerText=respJSON[i].name;
				td2.appendChild(counhead);
			
				tr1.appendChild(td1);
				tr1.appendChild(td2);
	
				tr2=document.createElement("tr");
	
				td3=document.createElement("td");
				td3.align="left";
	
				councurr=document.createElement("span");
				councurr.className="country-det";
				councurr.innerText="Currency: ";
	
				councurrval=document.createElement("span");
				councurrval.className="currency";
				councurrval.innerText=(respJSON[i].currencies && respJSON[i].currencies.length > 0 ? respJSON[i].currencies[0].name : '');
	
				td3.appendChild(councurr);
				td3.appendChild(councurrval);
	
				tr2.appendChild(td3);
	
				tr3=document.createElement("tr");
	
				td4=document.createElement("td");
				td4.align="left";
	
				coundate=document.createElement("span");
				coundate.className="country-det";
				coundate.innerText="Current Date & Time: ";
				
				
				debugger
				timesub=respJSON[i].timezones[0].substring(4);
				sign=respJSON[i].timezones[0].substring(4,3);
				timesubarr=timesub.split(":");
				
				timeadd=(parseInt(timesubarr[0])*60 + parseInt(timesubarr[1])) * (sign=="+" ? 1 : -1);
				
				currdate=new Date();				
				
				//d= new Date('2014-01-01 10:11:55');
				//alert(d.getMinutes() + ':' + d.getSeconds()); //11:55
				//d.setSeconds(d.getSeconds() + 10);
				//alert(d.getMinutes() + ':0' + d.getSeconds()); //12:05
				
				
				newdateandtimesec=currdate.setSeconds(currdate.getSeconds() + timeadd -360);
				
				const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
				
				const day = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
				
				newdateandtime=((parseInt(currdate.getHours())<10?"0"+currdate.getHours():currdate.getHours())+ ':' + (parseInt(currdate.getMinutes())<10?"0"+currdate.getMinutes():currdate.getMinutes()) + ':' + (parseInt(currdate.getSeconds())<10?"0"+currdate.getSeconds():currdate.getSeconds()) + ", " + day[currdate.getDay()] + ', ' + currdate.getDate() + ' '  + month[currdate.getUTCMonth()]  + ', ' + currdate.getFullYear());
				
				//currdate.setSeconds(currdate.getSeconds() + timeadd)
				
				
				
				
				coundateval=document.createElement("span");
				coundateval.className="date-time";
				coundateval.innerText=newdateandtime;
	
				td4.appendChild(coundate);
				td4.appendChild(coundateval);
	
				tr3.appendChild(td4);
	
				tr4=document.createElement("tr");
	
				td5=document.createElement("td");
				td5.align="left";
				
				
				mapcoor="https://www.google.com/maps/place/"+respJSON[i].name;
				
				form1=document.createElement("form");
				form1.action="CountriesDetailsjavascript.js";
	
				hyper1=document.createElement("a");
				hyper1.href=mapcoor;
				hyper1.target="_blank";
	
				mapbut=document.createElement("input");
				mapbut.type="button";
				mapbut.value="Show Map";
				mapbut.className="map";
				
				hyper1.appendChild(mapbut);
				
				
				coundeta="Country Details.html?Country_ID="+respJSON[i].alpha3Code;
	
	
				hyper2=document.createElement("a");
				hyper2.href=coundeta;
								
				
				detailbut=document.createElement("input");
				detailbut.type="submit";
				detailbut.value="Detail";
				detailbut.className="detail";
				detailbut.id=respJSON[i].name;

				
				
				
				
				form1.appendChild(detailbut);
	
				hyper2.appendChild(detailbut);
	
				td5.appendChild(hyper1);
				td5.appendChild(hyper2);
	
				tr4.appendChild(td5);
	
				tab.appendChild(tr1);
				tab.appendChild(tr2);
				tab.appendChild(tr3);
				tab.appendChild(tr4);

				di.appendChild(tab);
				
				document.body.appendChild(form1);
				document.body.appendChild(di);
			
			}

			

			
			
			const search_bar=document.querySelector(".search-txt");
				
			search_bar.addEventListener('input', elem=>{
				const {value}=elem.target;
				
				
				const countryname=document.querySelectorAll(".country-name");
				
				countryname.forEach(name=>{
					
					if (name.innerText.toLowerCase().includes(value.toLowerCase())){
						
						name.parentElement.parentElement.parentElement.parentElement.style.display="grid";
					}
					else{
						name.parentElement.parentElement.parentElement.parentElement.style.display="none";
					}
				})
			})
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			for (var i=0; i<respJSON.length; i++){

				createCountryList(i);
				
				searchop=document.createElement("option");
				searchop.innerText=respJSON[i].name;
				searchlist.appendChild(searchop);
				
			}
			
		}
	}
	xhttp.open("GET", "https://restcountries.com/v2/all", true);
	xhttp.send();
	
	
	

	
	
}	
	
