var types=[];
var mainStats=[];

var subStats1=[];
var subStats2=[];
var subStats3=[];
var subStats4=[];

var subRolls=[];
var subRollsInAmountOfStats=[];

function calculate() {
    var totalPercent =0;
    var toggled = document.getElementById("toggled").checked;
    
    if(!toggled){
        var type = document.getElementById("typeComboBox").value;
        var mainStat = document.getElementById("mainComboBox").value;
        var subStats = document.getElementsByClassName("subs");
        var subStat1;
        var subStat2;
        var subStat3;
        var subStat4;
        
        //var subRoll = document.getElementById("subRollsBox1").value;
        //var subRollsInAmountOfStat = document.getElementById("subRollsBox2").value;
        
        var subRollDecimal = 0;

        if(subStats.length >=1){subStat1 = subStats[0].value;}
        if(subStats.length >=2){subStat2 = subStats[1].value;}
        if(subStats.length >=3){subStat3 = subStats[2].value;}
        if(subStats.length ===4){subStat4 = subStats[3].value;}

        //select piece wanted
        wanted_Flower = false;
        wanted_Plume = false;
        wanted_Sands = false;
        wanted_Goblet = false;
        wanted_Circlet = false;

    //select main stat wanted
        wanted_mainStatHP = false;
        wanted_mainStatATK = false;
        wanted_mainStatHPpercent = false;
        wanted_mainStatATKpercent = false;
        wanted_mainStatDEFpercent = false;

        wanted_mainStatPyroBonus = false;
        wanted_mainStatElectroBonus = false;
        wanted_mainStatCryoBonus = false;
        wanted_mainStatHydroBonus = false;
        wanted_mainStatAnemoBonus = false;
        wanted_mainStatGeoBonus = false;
        wanted_mainStatPhysicalBonus = false;

        wanted_mainStatER = false;
        wanted_mainStatEM = false;
        wanted_mainStatCritRate = false;
        wanted_mainStatCritDMG = false;
        wanted_mainStatHealing = false;

    //select substats wanted
        wanted_subStatHP = false;
        wanted_subStatATK = false;
        wanted_subStatDEF = false;
        wanted_subStatHPpercent = false;
        wanted_subStatATKpercent = false;
        wanted_subStatDEFpercent = false;
        wanted_subStatER = false;
        wanted_subStatEM = false;
        wanted_subStatCritRate = false;
        wanted_subStatCritDMG = false;

        if(type === "flower"){wanted_Flower = true;}
        else if(type === "plume"){wanted_Plume = true;}
        else if(type === "sands"){wanted_Sands = true;}
        else if(type === "goblet"){wanted_Goblet = true;}
        else if(type === "circlet"){wanted_Circlet = true;}

        if(mainStat === "HP"){wanted_mainStatHP = true;}
        else if(mainStat === "ATK"){wanted_mainStatATK = true;}
        else if(mainStat === "HP%"){wanted_mainStatHPpercent = true;}
        else if(mainStat === "ATK%"){wanted_mainStatATKpercent = true;}
        else if(mainStat === "DEF%"){wanted_mainStatDEFpercent = true;}
        else if(mainStat === "Pyro DMG Bonus%"){wanted_mainStatPyroBonus = true;}
        else if(mainStat === "Electro DMG Bonus%"){wanted_mainStatElectroBonus = true;}
        else if(mainStat === "Cryo DMG Bonus%"){wanted_mainStatCryoBonus = true;}
        else if(mainStat === "Hydro DMG Bonus%"){wanted_mainStatHydroBonus = true;}
        else if(mainStat === "Anemo DMG Bonus%"){wanted_mainStatAnemoBonus = true;}
        else if(mainStat === "Geo DMG Bonus%"){wanted_mainStatGeoBonus = true;}
        else if(mainStat === "Physical DMG Bonus%"){wanted_mainStatPhysicalBonus = true;}
        else if(mainStat === "Energy Recharge%"){wanted_mainStatER = true;}
        else if(mainStat === "Elemental Mastery"){wanted_mainStatEM = true;}
        else if(mainStat === "Crit Rate%"){wanted_mainStatCritRate = true;}
        else if(mainStat === "Crit Damage%"){wanted_mainStatCritDMG = true;}
        else if(mainStat === "Healing Bonus%"){wanted_mainStatHealing = true;}

        if(subStat1 === "HP" || subStat2 === "HP" || subStat3 === "HP" || subStat4 === "HP"){wanted_subStatHP = true;}
        if(subStat1 === "Atk" || subStat2 === "Atk" || subStat3 === "Atk" || subStat4 === "Atk"){wanted_subStatATK = true;}
        if(subStat1 === "Def" || subStat2 === "Def" || subStat3 === "Def" || subStat4 === "Def"){wanted_subStatDEF = true;}
        if(subStat1 === "HP%" || subStat2 === "HP%" || subStat3 === "HP%" || subStat4 === "HP%"){wanted_subStatHPpercent = true;}
        if(subStat1 === "Atk%" || subStat2 === "Atk%" || subStat3 === "Atk%" || subStat4 === "Atk%"){wanted_subStatATKpercent = true;}
        if(subStat1 === "Def%" || subStat2 === "Def%" || subStat3 === "Def%" || subStat4 === "Def%"){wanted_subStatDEFpercent = true;}

        if(subStat1 === "Energy Recharge%" || subStat2 === "Energy Recharge%" || subStat3 === "Energy Recharge%" || subStat4 === "Energy Recharge%"){wanted_subStatER = true;}
        if(subStat1 === "Elemental Mastery" || subStat2 === "Elemental Mastery" || subStat3 === "Elemental Mastery" || subStat4 === "Elemental Mastery"){wanted_subStatEM = true;}
        if(subStat1 === "Crit Rate%" || subStat2 === "Crit Rate%" || subStat3 === "Crit Rate%" || subStat4 === "Crit Rate%"){wanted_subStatCritRate = true;}
        if(subStat1 === "Crit Damage%" || subStat2 === "Crit Damage%" || subStat3 === "Crit Damage%" || subStat4 === "Crit Damage%"){wanted_subStatCritDMG = true;}

        //percent for the selected artifact only
        totalPercent = calculateStats();
        subRollDecimal = SubRollsCalc();
        
        //var subRollPercentRounded = Math.round(subRollDecimal*1000)/10;
        //document.getElementById("subRollPercentage").innerHTML = "("+subRollPercentRounded+"%)";
        
        totalPercent *= subRollDecimal;
        
        //console.log("subRoll: "+subRoll);
    }
    else if(toggled){
        grabStatsForSelected();
        
        for(var i = 0; i< types.length; i++) {
            var type = types[i];
            var mainStat = mainStats[i];

            var subStat1 = subStats1[i];
            var subStat2 = subStats2[i];
            var subStat3 = subStats3[i];
            var subStat4 = subStats4[i];
            
            //var subRoll = subRolls[i];
            //var subRollsInAmountOfStat = subRollsInAmountOfStats[i];

            var subRollDecimal = 0;

            //select piece wanted
            wanted_Flower = false;
            wanted_Plume = false;
            wanted_Sands = false;
            wanted_Goblet = false;
            wanted_Circlet = false;

        //select main stat wanted
            wanted_mainStatHP = false;
            wanted_mainStatATK = false;
            wanted_mainStatHPpercent = false;
            wanted_mainStatATKpercent = false;
            wanted_mainStatDEFpercent = false;

            wanted_mainStatPyroBonus = false;
            wanted_mainStatElectroBonus = false;
            wanted_mainStatCryoBonus = false;
            wanted_mainStatHydroBonus = false;
            wanted_mainStatAnemoBonus = false;
            wanted_mainStatGeoBonus = false;
            wanted_mainStatPhysicalBonus = false;

            wanted_mainStatER = false;
            wanted_mainStatEM = false;
            wanted_mainStatCritRate = false;
            wanted_mainStatCritDMG = false;
            wanted_mainStatHealing = false;

        //select substats wanted
            wanted_subStatHP = false;
            wanted_subStatATK = false;
            wanted_subStatDEF = false;
            wanted_subStatHPpercent = false;
            wanted_subStatATKpercent = false;
            wanted_subStatDEFpercent = false;
            wanted_subStatER = false;
            wanted_subStatEM = false;
            wanted_subStatCritRate = false;
            wanted_subStatCritDMG = false;

            if(type === "flower"){wanted_Flower = true;}
            else if(type === "plume"){wanted_Plume = true;}
            else if(type === "sands"){wanted_Sands = true;}
            else if(type === "goblet"){wanted_Goblet = true;}
            else if(type === "circlet"){wanted_Circlet = true;}

            if(mainStat === "HP"){wanted_mainStatHP = true;}
            else if(mainStat === "ATK"){wanted_mainStatATK = true;}
            else if(mainStat === "HP%"){wanted_mainStatHPpercent = true;}
            else if(mainStat === "ATK%"){wanted_mainStatATKpercent = true;}
            else if(mainStat === "DEF%"){wanted_mainStatDEFpercent = true;}
            else if(mainStat === "Pyro DMG Bonus%"){wanted_mainStatPyroBonus = true;}
            else if(mainStat === "Electro DMG Bonus%"){wanted_mainStatElectroBonus = true;}
            else if(mainStat === "Cryo DMG Bonus%"){wanted_mainStatCryoBonus = true;}
            else if(mainStat === "Hydro DMG Bonus%"){wanted_mainStatHydroBonus = true;}
            else if(mainStat === "Anemo DMG Bonus%"){wanted_mainStatAnemoBonus = true;}
            else if(mainStat === "Geo DMG Bonus%"){wanted_mainStatGeoBonus = true;}
            else if(mainStat === "Physical DMG Bonus%"){wanted_mainStatPhysicalBonus = true;}
            else if(mainStat === "Energy Recharge%"){wanted_mainStatER = true;}
            else if(mainStat === "Elemental Mastery"){wanted_mainStatEM = true;}
            else if(mainStat === "Crit Rate%"){wanted_mainStatCritRate = true;}
            else if(mainStat === "Crit Damage%"){wanted_mainStatCritDMG = true;}
            else if(mainStat === "Healing Bonus%"){wanted_mainStatHealing = true;}

            if(subStat1 === "HP" || subStat2 === "HP" || subStat3 === "HP" || subStat4 === "HP"){wanted_subStatHP = true;}
            if(subStat1 === "Atk" || subStat2 === "Atk" || subStat3 === "Atk" || subStat4 === "Atk"){wanted_subStatATK = true;}
            if(subStat1 === "Def" || subStat2 === "Def" || subStat3 === "Def" || subStat4 === "Def"){wanted_subStatDEF = true;}
            if(subStat1 === "HP%" || subStat2 === "HP%" || subStat3 === "HP%" || subStat4 === "HP%"){wanted_subStatHPpercent = true;}
            if(subStat1 === "Atk%" || subStat2 === "Atk%" || subStat3 === "Atk%" || subStat4 === "Atk%"){wanted_subStatATKpercent = true;}
            if(subStat1 === "Def%" || subStat2 === "Def%" || subStat3 === "Def%" || subStat4 === "Def%"){wanted_subStatDEFpercent = true;}

            if(subStat1 === "Energy Recharge%" || subStat2 === "Energy Recharge%" || subStat3 === "Energy Recharge%" || subStat4 === "Energy Recharge%"){wanted_subStatER = true;}
            if(subStat1 === "Elemental Mastery" || subStat2 === "Elemental Mastery" || subStat3 === "Elemental Mastery" || subStat4 === "Elemental Mastery"){wanted_subStatEM = true;}
            if(subStat1 === "Crit Rate%" || subStat2 === "Crit Rate%" || subStat3 === "Crit Rate%" || subStat4 === "Crit Rate%"){wanted_subStatCritRate = true;}
            if(subStat1 === "Crit Damage%" || subStat2 === "Crit Damage%" || subStat3 === "Crit Damage%" || subStat4 === "Crit Damage%"){wanted_subStatCritDMG = true;}

            var percent = calculateStats();
            
            var combined = true;
            var subRollDecimal = SubRollsCalc(subRolls[i], subRollsInAmountOfStats[i], combined);
        
            //var subRollPercentRounded = Math.round(subRollDecimal*1000)/10;
            //document.getElementById("subRollPercentage").innerHTML = "("+subRollPercentRounded+"%)";

            console.log("percent: "+percent);
            console.log("subRollDecimal: "+subRollDecimal);
            percent *= subRollDecimal;
            console.log("percent2: "+percent);
            
            totalPercent += percent;
        }
    }
    graph(totalPercent);
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
        `<option>HP</option>`;
    }
    if(x.value === "plume"){
        y.innerHTML = 
        `<option>ATK</option>`;
    }
    if(x.value === "sands"){
        y.innerHTML = 
        `<option>ATK%</option>
        <option>Energy Recharge%</option>
        <option>Elemental Mastery</option>
        <option>HP%</option>
        <option>Def%</option>`;
    }
    if(x.value === "goblet"){
        y.innerHTML = 
        `<option>Pyro DMG Bonus%</option>
        <option>Pyro DMG Bonus%</option>
        <option>Electro DMG Bonus%</option>
        <option>Cryo DMG Bonus%</option>
        <option>Hydro DMG Bonus%</option>
        <option>Anemo DMG Bonus%</option>
        <option>Geo DMG Bonus%</option>
        <option>Physical DMG Bonus%</option>
        <option>HP%</option>
        <option>ATK%</option>
        <option>Def%</option>
        <option>Energy Recharge%</option>
        <option>Elemental Mastery</option>`;
    }
    if(x.value === "circlet"){
        y.innerHTML = 
        `<option>Crit Rate%</option>
        <option>Crit Damage%</option>
        <option>Healing Bonus%</option>
        <option>HP%</option>
        <option>ATK%</option>
        <option>Def%</option>
        <option>Elemental Mastery</option>`;
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
            `<option>Crit Rate%</option>
            <option>Crit Damage%</option>
            <option>Atk%</option>
            <option>Elemental Mastery</option>
            <option>Energy Recharge%</option>
            <option>Atk</option>
            <option>Def</option>
            <option>Def%</option>
            <option>HP</option>
            <option>HP%</option>`;

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
    var full = `<option>Crit Rate%</option>
            <option>Crit Damage%</option>
            <option>Atk%</option>
            <option>Elemental Mastery</option>
            <option>Energy Recharge%</option>
            <option>Atk</option>
            <option>Def</option>
            <option>Def%</option>
            <option>HP</option>
            <option>HP%</option>`;
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

function highlight(element){
    var selectedButton = document.getElementsByClassName("selected");
    grabStatsForSelected(); //final grab before push
    
    if(selectedButton.length >0){
            selectedButton[0].className = "setsButton button";
        }
    element.className = "selected button";
    pushStatsForSelected();
    
    //document.getElementById("flex").innerHTML ="";
    //document.getElementById("flex2").innerHTML ="";
    //chart.destroy();
    //chart = 0;
}

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

function removeSet(){
    var selectedButton = document.getElementsByClassName("selected button");
    var totalButtons = document.getElementsByClassName("button");  
    var index = selectedButton[0].name;
    
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
}


var accuracy = 10000000;

//select piece wanted
    var wanted_Flower = false;
    var wanted_Plume = false;
    var wanted_Sands = false;
    var wanted_Goblet = false;
    var wanted_Circlet = false;
    
//select main stat wanted
    var wanted_mainStatHP = false;
    var wanted_mainStatATK = false;
    var wanted_mainStatHPpercent = false;
    var wanted_mainStatATKpercent = false;
    var wanted_mainStatDEFpercent = false;
    
    var wanted_mainStatPyroBonus = false;
    var wanted_mainStatElectroBonus = false;
    var wanted_mainStatCryoBonus = false;
    var wanted_mainStatHydroBonus = false;
    var wanted_mainStatAnemoBonus = false;
    var wanted_mainStatGeoBonus = false;
    var wanted_mainStatPhysicalBonus = false;
    
    var wanted_mainStatER = false;
    var wanted_mainStatEM = false;
    var wanted_mainStatCritRate = false;
    var wanted_mainStatCritDMG = false;
    var wanted_mainStatHealing = false;
    
//select substats wanted
    var wanted_subStatHP = false;
    var wanted_subStatATK = false;
    var wanted_subStatDEF = false;
    var wanted_subStatHPpercent = false;
    var wanted_subStatATKpercent = false;
    var wanted_subStatDEFpercent = false;
    var wanted_subStatER = false;
    var wanted_subStatEM = false;
    var wanted_subStatCritRate = false;
    var wanted_subStatCritDMG = false;
    
//probabilities of stats:
    //flower of life
    var flower_mainStatHP = 100;
    
    //plume of death
    var plume_mainStatATK = 100;
    
    //sands of eon
    var sands_mainStatHPpercent = 26.68;
    var sands_mainStatATKpercent = 26.66;
    var sands_mainStatDEFpercent = 26.66;
    var sands_mainStatER = 10;
    var sands_mainStatEM = 10;
    
    //goblet of eonothem
    var goblet_mainStatHPpercent = 21.25;
    var goblet_mainStatATKpercent = 21.25;
    var goblet_mainStatDEFpercent = 20;
    var goblet_mainStatPyroBonus = 5;
    var goblet_mainStatElectroBonus = 5;
    var goblet_mainStatCryoBonus = 5;
    var goblet_mainStatHydroBonus = 5;
    var goblet_mainStatAnemoBonus = 5;
    var goblet_mainStatGeoBonus = 5;
    var goblet_mainStatPhysicalBonus = 5;
    var goblet_mainStatEM = 2.5;
    
    //circlet of logos
    var circlet_mainStatHPpercent = 22;
    var circlet_mainStatATKpercent = 22;
    var circlet_mainStatDEFpercent = 22;
    var circlet_mainStatCritRate = 10;
    var circlet_mainStatCritDMG = 10;
    var circlet_mainStatHealing = 10;
    var circlet_mainStatEM = 4;
    
    //All substats
    var subStatHP = 13.64;
    var subStatATK = 13.64;
    var subStatDEF = 13.64;
    var subStatHPpercent = 9.09;
    var subStatATKpercent = 9.09;
    var subStatDEFpercent = 9.09;
    var subStatER = 9.09;
    var subStatEM = 9.09;
    var subStatCritRate = 6.82;
    var subStatCritDMG = 6.82;
    
    var found = 0;
    var subStats_needed = 0;

//test
    var foundSands = 0;
    var foundSandsAtk = 0;
    //var foundCritRate =0;

    var mainStatProb = 0;

function calculateStats()
{
    mainStatProb = 0;
    foundSands = 0;
    foundSandsAtk = 0;
    found = 0;
    subStats_needed = 0;
    //find how many sub stats are required
    if(wanted_subStatHP){subStats_needed++;}
    if(wanted_subStatATK){subStats_needed++;}
    if(wanted_subStatDEF){subStats_needed++;}
    if(wanted_subStatHPpercent){subStats_needed++;}
    if(wanted_subStatATKpercent){subStats_needed++;}
    if(wanted_subStatDEFpercent){subStats_needed++;}
    if(wanted_subStatER){subStats_needed++;}
    if(wanted_subStatEM){subStats_needed++;}
    if(wanted_subStatCritRate){subStats_needed++;}
    if(wanted_subStatCritDMG){subStats_needed++;}
    
    //FLOWER
    if(wanted_Flower){
            mainStatProb = flower_mainStatHP/100;
            SubStats(1); //remove flat hp from selection and calc sub stats
    }//PLUME
    else if(wanted_Plume){
            mainStatProb = plume_mainStatATK/100;
            SubStats(2); //remove flat atk from selection and calc sub stats
    }//SANDS
    else if(wanted_Sands){
            
            //hp% MAIN
            if(wanted_mainStatHPpercent){
                mainStatProb = sands_mainStatHPpercent/100;
                SubStats(4); //remove hp% from selection and calc sub stats
            }
            //atk% MAIN
            else if(wanted_mainStatATKpercent){
                mainStatProb = sands_mainStatATKpercent/100;
                SubStats(5); //remove atk% from selection and calc sub stats
            }
            //def% MAIN
            else if(wanted_mainStatDEFpercent){
                mainStatProb = sands_mainStatDEFpercent/100;
                SubStats(6); //remove def% from selection and calc sub stats
            }
            //ER MAIN
            else if(wanted_mainStatER){
                mainStatProb = sands_mainStatER/100;
                SubStats(7); //remove ER from selection and calc sub stats
            }
            //EM MAIN
            else if(wanted_mainStatEM){
                mainStatProb = sands_mainStatEM/100;
                SubStats(8); //remove EM from selection and calc sub stats
            }
    }//GOBLET
    else if(wanted_Goblet){
            
            //hp% MAIN
                if(wanted_mainStatHPpercent){
                    mainStatProb = goblet_mainStatHPpercent/100;
                    SubStats(4); //remove hp% from selection and calc sub stats
                }
            //atk% MAIN
                else if(wanted_mainStatATKpercent){
                    mainStatProb = goblet_mainStatATKpercent/100;
                    SubStats(5); //remove atk% from selection and calc sub stats
                }
            //def% MAIN
                else if(wanted_mainStatDEFpercent){
                    mainStatProb = goblet_mainStatDEFpercent/100;
                    SubStats(6); //remove def% from selection and calc sub stats
                }
            //PYRO BONUS% MAIN
                else if(wanted_mainStatPyroBonus){
                    mainStatProb = goblet_mainStatPyroBonus/100; 
                    SubStats(0); //remove nothing from selection and calc sub stats
                }
            //ELECTRO BONUS% MAIN
                else if(wanted_mainStatElectroBonus){
                    mainStatProb = goblet_mainStatPyroBonus/100;
                    SubStats(0); //remove nothing from selection and calc sub stats
                }
            //CRYO BONUS% MAIN
                else if(wanted_mainStatCryoBonus){
                    mainStatProb = goblet_mainStatPyroBonus/100;
                    SubStats(0); //remove nothing from selection and calc sub stats
                }
            //HYDRO BONUS% MAIN
                else if(wanted_mainStatHydroBonus){
                    mainStatProb = goblet_mainStatPyroBonus/100;
                    SubStats(0); //remove nothing from selection and calc sub stats
                }
            //ANEMO BONUS% MAIN
                else if(wanted_mainStatAnemoBonus){
                    mainStatProb = goblet_mainStatPyroBonus/100;
                    SubStats(0); //remove nothing from selection and calc sub stats
                }
            //GEO BONUS% MAIN
                else if(wanted_mainStatGeoBonus){
                    mainStatProb = goblet_mainStatPyroBonus/100;
                    SubStats(0); //remove nothing from selection and calc sub stats
                }
            //PHYSICAL BONUS% MAIN
                else if(wanted_mainStatPhysicalBonus){
                    mainStatProb = goblet_mainStatPyroBonus/100;
                    SubStats(0); //remove nothing from selection and calc sub stats
                }
            //EM MAIN
                else if(wanted_mainStatEM){
                    mainStatProb = goblet_mainStatEM/100;
                    SubStats(8); //remove EM from selection and calc sub stats
                }
    }//CIRCLET
    else if(wanted_Circlet){
        
            //hp% MAIN
                if(wanted_mainStatHPpercent){
                    mainStatProb = circlet_mainStatHPpercent/100;
                    SubStats(4); //remove hp% from selection and calc sub stats
                }
            //atk% MAIN 
                if(wanted_mainStatATKpercent){
                    mainStatProb = circlet_mainStatATKpercent/100;
                    SubStats(5); //remove atk% from selection and calc sub stats
                }
            //def% MAIN 
                if(wanted_mainStatDEFpercent){
                    mainStatProb = circlet_mainStatDEFpercent/100;
                    SubStats(6); //remove def% from selection and calc sub stats
                }
            //Crit rate MAIN
                if(wanted_mainStatCritRate){
                    mainStatProb = circlet_mainStatCritRate/100;
                    SubStats(9); //remove crit rate from selection and calc sub stats
                }
            //Crit dmg MAIN
                if(wanted_mainStatCritDMG){
                    mainStatProb = circlet_mainStatCritDMG/100;
                    SubStats(10); //remove crit damage from selection and calc sub stats
                }
            //healing bonus% MAIN
                if(wanted_mainStatHealing){
                    mainStatProb = circlet_mainStatHealing/100;
                    SubStats(0); //remove nothing from selection and calc sub stats
                }
            //EM MAIN
                if(wanted_mainStatEM){
                    mainStatProb = circlet_mainStatEM/100;
                    SubStats(8); //remove EM from selection and calc sub stats
                }
    }
    
    //outcomes and tests
    var percent = found;
    var attempts = accuracy;
    
    percent = 0.2*mainStatProb*(found/attempts)*100;
    var resinRun = percent*0.5*1.07;
    //printf("found %d\n",found);
    //printf("percent: %f%%\n", percent);
    
    /*console.log("percent: "+percent+"%");
    console.log("percent with half: "+percent/2+"%");
    console.log("#########");
    
    var roundedPercent = Math.round(percent*1000000)/1000000;
    
    var resinRunRounded = Math.round(resinRun*1000000)/1000000;

    document.getElementById("flex").innerHTML ="<div id='head-percentage'>Chance of getting an artifact with these stats: </div> <div id='percentage'>" +roundedPercent +"% </div>";
    document.getElementById("flex2").innerHTML ="<div id='head-percentage'>Total chance in one run (20 resin): </div> <div id='percentage'>" +resinRunRounded +"% </div>";

    graph(resinRun);*/
    return resinRun;
}

var chart = 0;

function graph(resinRun){
    var percent = resinRun/(0.5*1.07);
    var roundedPercent = Math.round(percent*1000000)/1000000;
    var resinRunRounded = Math.round(resinRun*1000000)/1000000;
    
    document.getElementById("flex").innerHTML ="<div id='head-percentage'>Chance of getting an artifact with these stats: </div> <div id='percentage'>" +roundedPercent +"% </div>";
    document.getElementById("flex2").innerHTML ="<div id='head-percentage'>Total chance in one run (20 resin): </div> <div id='percentage'>" +resinRunRounded +"% </div>";

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
                    above: 'rgba(0, 0, 0,0.2)',   // Area will be red above the origin
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



//find sub stats function
function SubStats(removed_from_selection){
    //rolled substats
    var found_subStatHP = false;
    var found_subStatATK = false;
    var found_subStatDEF = false;
    var found_subStatHPpercent = false;
    var found_subStatATKpercent = false;
    var found_subStatDEFpercent = false;
    var found_subStatER = false;
    var found_subStatEM = false;
    var found_subStatCritRate = false;
    var found_subStatCritDMG = false;
    
    var temp_subStatHP = subStatHP;
    var temp_subStatATK = subStatATK;
    var temp_subStatDEF = subStatDEF;
    var temp_subStatHPpercent = subStatHPpercent;
    var temp_subStatATKpercent = subStatATKpercent;
    var temp_subStatDEFpercent = subStatDEFpercent;
    var temp_subStatER = subStatER;
    var temp_subStatEM = subStatEM;
    var temp_subStatCritRate = subStatCritRate;
    var temp_subStatCritDMG = subStatCritDMG;

    //start loop
for(var a=0; a<accuracy;a++){
    var rolls = 4;
    
    //rolled substats
    found_subStatHP = false;
    found_subStatATK = false;
    found_subStatDEF = false;
    found_subStatHPpercent = false;
    found_subStatATKpercent = false;
    found_subStatDEFpercent = false;
    found_subStatER = false;
    found_subStatEM = false;
    found_subStatCritRate = false;
    found_subStatCritDMG = false;
    
    temp_subStatHP = subStatHP;
    temp_subStatATK = subStatATK;
    temp_subStatDEF = subStatDEF;
    temp_subStatHPpercent = subStatHPpercent;
    temp_subStatATKpercent = subStatATKpercent;
    temp_subStatDEFpercent = subStatDEFpercent;
    temp_subStatER = subStatER;
    temp_subStatEM = subStatEM;
    temp_subStatCritRate = subStatCritRate;
    temp_subStatCritDMG = subStatCritDMG;
    
    //remove sub stat based on main stat already found
    if(removed_from_selection ===0){/*do nothing all ok */}
    else if(removed_from_selection ===1){temp_subStatHP = 0;}
    else if(removed_from_selection ===2){temp_subStatATK = 0;}
    else if(removed_from_selection ===3){temp_subStatDEF = 0;}
    else if(removed_from_selection ===4){temp_subStatHPpercent = 0;}
    else if(removed_from_selection ===5){temp_subStatATKpercent = 0;}
    else if(removed_from_selection ===6){temp_subStatDEFpercent = 0;}
    else if(removed_from_selection ===7){temp_subStatER = 0;}
    else if(removed_from_selection ===8){temp_subStatEM = 0;}
    else if(removed_from_selection ===9){temp_subStatCritRate = 0;}
    else if(removed_from_selection ===10){temp_subStatCritDMG = 0;}
    
    //numerical total of updated "percentage" substat values after stat removal
    var total = temp_subStatHP+temp_subStatATK+temp_subStatDEF+temp_subStatHPpercent+temp_subStatATKpercent+temp_subStatDEFpercent+temp_subStatER+temp_subStatEM+temp_subStatCritRate+temp_subStatCritDMG;

    //start roll loop
    for(var i = 0; i<rolls;i++){
        var rngNumber = Math.random()*total;
        
        //console.log("rngnumbersub: "+rngNumber);
        if(rngNumber < temp_subStatHP && temp_subStatHP !==0){
            found_subStatHP = true;
            temp_subStatHP = 0;
        }
        else if(rngNumber < (temp_subStatHP + temp_subStatATK) && temp_subStatATK !==0){
            found_subStatATK = true;
            temp_subStatATK = 0;
        }
        else if(rngNumber < (temp_subStatHP + temp_subStatATK + temp_subStatDEF) && temp_subStatDEF !==0){ 
            found_subStatDEF = true;
            temp_subStatDEF = 0;
        }
        else if(rngNumber < (temp_subStatHP + temp_subStatATK + temp_subStatDEF + temp_subStatHPpercent) && temp_subStatHPpercent !==0){
            found_subStatHPpercent = true;
            temp_subStatHPpercent = 0;
        }
        else if(rngNumber < (temp_subStatHP + temp_subStatATK + temp_subStatDEF + temp_subStatHPpercent + temp_subStatATKpercent) && temp_subStatATKpercent !==0){
            found_subStatATKpercent = true;
            temp_subStatATKpercent = 0;
        }
        else if(rngNumber < (temp_subStatHP + temp_subStatATK + temp_subStatDEF + temp_subStatHPpercent + temp_subStatATKpercent + temp_subStatDEFpercent) && temp_subStatDEFpercent !==0){
            found_subStatDEFpercent = true;
            temp_subStatDEFpercent = 0;
        }
        else if(rngNumber < (temp_subStatHP + temp_subStatATK + temp_subStatDEF + temp_subStatHPpercent + temp_subStatATKpercent + temp_subStatDEFpercent + temp_subStatER) && temp_subStatER !==0){
            found_subStatER = true;
            temp_subStatER = 0;
        }
        else if(rngNumber < (temp_subStatHP + temp_subStatATK + temp_subStatDEF + temp_subStatHPpercent + temp_subStatATKpercent + temp_subStatDEFpercent + temp_subStatER + temp_subStatEM) && temp_subStatEM !==0){
            found_subStatEM = true;
            temp_subStatEM = 0;
        }
        else if(rngNumber < (temp_subStatHP + temp_subStatATK + temp_subStatDEF + temp_subStatHPpercent + temp_subStatATKpercent + temp_subStatDEFpercent + temp_subStatER + temp_subStatEM + temp_subStatCritRate) && temp_subStatCritRate !==0){
            //if(i==0){foundCritRate++;}
            //console.log("^crit rate found: ");
            found_subStatCritRate = true;
            temp_subStatCritRate = 0;
        }
        else if(rngNumber < (temp_subStatHP + temp_subStatATK + temp_subStatDEF + temp_subStatHPpercent + temp_subStatATKpercent + temp_subStatDEFpercent + temp_subStatER + temp_subStatEM + temp_subStatCritRate + temp_subStatCritDMG) && temp_subStatCritDMG !==0){
            found_subStatCritDMG = true;
            temp_subStatCritDMG = 0;
        }
        //update new total after taking selected sub stat out
        total = temp_subStatHP+temp_subStatATK+temp_subStatDEF+temp_subStatHPpercent+temp_subStatATKpercent+temp_subStatDEFpercent+temp_subStatER+temp_subStatEM+temp_subStatCritRate+temp_subStatCritDMG;
    }
    //check how many sub stats were found and compare to how many were needed
    var requirements_met = 0;
    
    //if a rolled stat was a wanted sub stat add them up as found
    if(found_subStatHP && wanted_subStatHP){ requirements_met++;}
    if(found_subStatATK && wanted_subStatATK){ requirements_met++;}
    if(found_subStatDEF && wanted_subStatDEF){ requirements_met++;}
    if(found_subStatHPpercent && wanted_subStatHPpercent){ requirements_met++;}
    if(found_subStatATKpercent && wanted_subStatATKpercent){ requirements_met++;}
    if(found_subStatDEFpercent && wanted_subStatDEFpercent){ requirements_met++;}
    if(found_subStatER && wanted_subStatER){ requirements_met++;}
    if(found_subStatEM && wanted_subStatEM){ requirements_met++;}
    if(found_subStatCritRate && wanted_subStatCritRate){ requirements_met++;}
    if(found_subStatCritDMG && wanted_subStatCritDMG){ requirements_met++;}
    
    //if all required substats were found, add one more artifact with the total requirements to the total found
    if(requirements_met === subStats_needed  || (requirements_met >= 4)){
        found++;
    }
    //console.log("<<<<requirements_met: "+ requirements_met);
    //console.log("<<<<subStats_needed: "+ subStats_needed);
    } 
    return 0;
}
