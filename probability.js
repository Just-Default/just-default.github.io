var types=[];
var mainStats=[];

var subStats1=[];
var subStats2=[];
var subStats3=[];
var subStats4=[];

var subRolls=[];
var subRollsInAmountOfStats=[];

function calculate() {
    var toggled = document.getElementById("toggled").checked;
    
    //add loading icon
    document.getElementById("calculateButton").innerHTML = 'Calculating <i class="fa fa-spinner fa-spin"></i>';
    
    if(typeof(w) != "undefined"){w.terminate();}
    
    w= undefined;
    if(typeof(Worker) !== "undefined") {
        if(typeof(w) == "undefined") {
          
          w = new Worker("calcs.js"); 
          var toggled = document.getElementById("toggled").checked;
          
          //if combined
          if(toggled){
              grabStatsForSelected();
              //console.log("subStatsArray[0]: "+subStatsArray[0]);
              w.postMessage(
                      {
                          mainStats: mainStats,
                          types: types,
                          subStats1: subStats1,
                          subStats2: subStats2,
                          subStats3: subStats3,
                          subStats4: subStats4,
                          toggled: toggled,
                          subRoll: subRolls,
                          subRollsInAmountOfStat: subRollsInAmountOfStats
                      }
                        );
          }
          
          //not combined
          else{ 
              var types1 = document.getElementById("typeComboBox").value;
              var mainStats1 = document.getElementById("mainComboBox").value;
              var subStat = document.getElementsByClassName("subs");
              //var toggled1 = toggled;
              
              var subRoll = document.getElementById("subRollsBox1").value;
              var subRollsInAmountOfStat = document.getElementById("subRollsBox2").value;
              
              var subStatsArray = [];
              
              for(i = 0;i<subStat.length;i++){
                  subStatsArray[i] = subStat[i].value;
              }
              w.postMessage(
                      {
                          mainStats: mainStats1,
                          types: types1,
                          subStats: subStatsArray,
                          toggled: toggled,
                          subRoll: subRoll,
                          subRollsInAmountOfStat: subRollsInAmountOfStat
                      }
                        );
          }
        }
        w.onmessage = function(event) {
            graph(event.data);
            document.getElementById("calculateButton").innerHTML = 'Calculate';
        };
    } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Workers...";
  }
}

function SubRollsCalc(v1, v2, combined){
    var subRollDecimal =0;
    var pofx;
    var subRoll = v1;
    var subRollsInAmountOfStat = v2;
    
    if(combined){
        subRoll = v1;
        subRollsInAmountOfStat = v2;
    }
    else{
        subRoll = document.getElementById("subRollsBox1").value;
        subRollsInAmountOfStat = document.getElementById("subRollsBox2").value;
    }
    
    var n =5; //trials or amount of rolls
    var p = 0.25*subRollsInAmountOfStat; //probability
    var x = subRoll; //successes
    
    var nFactorial = 1;
    var xFactorial = 1;
    var nsubxFactorial = 1;
    
    for(x; x<= n; x++){
        pofx = 0;        
        nFactorial = 1;
        xFactorial = 1;
        nsubxFactorial = 1;
        
        //factorials
        if(n === 0){nFactorial =1;}
        else{for (i = 1; i <= n; i++) {nFactorial *= i;}}
        
        if(x === 0){xFactorial =1;}
        else{for (i = 1; i <= x; i++) {xFactorial *= i;}}
        
        if(n-x === 0){nsubxFactorial =1;}
        else{for (i = 1; i <= (n-x); i++) {nsubxFactorial *= i;}}
        
        pofx = nFactorial/(xFactorial*nsubxFactorial);    
        pofx *= Math.pow(p,x) * Math.pow((1-p),(n-x));

        subRollDecimal += pofx;
    }
    
    if(!combined){
        var subRollPercentRounded = Math.round(subRollDecimal*1000)/10;
        document.getElementById("subRollPercentage").innerHTML = "("+subRollPercentRounded+"%)";
    }
    
    return subRollDecimal;
}

