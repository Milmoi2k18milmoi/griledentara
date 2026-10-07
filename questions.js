// ============================================================
// BANCA DE ÎNTREBĂRI - 100 grile Morfologie Dentară
// ============================================================
const QUESTIONS = [
  // CURS 1
  { c: "Curs 1", q: "Care din următoarele NU face parte din funcțiile aparatului dento-maxilar?", o: ["Masticația", "Deglutiția", "Respirația", "Fonația"], a: 2 },
  { c: "Curs 1", q: "Câți dinți are dentiția temporară?", o: ["32", "20", "28", "24"], a: 1 },
  { c: "Curs 1", q: "Formula dentară definitivă pe o hemiarcadă este:", o: ["2 incisivi, 1 canin, 2 premolari, 2 molari", "2 incisivi, 1 canin, 2 premolari, 3 molari", "2 incisivi, 1 canin, 3 premolari, 2 molari", "2 incisivi, 2 canini, 2 premolari, 2 molari"], a: 1 },
  { c: "Curs 1", q: "Periodonțiul cuprinde:", o: ["Smalțul și dentina", "Spațiul dintre rădăcină și osul alveolar", "Doar gingia", "Pulpa dentară"], a: 1 },
  { c: "Curs 1", q: "Coletul anatomic reprezintă:", o: ["Linia de inserție a gingiei", "Limita dintre smalț și cement", "Vârful rădăcinii", "Marginea incizală"], a: 1 },
  { c: "Curs 1", q: "Odontonul este format din:", o: ["Doar dintele", "Dintele + aparatul său de susținere", "Doar parodontiul", "Smalț și dentină"], a: 1 },
  { c: "Curs 1", q: "Parodontiul cuprinde:", o: ["Doar periodonțiul", "Periodonțiul + osul alveolar adiacent + mucoasa gingivală", "Doar gingia", "Doar cementul"], a: 1 },
  { c: "Curs 1", q: "Dentiția umană este de tip:", o: ["Monophyodont", "Diphyodont", "Polyphyodont", "Homodont"], a: 1 },
  { c: "Curs 1", q: "Dinții frontali sunt:", o: ["Incisivii și caninii", "Premolarii și molarii", "Doar incisivii", "Doar caninii"], a: 0 },
  { c: "Curs 1", q: "Coroana clinică reprezintă:", o: ["Doar porțiunea acoperită de smalț", "Porțiunea vizibilă în cavitatea bucală", "Porțiunea intraalveolară", "Vârful rădăcinii"], a: 1 },

  // CURS 2
  { c: "Curs 2", q: "Care este cel mai dur țesut din organism?", o: ["Dentina", "Cementul", "Smalțul", "Osul"], a: 2 },
  { c: "Curs 2", q: "Smalțul este compus din:", o: ["95% calcium hidroxiapatită, 4% apă, 1% organice", "70% calcium hidroxiapatită, 12% apă, 18% organice", "65% calcium hidroxiapatită, 12% apă, 23% organice", "50% calcium hidroxiapatită, 25% apă, 25% organice"], a: 0 },
  { c: "Curs 2", q: "Celula specifică pulpei dentare este:", o: ["Ameloblastul", "Odontoblastul", "Cementoblastul", "Osteoblastul"], a: 1 },
  { c: "Curs 2", q: "Dentina terțiară se formează:", o: ["În timpul odontogenezei", "Fiziologic după terminarea odontogenezei", "Ca mecanism de apărare la stimuli patologici", "Doar în perioada embrionară"], a: 2 },
  { c: "Curs 2", q: "Cementul are compoziția:", o: ["95% calcium hidroxiapatită", "70% calcium hidroxiapatită", "65% calcium hidroxiapatită, 23% organice, 12% apă", "50% calcium hidroxiapatită"], a: 2 },
  { c: "Curs 2", q: "Smalțul se sintetizează:", o: ["Toată viața", "Doar în perioada embrionară", "După erupție", "În timpul masticației"], a: 1 },
  { c: "Curs 2", q: "Pulpa dentară are următoarele funcții, EXCEPTÂND:", o: ["Formativă", "Senzitivă", "Nutritivă", "Abrazivă"], a: 3 },
  { c: "Curs 2", q: "Joncțiunea amelo-cementară se poate realiza în:", o: ["2 moduri", "3 moduri", "4 moduri", "5 moduri"], a: 1 },
  { c: "Curs 2", q: "Dentina are compoziția:", o: ["95% anorganic, 4% apă, 1% organic", "70% anorganic, 12% apă, 18% organic", "65% anorganic, 12% apă, 23% organic", "80% anorganic, 10% apă, 10% organic"], a: 1 },
  { c: "Curs 2", q: "Fibrele Tomes se găsesc în:", o: ["Smalț", "Dentina tubulară", "Cement", "Pulpa dentară"], a: 1 },
  { c: "Curs 2", q: "Smalțul are grosimea maximă la:", o: ["Colet", "Vârfurile cuspizilor și marginile incizale", "Joncțiunea smalț-dentină", "Uniform"], a: 1 },
  { c: "Curs 2", q: "Cementul este secretat de:", o: ["Ameloblaste", "Odontoblaste", "Cementoblaști", "Fibroblaști"], a: 2 },
  { c: "Curs 2", q: "Dentina primară are structură:", o: ["Neregulată", "Regulată", "Fără canaliculi", "Amorfă"], a: 1 },
  { c: "Curs 2", q: "Pulpa dentară provine din:", o: ["Ectoderm", "Mezoderm", "Endoderm", "Neuroectoderm"], a: 1 },
  { c: "Curs 2", q: "Smalțul provine din:", o: ["Mezoderm", "Ectoderm", "Endoderm", "Mezenchim"], a: 1 },

  // CURS 3
  { c: "Curs 3", q: "În sistemul FDI, incisivul central superior drept este notat:", o: ["1.1", "2.1", "1.2", "4.1"], a: 0 },
  { c: "Curs 3", q: "În sistemul FDI, molarul 1 inferior stâng este notat:", o: ["3.6", "4.6", "2.6", "1.6"], a: 0 },
  { c: "Curs 3", q: "În sistemul francez, incisivul central superior drept este notat:", o: ["D1", "S1", "d1", "+1"], a: 0 },
  { c: "Curs 3", q: "În sistemul american (Universal), câți dinți sunt numerotați pentru dentiția permanentă?", o: ["20", "28", "32", "36"], a: 2 },
  { c: "Curs 3", q: "În sistemul FDI, hemiarcadele temporare sunt notate cu cifrele:", o: ["1-4", "5-8", "6-9", "0-3"], a: 1 },
  { c: "Curs 3", q: "În sistemul aritmetic, arcada maxilară este desemnată cu:", o: ["Minus (-)", "Plus (+)", "Litera D", "Litera S"], a: 1 },
  { c: "Curs 3", q: "Sistemul Palmer folosește pentru notare:", o: ["Cifre arabe", "Cifre romane", "Simboluri unghiulare", "Litere"], a: 2 },
  { c: "Curs 3", q: "În sistemul FDI, molarul 2 superior stâng temporar este notat:", o: ["65", "75", "55", "85"], a: 0 },
  { c: "Curs 3", q: "În sistemul francez, molarul de minte inferior drept este notat:", o: ["d8", "D8", "s8", "S8"], a: 0 },
  { c: "Curs 3", q: "Câte elemente comune au toate sistemele de notare?", o: ["2", "3", "4", "5"], a: 2 },

  // CURS 4
  { c: "Curs 4", q: "Incisivul central maxilar erupe la vârsta de:", o: ["6 ani", "7 ani și 6 luni", "8 ani", "9 ani"], a: 1 },
  { c: "Curs 4", q: "Care este cel mai voluminos incisiv?", o: ["Incisivul central inferior", "Incisivul lateral superior", "Incisivul central superior", "Incisivul lateral inferior"], a: 2 },
  { c: "Curs 4", q: "Cingulumul este:", o: ["O creastă vestibulară", "O formațiune hemisferică pe fața palatinală", "Marginea incizală", "Un șanț interlobular"], a: 1 },
  { c: "Curs 4", q: "Caninul superior erupe la vârsta de:", o: ["8 ani", "9 ani", "11-12 ani", "13 ani"], a: 2 },
  { c: "Curs 4", q: "Care dinte are cea mai lungă rădăcină?", o: ["Incisivul central superior", "Caninul superior", "Incisivul lateral superior", "Caninul inferior"], a: 1 },
  { c: "Curs 4", q: "Incisivul lateral superior se deosebește de cel central prin:", o: ["Volum mai mare", "Margine incizală oblic ascendentă", "Cingulum absent", "O rădăcină mai groasă"], a: 1 },
  { c: "Curs 4", q: "Foramen caecum se poate găsi pe fața palatinală a:", o: ["Incisivului central superior", "Incisivului lateral superior", "Caninului superior", "Incisivului central inferior"], a: 1 },
  { c: "Curs 4", q: "Unghiul mezio-incizal al incisivului central superior este:", o: ["Rotunjit, >90°", "Bine exprimat, aproximativ 90°", "Ascuțit, <90°", "Absent"], a: 1 },
  { c: "Curs 4", q: "Creasta esențială de smalț pe fața vestibulară a caninului:", o: ["Nu există", "Susține cuspidul caninului", "Este un șanț", "Se găsește doar pe fața palatinală"], a: 1 },
  { c: "Curs 4", q: "Culoarea coroanei incisivilor superiori este repartizată pe:", o: ["2 zone", "3 zone", "4 zone", "O zonă uniformă"], a: 1 },
  { c: "Curs 4", q: "Incisivul central superior are lungimea totală de:", o: ["18-19 mm", "22-23 mm", "26-27 mm", "30 mm"], a: 1 },
  { c: "Curs 4", q: "Rădăcina incisivului central superior pe secțiune are forma:", o: ["Circulară", "Triunghiulară", "Ovală", "Pătrată"], a: 1 },
  { c: "Curs 4", q: "Caninul superior se implantează cu axul înclinat spre palatinal:", o: ["2-3°", "5-7°", "10-12°", "15°"], a: 1 },
  { c: "Curs 4", q: "Incisivul lateral superior are culoarea repartizată pe:", o: ["2 zone egale", "3 zone inegale", "4 zone", "Uniform"], a: 1 },
  { c: "Curs 4", q: "Cea mai redusă implantare de pe arcada maxilară o are:", o: ["Incisivul central superior", "Incisivul lateral superior", "Caninul superior", "Premolarul 1 superior"], a: 1 },

  // CURS 5
  { c: "Curs 5", q: "Incisivul central inferior erupe la vârsta de:", o: ["5 ani", "6 ani", "7 ani", "8 ani"], a: 1 },
  { c: "Curs 5", q: "Incisivul central inferior are:", o: ["Cel mai mare volum dintre toți dinții", "Cel mai redus volum dintre toți dinții", "Volum egal cu incisivul lateral", "Volum mai mare decât caninul"], a: 1 },
  { c: "Curs 5", q: "Caninul mandibular erupe la vârsta de:", o: ["7 ani", "8 ani", "9 ani", "10 ani"], a: 2 },
  { c: "Curs 5", q: "Relieful lingual al incisivilor inferiori este:", o: ["Foarte proeminent", "Foarte șters", "Identic cu cel vestibular", "Absent"], a: 1 },
  { c: "Curs 5", q: "Raportul între lungimea și lățimea coroanei incisivilor inferiori este de:", o: ["1/1", "2/1", "3/1", "1/2"], a: 1 },
  { c: "Curs 5", q: "Incisivul lateral inferior se deosebește de cel central prin:", o: ["Volum mai mic", "Unghiul DI mai rotunjit", "Unghiul MI bine exprimat", "Absența cingulumului"], a: 2 },
  { c: "Curs 5", q: "Caninul mandibular are o lungime de aproximativ:", o: ["20 mm", "22 mm", "25 mm", "28 mm"], a: 2 },
  { c: "Curs 5", q: "Rădăcina incisivului central inferior pe secțiune are forma:", o: ["Triunghiulară", "Circulară", "De pișcot/clepsidră", "Pătrată"], a: 2 },
  { c: "Curs 5", q: "Vârful rădăcinii incisivului central inferior este orientat spre:", o: ["Lingual", "Vestibul", "Mezial", "Distal"], a: 1 },
  { c: "Curs 5", q: "Caninul inferior are de obicei:", o: ["2 rădăcini", "1 rădăcină și 1 canal", "3 rădăcini", "2 canale"], a: 1 },

  // CURS 6
  { c: "Curs 6", q: "Supraacoperirea (overbite) reprezintă:", o: ["Distanța verticală dintre marginile incizale", "Distanța orizontală", "Unghiul dintre arcade", "Contactul caninilor"], a: 0 },
  { c: "Curs 6", q: "Surplombul (overjet) reprezintă:", o: ["Distanța verticală", "Distanța în plan medio-sagital", "Grosimea smalțului", "Înălțimea cuspizilor"], a: 1 },
  { c: "Curs 6", q: "Raportul spalidodont corespunde unei acoperiri de până la:", o: ["1 mm", "3 mm", "5 mm", "7 mm"], a: 1 },
  { c: "Curs 6", q: "Raportul labiodont prezintă:", o: ["Acoperire = 0, surplomb = 0", "Acoperire > 3 mm", "Acoperire negativă", "Surplomb > 5 mm"], a: 0 },
  { c: "Curs 6", q: "Ocluzia inversă frontală prezintă:", o: ["Acoperire = 0, surplomb pozitiv", "Acoperire = 0, surplomb negativ", "Acoperire > 3 mm", "Surplomb = 0"], a: 1 },
  { c: "Curs 6", q: "Ghidajul incisiv este constituit de:", o: ["Fețele vestibulare ale incisivilor inferiori", "Fețele palatinale ale incisivilor centrali superiori", "Caninii superiori", "Premolarii"], a: 1 },
  { c: "Curs 6", q: "Ocluzia adâncă acoperită are:", o: ["Surplomb zero", "Surplomb mare", "Acoperire zero", "Surplomb negativ"], a: 0 },
  { c: "Curs 6", q: "Desocluzia imediată a dinților laterali este determinată de:", o: ["Acoperire
