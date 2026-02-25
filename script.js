const REFS = [
  {
    region: "Americas",
    col: "#c0622a",
    refs: [
      {
        type: "Book",
        title: "The Ancient Maya",
        author: "Robert J. Sharer & Loa P. Traxler (2006)",
        note: "The definitive scholarly survey of Maya civilisation across all periods.",
        url: "https://www.sup.org/books/title/?id=2421",
      },
      {
        type: "Book",
        title: "The Aztecs: A Very Short Introduction",
        author: "David Carrasco (2011)",
        note: "Concise and authoritative overview of Aztec society, religion, and empire.",
        url: "https://global.oup.com/academic/product/the-aztecs-a-very-short-introduction-9780195377492",
      },
      {
        type: "Book",
        title: "The Incas",
        author: "Terence N. D'Altroy (2014)",
        note: "Comprehensive account of Inca state organisation, economy, and culture.",
        url: "https://www.wiley.com/en-gb/The+Incas%2C+2nd+Edition-p-9781444331158",
      },
      {
        type: "Book",
        title: "The Olmecs: America's First Civilization",
        author: "Richard A. Diehl (2004)",
        note: "Standard reference on the Olmec heartland and their broader cultural influence.",
        url: "https://www.amazon.com/Olmecs-Americas-First-Civilization/dp/0500285039",
      },
      {
        type: "Web",
        title: "Dumbarton Oaks — Pre-Columbian Studies",
        author: "Harvard University",
        note: "Peer-reviewed research and digital library covering all Pre-Columbian cultures.",
        url: "https://www.doaks.org/research/pre-columbian",
      },
    ],
  },
  {
    region: "Europe",
    col: "#456080",
    refs: [
      {
        type: "Book",
        title: "The Civilization of the Renaissance in Italy",
        author: "Jacob Burckhardt (1860)",
        note: "The foundational text that established the concept of the Renaissance as a historical period.",
        url: "https://www.gutenberg.org/ebooks/2074",
      },
      {
        type: "Book",
        title: "The Origins of the Industrial Revolution",
        author: "T.S. Ashton (1948)",
        note: "Concise classic on the social and economic preconditions for British industrialisation.",
        url: "https://www.amazon.com/Industrial-Revolution-1760-1830-T-S-Ashton/dp/0192830198",
      },
      {
        type: "Book",
        title: "The Wealth of Nations",
        author: "Adam Smith (1776)",
        note: "Written at the dawn of the Industrial Revolution; foundational text of modern economics.",
        url: "https://www.gutenberg.org/ebooks/3300",
      },
    ],
  },
  {
    region: "Mediterranean",
    col: "#d4a832",
    refs: [
      {
        type: "Book",
        title: "The Greeks: A Portrait of Self and Others",
        author: "Paul Cartledge (2002)",
        note: "Accessible yet rigorous exploration of Greek identity, politics, and society.",
        url: "https://global.oup.com/academic/product/the-greeks-9780192802361",
      },
      {
        type: "Book",
        title: "SPQR: A History of Ancient Rome",
        author: "Mary Beard (2015)",
        note: "Acclaimed modern history questioning traditional narratives of Rome's rise.",
        url: "https://www.profilebooks.com/work/spqr/",
      },
      {
        type: "Book",
        title: "The Fall of the Roman Empire",
        author: "Peter Heather (2006)",
        note: "Argues for external pressures — Huns and Goths — as the primary cause of Rome's collapse.",
        url: "https://www.panmacmillan.com/authors/peter-heather/the-fall-of-the-roman-empire/9780330491341",
      },
      {
        type: "Book",
        title: "Byzantium: The Surprising Life of a Medieval Empire",
        author: "Judith Herrin (2007)",
        note: "Engagingly written introduction to the Byzantine world and its lasting legacy.",
        url: "https://press.princeton.edu/books/paperback/9780691143682/byzantium",
      },
      {
        type: "Web",
        title: "Perseus Digital Library — Greek & Roman Texts",
        author: "Tufts University",
        note: "Free access to primary Greek and Roman sources in original languages and translation.",
        url: "https://www.perseus.tufts.edu",
      },
    ],
  },
  {
    region: "Mesopotamia & West Asia",
    col: "#1a5f7a",
    refs: [
      {
        type: "Book",
        title: "The Sumerians: Their History, Culture, and Character",
        author: "Samuel Noah Kramer (1963)",
        note: "Classic introduction to Sumerian civilisation by one of the field's founding scholars.",
        url: "https://press.uchicago.edu/ucp/books/book/chicago/S/bo3614421.html",
      },
      {
        type: "Book",
        title: "Babylon: Mesopotamia and the Birth of Civilization",
        author: "Paul Kriwaczek (2010)",
        note: "Sweeping narrative of Mesopotamian history from the earliest cities to the fall of Babylon.",
        url: "https://www.amazon.com/Babylon-Mesopotamia-Birth-Civilization/dp/1250054168",
      },
      {
        type: "Book",
        title: "The Persians",
        author: "Geoffrey Parker & Brenda Parker (2008)",
        note: "Readable overview of Achaemenid, Parthian, and Sasanid Persian civilisations.",
        url: "https://www.amazon.com/Persians-Lost-Civilizations/dp/1861894147",
      },
      {
        type: "Book",
        title: "The House of Wisdom",
        author: "Jim Al-Khalili (2010)",
        note: "Traces the scientific achievements of the Islamic Golden Age and their transmission to Europe.",
        url: "https://www.penguin.co.uk/books/182597/the-house-of-wisdom-by-al-khalili-jim/9780141041858",
      },
      {
        type: "Book",
        title: "Lord of the Horizons: A History of the Ottoman Empire",
        author: "Jason Goodwin (1998)",
        note: "Vivid narrative history of the Ottoman world from rise to dissolution.",
        url: "https://www.amazon.com/Lords-Horizons-History-Ottoman-Empire/dp/0312420668",
      },
      {
        type: "Web",
        title: "Electronic Text Corpus of Sumerian Literature",
        author: "University of Oxford",
        note: "Full translations of Sumerian literary texts including the Epic of Gilgamesh.",
        url: "https://etcsl.orinst.ox.ac.uk",
      },
    ],
  },
  {
    region: "Africa",
    col: "#8b0000",
    refs: [
      {
        type: "Book",
        title: "The Oxford History of Ancient Egypt",
        author: "Ian Shaw, ed. (2000)",
        note: "Multi-author scholarly reference covering all periods of ancient Egyptian history.",
        url: "https://global.oup.com/academic/product/the-oxford-history-of-ancient-egypt-9780192804587",
      },
      {
        type: "Book",
        title: "Black Kingdoms of the Nile (Nubia)",
        author: "Vivian Davies & Renée Friedman (1998)",
        note: "Explores the sophisticated cultures of Nubia, including the Kingdom of Kush.",
        url: "https://www.amazon.com/Nubia-Ancient-Kingdoms-Africa-Davies/dp/0714109460",
      },
      {
        type: "Book",
        title: "The African Past: Chronicles from Antiquity to Modern Times",
        author: "Basil Davidson (1964)",
        note: "Pioneering work covering Carthage, Axum, the Mali Empire, and African history broadly.",
        url: "https://www.amazon.com/African-Past-Chronicles-Antiquity-Modern/dp/0316174319",
      },
      {
        type: "Book",
        title: "Mansa Musa and the Empire of Mali",
        author: "P. James Oliver (2013)",
        note: "Account of the Mali Empire and its ruler, reportedly the wealthiest person in history.",
        url: "https://www.amazon.com/Mansa-Musa-Empire-P-James-Oliver/dp/1477714979",
      },
      {
        type: "Web",
        title: "British Museum — Ancient Egypt Collection",
        author: "British Museum",
        note: "Extensive digitised collection with scholarly catalogue entries for Egyptian artefacts.",
        url: "https://www.britishmuseum.org/collection/egypt",
      },
    ],
  },
  {
    region: "South Asia",
    col: "#7d3c98",
    refs: [
      {
        type: "Book",
        title: "The Indus Civilization: A Contemporary Perspective",
        author: "Gregory L. Possehl (2002)",
        note: "The most thorough modern assessment of Harappan archaeology and society.",
        url: "https://rowman.com/ISBN/9780759101722",
      },
      {
        type: "Book",
        title: "Ashoka: The Search for India's Lost Emperor",
        author: "Charles Allen (2012)",
        note: "Compelling narrative of the Mauryan emperor and the archaeological detective work to find him.",
        url: "https://www.abacusbooks.co.uk/ashoka/charles-allen/9780349123776",
      },
      {
        type: "Book",
        title: "The Gupta Empire",
        author: "Radhakumud Mookerji (1959)",
        note: "Classic scholarly account of the Gupta golden age in literature, science, and mathematics.",
        url: "https://www.amazon.com/Gupta-Empire-Radhakumud-Mookerji/dp/8120800079",
      },
      {
        type: "Book",
        title: "The Mughal Empire",
        author: "John F. Richards (1993)",
        note: "Part of the New Cambridge History of India; authoritative political and economic history.",
        url: "https://www.cambridge.org/gb/universitypress/subjects/history/south-asian-history/mughal-empire",
      },
      {
        type: "Web",
        title: "AIIS Digital South Asia Library",
        author: "University of Chicago",
        note: "Primary sources, maps, and scholarly materials on South Asian history from the Indus Valley to modern India.",
        url: "https://dsal.uchicago.edu",
      },
    ],
  },
  {
    region: "East Asia",
    col: "#2d5016",
    refs: [
      {
        type: "Book",
        title: "The Early Chinese Empires: Qin and Han",
        author: "Mark Edward Lewis (2007)",
        note: "Part of the Harvard History of Imperial China series; covers the Han Dynasty in depth.",
        url: "https://www.hup.harvard.edu/books/9780674057340",
      },
      {
        type: "Book",
        title: "China's Golden Age: Everyday Life in the Tang Dynasty",
        author: "Charles Benn (2002)",
        note: "Rich cultural history of Tang society, commerce, and cosmopolitanism.",
        url: "https://global.oup.com/academic/product/chinas-golden-age-9780195171587",
      },
      {
        type: "Book",
        title: "The Age of Confucian Rule: The Song Transformation of China",
        author: "Dieter Kuhn (2009)",
        note: "Detailed exploration of Song Dynasty innovations in technology, governance, and culture.",
        url: "https://www.hup.harvard.edu/books/9780674031432",
      },
      {
        type: "Book",
        title: "Genghis Khan and the Making of the Modern World",
        author: "Jack Weatherford (2004)",
        note: "Revisionist account of the Mongol Empire's role in accelerating global exchange.",
        url: "https://www.penguinrandomhouse.com/books/90742/genghis-khan-and-the-making-of-the-modern-world-by-jack-weatherford/",
      },
      {
        type: "Book",
        title: "The Bronze Age of China",
        author: "Wen Fong, ed. (1980)",
        note: "Landmark exhibition catalogue on Shang and Zhou bronzes; a reference for early Chinese civilisation.",
        url: "https://www.amazon.com/Great-Bronze-Age-China-Exhibition/dp/0870993453",
      },
      {
        type: "Web",
        title: "Asia for Educators — Columbia University",
        author: "Columbia University",
        note: "Curriculum materials and scholarly resources on Chinese and Asian history from the Shang through the modern era.",
        url: "https://afe.easia.columbia.edu",
      },
    ],
  },
];