var w;
function pushStatsForSelected(){
    var selectedButton = document.getElementsByClassName("selected");
    var index = selectedButton[0].name;
    
    var type = document.getElementById("typeComboBox");
    var main = document.getElementById("mainComboBox");
    var subBoxes = document.getElementsByClassName("subs");
    
    var subRoll = document.getElementById("subRollsBox1");
    var subRollsInAmountOfStat = document.getElementById("subRollsBox2");
    
    //type
    for(var i =0;i < type.options.length;i++){
        if (type.options[i].value == types[index]){
            type.options[i].selected = true;
            break;
        }
    }
    changeMainStats(); //update
    //main
    for(var i =0;i < main.options.length;i++){
        if (main.options[i].value == mainStats[index]){
            main.options[i].selected = true;
            break;
        }
    }
    
    var removeButton = document.getElementsByClassName("removeButton");
    
    var amountOfSubBoxes = subBoxes.length;
    for(var i =0; i<amountOfSubBoxes; i++){
        subBoxes[0].parentNode.removeChild(subBoxes[0]);
        removeButton[0].parentNode.removeChild(removeButton[0]);
    }
    
    //substats
    if(subStats1[index] != 0 && subStats1[index] != null){
        addSubStat(subStats1[index]);
    }
    if(subStats2[index] != 0 && subStats2[index] != null){
        addSubStat(subStats2[index]);
    }
    if(subStats3[index] != 0 && subStats3[index] != null){
        addSubStat(subStats3[index]);
    }
    if(subStats4[index] != 0 && subStats4[index] != null){
        addSubStat(subStats4[index]);
    }
    if(subBoxes.length>0){
        document.getElementById("subRollsContainer").style.display = "flex";
    }
    else{
        document.getElementById("subRollsContainer").style.display = "none";
    }
    
    //sub rolls
    if(subRolls[index] == null || subRollsInAmountOfStats[index] == null){
        subRoll.options[0].selected = true;
        subRollsInAmountOfStat.options[0].selected = true;
    }
    else{
        for(var i =0;i < subRoll.options.length;i++){
            if (subRoll.options[i].value == subRolls[index]){
                subRoll.options[i].selected = true;
                break;
            }
        }
        for(var i =0;i < subRollsInAmountOfStat.options.length;i++){
            if (subRollsInAmountOfStat.options[i].value == subRollsInAmountOfStats[index]){
                subRollsInAmountOfStat.options[i].selected = true;
                break;
            }
        }
    }
    SubRollsCalc();
}


function grabStatsForSelected(){
    //store stats
    var selectedButton = document.getElementsByClassName("selected");
    var index = selectedButton[0].name;
    
    var type = document.getElementById("typeComboBox");
    var main = document.getElementById("mainComboBox");
    var subBoxes = document.getElementsByClassName("subs");
    
    var subRoll = document.getElementById("subRollsBox1");
    var subRollsInAmountOfStat = document.getElementById("subRollsBox2");
    
    //types
    types[index]= type.value;
    
    //main stat
    mainStats[index]= main.value;
    
    //sub stats
    var amountOfSubStats = subBoxes.length;
    subStats1[index] = 0;
    subStats2[index] = 0;
    subStats3[index] = 0;
    subStats4[index] = 0;
    
    for(var i = 0; i< amountOfSubStats; i++){
        if     (subBoxes[i].name == 0){subStats1[index] = subBoxes[i].value;}
        else if(subBoxes[i].name == 1){subStats2[index] = subBoxes[i].value;}
        else if(subBoxes[i].name == 2){subStats3[index] = subBoxes[i].value;}
        else if(subBoxes[i].name == 3){subStats4[index] = subBoxes[i].value;}
    }
    
    //sub rolls
    subRolls[index] = subRoll.value;
    subRollsInAmountOfStats[index] = subRollsInAmountOfStat.value;
}


function changeMainStats(){
    var x = document.getElementById("typeComboBox");
    var y = document.getElementById("mainComboBox");
    
    if(x.value === "flower"){
        y.innerHTML = 
        `<option id="options">HP</option>`;
    }
    if(x.value === "plume"){
        y.innerHTML = 
        `<option id="options">ATK</option>`;
    }
    if(x.value === "sands"){
        y.innerHTML = 
        `<option id="options">ATK%</option>
        <option id="options">Energy Recharge%</option>
        <option id="options">Elemental Mastery</option>
        <option id="options">HP%</option>
        <option id="options">DEF%</option>`;
    }
    if(x.value === "goblet"){
        y.innerHTML = 
        `<option id="options">Pyro DMG Bonus%</option>
        <option id="options">Pyro DMG Bonus%</option>
        <option id="options">Electro DMG Bonus%</option>
        <option id="options">Cryo DMG Bonus%</option>
        <option id="options">Hydro DMG Bonus%</option>
        <option id="options">Anemo DMG Bonus%</option>
        <option id="options">Geo DMG Bonus%</option>
        <option id="options">Physical DMG Bonus%</option>
        <option id="options">HP%</option>
        <option id="options">ATK%</option>
        <option id="options">DEF%</option>
        <option id="options">Elemental Mastery</option>`;
    }
    if(x.value === "circlet"){
        y.innerHTML = 
        `<option id="options">Crit Rate%</option>
        <option id="options">Crit Damage%</option>
        <option id="options">Healing Bonus%</option>
        <option id="options">HP%</option>
        <option id="options">ATK%</option>
        <option id="options">DEF%</option>
        <option id="options">Elemental Mastery</option>`;
    }
    //grabStatsForSelected();
}
  
