export type Screen = 'home'|'play'|'practice'|'multiplayer'|'match'|'skills'|'shooting'|'goalkeeper'|'team'|'coach'|'progress'|'settings';
export const nav: {id:Screen; label:string; icon:string; sub:string}[] = [
  {id:'play',label:'Play',icon:'▶',sub:'Start a match'},{id:'practice',label:'Practice',icon:'◎',sub:'Sharpen your game'},
  {id:'multiplayer',label:'Multiplayer',icon:'⚡',sub:'Trick-shot challenge'},{id:'team',label:'Team',icon:'♜',sub:'Build your club'},
  {id:'skills',label:'Skills',icon:'✦',sub:'Equip your moves'},{id:'shooting',label:'Locker',icon:'◈',sub:'Shots & gear'},
  {id:'progress',label:'Progress',icon:'▲',sub:'Rank & rewards'},{id:'settings',label:'Settings',icon:'⚙',sub:'Tune your experience'}
];
export const skills = [
  ['Maradona Turn','Epic','Spin through pressure','unlocked'],['Scissors','Rare','Feint left or right','unlocked'],['Elastico','Legendary','Explosive outside-inside touch','unlocked'],
  ['Scoop Over Defender','Epic','Lift the ball over a challenge','unlocked'],['Rainbow Flick','Legendary','Flick overhead with flair','locked'],['Cut','Common','Quick direction change','unlocked'],
  ['Pull Back','Common','Drag away from a defender','unlocked'],['L Turn','Rare','Sharp L-shaped escape','locked'],['Outside Behind-Leg Touch','Epic','Deceptive trailing touch','locked'],['Nutmeg','Rare','Play through an opponent','unlocked']
] as const;
export const teams = ['Solar City FC','Northwind United','Ember Athletic','Tidebreak Rovers'];
export const players = [{name:'Nova Cruz',pos:'ST',ovr:84},{name:'Milo Vance',pos:'CAM',ovr:81},{name:'Zara Quinn',pos:'CB',ovr:79},{name:'Kai Rowan',pos:'GK',ovr:82}];
export const matchResults = [['Solar City','3–1','Ember Athletic','W'],['Northwind','2–2','Solar City','D'],['Solar City','1–0','Tidebreak','W']];
export const shotTypes = [
  ['Normal Shot','Reliable and balanced','ready'],['Power Shot','Maximum force, less control','ready'],['Curved Free Kick','Bend around the wall','free kick only'],
  ['Pass Into Goal','Precision over power','ready'],['Chip Shot','Lift over the keeper','ready'],['Volley','Ball must be airborne','airborne'],['Bicycle Kick','Airborne and behind player','behind player']
] as const;