const REGIONS = [
  { id: "americas", label: "Americas", col: "#c0622a" },
  { id: "europe", label: "Europe", col: "#456080" },
  { id: "mediterranean", label: "Mediterranean &\nClassical", col: "#d4a832" },
  {
    id: "neareast",
    label: "Mesopotamia &\nWest Asia",
    col: "#1a5f7a",
  },
  { id: "africa", label: "Africa", col: "#8b0000" },
  { id: "southasia", label: "South Asia", col: "#7d3c98" },
  { id: "eastasia", label: "East Asia", col: "#2d5016" },
];

const CIVS = [
  {
    region: "americas",
    name: "Olmec",
    start: -1500,
    end: -400,
    desc: 'The "mother culture" of Mesoamerica. Produced colossal stone heads, the earliest Mesoamerican writing, and the Long Count calendar later adopted by the Maya.',
    tags: ["Sculpture", "Calendar", "Trade"],
    refs: [
      {
        title: "The Olmecs: America's First Civilization",
        author: "Richard A. Diehl",
        url: "https://www.amazon.com/Olmecs-Americas-First-Civilization/dp/0500285039",
      },
      {
        title: "Dumbarton Oaks — Pre-Columbian Studies",
        author: "Harvard University",
        url: "https://www.doaks.org/research/pre-columbian",
      },
    ],
  },
  {
    region: "americas",
    name: "Maya Classic",
    start: -2000,
    end: 900,
    desc: "Sophisticated city-states with their own writing system, precise astronomical calendar, mathematical zero, and monumental jungle pyramids.",
    tags: ["Astronomy", "Writing", "Mathematics", "Architecture"],
    refs: [
      {
        title: "The Ancient Maya",
        author: "Sharer & Traxler",
        url: "https://www.sup.org/books/title/?id=2421",
      },
      {
        title: "Dumbarton Oaks — Pre-Columbian Studies",
        author: "Harvard University",
        url: "https://www.doaks.org/research/pre-columbian",
      },
    ],
  },
  {
    region: "americas",
    name: "Tiwanaku",
    start: 300,
    end: 1000,
    desc: "Andean civilisation famed for monumental stone architecture at 3,800 m altitude, raised-field agriculture, and wide Andean trade networks.",
    tags: ["Architecture", "Agriculture", "Trade"],
    refs: [
      {
        title: "Dumbarton Oaks — Pre-Columbian Studies",
        author: "Harvard University",
        url: "https://www.doaks.org/research/pre-columbian",
      },
    ],
  },
  {
    region: "americas",
    name: "Aztec Empire",
    start: 1300,
    end: 1521,
    desc: "Tenochtitlán was among the largest cities on Earth (~200,000 people). Advanced agriculture, astronomy, tribute empire, and sophisticated governance.",
    tags: ["Urban Planning", "Astronomy", "Governance"],
    refs: [
      {
        title: "The Aztecs: A Very Short Introduction",
        author: "David Carrasco",
        url: "https://global.oup.com/academic/product/the-aztecs-a-very-short-introduction-9780195377492",
      },
      {
        title: "Dumbarton Oaks — Pre-Columbian Studies",
        author: "Harvard University",
        url: "https://www.doaks.org/research/pre-columbian",
      },
    ],
  },
  {
    region: "americas",
    name: "Inca Empire",
    start: 1200,
    end: 1533,
    desc: "Without writing or the wheel, the Inca built 40,000 km of roads, advanced terraced agriculture, extraordinary masonry, and administered a vast empire via quipus.",
    tags: ["Engineering", "Agriculture", "Administration"],
    refs: [
      {
        title: "The Incas",
        author: "Terence N. D'Altroy",
        url: "https://www.wiley.com/en-gb/The+Incas%2C+2nd+Edition-p-9781444331158",
      },
    ],
  },
  {
    region: "mediterranean",
    name: "Minoan",
    start: -2700,
    end: -1100,
    desc: "Europe's first major civilisation: a Bronze Age maritime culture on Crete with sophisticated frescoes, Linear A writing, indoor plumbing, and wide Mediterranean trade.",
    tags: ["Maritime", "Art", "Trade", "Writing"],
    refs: [
      {
        title: "Perseus Digital Library",
        author: "Tufts University",
        url: "https://www.perseus.tufts.edu",
      },
    ],
  },
  {
    region: "mediterranean",
    name: "Classical Greece",
    start: -800,
    end: -146,
    desc: "Philosophy, democracy, geometry, logic, and drama. Aristotle, Plato, Euclid, and Archimedes shaped Western thought for two thousand years.",
    tags: ["Philosophy", "Democracy", "Science", "Arts"],
    refs: [
      {
        title: "The Greeks: A Portrait of Self and Others",
        author: "Paul Cartledge",
        url: "https://global.oup.com/academic/product/the-greeks-9780192802361",
      },
      {
        title: "Perseus Digital Library",
        author: "Tufts University",
        url: "https://www.perseus.tufts.edu",
      },
    ],
  },
  {
    region: "mediterranean",
    name: "Roman Empire",
    start: -27,
    end: 476,
    desc: "Aqueducts, roads, concrete, codified law — a cosmopolitan culture spanning three continents, the foundation of modern Western civilisation.",
    tags: ["Engineering", "Law", "Architecture", "Governance"],
    refs: [
      {
        title: "SPQR: A History of Ancient Rome",
        author: "Mary Beard",
        url: "https://www.profilebooks.com/work/spqr/",
      },
      {
        title: "The Fall of the Roman Empire",
        author: "Peter Heather",
        url: "https://www.panmacmillan.com/authors/peter-heather/the-fall-of-the-roman-empire/9780330491341",
      },
    ],
  },
  {
    region: "mediterranean",
    name: "Byzantine Empire",
    start: 330,
    end: 1453,
    desc: "Eastern Rome preserved Greco-Roman knowledge, produced exquisite mosaics and architecture, and served as Europe's eastern bulwark for over a millennium.",
    tags: ["Art", "Architecture", "Law", "Scholarship"],
    refs: [
      {
        title: "Byzantium: The Surprising Life of a Medieval Empire",
        author: "Judith Herrin",
        url: "https://press.princeton.edu/books/paperback/9780691143682/byzantium",
      },
    ],
  },
  {
    region: "mediterranean",
    name: "Renaissance Europe",
    start: 1400,
    end: 1620,
    desc: "Rebirth of art, science, and humanism. The printing press, heliocentrism, and advances in anatomy laid the groundwork for the Scientific Revolution.",
    tags: ["Science", "Arts", "Printing", "Humanism"],
    refs: [
      {
        title: "The Civilization of the Renaissance in Italy",
        author: "Jacob Burckhardt",
        url: "https://www.gutenberg.org/ebooks/2074",
      },
    ],
  },
  {
    region: "neareast",
    name: "Sumer",
    start: -3500,
    end: -1900,
    desc: "Humanity's first cities and the first writing system (cuneiform). Also credited with the wheel, the sail, and the 60-minute hour still in use today.",
    tags: ["Writing", "Wheel", "Mathematics", "Cities"],
    refs: [
      {
        title: "The Sumerians: Their History, Culture, and Character",
        author: "Samuel Noah Kramer",
        url: "https://press.uchicago.edu/ucp/books/book/chicago/S/bo3614421.html",
      },
      {
        title: "Electronic Text Corpus of Sumerian Literature",
        author: "Univ. of Oxford",
        url: "https://etcsl.orinst.ox.ac.uk",
      },
    ],
  },
  {
    region: "neareast",
    name: "Akkadian Empire",
    start: -2334,
    end: -2154,
    desc: "The world's first true empire, unifying Mesopotamian city-states under Sargon of Akkad with centralised bureaucracy and a standardised written language.",
    tags: ["Administration", "Military", "Trade"],
    refs: [
      {
        title: "Babylon: Mesopotamia and the Birth of Civilization",
        author: "Paul Kriwaczek",
        url: "https://www.amazon.com/Babylon-Mesopotamia-Birth-Civilization/dp/1250054168",
      },
    ],
  },
  {
    region: "neareast",
    name: "Babylon",
    start: -1894,
    end: -539,
    desc: "Hammurabi's law code, advanced astronomy enabling eclipse prediction, sophisticated mathematics, and a spectacular city that awed ancient visitors.",
    tags: ["Law", "Astronomy", "Architecture", "Mathematics"],
    refs: [
      {
        title: "Babylon: Mesopotamia and the Birth of Civilization",
        author: "Paul Kriwaczek",
        url: "https://www.amazon.com/Babylon-Mesopotamia-Birth-Civilization/dp/1250054168",
      },
      {
        title: "Electronic Text Corpus of Sumerian Literature",
        author: "Univ. of Oxford",
        url: "https://etcsl.orinst.ox.ac.uk",
      },
    ],
  },
  {
    region: "neareast",
    name: "Phoenicia",
    start: -1550,
    end: -300,
    desc: "Master seafarers who spread the alphabet — ancestor of nearly every writing system used today — across the Mediterranean world.",
    tags: ["Trade", "Maritime", "Alphabet"],
    refs: [
      {
        title: "Perseus Digital Library",
        author: "Tufts University",
        url: "https://www.perseus.tufts.edu",
      },
    ],
  },
  {
    region: "neareast",
    name: "Achaemenid Persia",
    start: -550,
    end: -330,
    desc: "The largest empire of its era: the Royal Road, religious tolerance, standardised currency, a sophisticated postal system, and satrapy administration.",
    tags: ["Administration", "Engineering", "Trade", "Tolerance"],
    refs: [
      {
        title: "The Persians",
        author: "Geoffrey Parker & Brenda Parker",
        url: "https://www.amazon.com/Persians-Lost-Civilizations/dp/1861894147",
      },
    ],
  },
  {
    region: "neareast",
    name: "Islamic Golden Age",
    start: 622,
    end: 1258,
    desc: "Advanced algebra, optics, medicine, and philosophy. Al-Khwarizmi and Ibn Sina were centuries ahead of the European West.",
    tags: ["Algebra", "Medicine", "Optics", "Philosophy"],
    refs: [
      {
        title: "The House of Wisdom",
        author: "Jim Al-Khalili",
        url: "https://www.penguin.co.uk/books/182597/the-house-of-wisdom-by-al-khalili-jim/9780141041858",
      },
    ],
  },
  {
    region: "neareast",
    name: "Ottoman Empire",
    start: 1299,
    end: 1922,
    desc: "A long-lived empire bridging Europe and Asia, renowned for law, monumental architecture, military innovation, and tolerance of diverse peoples.",
    tags: ["Governance", "Architecture", "Military", "Trade"],
    refs: [
      {
        title: "Lord of the Horizons: A History of the Ottoman Empire",
        author: "Jason Goodwin",
        url: "https://www.amazon.com/Lords-Horizons-History-Ottoman-Empire/dp/0312420668",
      },
    ],
  },
  {
    region: "africa",
    name: "Ancient Egypt",
    start: -3100,
    end: -30,
    desc: "Monumental architecture, hieroglyphic writing, advanced mathematics and medicine. A remarkably stable civilisation lasting over three thousand years.",
    tags: ["Architecture", "Writing", "Medicine", "Mathematics"],
    refs: [
      {
        title: "The Oxford History of Ancient Egypt",
        author: "Ian Shaw (ed.)",
        url: "https://global.oup.com/academic/product/the-oxford-history-of-ancient-egypt-9780192804587",
      },
      {
        title: "British Museum — Ancient Egypt Collection",
        author: "British Museum",
        url: "https://www.britishmuseum.org/collection/egypt",
      },
    ],
  },
  {
    region: "africa",
    name: "Kingdom of Kush",
    start: -1070,
    end: 350,
    desc: "Nubian kingdom that conquered Egypt and ruled as its 25th Dynasty, with its own pyramids at Meroë, unique writing, and advanced iron smelting.",
    tags: ["Metallurgy", "Architecture", "Trade"],
    refs: [
      {
        title: "Black Kingdoms of the Nile (Nubia)",
        author: "Davies & Friedman",
        url: "https://www.amazon.com/Nubia-Ancient-Kingdoms-Africa-Davies/dp/0714109460",
      },
      {
        title: "British Museum — Ancient Egypt Collection",
        author: "British Museum",
        url: "https://www.britishmuseum.org/collection/egypt",
      },
    ],
  },
  {
    region: "africa",
    name: "Carthage",
    start: -814,
    end: -146,
    desc: "A mercantile powerhouse and dominant naval force of the western Mediterranean — controlling North African and Iberian trade routes until Rome destroyed it.",
    tags: ["Trade", "Maritime", "Military"],
    refs: [
      {
        title: "The African Past",
        author: "Basil Davidson",
        url: "https://www.amazon.com/African-Past-Chronicles-Antiquity-Modern/dp/0316174319",
      },
    ],
  },
  {
    region: "africa",
    name: "Kingdom of Axum",
    start: 100,
    end: 940,
    desc: "East African empire that minted its own coins, adopted Christianity early, built towering stelae, and controlled the lucrative Red Sea trade route.",
    tags: ["Trade", "Architecture", "Religion", "Coinage"],
    refs: [
      {
        title: "The African Past",
        author: "Basil Davidson",
        url: "https://www.amazon.com/African-Past-Chronicles-Antiquity-Modern/dp/0316174319",
      },
    ],
  },
  {
    region: "africa",
    name: "Mali Empire",
    start: 1235,
    end: 1600,
    desc: "Mansa Musa's empire was home to Timbuktu — a centre of Islamic scholarship — and was once the wealthiest state on Earth per contemporary accounts.",
    tags: ["Trade", "Scholarship", "Governance"],
    refs: [
      {
        title: "Mansa Musa and the Empire of Mali",
        author: "P. James Oliver",
        url: "https://www.amazon.com/Mansa-Musa-Empire-P-James-Oliver/dp/1477714979",
      },
      {
        title: "The African Past",
        author: "Basil Davidson",
        url: "https://www.amazon.com/African-Past-Chronicles-Antiquity-Modern/dp/0316174319",
      },
    ],
  },
  {
    region: "southasia",
    name: "Indus Valley",
    start: -2600,
    end: -1900,
    desc: "Grid-layout cities, underground sewage systems, standardised weights and measures. Mohenjo-daro was among the most sophisticated cities of its age.",
    tags: ["Urban Planning", "Sanitation", "Trade"],
    refs: [
      {
        title: "The Indus Civilization: A Contemporary Perspective",
        author: "Gregory L. Possehl",
        url: "https://rowman.com/ISBN/9780759101722",
      },
      {
        title: "AIIS Digital South Asia Library",
        author: "Univ. of Chicago",
        url: "https://dsal.uchicago.edu",
      },
    ],
  },
  {
    region: "southasia",
    name: "Vedic Period",
    start: -1500,
    end: -500,
    desc: "Developed Sanskrit literature, early mathematics, the Upanishads, and social-religious structures that shaped Indian civilisation for millennia.",
    tags: ["Literature", "Philosophy", "Mathematics", "Religion"],
    refs: [
      {
        title: "AIIS Digital South Asia Library",
        author: "Univ. of Chicago",
        url: "https://dsal.uchicago.edu",
      },
    ],
  },
  {
    region: "southasia",
    name: "Maurya Empire",
    start: -322,
    end: -185,
    desc: "India's first major empire under Chandragupta and Ashoka — spreading Buddhism, building roads, and issuing one of history's earliest animal welfare edicts.",
    tags: ["Governance", "Philosophy", "Trade", "Law"],
    refs: [
      {
        title: "Ashoka: The Search for India's Lost Emperor",
        author: "Charles Allen",
        url: "https://www.abacusbooks.co.uk/ashoka/charles-allen/9780349123776",
      },
    ],
  },
  {
    region: "southasia",
    name: "Gupta Empire",
    start: 320,
    end: 550,
    desc: "A golden age of Indian mathematics (decimal system, formalised zero), astronomy, literature, and medicine. Chess was likely invented in this period.",
    tags: ["Mathematics", "Astronomy", "Literature", "Science"],
    refs: [
      {
        title: "The Gupta Empire",
        author: "Radhakumud Mookerji",
        url: "https://www.amazon.com/Gupta-Empire-Radhakumud-Mookerji/dp/8120800079",
      },
    ],
  },
  {
    region: "southasia",
    name: "Mughal Empire",
    start: 1526,
    end: 1857,
    desc: "Produced the Taj Mahal, a codified legal system, and unprecedented religious syncretism under Akbar the Great — ruling a third of humanity at its peak.",
    tags: ["Architecture", "Art", "Governance", "Philosophy"],
    refs: [
      {
        title: "The Mughal Empire",
        author: "John F. Richards",
        url: "https://www.cambridge.org/gb/universitypress/subjects/history/south-asian-history/mughal-empire",
      },
    ],
  },
  {
    region: "eastasia",
    name: "Shang Dynasty",
    start: -1600,
    end: -1046,
    desc: "Advanced bronze metallurgy, oracle bone writing, organised military, and the deep roots of continuous Chinese civilisation.",
    tags: ["Metallurgy", "Writing", "Military", "Governance"],
    refs: [
      {
        title: "The Bronze Age of China",
        author: "Wen Fong (ed.)",
        url: "https://www.amazon.com/Great-Bronze-Age-China-Exhibition/dp/0870993453",
      },
      {
        title: "Asia for Educators — Columbia University",
        author: "Columbia University",
        url: "https://afe.easia.columbia.edu",
      },
    ],
  },
  {
    region: "eastasia",
    name: "Zhou Dynasty",
    start: -1046,
    end: -256,
    desc: "China's longest dynasty. The era of Confucius, Laozi, and the Hundred Schools of Thought — a philosophical flowering that shaped East Asia permanently.",
    tags: ["Philosophy", "Governance", "Iron", "Literature"],
    refs: [
      {
        title: "Asia for Educators — Columbia University",
        author: "Columbia University",
        url: "https://afe.easia.columbia.edu",
      },
    ],
  },
  {
    region: "eastasia",
    name: "Han Dynasty",
    start: -206,
    end: 220,
    desc: "Contemporaneous with Rome in scale, the Han built the Silk Road, invented paper and the seismoscope, and established the Confucian bureaucracy.",
    tags: ["Trade", "Paper", "Science", "Governance"],
    refs: [
      {
        title: "The Early Chinese Empires: Qin and Han",
        author: "Mark Edward Lewis",
        url: "https://www.hup.harvard.edu/books/9780674057340",
      },
    ],
  },
  {
    region: "eastasia",
    name: "Tang Dynasty",
    start: 618,
    end: 907,
    desc: "A cosmopolitan golden age of printing, gunpowder, poetry, and governance. Chang'an was likely the world's largest city.",
    tags: ["Printing", "Gunpowder", "Commerce", "Arts"],
    refs: [
      {
        title: "China's Golden Age: Everyday Life in the Tang Dynasty",
        author: "Charles Benn",
        url: "https://global.oup.com/academic/product/chinas-golden-age-9780195171587",
      },
    ],
  },
  {
    region: "eastasia",
    name: "Song Dynasty",
    start: 960,
    end: 1279,
    desc: "Remarkable innovation: movable-type printing, gunpowder weapons, the magnetic compass, and early coal-based industrialisation — centuries before Europe.",
    tags: ["Printing", "Compass", "Gunpowder", "Industry"],
    refs: [
      {
        title: "The Age of Confucian Rule: The Song Transformation of China",
        author: "Dieter Kuhn",
        url: "https://www.hup.harvard.edu/books/9780674031432",
      },
    ],
  },
  {
    region: "eastasia",
    name: "Mongol Empire",
    start: 1206,
    end: 1368,
    desc: "The largest contiguous land empire in history. Facilitated the Pax Mongolica — unprecedented cultural and commercial exchange across Eurasia.",
    tags: ["Military", "Trade", "Connectivity"],
    refs: [
      {
        title: "Genghis Khan and the Making of the Modern World",
        author: "Jack Weatherford",
        url: "https://www.penguinrandomhouse.com/books/90742/genghis-khan-and-the-making-of-the-modern-world-by-jack-weatherford/",
      },
    ],
  },
  {
    region: "mediterranean",
    name: "British Industrial Revolution",
    start: 1760,
    end: 1900,
    desc: "Steam power transformed manufacturing, transport, and society. Britain became the first industrial nation, triggering global modernisation that spread across Europe and beyond.",
    tags: ["Steam", "Industry", "Engineering", "Commerce"],
    refs: [
      {
        title: "The Origins of the Industrial Revolution",
        author: "T.S. Ashton",
        url: "https://www.amazon.com/Industrial-Revolution-1760-1830-T-S-Ashton/dp/0192830198",
      },
      {
        title: "The Wealth of Nations",
        author: "Adam Smith",
        url: "https://www.gutenberg.org/ebooks/3300",
      },
    ],
  },
  {
    region: "americas",
    name: "US Industrial Age",
    start: 1820,
    end: 1970,
    desc: "America rapidly industrialised after Britain, surpassing it by 1900. Mass production (Ford), electrification, and the rise of Silicon Valley made the US the dominant industrial power of the 20th century.",
    tags: ["Industry", "Innovation", "Technology", "Commerce"],
    refs: [
      {
        title: "The Origins of the Industrial Revolution",
        author: "T.S. Ashton",
        url: "https://www.amazon.com/Industrial-Revolution-1760-1830-T-S-Ashton/dp/0192830198",
      },
    ],
  },
  {
    region: "africa",
    name: "Colonial & Post-Colonial Era",
    start: 1880,
    end: 2026,
    desc: "European colonisation imposed industrial-era economies across Africa, followed by independence movements from the 1950s onward. Africa's modern states are still shaped by this transformation.",
    tags: ["Colonialism", "Independence", "Modernity"],
    refs: [
      {
        title: "The African Past",
        author: "Basil Davidson",
        url: "https://www.amazon.com/African-Past-Chronicles-Antiquity-Modern/dp/0316174319",
      },
    ],
  },
  {
    region: "southasia",
    name: "Modern India & Pakistan",
    start: 1947,
    end: 2026,
    desc: "Independence from Britain (1947) launched South Asia into rapid modernisation, with India emerging as a major technology and economic power by the 21st century.",
    tags: ["Independence", "Technology", "Democracy", "Economy"],
    refs: [
      {
        title: "AIIS Digital South Asia Library",
        author: "Univ. of Chicago",
        url: "https://dsal.uchicago.edu",
      },
    ],
  },
  {
    region: "neareast",
    name: "Modern Middle East",
    start: 1900,
    end: 2026,
    desc: "The discovery of oil, the collapse of the Ottoman Empire, and the redrawing of borders after WWI and WWII shaped the contemporary Middle East, which now sits at the centre of global energy supply.",
    tags: ["Oil", "Geopolitics", "Modernity", "Conflict"],
    refs: [
      {
        title: "Lord of the Horizons: A History of the Ottoman Empire",
        author: "Jason Goodwin",
        url: "https://www.amazon.com/Lords-Horizons-History-Ottoman-Empire/dp/0312420668",
      },
    ],
  },
  {
    region: "eastasia",
    name: "East Asian Miracle",
    start: 1868,
    end: 2026,
    desc: "Japan's Meiji Restoration (1868) launched the first non-Western industrialisation. South Korea, Taiwan, and China followed in the 20th–21st centuries, producing the world's largest economies.",
    tags: ["Industrialisation", "Technology", "Manufacturing", "Growth"],
    refs: [
      {
        title: "Asia for Educators — Columbia University",
        author: "Columbia University",
        url: "https://afe.easia.columbia.edu",
      },
    ],
  },
];