function addSubStat(subValue) {
    //store stats
    var subBoxes = document.getElementsByClassName("subs");
    var amountOfSubStats = subBoxes.length;
    
    if(amountOfSubStats < 4){
        var input = document.createElement("select");
        input.name = amountOfSubStats;
        input.className = "subs";
        input.id = "subStatsBox";
        input.onchange = function () {
            subSelected();
        };
        input.innerHTML = 
            `<option id="options">Crit Rate%</option>
            <option id="options">Crit Damage%</option>
            <option id="options">Atk%</option>
            <option id="options">Elemental Mastery</option>
            <option id="options">Energy Recharge%</option>
            <option id="options">Atk</option>
            <option id="options">Def</option>
            <option id="options">Def%</option>
            <option id="options">HP</option>
            <option id="options">HP%</option>`;

        var remove = document.createElement("input");
        remove.name = "remove";
        remove.type = "button";
        remove.id = "removeButton";
        remove.className = "removeButton";
        remove.value = "X";
        remove.onclick = function () {
            for(var i =0; i<subBoxes.length; i++){
                if(subBoxes[i].name > input.name){
                    subBoxes[i].name= subBoxes[i].name -1;
                }
            }
            this.parentElement.removeChild(this);
            input.parentElement.removeChild(input);
            subSelected();
        };

        if(document.getElementById("new1").innerHTML === ""){
            var parent = document.getElementById("new1");
            parent.appendChild(input);
            parent.appendChild(remove);
        }
        else if(document.getElementById("new2").innerHTML === ""){
            var parent = document.getElementById("new2");
            parent.appendChild(input);
            parent.appendChild(remove);
        }
        else if(document.getElementById("new3").innerHTML === ""){
            var parent = document.getElementById("new3");
            parent.appendChild(input);
            parent.appendChild(remove);
        }
        else if(document.getElementById("new4").innerHTML === ""){
            var parent = document.getElementById("new4");
            parent.appendChild(input);
            parent.appendChild(remove);
        }
        
        var unused = 0;
        //select stored value
        if(subValue !== 0){
            for(var j =0;j < input.options.length;j++){
                if (input.options[j].value == subValue){
                    input.options[j].selected = true;
                    break;
                }
            }
        }else{ //make sure new sub box value isn't the same as above
            if(amountOfSubStats>0){
                unused = check(input, unused, subBoxes);
            }
            input.options[unused].selected = true;
            subSelected(); 
        }
    }
    
}
//check for new available sub stat
function check(input, index, subBoxes){
    found = false;
    //console.log("length: " +subBoxes.length);
    for(var i = 0; i < subBoxes.length; i++){
        //console.log("i: "+ i + ", subBoxes[i].value: "+subBoxes[i].value);
        
        if(input.options[index].value == subBoxes[i].value && input.name != subBoxes[i].name){
            found = true;
            break;
	}
    }
    if(found){
        index++;
        index = check(input, index, subBoxes);
    }
    //console.log("index: "+index);
    return index;
}

