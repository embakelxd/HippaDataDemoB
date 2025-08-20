function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6QDCCveYIJw":
        Script1();
        break;
      case "6dbKfXYWvxL":
        Script2();
        break;
      case "5w3vSPal2dU":
        Script3();
        break;
      case "6cLz5WBKANX":
        Script4();
        break;
      case "6Ih1ZnUEbcI":
        Script5();
        break;
      case "6QY0RviyKym":
        Script6();
        break;
      case "6UY1C0oCUpF":
        Script7();
        break;
      case "6JCaAg1TqrF":
        Script8();
        break;
      case "5za3KgqLOsv":
        Script9();
        break;
      case "5w8Vqh4enjx":
        Script10();
        break;
      case "62qsZmeledf":
        Script11();
        break;
      case "5V1LiFf5Lfv":
        Script12();
        break;
      case "5crzwfr4qbB":
        Script13();
        break;
      case "6IUx9RroRNJ":
        Script14();
        break;
      case "6C0tFiVSvls":
        Script15();
        break;
      case "6mAjQxalpJQ":
        Script16();
        break;
      case "6m8L4dq3fCn":
        Script17();
        break;
      case "6Gwa319xQVt":
        Script18();
        break;
      case "6QUbj4OkyTI":
        Script19();
        break;
      case "67643swo3OL":
        Script20();
        break;
      case "6fSLPq2tFlF":
        Script21();
        break;
      case "6MY1rXgz67L":
        Script22();
        break;
      case "5vHdyABuwJn":
        Script23();
        break;
      case "63w34beIHVO":
        Script24();
        break;
      case "6SOlVGQdeUU":
        Script25();
        break;
      case "5VHdYvS5wZy":
        Script26();
        break;
      case "5Vmvgb2c5SO":
        Script27();
        break;
      case "6bG14lidWnz":
        Script28();
        break;
      case "65430xYkevr":
        Script29();
        break;
      case "65MjcnASV4u":
        Script30();
        break;
      case "6knQSVrQElk":
        Script31();
        break;
      case "5zbWBkTkwMW":
        Script32();
        break;
      case "6d0xhE0WC8e":
        Script33();
        break;
      case "6P5pdaW3chW":
        Script34();
        break;
      case "5xiyuhvcdE8":
        Script35();
        break;
      case "6F2I8I7uDnB":
        Script36();
        break;
      case "6R5tJ26vl9y":
        Script37();
        break;
      case "5yUJyHKsbtP":
        Script38();
        break;
      case "6VShoBL9XTx":
        Script39();
        break;
      case "67vgCXEMlEU":
        Script40();
        break;
      case "6AjeS8ZAT6u":
        Script41();
        break;
      case "6lcsu7uZUE5":
        Script42();
        break;
      case "5lJofdlIRv0":
        Script43();
        break;
      case "6ho2G4vNnmC":
        Script44();
        break;
      case "5jzdeRmqaS6":
        Script45();
        break;
      case "5qMw4DnnNRu":
        Script46();
        break;
      case "5zBIARRZ3qd":
        Script47();
        break;
      case "5x7yhtNFc3h":
        Script48();
        break;
      case "6jTtaBymxqy":
        Script49();
        break;
      case "6JTulRCzy67":
        Script50();
        break;
      case "5nAKjeV3kHu":
        Script51();
        break;
      case "69Es8j2f10A":
        Script52();
        break;
      case "5jIicLs1b41":
        Script53();
        break;
      case "5oqEXqCvByy":
        Script54();
        break;
      case "64P41p4LRhd":
        Script55();
        break;
      case "6Uq15lZfVsw":
        Script56();
        break;
      case "6lKCuSe1nvh":
        Script57();
        break;
      case "5z9ro13swkR":
        Script58();
        break;
      case "5oHmbdm7JHO":
        Script59();
        break;
      case "5zgfHiHk9TH":
        Script60();
        break;
      case "5cRa7KTRWdj":
        Script61();
        break;
      case "5fHosFFFwdk":
        Script62();
        break;
      case "6Xtmpkpe7HP":
        Script63();
        break;
      case "66bQnIi9HMT":
        Script64();
        break;
      case "6XfWCDwV9SG":
        Script65();
        break;
      case "6lFTtoSyce2":
        Script66();
        break;
      case "6EMgmyg61Zv":
        Script67();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
  player.once(() => {
const target = object('679yA6MMamG');
const duration = 750;
const easing = 'ease-out';
const id = '5zImmEPZELY';
const bounceAmount = 0.5;
const delay = 1250;
addToTimeline(
target.animate(
player.emphasis.bounce(bounceAmount)
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script2 = function()
{
  const target = object('5jjGANNndVX');
const duration = 750;
const easing = 'ease-out';
const id = '5e0ScwQb6vr';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  const target = object('5vpoZDpf3Dx');
const duration = 750;
const easing = 'ease-out';
const id = '60K0oj2668H';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script4 = function()
{
  const target = object('6ayXfMVLv4F');
const duration = 750;
const easing = 'ease-out';
const id = '64hQ4hbQLoz';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script5 = function()
{
  const target = object('6JuvWOCwDBQ');
const duration = 750;
const easing = 'ease-out';
const id = '6XnFCdQFJFl';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script6 = function()
{
  const target = object('6OXscseHTrJ');
const duration = 750;
const easing = 'ease-out';
const id = '67l9rKVvSrh';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script7 = function()
{
  const target = object('5bpq63TTlNL');
const duration = 750;
const easing = 'ease-out';
const id = '6eIR1gpVbwR';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script8 = function()
{
  const target = object('5XWkVBtrwaT');
const duration = 750;
const easing = 'ease-out';
const id = '6ki1nT2oPMv';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script9 = function()
{
  const target = object('5VdYfcrtNse');
const duration = 100;
const easing = 'linear';
const id = '5d6zrLacWYY';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script10 = function()
{
  const target = object('5VdYfcrtNse');
const duration = 100;
const easing = 'linear';
const id = '5d6zrLacWYY_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script11 = function()
{
  const target = object('5Whsqih0hcP');
const duration = 100;
const easing = 'linear';
const id = '6EBtM3FVnxK';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script12 = function()
{
  const target = object('5Whsqih0hcP');
const duration = 100;
const easing = 'linear';
const id = '6EBtM3FVnxK_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script13 = function()
{
  const target = object('68zdLz3G8VQ');
const duration = 100;
const easing = 'linear';
const id = '5jJgJuu1VeN';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script14 = function()
{
  const target = object('68zdLz3G8VQ');
const duration = 100;
const easing = 'linear';
const id = '5jJgJuu1VeN_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script15 = function()
{
  const target = object('5rDXKGX0mtE');
const duration = 100;
const easing = 'linear';
const id = '5hgAM6Hkf5N';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script16 = function()
{
  const target = object('5rDXKGX0mtE');
const duration = 100;
const easing = 'linear';
const id = '5hgAM6Hkf5N_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script17 = function()
{
  const target = object('5edOtHplu8P');
const duration = 100;
const easing = 'linear';
const id = '5e5aSQT1mOO';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script18 = function()
{
  const target = object('5edOtHplu8P');
const duration = 100;
const easing = 'linear';
const id = '5e5aSQT1mOO_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script19 = function()
{
  const target = object('5wX1b2yKKmk');
const duration = 100;
const easing = 'linear';
const id = '6PVSiD6AzFK';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script20 = function()
{
  const target = object('5wX1b2yKKmk');
const duration = 100;
const easing = 'linear';
const id = '6PVSiD6AzFK_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script21 = function()
{
  const target = object('6RbzvMPS2W2');
const duration = 100;
const easing = 'linear';
const id = '6FFmjOiqSDw';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script22 = function()
{
  const target = object('6RbzvMPS2W2');
const duration = 100;
const easing = 'linear';
const id = '6FFmjOiqSDw_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script23 = function()
{
  const target = object('6qk6E5frA3l');
const duration = 100;
const easing = 'linear';
const id = '5kZpec6uHAu';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script24 = function()
{
  const target = object('6qk6E5frA3l');
const duration = 100;
const easing = 'linear';
const id = '5kZpec6uHAu_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script25 = function()
{
  const target = object('6eCYnex5xDa');
const duration = 100;
const easing = 'linear';
const id = '6MHJ9bpk8uW';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script26 = function()
{
  const target = object('6eCYnex5xDa');
const duration = 100;
const easing = 'linear';
const id = '6MHJ9bpk8uW_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script27 = function()
{
  const target = object('6F0aN4BsWI2');
const duration = 100;
const easing = 'linear';
const id = '6ppxeSo0ezZ';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script28 = function()
{
  const target = object('6F0aN4BsWI2');
const duration = 100;
const easing = 'linear';
const id = '6ppxeSo0ezZ_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script29 = function()
{
  const target = object('6eSB4ihxY6X');
const duration = 100;
const easing = 'linear';
const id = '6IMVxuV9a7X';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script30 = function()
{
  const target = object('6eSB4ihxY6X');
const duration = 100;
const easing = 'linear';
const id = '6IMVxuV9a7X_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script31 = function()
{
  const target = object('6h1HpWzlf70');
const duration = 100;
const easing = 'linear';
const id = '6YJ55JDhAVq';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script32 = function()
{
  const target = object('6h1HpWzlf70');
const duration = 100;
const easing = 'linear';
const id = '6YJ55JDhAVq_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script33 = function()
{
  const target = object('6b8rzmPckBH');
const duration = 100;
const easing = 'linear';
const id = '6PShmAiYhs4';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script34 = function()
{
  const target = object('6b8rzmPckBH');
const duration = 100;
const easing = 'linear';
const id = '6PShmAiYhs4_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script35 = function()
{
  const target = object('6JSTmoVB0UN');
const duration = 100;
const easing = 'linear';
const id = '6DTCJmK0sGZ';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script36 = function()
{
  const target = object('6JSTmoVB0UN');
const duration = 100;
const easing = 'linear';
const id = '6DTCJmK0sGZ_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script37 = function()
{
  const target = object('6Eaq7hDWop7');
const duration = 100;
const easing = 'linear';
const id = '6MNoxkE4lZV';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script38 = function()
{
  const target = object('6Eaq7hDWop7');
const duration = 100;
const easing = 'linear';
const id = '6MNoxkE4lZV_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script39 = function()
{
  const target = object('67Qqt9yt6ik');
const duration = 100;
const easing = 'linear';
const id = '5b6PXmzFvKl';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script40 = function()
{
  const target = object('67Qqt9yt6ik');
const duration = 100;
const easing = 'linear';
const id = '5b6PXmzFvKl_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script41 = function()
{
  const target = object('5oTvYvhnlQn');
const duration = 100;
const easing = 'linear';
const id = '6Dj3jKYYFrn';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script42 = function()
{
  const target = object('5oTvYvhnlQn');
const duration = 100;
const easing = 'linear';
const id = '6Dj3jKYYFrn_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script43 = function()
{
  const target = object('68VGVh72r3G');
const duration = 100;
const easing = 'linear';
const id = '6Dj3jKYYFrn';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script44 = function()
{
  const target = object('68VGVh72r3G');
const duration = 100;
const easing = 'linear';
const id = '6Dj3jKYYFrn_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script45 = function()
{
  const target = object('6NaVbbD7jAp');
const duration = 750;
const easing = 'ease-out';
const id = '5e0ScwQb6vr';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script46 = function()
{
  const target = object('5pAIWgNB2sH');
const duration = 750;
const easing = 'ease-out';
const id = '60K0oj2668H';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script47 = function()
{
  player.once(() => {
const target = object('6YTxrwcBlh5');
const duration = 750;
const easing = 'ease-out';
const id = '6ApULxQYkAt';
const pulseAmount = 0.07;
const delay = 0;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script48 = function()
{
  player.once(() => {
const target = object('5w00lzRhDuy');
const duration = 750;
const easing = 'ease-out';
const id = '5cjI0O6ALpZ';
const pulseAmount = 0.07;
const delay = 0;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script49 = function()
{
  player.once(() => {
const target = object('6I8CkfZhtAU');
const duration = 750;
const easing = 'ease-out';
const id = '64Ozkl7rtx4';
const pulseAmount = 0.07;
const delay = 0;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script50 = function()
{
  player.once(() => {
const target = object('6kPtKbSSTsF');
const duration = 750;
const easing = 'ease-out';
const id = '5d2ZmcQy7mg';
const pulseAmount = 0.07;
const delay = 0;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script51 = function()
{
  player.once(() => {
const target = object('5wwj1wISmF5');
const duration = 750;
const easing = 'ease-out';
const id = '5h41pAXItFN';
const pulseAmount = 0.07;
const delay = 0;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script52 = function()
{
  player.once(() => {
const target = object('6NNReFFAVNj');
const duration = 750;
const easing = 'ease-out';
const id = '5opa3uKUhAx';
const pulseAmount = 0.07;
const delay = 0;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script53 = function()
{
  player.once(() => {
const target = object('5cdekWohnDZ');
const duration = 750;
const easing = 'ease-out';
const id = '5zImmEPZELY';
const bounceAmount = 0.5;
const delay = 1250;
addToTimeline(
target.animate(
player.emphasis.bounce(bounceAmount)
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script54 = function()
{
  const target = object('6J8Xa4i8yLn');
const duration = 750;
const easing = 'ease-out';
const id = '5mZCj79zikQ';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script55 = function()
{
  const target = object('64ns1L9ktKG');
const duration = 750;
const easing = 'ease-out';
const id = '67ijhgBeXjx';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script56 = function()
{
  const target = object('6pIPclWMizU');
const duration = 750;
const easing = 'ease-out';
const id = '6rMhmEYVxU9';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script57 = function()
{
  const target = object('6gzpqHH9g1u');
const duration = 750;
const easing = 'ease-out';
const id = '5knTXGo9vDt';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script58 = function()
{
  const target = object('5tVbkqguoCP');
const duration = 750;
const easing = 'ease-out';
const id = '6mgbG5qDKoh';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script59 = function()
{
  const target = object('6ZMBQWymHSC');
const duration = 750;
const easing = 'ease-out';
const id = '6AwQV5Ku2VZ';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script60 = function()
{
  const target = object('6UzXPh16UqU');
const duration = 750;
const easing = 'ease-out';
const id = '5c1J1SOnGKC';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script61 = function()
{
  const target = object('6ApaJFhOmfy');
const duration = 750;
const easing = 'ease-out';
const id = '6LSfL2kYmLq';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script62 = function()
{
  const target = object('5iFCRSIfkGQ');
const duration = 750;
const easing = 'ease-out';
const id = '5l6v4MtE5o7';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script63 = function()
{
  const target = object('5ZIDRnulFUa');
const duration = 750;
const easing = 'ease-out';
const id = '6GkFgRQ7oER';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script64 = function()
{
  const target = object('5fTVdaruJeH');
const duration = 750;
const easing = 'ease-out';
const id = '5iK3dMmhN0e';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script65 = function()
{
  const target = object('6hf1C1CCFYN');
const duration = 750;
const easing = 'ease-out';
const id = '69pRgrcBOgp';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script66 = function()
{
  const target = object('6iwg7gxXhD3');
const duration = 750;
const easing = 'ease-out';
const id = '6Itd2V3oipl';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script67 = function()
{
  const target = object('61XmeXntXue');
const duration = 750;
const easing = 'ease-out';
const id = '5yLDguriLSJ';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

};