const refGrid = document.getElementById("ref-grid");
const resGrid = document.getElementById("res-grid");
const legend = document.getElementById("legend");

REFS.forEach((group) => {
  const article = document.createElement("article");
  article.className = "ref-group";
  article.setAttribute("role", "listitem");
  article.innerHTML = `
    <header class="ref-group-header" role="button" tabindex="0" aria-expanded="false" aria-controls="ref-list-${group.region.replace(/\s+/g, "-").toLowerCase()}">
      <div class="ref-swatch" style="background:${group.col}" aria-label="${group.region} theme color"></div>
      <h3 class="ref-group-title">${group.region}</h3>
      <span class="ref-toggle" aria-hidden="true">▾</span>
    </header>
    <ul class="ref-list" id="ref-list-${group.region.replace(/\s+/g, "-").toLowerCase()}" role="list" hidden>
      ${group.refs
        .map(
          (r) => `
        <li class="ref-item" role="listitem">
          <div class="ref-item-top">
            <span class="ref-type">${r.type}</span>
            <span class="ref-title">${r.url ? `<a href="${r.url}" target="_blank" rel="noopener">${r.title}</a>` : r.title}</span>
          </div>
          <div class="ref-meta">${r.author} — ${r.note}</div>
        </li>`,
        )
        .join("")}
    </ul>`;

  const header = article.querySelector(".ref-group-header");
  header.addEventListener("click", () => {
    const isOpen = article.classList.toggle("open");
    header.setAttribute("aria-expanded", isOpen);
    const list = article.querySelector(".ref-list");
    list.hidden = !isOpen;
  });
  header.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      header.click();
    }
  });

  if (REFS.indexOf(group) < 2) {
    article.classList.add("open");
    header.setAttribute("aria-expanded", "true");
    article.querySelector(".ref-list").hidden = false;
  }
  refGrid.appendChild(article);
});

