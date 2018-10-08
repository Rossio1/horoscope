//horoscope images and description must be linked to calender form
document.getElementById('yourHoroscope').onclick=birthday
function birthday(){
    var month=document.getElementById('months').value
     console.log(month)
     var day=document.getElementById('days').value
     console.log(day)
     if(month == 0 || day ==0){
       console.log('Enter A Valid Month or Day')
     }
     else{
       astrology(month,day)
     }
}
function astrology(month,day){
  if(month === 'december' && day >= 23 || month === 'january' && day <= 20){
    console.log("Capricorn")
    zodiac('Capricorn', 'You keep part of yourself close and closed.', 'images/capricorn.jpg')
  }
  else if(month=== 'january' && day >=21 || month=== 'feburary' && day <=18){
    console.log('Aquarius')
    zodiac('Aquarius','You will notice a sense of possibility in areas related to your public identity and reputation.','images/aquarius.jpg')
  }
  else if(month=== 'feburary' && day >=19 || month==='march' && day <=20){
    console.log('Pisces')
    zodiac('Pisces','Youre asserting yourself with comfortable ease.','images/pisces.jpg')
  }
  else if(month=== 'march'&& day >=21 || month==='april' && day <=20){
    console.log('Aries')
    zodiac('Aries','Resilience is an elastic experience.','images/aries.jpg')
  }
  else if(month=== 'april' && day >=21 || month==='may' && day <=21){
    console.log('Taurus')
    zodiac('Taurus','Abundance is possible and youre noticing it manifest in your material possessions. ','images/taurus.jpg')
  }
  else if(month=== 'may' && day >=22 || month==='june' && day <=21){
    console.log('Gemini')
    zodiac('Gemini','Your tendency for stability is serving you well.','images/gemini.jpg')
  }
  else if(month === 'june' && day >=22 || month=== 'july' && day <=23){
    console.log('Cancer')
    zodiac('Cancer','You dig your heels because youre to stubborn to change your mind.','images/cancer.jpg')
  }
  else if(month=== 'july' && day >=24 || month=== 'august' && day <=23){
    console.log('Leo')
    zodiac('Leo','A healthy psyche is not a thing to lord over someone who is struggling.','images/leo.jpg')
  }
  else if(month=== 'august' && day >=24 || month=== 'september' && day <=23){
  console.log('Virgo')
  zodiac('Virgo','Sharing does not mean you take the grenade and give someone else the pin.','images/virgo.jpg')
  }
  else if(month=== 'september' && day >=24 || month=== 'october' && day <=23){
    console.log('Libra')
    zodiac('Libra','Your unconventiality is a burden now.','images/libra.jpg')
  }
  else if(month=== 'october' && day >=24 || month=== 'november' && day <=22){
    console.log('Scorpio')
    zodiac('Scorpio','Youre having difficulty moving forward right now.','images/scorpio.jpg')
  }
  else if(month ==='november' && day >=23 || month=== 'december' && day <=22){
    console.log('Sagittarius')
    zodiac('Sagittarius','Youre used to your dreams coming true.','images/sagittarius.jpg')
  }
}
function zodiac(sign,msg,img){
  document.getElementById('sign').innerHTML = sign;
  document.getElementById('msg').innerHTML = msg;
  document.getElementById('img').src = img;
}
