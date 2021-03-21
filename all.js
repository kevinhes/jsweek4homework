// BMI ＜ 18.5 體重過輕
// 18.5≦BMI＜24 正常範圍
// 24≦BMI＜27 過重
// 30≦BMI＜35 中度肥胖
// BMI≧35 重度肥胖

// 作業一
function printBmi(height,weight){
    const bmiCalc = (weight/((height/100)*(height/100))).toFixed(2)
    if(bmiCalc>=35){
        console.log('您的體重重度肥胖')
    }else if(bmiCalc>=30 && bmiCalc<35){
        console.log('您的體重中度肥胖')
    }else if(bmiCalc>=27 && bmiCalc <30){
        console.log('您的體重輕度肥胖')
    }else if(bmiCalc>=24 && bmiCalc<27){
        console.log('您的體重過重')
    }else if(bmiCalc>=18.5 && bmiCalc<24){
        console.log('您的體重正常')
    }else if(bmiCalc<18.5){
        console.log('您的體重過輕')
    }else {
        console.log("您的數值輸入錯誤，請重新輸入")
    }
}

printBmi(178, 20)
printBmi(178, 70)
printBmi(178, 85)
printBmi(178, 90)
printBmi(178, 110)
printBmi(178, 130)
printBmi("身高","體重")

// 作業二

const bmiStatesData = {
    "overThin": {
      "state": "過輕",
      "color": "藍色"
    },
    "normal": {
      "state": "正常",
      "color": "紅色"
    },
    "overWeight": {
      "state": "過重",
      "color": "澄色"
    },
    "mildFat": {
      "state": "輕度肥胖",
      "color": "黃色"
    },
    "moderateFat": {
      "state": "中度肥胖",
      "color": "黑色"
    },
    "severeFat": {
      "state": "重度肥胖",
      "color": "綠色"
    },
  }

function bmiState(state){
    console.log(`您的體重${bmiStatesData[state].state}，健康指數為${bmiStatesData[state].color}`)
}

function printBmiState(height,weight){
    const bmiCalc = (weight/((height/100)*(height/100))).toFixed(2)
    if(bmiCalc>=35){
        bmiState('severeFat')
    }else if(bmiCalc>=30 && bmiCalc<35){
        bmiState('moderateFat')
    }else if(bmiCalc>=27 && bmiCalc <30){
        bmiState('mildFat')
    }else if(bmiCalc>=24 && bmiCalc<27){
        bmiState('overWeight')
    }else if(bmiCalc>=18.5 && bmiCalc<24){
        bmiState('normal')
    }else if(bmiCalc<18.5){
        bmiState('overThin')
    }else {
        console.log("您的數值輸入錯誤，請重新輸入")
    }
}

printBmiState(178, 20)
printBmiState(178, 70)
printBmiState(178, 85)
printBmiState(178, 90)
printBmiState(178, 110)
printBmiState(178, 130)
printBmiState("身高","體重")

// 作業三
let count = 0;
let = bmiHistoryData = [];
function addData(bmi,state){
    let obj ={};
    obj.bmi= bmi;
    obj.state = state
    bmiHistoryData.push(obj);
    
}

function printBmiNum(height,weight){
    const bmiCalc = (weight/((height/100)*(height/100))).toFixed(2)
    if(bmiCalc>=35){
        bmiState('severeFat')
        addData(bmiCalc,'overThin');
    }else if(bmiCalc>=30 && bmiCalc<35){
        bmiState('moderateFat')
        addData(bmiCalc,'moderateFat');
    }else if(bmiCalc>=27 && bmiCalc <30){
        bmiState('mildFat')
        addData(bmiCalc,'mildFat');
    }else if(bmiCalc>=24 && bmiCalc<27){
        bmiState('overWeight')
        addData(bmiCalc,'overWeight');
    }else if(bmiCalc>=18.5 && bmiCalc<24){
        bmiState('normal')
        addData(bmiCalc,'normal');
    }else if(bmiCalc<18.5){
        bmiState('overThin')
        addData(bmiCalc,'overThin');
    }else {
        console.log("您的數值輸入錯誤，請重新輸入")
    }
}

function showHistoryData(){
    console.log(`您總共計算 ${bmiHistoryData.length} 次 BMI 紀錄，最後一次 BMI 指數為${bmiHistoryData[bmiHistoryData.length -1].bmi}，體重${bmiStatesData[bmiHistoryData[bmiHistoryData.length -1].state].state}！健康指數為${bmiStatesData[bmiHistoryData[bmiHistoryData.length -1].state].color}！`)
}
console.log(bmiHistoryData)
printBmiNum(178, 20)
printBmiNum(178, 70)
printBmiNum(178, 85)
showHistoryData()