REGIONS.forEach((r) => {
  const item = document.createElement("li");
  item.className = "leg-item";
  item.setAttribute("aria-label", `${r.label.replace("\n", " ")} stream`);
  item.innerHTML = `<div class="leg-swatch" style="background:${r.col}" aria-hidden="true"></div><span>${r.label.replace("\n", " ")}</span>`;
  legend.appendChild(item);
});

//  Canvas
const canvas = document.getElementById("c");
const ctx = canvas.getContext("2d");
const tt = document.getElementById("tt");

const T_START = -3600;
const T_END = 2026;
const T_SPAN = T_END - T_START;
const CANVAS_H = 3000;
const M_TOP = 100;
const M_BOT = 60;
const CHART_H = CANVAS_H - M_TOP - M_BOT;
const AXIS_W = 58;
const LANE_PAD = 8;
const BAR_GAP = 4;
const MIN_BAR_W = 38;

function yearToY(y) {
  return M_TOP + ((y - T_START) / T_SPAN) * CHART_H;
}

function maxParallel(rid) {
  const civs = CIVS.filter((c) => c.region === rid);
  if (!civs.length) return 1;
  const evts = [];
  civs.forEach((c) => {
    evts.push([c.start, 1]);
    evts.push([c.end, -1]);
  });
  evts.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  let cur = 0,
    mx = 0;
  evts.forEach(([, d]) => {
    cur += d;
    if (cur > mx) mx = cur;
  });
  return Math.max(mx, 1);
}

