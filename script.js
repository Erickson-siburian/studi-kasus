fetch("https://api.covid19api.com/summary")
  .then((response) => response.json())
  .then((data) => {
    const globalData = data.Global;
    const totalCases = globalData.TotalConfirmed;
    const totalDeaths = globalData.TotalDeaths;
    const totalRecovered = globalData.TotalRecovered;

    const countries = data.Countries;

    //countries.array.forEach((element) => {
    //  console.log(element);
    //});
    console.log(countries.length);
    for (let i = 0; i < countries.length; i++) {
      const div = document.createElement("div");
      div.id = "country";
      document.getElementById("countries").appendChild(div);

      //create Country Name
    }
    for (let i = 0; i < countries.length; i++) {
      //Country Name
      const ele = document.createElement("h3");
      ele.innerHTML = countries[i].Slug;

      //Country Cases
      const countryCases = document.createElement("h4");
      countryCases.innerText = "Cases: ";
      countryCases.innerText += countries[i].TotalConfirmed;

      //country Deaths
      const countryDeaths = document.createElement("h4");
      countryDeaths.innerText = "Deaths: ";
      countryDeaths.innerText += countries[i].TotalDeaths;

      //append child countryname, countryCases
      document.querySelectorAll("#country")[i].appendChild(ele);
      document.querySelectorAll("#country")[i].appendChild(countryCases);
      document.querySelectorAll("#country")[i].appendChild(countryDeaths);
    }

    document.getElementById("totalCases").innerText += " " + totalCases;
    document.getElementById("totalDeaths").innerText += " " + totalDeaths;
    document.getElementById("totalRecovered").innerText +=
      " " + (totalCases - totalDeaths);
  })

  .catch((error) => console.error(error));