//adjust all sub stat boxes: remove used
function subSelected(){
    var subBoxes = document.getElementsByClassName("subs");
    var amountOfSubStats = subBoxes.length;
    var full = `<option id="options">Crit Rate%</option>
            <option id="options">Crit Damage%</option>
            <option id="options">Atk%</option>
            <option id="options">Elemental Mastery</option>
            <option id="options">Energy Recharge%</option>
            <option id="options">Atk</option>
            <option id="options">Def</option>
            <option id="options">Def%</option>
            <option id="options">HP</option>
            <option id="options">HP%</option>`;
    var statSelected1;
    var statSelected2;
    var statSelected3;
    var statSelected4;
    
    for(var i =0; i< amountOfSubStats; i++){
        if(subBoxes[i].name == 0){
            statSelected1 = subBoxes[i].value;
        }
        if(subBoxes[i].name ==1){
            statSelected2 = subBoxes[i].value;
        }
        if(subBoxes[i].name ==2){
            statSelected3 = subBoxes[i].value;
        }
        if(subBoxes[i].name ==3){
            statSelected4 = subBoxes[i].value;
        }
    }
    //reset
    for(var i =0; i< amountOfSubStats; i++){
        subBoxes[i].innerHTML = full;
    }
    //reselect and remove multiple entries
    for(var i =0; i< amountOfSubStats; i++){
        if(subBoxes[i].name == 0){
            for(var j =0; j<subBoxes[i].options.length; j++){

                if(subBoxes[i].options[j].value === statSelected1){
                    console.log("1) subBoxes[i].options[j].value "+subBoxes[i].options[j].value);
                    subBoxes[i].options[j].selected = true;
                }
                
                if(subBoxes[i].options[j].value === statSelected2 || subBoxes[i].options[j].value === statSelected3 || subBoxes[i].options[j].value === statSelected4){
                     subBoxes[i].options[j] = null;
                     j--;
                } 
            } 
        }
        else if(subBoxes[i].name == 1){
            for(var j =0; j<subBoxes[i].options.length; j++){
                if(subBoxes[i].options[j].value == statSelected2){
                    //console.log("2) subBoxes[i].options[j].value "+subBoxes[i].options[j].value);
                    subBoxes[i].options[j].selected = true;
                }
                if(subBoxes[i].options[j].value == statSelected1 || subBoxes[i].options[j].value == statSelected3 || subBoxes[i].options[j].value == statSelected4){
                    subBoxes[i].options[j] = null;
                    j--;
                }
            }
        }
        else if(subBoxes[i].name == 2){
            for(var j =0; j<subBoxes[i].options.length; j++){
                if(subBoxes[i].options[j].value == statSelected3){
                    subBoxes[i].options[j].selected = true;
                }
                if(subBoxes[i].options[j].value == statSelected1 || subBoxes[i].options[j].value == statSelected2 || subBoxes[i].options[j].value == statSelected4){
                    subBoxes[i].options[j] = null;
                    j--;
                }
            }
        }
        else if(subBoxes[i].name == 3){
            for(var j =0; j<subBoxes[i].options.length; j++){
                if(subBoxes[i].options[j].value == statSelected4){
                    subBoxes[i].options[j].selected = true;
                }
                if(subBoxes[i].options[j].value == statSelected1 || subBoxes[i].options[j].value == statSelected2 || subBoxes[i].options[j].value == statSelected3){
                    subBoxes[i].options[j] = null;
                    j--;
                }
            }
        }
    }
    
    if(subBoxes.length>0){
        document.getElementById("subRollsContainer").style.display = "flex";
    }
    else{
        document.getElementById("subRollsContainer").style.display = "none";
    }
    
}
//select new tab (new artifact)
function highlight(element){
    var selectedButton = document.getElementsByClassName("selected");
    var toggled = document.getElementById("toggled").checked;
    grabStatsForSelected(); //final grab before push
    
    if(selectedButton.length >0){
            selectedButton[0].className = "setsButton button";
        }
    element.className = "selected button";
    pushStatsForSelected();
    
    if(!toggled){
        document.getElementById("flex").innerHTML ="<div id='head-percentage'>Chance of getting artifact with these stats: -% </div>";
        document.getElementById("flex2").innerHTML ="<div id='head-percentage'>Total chance in one run (20 resin): -%</div>";
        graph(0);
    }
    
    if(!toggled){
        calculate();
    }
}
//add new tab
function addNewSet(){
    var totalButtons = document.getElementsByClassName("button");
    var input = document.createElement("button");
    
    input.name = totalButtons.length;
    input.className = "setsButton button";
    input.onclick = function(){
        highlight(input);
    };
    var parent = document.getElementById("contained");
    parent.appendChild(input);
    
    var index = totalButtons.length -1;
    types[index] = "flower";
    mainStats[index] = "HP";
    subStats1[index] = 0;
    subStats2[index] = 0;
    subStats3[index] = 0;
    subStats4[index] = 0;
}
//remove tab
function removeSet(){
    var selectedButton = document.getElementsByClassName("selected button");
    var totalButtons = document.getElementsByClassName("button");  
    var index = selectedButton[0].name;
    
    //if not first tab and there are more than 1 tab
    if(selectedButton.length ===1  && totalButtons.length >1 && selectedButton[0] !== document.getElementById("firstRounded")){
        selectedButton[0].parentNode.removeChild(selectedButton[0]);
        totalButtons = document.getElementsByClassName("button"); 
        
        for(var i=0; i < (totalButtons.length); i++){
            if(totalButtons[i].name > index){
                totalButtons[i].name = totalButtons[i].name -1;
            }
            if(totalButtons[i].name == (index -1) ){
                totalButtons[i].className = "selected button";
            }
            else if(index ==0 &&  totalButtons[i].name == index ){
                totalButtons[i].className = "selected button";
            }
        }
        
    types.splice(index,1);
    mainStats.splice(index,1);
    subStats1.splice(index,1);
    subStats2.splice(index,1);
    subStats3.splice(index,1);
    subStats4.splice(index,1);
    
    subRolls.splice(index,1);
    subRollsInAmountOfStats.splice(index,1);
    }
    //if first tab and there are more than 1 tabs
    else if(selectedButton.length ===1  && totalButtons.length >1 && index == document.getElementById("firstRounded").name){
        totalButtons[totalButtons.length -1].parentNode.removeChild(totalButtons[totalButtons.length-1]);
        
        types.splice(index,1);
        mainStats.splice(index,1);
        subStats1.splice(index,1);
        subStats2.splice(index,1);
        subStats3.splice(index,1);
        subStats4.splice(index,1);

        subRolls.splice(index,1);
        subRollsInAmountOfStats.splice(index,1);
    }
    
    pushStatsForSelected();
    calculate();
}