let laneWidths = [];
let TOTAL_W = 0;
let CANVAS_W = 0;

function computeLayout() {
  // base per-region width from how many parallel columns are needed
  const baseWidths = REGIONS.map((r) => {
    const cols = maxParallel(r.id);
    return cols * (MIN_BAR_W + BAR_GAP) + LANE_PAD * 2;
  });

  // natural total for base widths
  const naturalTotal = baseWidths.reduce((a, b) => a + b, 0);

  // available width inside the chart outer element (full page width)
  const outer = document.getElementById("chart-outer");
  const available = Math.max(600, outer.clientWidth - AXIS_W - 20);

  const scale = Math.max(0.48, available / naturalTotal);

  laneWidths = baseWidths.map((w) => Math.max(36, Math.floor(w * scale)));

  TOTAL_W = laneWidths.reduce((a, b) => a + b, 0);
  CANVAS_W = AXIS_W + TOTAL_W + 10;
}

function laneX(i) {
  let x = AXIS_W;
  for (let j = 0; j < i; j++) x += laneWidths[j];
  return x;
}

let hitBoxes = [];

let pinned = false;
let pinnedCiv = null;

// initial layout and responsive redraw
computeLayout();
window.addEventListener("resize", () => {
  computeLayout();
  draw();
});

function hexRgb(hex) {
  return {
    r: parseInt(hex.slice(1, 3), 16),
    g: parseInt(hex.slice(3, 5), 16),
    b: parseInt(hex.slice(5, 7), 16),
  };
}

