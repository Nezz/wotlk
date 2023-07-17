import{d7 as t,Q as e,e as a,f as i,f3 as s,f4 as n,at as r,as as l,J as o,b_ as d,c1 as f,c3 as p,aq as m,b3 as c,G as S,ar as u,bk as h,A as g,ap as w,K as I,v as b}from"./detailed_results-af0faccd.chunk.js";import{B as P,m as T,b as D,c as O,I as v,v as y,T as F}from"./individual_sim_ui-075d2254.chunk.js";const H={name:"Standard",data:t.create({talentsString:"05332031013005023310001-005551002020152-00502",glyphs:e.create({major1:a.GlyphOfSmite,major2:a.GlyphOfShadowWordPain,major3:a.GlyphOfShadowWordDeath,minor1:i.GlyphOfFortitude,minor2:i.GlyphOfShadowfiend,minor3:i.GlyphOfFading})})},M=s.create({useDevouringPlague:!0,useShadowWordDeath:!1,useMindBlast:!1}),W=n.create({useInnerFire:!0,useShadowfiend:!0,powerInfusionTarget:r.create({targetIndex:l})}),C=o.create({flask:d.FlaskOfTheFrostWyrm,food:f.FoodFishFeast,defaultPotion:p.RunicManaInjector,prepopPotion:p.PotionOfWildMagic}),B=m.create({giftOfTheWild:c.TristateEffectImproved,arcaneBrilliance:!0,divineSpirit:!0,totemOfWrath:!0,moonkinAura:c.TristateEffectImproved,wrathOfAirTotem:!0,sanctifiedRetribution:!0,bloodlust:!0}),x=S.create({blessingOfKings:!0,blessingOfWisdom:c.TristateEffectImproved,blessingOfMight:c.TristateEffectImproved,vampiricTouch:!0}),j=u.create({faerieFire:c.TristateEffectImproved,ebonPlaguebringer:!0,heartOfTheCrusader:!0,judgementOfWisdom:!0}),k={name:"Preraid Preset",tooltip:P,gear:h.fromJsonString('{"items": [\n\t\t{"id":42553,"enchant":3820,"gems":[41333,40014]},\n\t\t{"id":40680},\n\t\t{"id":34210,"enchant":3810,"gems":[42144,40014]},\n\t\t{"id":41610,"enchant":3859},\n\t\t{"id":43792,"enchant":1144,"gems":[42144,40049]},\n\t\t{"id":37361,"enchant":2332,"gems":[0]},\n\t\t{"id":39285,"enchant":3246,"gems":[40014,0]},\n\t\t{"id":40696,"gems":[40049,39998]},\n\t\t{"id":37854,"enchant":3719},\n\t\t{"id":44202,"enchant":3826,"gems":[40026]},\n\t\t{"id":43253,"gems":[42144]},\n\t\t{"id":39250},\n\t\t{"id":37835},\n\t\t{"id":37873},\n\t\t{"id":41384,"enchant":3834},\n\t\t{"id":40698},\n\t\t{"id":37177}\n\t]}')},N={name:"P1 Preset",tooltip:P,gear:h.fromJsonString('{"items": [\n\t\t{"id":40562,"enchant":3820,"gems":[41333,42144]},\n\t\t{"id":44661,"gems":[39998]},\n\t\t{"id":40459,"enchant":3810,"gems":[42144]},\n\t\t{"id":44005,"enchant":3859,"gems":[42144]},\n\t\t{"id":40234,"enchant":1144,"gems":[39998,39998]},\n\t\t{"id":44008,"enchant":2332,"gems":[39998,0]},\n\t\t{"id":40454,"enchant":3604,"gems":[40049,0]},\n\t\t{"id":40561,"enchant":3601,"gems":[39998]},\n\t\t{"id":40560,"enchant":3719},\n\t\t{"id":40558,"enchant":3826},\n\t\t{"id":40719},\n\t\t{"id":40399},\n\t\t{"id":40255},\n\t\t{"id":40432},\n\t\t{"id":40395,"enchant":3834},\n\t\t{"id":40273},\n\t\t{"id":39712}\n\t]}')},G=T({fieldName:"powerInfusionTarget",id:g.fromSpellId(10060),extraCssClasses:["within-raid-sim-hide"],getValue:t=>t.getSpecOptions().powerInfusionTarget?.targetIndex!=l,setValue:(t,e,a)=>{const i=e.getSpecOptions();i.powerInfusionTarget=r.create({targetIndex:a?0:l}),e.setSpecOptions(t,i)}}),E=T({fieldName:"useInnerFire",id:g.fromSpellId(48168)}),U=T({fieldName:"useShadowfiend",id:g.fromSpellId(34433)}),A={inputs:[D({fieldName:"useDevouringPlague",label:"Use Devouring Plague",labelTooltip:"Use Devouring Plague whenever its not active."}),D({fieldName:"useShadowWordDeath",label:"Use Shadow Word: Death",labelTooltip:"Use Shadow Word: Death whenever off CD."}),D({fieldName:"useMindBlast",label:"Use Mind Blast",labelTooltip:"Use Mind Blast whenever off CD."}),D({fieldName:"memeDream",label:"Meme Dream",labelTooltip:"Assumes 2nd Smite Priest in raid, so just spams HF + Smite with permanent HF uptime.",extraCssClasses:["within-raid-sim-hide"]}),O({fieldName:"allowedHolyFireDelayMs",label:"Allowed Delay for HF",labelTooltip:"Time, in milliseconds, the player is allowed to wait for Holy Fire if it is about to come off CD."})]};class _ extends v{constructor(t,e){super(t,e,{cssClass:"smite-priest-sim-ui",cssScheme:"priest",knownIssues:[],epStats:[w.StatIntellect,w.StatSpirit,w.StatSpellPower,w.StatSpellHit,w.StatSpellCrit,w.StatSpellHaste,w.StatMP5],epReferenceStat:w.StatSpellPower,displayStats:[w.StatHealth,w.StatStamina,w.StatIntellect,w.StatSpirit,w.StatSpellPower,w.StatSpellHit,w.StatSpellCrit,w.StatSpellHaste,w.StatMP5],modifyDisplayStats:t=>{let e=new I;return e=e.addStat(w.StatSpellHit,1*t.getTalents().shadowFocus*y),{talents:e}},defaults:{gear:N.gear,epWeights:I.fromMap({[w.StatIntellect]:.38,[w.StatSpirit]:.38,[w.StatSpellPower]:1,[w.StatSpellHit]:1.65,[w.StatSpellCrit]:.32,[w.StatSpellHaste]:.78,[w.StatMP5]:.35}),consumes:C,rotation:M,talents:H.data,specOptions:W,raidBuffs:B,partyBuffs:b.create({}),individualBuffs:x,debuffs:j},playerIconInputs:[G,E,U],rotationInputs:A,includeBuffDebuffInputs:[],excludeBuffDebuffInputs:[],otherInputs:{inputs:[F]},encounterPicker:{showExecuteProportion:!1},presets:{talents:[H],gear:[k,N]}})}}export{M as D,N as P,_ as S,H as a,W as b,C as c};
//# sourceMappingURL=sim-7f4065d5.chunk.js.map