var chart = 0;

function graph(resinRun){
    var percent = resinRun/(0.5*1.07);
    var roundedPercent = Math.round(percent*1000000)/1000000;
    var resinRunRounded = Math.round(resinRun*1000000)/1000000;
    var toggled = document.getElementById("toggled").checked;
    //<font color="blue">  </font>  
    if(toggled){
        document.getElementById("flex").innerHTML ="<div id='head-percentage'><b><font color='#B14715'>Combined</font></b> chance of getting one of these artifacts: </div> <div id='percentage'>" +roundedPercent +"% </div>";
        document.getElementById("flex2").innerHTML ="<div id='head-percentage'>Total chance in one run (20 resin): </div> <div id='percentage'>" +resinRunRounded +"%</div>";
    }
    else{
        document.getElementById("flex").innerHTML ="<div id='head-percentage'>Chance of getting artifact with these stats: </div> <div id='percentage'>" +roundedPercent +"% </div>";
        document.getElementById("flex2").innerHTML ="<div id='head-percentage'>Total chance in one run (20 resin): </div> <div id='percentage'>" +resinRunRounded +"%</div>";
    }

    var p = resinRun/100;
    
    var xValues = [];
    var yValues = [];
      
    var total =0;
    var nthChance = 0;
    
    var n =1;
    var show =0;
    var totalResinDay =0;
    var nthChance =0;
    
    while(show<97 && totalResinDay<366){
        totalResinDay =  n/9;
        nthChance = 1 - Math.pow((1-p),n);
        total =+ nthChance;

        if((n)%9 ===0){
            show = total*100;
  
            yValues.push(show);
            xValues.push(totalResinDay);
        }
        n++;
    }
    
    if(chart===0){
        chart = new Chart("chartContainer", {
            type: "line",
            name: "test",
            id: "chartContainer",
            data: {
                //labels: xValues,
              datasets: [{
                label: 'Cumulative Chance',
                fill: {
                    target: 'origin',
                    above: 'rgba(0, 0, 0,0.8)',   // Area will be red above the origin
                    below: 'rgb(0, 0, 255)'    // And blue below the origin
                  },
                pointRadius: 0,
                //pointBackgroundColor: "rgb(20,20,30)",
                data: yValues
              }],
            labels: xValues
            },
            
            options: {
                interaction: {
                intersect: false,
                mode: 'index'
                }, 
                
              //legend: {display: false},
              scales: {
                y: {
                    max: 100,
                    min: 0,
                    ticks: {
                        stepSize: 25
                    }
                },
                x: {
                    max: 360,
                    min: 1,
                    stepSize:50,
                    maxTicksLimit: 6
                }
            },
              plugins:{
                  legend: {
                    display: false 
                  },
                  tooltip: {
                      displayColors: false,
                  enabled: true,
                  position: 'nearest',
                  callbacks: {
                      title: function(tooltipItem){
                            var resin =  (tooltipItem[0].label*180);
                            return "Resin: " + resin;
                      },
                      
                      label: function(context) {
                        var label = context.dataset.label || '';
                        if (label) {
                            label += ': ';
                        }
                        if (context.parsed.y !== null) {
                            label += Math.round(context.parsed.y*1000)/1000 + "%";
                        }
                        return label;
                    },
                    afterLabel: function(context){
                        var num =context.parsed.x + 1;
                        var days = "Day: " + num;
                        return days;
                      }
                      
                  }
                  
                  }
              }
            }
        });
    }
    chart.data.datasets[0].data = yValues;
    chart.data.labels = xValues;
    chart.update();
}