function rRect(x, y, w, h, r) {
  r = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

function draw() {
  canvas.width = CANVAS_W;
  canvas.height = CANVAS_H;
  // keep CSS size in sync so outer container scroll works as expected
  canvas.style.width = CANVAS_W + "px";
  canvas.style.height = CANVAS_H + "px";

  // Background
  ctx.fillStyle = "#08070a";
  ctx.fillRect(0, 0, CANVAS_W, CANVAS_H);

  // Year axis ticks
  const ticks = [];
  for (let y = -3500; y <= 2000; y += 250) ticks.push(y);
  ticks.forEach((yr) => {
    const cy = yearToY(yr);
    const major = yr % 500 === 0;

    ctx.strokeStyle = major ? "rgba(212,168,50,0.12)" : "rgba(212,168,50,0.05)";
    ctx.lineWidth = 1;
    ctx.setLineDash(major ? [4, 8] : [2, 12]);
    ctx.beginPath();
    ctx.moveTo(AXIS_W, cy);
    ctx.lineTo(CANVAS_W - 4, cy);
    ctx.stroke();
    ctx.setLineDash([]);

    if (major) {
      ctx.fillStyle = "rgba(212,168,50,0.5)";
      ctx.font = "600 9px Cinzel, serif";
      ctx.textAlign = "right";
      ctx.textBaseline = "middle";
      const lbl =
        yr < 0 ? `${Math.abs(yr)} BCE` : yr === 0 ? "1 CE" : `${yr} CE`;
      ctx.fillText(lbl, AXIS_W - 6, cy);
    }
  });

  // Lane backgrounds + headers
  REGIONS.forEach((region, i) => {
    const lx = laneX(i);
    const lw = laneWidths[i];
    const cx = lx + lw / 2;

    // subtle alternating fill
    ctx.fillStyle = i % 2 === 0 ? "rgba(255,255,255,0.014)" : "transparent";
    ctx.fillRect(lx, 0, lw, CANVAS_H);

    // separator line
    if (i > 0) {
      ctx.strokeStyle = "rgba(212,168,50,0.1)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(lx, 70);
      ctx.lineTo(lx, CANVAS_H - M_BOT);
      ctx.stroke();
    }

    // header box
    const rgb = hexRgb(region.col);
    ctx.fillStyle = `rgba(${rgb.r},${rgb.g},${rgb.b},0.18)`;
    ctx.fillRect(lx, 0, lw, 68);

    // header bottom accent
    ctx.fillStyle = `rgba(${rgb.r},${rgb.g},${rgb.b},0.6)`;
    ctx.fillRect(lx, 65, lw, 2);

    // header text
    ctx.fillStyle = "rgba(240,230,200,0.92)";
    ctx.font = "600 9.5px Cinzel, serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    const lines = region.label.split("\n");
    const lineH = 14;
    const startY = 34 - ((lines.length - 1) * lineH) / 2;
    lines.forEach((ln, li) => ctx.fillText(ln, cx, startY + li * lineH));
  });

  // Draw bars
  hitBoxes = [];

  REGIONS.forEach((region, ri) => {
    const lx = laneX(ri) + LANE_PAD;
    const lw = laneWidths[ri] - LANE_PAD * 2;
    const civs = CIVS.filter((c) => c.region === region.id).sort(
      (a, b) => a.start - b.start,
    );

    // Greedy column packing
    const cols = [];
    civs.forEach((civ) => {
      let placed = false;
      for (let ci = 0; ci < cols.length; ci++) {
        if (civ.start >= cols[ci][cols[ci].length - 1].end - 30) {
          cols[ci].push(civ);
          placed = true;
          break;
        }
      }
      if (!placed) cols.push([civ]);
    });

    const nc = cols.length || 1;
    const barW = (lw - BAR_GAP * (nc - 1)) / nc;

    cols.forEach((col, ci) => {
      const bx = lx + ci * (barW + BAR_GAP);
      col.forEach((civ) => {
        const by = yearToY(civ.start);
        const ey = yearToY(civ.end);
        const bh = Math.max(ey - by, 7);

        const rgb = hexRgb(region.col);
        const lg = ctx.createLinearGradient(bx, by, bx + barW, by + bh);
        lg.addColorStop(
          0,
          `rgba(${rgb.r + 55},${rgb.g + 55},${rgb.b + 55},0.78)`,
        );
        lg.addColorStop(1, `rgba(${rgb.r},${rgb.g},${rgb.b},0.5)`);

        ctx.fillStyle = lg;
        rRect(bx, by, barW, bh, 2);
        ctx.fill();

        // Border
        ctx.strokeStyle = `rgba(${rgb.r + 100},${rgb.g + 100},${rgb.b + 100},0.28)`;
        ctx.lineWidth = 0.75;
        rRect(bx, by, barW, bh, 2);
        ctx.stroke();

        // Top glow
        ctx.fillStyle = `rgba(${rgb.r + 140},${rgb.g + 140},${rgb.b + 140},0.45)`;
        ctx.fillRect(bx + 2, by, barW - 4, 1.5);

        // Rotated name
        if (bh > 16) {
          ctx.save();
          ctx.translate(bx + barW / 2, by + bh / 2);
          ctx.rotate(-Math.PI / 2);
          const fs = Math.min(11, Math.max(7, barW * 0.36));
          ctx.font = `italic ${fs}px EB Garamond, serif`;
          ctx.fillStyle = "rgba(240,230,200,0.92)";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          let lbl = civ.name;
          const maxPx = bh - 10;
          while (ctx.measureText(lbl + "…").width > maxPx && lbl.length > 2)
            lbl = lbl.slice(0, -1);
          if (lbl !== civ.name) lbl += "…";
          ctx.fillText(lbl, 0, 0);
          ctx.restore();
        }

        hitBoxes.push({
          x1: bx,
          y1: by,
          x2: bx + barW,
          y2: by + bh,
          civ,
        });
      });
    });
  });

  // Bottom axis label
  ctx.fillStyle = "rgba(212,168,50,0.35)";
  ctx.font = "600 9px Cinzel, serif";
  ctx.textAlign = "center";
  ctx.fillText("2026 CE  ·  PRESENT", AXIS_W + TOTAL_W / 2, CANVAS_H - 20);
}

// Tooltip
canvas.addEventListener("mousemove", (e) => {
  if (pinned) return; // when pinned, ignore hover updates
  const rect = canvas.getBoundingClientRect();
  const sx = canvas.width / rect.width;
  const sy = canvas.height / rect.height;
  const mx = (e.clientX - rect.left) * sx;
  const my = (e.clientY - rect.top) * sy;

  let hit = null;
  for (const hb of hitBoxes) {
    if (mx >= hb.x1 && mx <= hb.x2 && my >= hb.y1 && my <= hb.y2) {
      hit = hb.civ;
      break;
    }
  }

  if (hit) {
    canvas.style.cursor = "pointer";
    const sl = hit.start < 0 ? `${Math.abs(hit.start)} BCE` : `${hit.start} CE`;
    const el =
      hit.end >= 2025
        ? "Present"
        : hit.end < 0
          ? `${Math.abs(hit.end)} BCE`
          : `${hit.end} CE`;
    const dur = hit.end - hit.start;
    tt.querySelector(".tn").textContent = hit.name;
    tt.querySelector(".td").textContent = `${sl} – ${el}  ·  c.${dur} years`;
    tt.querySelector(".tb").textContent = hit.desc;
    tt.querySelector(".tg").innerHTML = hit.tags
      .map((t) => `<span>${t}</span>`)
      .join("");
    const tcEl = tt.querySelector(".tc");
    const tcItems = tt.querySelector(".tc-items");
    if (hit.refs && hit.refs.length) {
      tcItems.innerHTML = hit.refs
        .map(
          (r) =>
            `<li class="tc-item"><a href="${r.url}" target="_blank" rel="noopener">${r.title}</a> — ${r.author}</li>`,
        )
        .join("");
      tcEl.style.display = "block";
    } else {
      tcEl.style.display = "none";
    }
    let tx = e.clientX + 18,
      ty = e.clientY - 12;
    if (tx + 310 > window.innerWidth) tx = e.clientX - 308;
    if (ty + 230 > window.innerHeight) ty = e.clientY - 230;
    tt.style.left = tx + "px";
    tt.style.top = ty + "px";
    tt.classList.add("show");
  } else {
    canvas.style.cursor = "crosshair";
    if (!pinned) tt.classList.remove("show");
  }
});

canvas.addEventListener("mouseleave", () => {
  if (!pinned) tt.classList.remove("show");
});

// Click to pin tooltip on an entry; click elsewhere to unpin/hide
canvas.addEventListener("click", (e) => {
  const rect = canvas.getBoundingClientRect();
  const sx = canvas.width / rect.width;
  const sy = canvas.height / rect.height;
  const mx = (e.clientX - rect.left) * sx;
  const my = (e.clientY - rect.top) * sy;

  let hit = null;
  for (const hb of hitBoxes) {
    if (mx >= hb.x1 && mx <= hb.x2 && my >= hb.y1 && my <= hb.y2) {
      hit = hb.civ;
      break;
    }
  }

  if (hit) {
    pinned = true;
    pinnedCiv = hit;
    tt.setAttribute("aria-hidden", "false");
    // show tooltip at click position
    const sl = hit.start < 0 ? `${Math.abs(hit.start)} BCE` : `${hit.start} CE`;
    const el =
      hit.end >= 2025
        ? "Present"
        : hit.end < 0
          ? `${Math.abs(hit.end)} BCE`
          : `${hit.end} CE`;
    const dur = hit.end - hit.start;
    tt.querySelector(".tn").textContent = hit.name;
    tt.querySelector(".td").textContent = `${sl} – ${el}  ·  c.${dur} years`;
    tt.querySelector(".tb").textContent = hit.desc;
    tt.querySelector(".tg").innerHTML = hit.tags
      .map((t) => `<span>${t}</span>`)
      .join("");
    const tcEl = tt.querySelector(".tc");
    const tcItems = tt.querySelector(".tc-items");
    if (hit.refs && hit.refs.length) {
      tcItems.innerHTML = hit.refs
        .map(
          (r) =>
            `<li class="tc-item"><a href="${r.url}" target="_blank" rel="noopener">${r.title}</a> — ${r.author}</li>`,
        )
        .join("");
      tcEl.style.display = "block";
    } else {
      tcEl.style.display = "none";
    }
    let tx = e.clientX + 18,
      ty = e.clientY - 12;
    if (tx + 310 > window.innerWidth) tx = e.clientX - 308;
    if (ty + 230 > window.innerHeight) ty = e.clientY - 230;
    tt.style.left = tx + "px";
    tt.style.top = ty + "px";
    tt.classList.add("show");
    tt.classList.add("pinned");
  } else {
    // click not on an entry -> unpin/hide
    pinned = false;
    pinnedCiv = null;
    tt.classList.remove("show");
    tt.classList.remove("pinned");
    tt.setAttribute("aria-hidden", "true");
  }
});

// clicking anywhere outside canvas or tooltip should unpin
document.addEventListener("click", (e) => {
  if (
    e.target.closest &&
    (e.target.closest("#tt") || e.target.closest("canvas"))
  )
    return;
  pinned = false;
  pinnedCiv = null;
  tt.classList.remove("show");
  tt.classList.remove("pinned");
  tt.setAttribute("aria-hidden", "true");
});

draw();
