let { bts, exo, got7, wannaone, bap, gfriend, twice, redvelvet, apink, mamamoo } = require('./count')


let filter = function(tw) {

  var text = tw.text;
  if (text.includes('#뷔')) (bts['1'])++;
  else if(text.includes('#슈가') || text.includes('#윤기')) (bts['2'])++;
  else if(text.includes('#제이홉') || text.includes('#정호석')) (bts['3'])++;
  else if(text.includes('#정국')) (bts['4'])++;
  else if(text.includes('#진')) (bts['5'])++;
  else if(text.includes('#지민')) (bts['6'])++;
  else if(text.includes('#남준')) (bts['7'])++;

  if(text.includes('#세훈') ) (exo['8'])++;
  else if(text.includes('#레이') ) (exo['9'])++;
  else if(text.includes('#첸') || text.includes('#첸백시') ) (exo['10'])++;
  else if(text.includes('#찬열')) (exo['11'])++;
  else if(text.includes('#수호')) (exo['12'])++;
  else if(text.includes('#백현') || text.includes('#첸백시')) (exo['13'])++;
  else if(text.includes('#디오') || text.includes('#경수')) (exo['14'])++;
  else if(text.includes('#카이')) (exo['15'])++;
  else if(text.includes('#시우민') || text.includes('#첸백시')) (exo['16'])++;

  if(text.includes('#뱀뱀')) (got7['17'])++;
  else if(text.includes('#진영') && (text.includes('got7') || text.includes('갓세븐')) )(got7['18'])++;
  else if(text.includes('#영재') && (text.includes('got7') || text.includes('갓세븐')) ) (got7['19'])++;
  else if(text.includes('#잭슨')) (got7['20'])++;
  else if(text.includes('#유겸')) (got7['21'])++;
  else if(text.includes('#JB') && (text.includes('got7') || text.includes('갓세븐'))) (got7['22'])++;
  else if(text.includes('#마크')) (got7['23'])++;

  if(text.includes('#강다니엘')) (wannaone['24'])++;
  else if(text.includes('#하성운')) (wannaone['25'])++;
  else if(text.includes('#김재환')) (wannaone['26'])++;
  else if(text.includes('#박지훈')) (wannaone['27'])++;
  else if(text.includes('#이대휘')) (wannaone['28'])++;
  else if(text.includes('#옹성우')) (wannaone['29'])++;
  else if(text.includes('#라이관린')) (wannaone['30'])++;
  else if(text.includes('#배진영')) (wannaone['31'])++;
  else if(text.includes('#윤지성')) (wannaone['32'])++;
  else if(text.includes('#황민현')) (wannaone['33'])++;
  else if(text.includes('#박우진')) (wannaone['34'])++;

  if(text.includes('#젤로')) (bap['35'])++
  else if(text.includes('#방용국')) (bap['36'])++
  else if(text.includes('#힘찬')) (bap['37'])++
  else if(text.includes('#정대현')) (bap['38'])++
  else if(text.includes('#유영재')) (bap['39'])++
  else if(text.includes('#문종업')) (bap['40'])++

  if(text.includes('#예린')) (gfriend['41'])++
  else if(text.includes('#신비')) (gfriend['42'])++
  else if(text.includes('#소원')) (gfriend['43'])++
  else if(text.includes('#은하')) (gfriend['44'])++
  else if(text.includes('#유주')) (gfriend['45'])++
  else if(text.includes('#엄지')) (gfriend['46'])++

  if(text.includes('#쯔위')) (twice['47'])++
  else if(text.includes('#나연')) (twice['48'])++
  else if(text.includes('#정연')) (twice['49'])++
  else if(text.includes('#사나')) (twice['50'])++
  else if(text.includes('#지효')) (twice['51'])++
  else if(text.includes('#채영')) (twice['52'])++
  else if(text.includes('#모모')) (twice['53'])++
  else if(text.includes('#다현')) (twice['54'])++
  else if(text.includes('#미나')) (twice['55'])++

  if(text.includes('#아이린')) (redvelvet['56'])++
  else if(text.includes('#예리')) (redvelvet['57'])++
  else if(text.includes('#슬기')) (redvelvet['58'])++
  else if(text.includes('#조이')) (redvelvet['59'])++
  else if(text.includes('#웬디')) (redvelvet['60'])++

  if(text.includes('#정은지')) (apink['61'])++
  else if(text.includes('#박초롱')) (apink['62'])++
  else if(text.includes('#손나은')) (apink['63'])++
  else if(text.includes('#오하영')) (apink['64'])++
  else if(text.includes('#윤보미')) (apink['65'])++
  else if(text.includes('#김남주')) (apink['66'])++

  if(text.includes('#문별')) (mamamoo['67'])++
  else if(text.includes('#휘인')) (mamamoo['68'])++
  else if(text.includes('#화사')) (mamamoo['69'])++
  else if(text.includes('#솔라')) (mamamoo['70'])++
}

module.exports = filter;
