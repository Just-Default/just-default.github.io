var types;
var mainStats;
var subStats;

var subStats1=[];
var subStats2=[];
var subStats3=[];
var subStats4=[];

var subRolls;
var subRollsInAmountOfStats;

var toggled;

onmessage = function(e) {
    mainStats = e.data.mainStats;
    types = e.data.types;
    subStats = e.data.subStats;
    toggled = e.data.toggled;
    
    subStats1= e.data.subStats1;
    subStats2= e.data.subStats2;
    subStats3= e.data.subStats3;
    subStats4= e.data.subStats4;
    
    subRolls = e.data.subRoll;
    subRollsInAmountOfStats = e.data.subRollsInAmountOfStat;
    calculate();
};

function calculate() {
    var totalPercent =0;
    
    if(!toggled){
        var type = types;//document.getElementById("typeComboBox").value;
        var mainStat = mainStats;//document.getElementById("mainComboBox").value;
        var subStat = subStats;//document.getElementsByClassName("subs");
        var subStat1;
        var subStat2;
        var subStat3;
        var subStat4;
        
        var subRollDecimal = 0;

        if(subStat.length >=1){subStat1 = subStats[0];}
        if(subStat.length >=2){subStat2 = subStats[1];}
        if(subStat.length >=3){subStat3 = subStats[2];}
        if(subStat.length ===4){subStat4 = subStats[3];}
        
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
        
        totalPercent *= subRollDecimal;
        
        console.log("totalPercent: "+totalPercent);
    }
    else if(toggled){
        //grabStatsForSelected();
        
        for(var i = 0; i< types.length; i++) {
            var type = types[i];
            var mainStat = mainStats[i];
            
            var subStat1 = subStats1[i];
            var subStat2 = subStats2[i];
            var subStat3 = subStats3[i];
            var subStat4 = subStats4[i];

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
    postMessage(totalPercent);
    //graph(totalPercent);
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

    console.log("resinRun: "+resinRun);
    return resinRun;
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
        //console.log("found");
    }
    //console.log("<<<<requirements_met: "+ requirements_met);
    //console.log("<<<<subStats_needed: "+ subStats_needed);
    } 
    return 0;
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
        subRoll = subRolls;//document.getElementById("subRollsBox1").value;
        subRollsInAmountOfStat = subRollsInAmountOfStats;//document.getElementById("subRollsBox2").value;
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
    
    //if(!combined){
      //  var subRollPercentRounded = Math.round(subRollDecimal*1000)/10;
        //document.getElementById("subRollPercentage").innerHTML = "("+subRollPercentRounded+"%)";
    //}
    
    return subRollDecimal;
}
