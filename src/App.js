import React, { useState, useEffect } from 'react'
import { ForceGraph3D } from 'react-force-graph'
import './App.css'
import './Header.css'
import Select from 'react-select'
// import { graphDatas } from './Data/testData'

const App = () => {
  const graphDatas = {
    nodes: [
      {
        id: 'AnilKumble',
        label: 'Anil Kumble',
        period: '1990 - 2008',
        role: 'Bowler',
        is_ipl: ' true',
        is_retired: 'true'
      },
      {
        id: 'VVSLaxman',
        label: 'VVS Laxman',
        period: '2000 - 2005',
        role: 'Batsman'
      },
      {
        id: 'SachinTendulkar',
        label: 'sachin tendulkar',
        period: '1989-2013',
        role: 'All-Rounder',
        is_ipl: 'true',
        is_retired: 'true'
      },
      {
        id: 'SouravGanguly',
        label: 'Sourav Ganguly',
        period: '1992-2008',
        role: 'All-Rounder',
        is_ipl: 'true',
        is_retired: 'true'
      },
      {
        id: 'RahulDravid',
        label: 'Rahul Dravid',
        period: '1996-2012',
        role: 'Wicketkeeper-Batsman',
        is_ipl: 'true',
        is_retired: 'true'
      },
      {
        id: 'HarbhajanSingh',
        label: 'Harbhajan Singh',
        period: '1998-2016',
        role: 'Bowler',
        is_ipl: 'true',
        is_retired: 'true'
      },

      {
        id: 'JavagalSrinath',
        label: 'javagal srinath',
        period: '1991-2003',
        role: 'Bowler',
        is_ipl: 'true',
        is_retired: 'true'
      },
      {
        id: 'VirenderSehwag',
        label: 'Virender Sehwag',
        period: '1999 - 2013',
        role: 'Batsman',
        is_ipl: 'true',
        is_retired: 'true'
      },
      {
        id: 'MSDhoni',
        label: 'M.S. Dhoni',
        period: '2004 - 2020',
        role: 'Wicketkeeper-Batsman',
        is_ipl: 'true',
        is_retired: 'true'
      },
      {
        id: 'SureshRaina',
        label: 'Suresh Raina',
        period: '2005 - 2020',
        role: 'Batsman',
        is_ipl: 'true',
        is_retired: 'true'
      },
      {
        id: 'GautamGambhir',
        label: 'Gautam Gambhir',
        period: '2003 - 2016',
        role: 'Batsman',
        is_ipl: 'true',
        is_retired: 'true'
      },
      {
        id: 'ViratKohli',
        label: 'Virat Kohli',
        period: '2008 - Present',
        role: 'Batsman',
        is_ipl: 'true',
        is_retired: 'false'
      },
      {
        id: 'AjinkyaRahane',
        label: 'Ajinkya Rahane',
        period: '2011 - Present',
        role: 'Batsman',
        is_ipl: 'true',
        is_retired: 'false'
      },
      {
        id: 'RohitSharma',
        label: 'Rohit Sharma',
        period: '2007 - Present',
        role: 'Batsman',
        is_ipl: 'true',
        is_retired: 'false'
      },
      {
        id: 'ShikharDhawan',
        label: 'Shikhar Dhawan',
        period: '2010 - Present',
        role: 'Batsman',
        is_ipl: 'true',
        is_retired: 'false'
      },
      {
        id: 'KL_Rahul',
        label: 'KL Rahul',
        period: '2014 - Present',
        role: 'Batsman',
        is_ipl: 'true',
        is_retired: 'false'
      },
      {
        id: 'HardikPandya',
        label: 'Hardik Pandya',
        period: '2016 - Present',
        role: 'All-Rounder',
        is_ipl: 'true',
        is_retired: 'false'
      },
      // player
      {
        id: 'DevangGandhi',
        label: 'Devang Gandhi',
        period: '1999-2000',
        role: 'Batsman',
        is_ipl: 'false',
        is_retired: 'true'
      },
      {
        id: 'SameerDighe',
        label: 'Sameer Dighe',
        period: '2000-2001',
        role: 'Wicketkeeper-Batsman',
        is_ipl: 'false',
        is_retired: 'true'
      },
      {
        id: 'SridharanSriram',
        label: 'Sridharan Sriram',
        period: '2000-2004',
        role: 'Batsman',
        is_ipl: 'true',
        is_retired: 'true'
      },
      {
        id: 'HemangBadani',
        label: 'Hemang Badani',
        period: '2001-2004',
        role: 'Batsman',
        is_ipl: 'false',
        is_retired: 'true'
      },
      {
        id: 'AmitBhandari',
        label: 'Amit Bhandari',
        period: '2000-2004',
        role: 'Bowler',
        is_ipl: 'false',
        is_retired: 'true'
      },
      {
        id: 'VijayDahiya',
        label: 'Vijay Dahiya',
        period: '2000-2001',
        role: 'Wicketkeeper-Batsman',
        is_ipl: 'false',
        is_retired: 'true'
      },
      {
        id: 'ZaheerKhan',
        label: 'Zaheer Khan',
        period: '2000 - 2014',
        role: 'Bowler',
        is_ipl: 'true',
        is_retired: 'true'
      },
      {
        id: 'YuvrajSingh',
        label: 'Yuvraj Singh',
        period: '2000 - 2017',
        role: 'All-Rounder',
        is_ipl: 'true',
        is_retired: 'true'
      },
      {
        id: 'ReetinderSinghSodhi',
        label: 'Reetinder Singh Sodhi',
        period: '2000-2002',
        role: 'All-Rounder',
        is_ipl: 'true',
        is_retired: 'true'
      },
      {
        id: 'DineshMongia',
        label: 'Dinesh Mongia',
        period: '2001-2007',
        role: 'All-Rounder',
        is_ipl: 'false',
        is_retired: 'true'
      },
      {
        id: 'AshishNehra',
        label: 'Ashish Nehra',
        period: '1999 - 2012',
        role: 'Bowler',
        is_ipl: 'true',
        is_retired: 'true'
      },
      {
        id: 'ShivSunderDas',
        label: 'Shiv Sunder Das',
        period: '2000-2002',
        role: 'Batsman',
        is_ipl: 'false',
        is_retired: 'true'
      },
      {
        id: 'DeepDasgupta',
        label: 'Deep Dasgupta',
        period: '2001-2002',
        role: 'Batsman',
        is_ipl: 'false',
        is_retired: 'true'
      },
      {
        id: 'AjayRatra',
        label: 'Ajay Ratra',
        period: '2001-2002',
        role: 'Wicketkeeper-Batsman',
        is_ipl: 'false',
        is_retired: 'true'
      },
      {
        id: 'SanjayBangar',
        label: 'Sanjay Bangar',
        period: '2001-2004',
        role: 'All-Rounder',
        is_ipl: 'true',
        is_retired: 'true'
      },
      {
        id: 'MohammadKaif',
        label: 'Mohammad Kaif',
        period: '2000 - 2006',
        role: 'Batsman',
        is_ipl: 'true',
        is_retired: 'true'
      },
      {
        id: 'SarandeepSingh',
        label: 'Sarandeep Singh',
        period: '2000-2003',
        role: 'All-Rounder',
        is_ipl: 'false',
        is_retired: 'true'
      },
      {
        id: 'MuraliKartik',
        label: 'Murali Kartik',
        period: '2000-2007',
        role: 'Bowler',
        is_ipl: 'true',
        is_retired: 'true'
      },
      {
        id: 'TinuYohannan',
        label: 'Tinu Yohannan',
        period: '2001-2002',
        role: 'Bowler',
        is_ipl: 'false',
        is_retired: 'true'
      },
      {
        id: 'JaiPrakashYadav',
        label: 'Jai Yadav',
        period: '2000-2004',
        role: 'All-Rounder',
        is_ipl: 'false',
        is_retired: 'true'
      },
      {
        id: 'LakshmipathyBalaji',
        label: 'Lakshmipathy Balaji',
        period: '2003-2012',
        role: 'Bowler',
        is_ipl: 'true',
        is_retired: 'true'
      },
      {
        id: 'ParthivPatel',
        label: 'Parthiv Patel',
        period: '2002-2011',
        role: 'Wicketkeeper-Batsman',
        is_ipl: 'true',
        is_retired: 'true'
      },
      {
        id: 'AavishkarSalvi',
        label: 'Aavishkar Salvi',
        period: '2001-2003',
        role: 'Bowler',
        is_ipl: 'true',
        is_retired: 'true'
      },
      {
        id: 'AmitMishra',
        label: 'Amit Mishra',
        period: '2008-2017',
        role: 'Bowler',
        is_ipl: 'true',
        is_retired: 'true'
      },
      {
        id: 'AbhijitKale',
        label: 'Abhijit Kale',
        period: '2003',
        role: 'Batsman',
        is_ipl: 'false',
        is_retired: 'false'
      },
      {
        id: 'IrfanPathan',
        label: 'Irfan Pathan',
        period: '2003 - 2012',
        role: 'All-Rounder',
        is_ipl: 'true',
        is_retired: 'true'
      },
      {
        id: 'RohanGavaskar',
        label: 'Rohan Gavaskar',
        period: '2004',
        role: 'Batsman',
        is_ipl: 'true',
        is_retired: 'true'
      },
      {
        id: 'RameshPowar',
        label: 'Ramesh Powar',
        period: '2004-2007',
        role: 'Bowler',
        is_ipl: 'true',
        is_retired: 'true'
      },
      {
        id: 'DineshKarthik',
        label: 'Dinesh Karthik',
        period: '2004 - Present',
        role: 'Wicketkeeper-Batsman',
        is_ipl: 'true',
        is_retired: 'false'
      },
      {
        id: 'JoginderSharma',
        label: 'Joginder Sharma',
        period: '2004-2007',
        role: 'All-Rounder',
        is_ipl: 'true',
        is_retired: 'true'
      },
      {
        id: 'YalakaVenugopalRao',
        label: 'Yalaka Venugopal Rao',
        period: '2005-2006',
        role: 'Batsman',
        is_ipl: 'true',
        is_retired: 'true'
      },
      {
        id: 'RPSingh',
        label: 'R. P. Singh',
        period: '2005-2011',
        role: 'Bowler',
        is_ipl: 'true',
        is_retired: 'true'
      },
      {
        id: 'SSreesanth',
        label: 'S. Sreesanth',
        period: '2005-2011',
        role: 'Bowler',
        is_ipl: 'true',
        is_retired: 'true'
      },
      {
        id: 'MunafPatel',
        label: 'Munaf Patel',
        period: '2006-2011',
        role: 'Bowler',
        is_ipl: 'true',
        is_retired: 'true'
      },
      {
        id: 'VRVSingh',
        label: 'V. R. V. Singh',
        period: '2006-2007',
        role: 'Bowler',
        is_ipl: 'true',
        is_retired: 'true'
      },
      {
        id: 'RobinUthappa',
        label: 'Robin Uthappa',
        period: '2006-2015',
        role: 'Wicketkeeper-Batsman',
        is_ipl: 'true',
        is_retired: 'trur'
      },
      {
        id: 'WasimJaffer',
        label: 'Wasim Jaffer',
        period: '2000-2008',
        role: 'Batsman',
        is_ipl: 'true',
        is_retired: 'true'
      },
      {
        id: 'PiyushChawla',
        label: 'Piyush Chawla',
        period: '2006-2012',
        role: 'Bowler',
        is_ipl: 'true',
        is_retired: 'true'
      },
      {
        id: 'IshantSharma',
        label: 'Ishant Sharma',
        period: '2007 - Present',
        role: 'Bowler',
        is_ipl: 'true',
        is_retired: 'false'
      },
      {
        id: 'PraveenKumar',
        label: 'Praveen Kumar',
        period: '2007 - 2012',
        role: 'Bowler',
        is_ipl: 'true',
        is_retired: 'true'
      },
      {
        id: 'ManojTiwary',
        label: 'Manoj Tiwary',
        period: '2008 - 2015',
        role: 'Batsman',
        is_ipl: 'true',
        is_retired: 'true'
      },
      {
        id: 'YusufPathan',
        label: 'Yusuf Pathan',
        period: '2007 - 2012',
        role: 'All-Rounder',
        is_ipl: 'true',
        is_retired: 'true'
      },
      {
        id: 'ManpreetGony',
        label: 'Manpreet Gony',
        period: '2008 - 2013',
        role: 'Bowler',
        is_ipl: 'true',
        is_retired: 'true'
      },
      {
        id: 'PragyanOjha',
        label: 'Pragyan Ojha',
        period: '2008 - 2013',
        role: 'Bowler',
        is_ipl: 'true',
        is_retired: 'true'
      },
      {
        id: 'SubramaniamBadrinath',
        label: 'Subramaniam Badrinath',
        period: '2008 - 2012',
        role: 'Batsman',
        is_ipl: 'true',
        is_retired: 'true'
      },
      {
        id: 'RavindraJadeja',
        label: 'Ravindra Jadeja',
        period: '2008 - Present',
        role: 'All-Rounder',
        is_ipl: 'true',
        is_retired: 'false'
      },
      {
        id: 'AjitAgarkar',
        label: 'Ajit Agarkar',
        period: '2000 - 2005',
        role: 'All-Rounder',
        is_ipl: 'true',
        is_retired: 'false'
      },
      {
        id: 'HanumaVihari',
        label: 'Hanuma Vihari',
        period: '2018 - Present',
        role: 'Batsman',
        is_ipl: 'true',
        is_retired: 'false'
      },
      {
        id: 'RahulSanghvi',
        label: 'Rahul Sanghvi',
        period: '2000 - 2001',
        role: 'Bowler'
      },
      {
        id: 'AbhishekNayar',
        label: 'Abhishek Nayar',
        period: '2009 - 2012',
        role: 'All-Rounder',
        is_ipl: 'true',
        is_retired: 'true'
      },
      {
        id: 'SudeepTyagi',
        label: 'Sudeep Tyagi',
        period: '2009 - 2010',
        role: 'Bowler',
        is_ipl: 'true',
        is_retired: 'true'
      },
      {
        id: 'AbhimanyuMithun',
        label: 'Abhimanyu Mithun',
        period: '2010 - 2011',
        role: 'Bowler',
        is_ipl: 'true',
        is_retired: 'true'
      },
      {
        id: 'MuraliVijay',
        label: 'Murali Vijay',
        period: '2008 - 2018',
        role: 'Batsman',
        is_ipl: 'true',
        is_retired: 'true'
      },
      {
        id: 'AshokDinda',
        label: 'Ashok Dinda',
        period: '2010 - 2013',
        role: 'Bowler',
        is_ipl: 'true',
        is_retired: 'true'
      },
      {
        id: 'VinayKumar',
        label: 'Vinay Kumar',
        period: '2010 - 2013',
        role: 'Bowler',
        is_ipl: 'true',
        is_retired: 'true'
      },
      {
        id: 'UmeshYadav',
        label: 'Umesh Yadav',
        period: '2010 - Present',
        role: 'Bowler',
        is_ipl: 'true',
        is_retired: 'false'
      },
      {
        id: 'RavichandranAshwin',
        label: 'Ravichandran Ashwin',
        period: '2010 - Present',
        role: 'Bowler',
        is_ipl: 'true',
        is_retired: 'false'
      },
      {
        id: 'NamanOjha',
        label: 'Naman Ojha',
        period: '2010 - 2015',
        role: 'Wicketkeeper-Batsman',
        is_ipl: 'true',
        is_retired: 'true'
      },
      {
        id: 'PankajSingh',
        label: 'Pankaj Singh',
        period: '2010 - 2014',
        role: 'Bowler',
        is_ipl: 'true',
        is_retired: 'true'
      },
      {
        id: 'SaurabhTiwary',
        label: 'Saurabh Tiwary',
        period: '2010 - 2017',
        role: 'Batsman',
        is_ipl: 'true',
        is_retired: 'true'
      },
      {
        id: 'WriddhimanSaha',
        label: 'Wriddhiman Saha',
        period: '2010 - Present',
        role: 'Wicketkeeper-Batsman',
        is_ipl: 'true',
        is_retired: 'false'
      },
      {
        id: 'VarunAaron',
        label: 'Varun Aaron',
        period: '2011 - 2015',
        role: 'Bowler',
        is_ipl: 'true',
        is_retired: 'true'
      },
      {
        id: 'RahulSharma',
        label: 'Rahul Sharma',
        period: '2011 - 2014',
        role: 'Bowler',
        is_ipl: 'true',
        is_retired: 'true'
      },
      {
        id: 'BhuvneshwarKumar',
        label: 'Bhuvneshwar Kumar',
        period: '2012 - Present',
        role: 'Bowler',
        is_ipl: 'true',
        is_retired: 'false'
      },
      {
        id: 'MohammedShami',
        label: 'Mohammed Shami',
        period: '2013 - Present',
        role: 'Bowler',
        is_ipl: 'true',
        is_retired: 'false'
      },
      {
        id: 'AmbatiRayudu',
        label: 'Ambati Rayudu',
        period: '2013 - 2019',
        role: 'Batsman',
        is_ipl: 'true',
        is_retired: 'true'
      },
      {
        id: 'JaydevUnadkat',
        label: 'Jaydev Unadkat',
        period: '2010 - Present',
        role: 'Bowler',
        is_ipl: 'true',
        is_retired: 'false'
      },
      {
        id: 'CheteshwarPujara',
        label: 'Cheteshwar Pujara',
        period: '2010 - Present',
        role: 'Batsman',
        is_ipl: 'true',
        is_retired: 'false'
      },
      {
        id: 'MohitSharma',
        label: 'Mohit Sharma',
        period: '2013 - 2015',
        role: 'Bowler',
        is_ipl: 'true',
        is_retired: 'true'
      },
      {
        id: 'StuartBinny',
        label: 'Stuart Binny',
        period: '2014 - 2016',
        role: 'All-Rounder',
        is_ipl: 'true',
        is_retired: 'true'
      },
      {
        id: 'ParvezRasool',
        label: 'Parvez Rasool',
        period: '2014 - 2014',
        role: 'All-Rounder',
        is_ipl: 'true',
        is_retired: 'true'
      },
      {
        id: 'AxarPatel',
        label: 'Axar Patel',
        period: '2014 - Present',
        role: 'All-Rounder',
        is_ipl: 'true',
        is_retired: 'false'
      },
      {
        id: 'DhawalKulkarni',
        label: 'Dhawal Kulkarni',
        period: '2014 - 2017',
        role: 'Bowler',
        is_ipl: 'true',
        is_retired: 'true'
      },
      {
        id: 'KarnSharma',
        label: 'Karn Sharma',
        period: '2014 - 2018',
        role: 'Bowler',
        is_ipl: 'true',
        is_retired: 'true'
      },
      {
        id: 'KedarJadhav',
        label: 'Kedar Jadhav',
        period: '2014 - 2021',
        role: 'All-Rounder',
        is_ipl: 'true',
        is_retired: 'true'
      },
      {
        id: 'ManishPandey',
        label: 'Manish Pandey',
        period: '2015 - Present',
        role: 'Batsman',
        is_ipl: 'true',
        is_retired: 'false'
      },
      {
        id: 'BarinderSran',
        label: 'Barinder Sran',
        period: '2016 - 2016',
        role: 'Bowler',
        is_ipl: 'true',
        is_retired: 'true'
      },
      {
        id: 'RishiDhawan',
        label: 'Rishi Dhawan',
        period: '2016 - 2016',
        role: 'All-Rounder',
        is_ipl: 'true',
        is_retired: 'false'
      },
      {
        id: 'GurkeeratSingh',
        label: 'Gurkeerat Singh',
        period: '2015 - 2019',
        role: 'All-Rounder',
        is_ipl: 'true',
        is_retired: 'false'
      },
      {
        id: 'JaspritBumrah',
        label: 'Jasprit Bumrah',
        period: '2016 - Present',
        role: 'Bowler',
        is_ipl: 'true',
        is_retired: 'false'
      },
      {
        id: 'YuzvendraChahal',
        label: 'Yuzvendra Chahal',
        period: '2016 - Present',
        role: 'Bowler',
        is_ipl: 'true',
        is_retired: 'false'
      },
      {
        id: 'KarunNair',
        label: 'Karun Nair',
        period: '2016 - 2018',
        role: 'Batsman',
        is_ipl: 'true',
        is_retired: 'false'
      },
      {
        id: 'FaizFazal',
        label: 'Faiz Fazal',
        period: '2016 - 2016',
        role: 'Batsman',
        is_ipl: 'true',
        is_retired: 'true'
      },
      {
        id: 'JayantYadav',
        label: 'Jayant Yadav',
        period: '2016 - Present',
        role: 'All-Rounder',
        is_ipl: 'true',
        is_retired: 'false'
      },
      {
        id: 'KuldeepYadav',
        label: 'Kuldeep Yadav',
        period: '2017 - Present',
        role: 'Bowler',
        is_ipl: 'true',
        is_retired: 'false'
      },
      {
        id: 'ShardulThakur',
        label: 'Shardul Thakur',
        period: '2016 - Present',
        role: 'Bowler',
        is_ipl: 'true',
        is_retired: 'false'
      },
      {
        id: 'ShreyasIyer',
        label: 'Shreyas Iyer',
        period: '2017 - Present',
        role: 'Batsman',
        is_ipl: 'true',
        is_retired: 'false'
      },
      // {
      //   id: 'WashingtonSundar',
      //   label: 'Washington Sundar',
      //   period: '2017 - Present',
      //   role: 'All-Rounder',
      //   is_ipl: 'true',
      //   is_retired: 'false'
      // },
      {
        id: 'SiddarthKaul',
        label: 'Siddarth Kaul',
        period: '2018 - Present',
        role: 'Bowler',
        is_ipl: 'true',
        is_retired: 'false'
      },
      {
        id: 'KhaleelAhmed',
        label: 'Khaleel Ahmed',
        period: '2018 - Present',
        role: 'Bowler',
        is_ipl: 'true',
        is_retired: 'false'
      },
      {
        id: 'DeepakChahar',
        label: 'Deepak Chahar',
        period: '2018 - Present',
        role: 'Bowler',
        is_ipl: 'true',
        is_retired: 'false'
      },
      {
        id: 'RishabhPant',
        label: 'Rishabh Pant',
        period: '2017 - Present',
        role: 'Wicketkeeper-Batsman',
        is_ipl: 'true',
        is_retired: 'false'
      },
      {
        id: 'MohammedSiraj',
        label: 'Mohammed Siraj',
        period: '2017 - Present',
        role: 'Bowler',
        is_ipl: 'true',
        is_retired: 'false'
      },
      {
        id: 'VijayShankar',
        label: 'Vijay Shankar',
        period: '2018 - Present',
        role: 'All-Rounder',
        is_ipl: 'true',
        is_retired: 'false'
      },
      {
        id: 'ShubmanGill',
        label: 'Shubman Gill',
        period: '2019 - Present',
        role: 'Batsman',
        is_ipl: 'true',
        is_retired: 'false'
      },
      {
        id: 'ShivamDube',
        label: 'Shivam Dube',
        period: '2019 - present',
        role: 'All-Rounder',
        is_ipl: 'true',
        is_retired: 'false'
      },
      {
        id: 'NavdeepSaini',
        label: 'Navdeep Saini',
        period: '2019 - Present',
        role: 'Bowler',
        is_ipl: 'true',
        is_retired: 'false'
      },
      {
        id: 'MayankAgarwal',
        label: 'Mayank Agarwal',
        period: '2018 - Present',
        role: 'Batsman',
        is_ipl: 'true',
        is_retired: 'false'
      },
      {
        id: 'PrithviShaw',
        label: 'Prithvi Shaw',
        period: '2018 - Present',
        role: 'Batsman',
        is_ipl: 'true',
        is_retired: 'false'
      },
      {
        id: 'TNatarajan',
        label: 'T. Natarajan',
        period: '2020 - Present',
        role: 'Bowler',
        is_ipl: 'true',
        is_retired: 'false'
      },
      {
        id: 'KrunalPandya',
        label: 'Krunal Pandya',
        period: '2018 - Present',
        role: 'All-Rounder',
        is_ipl: 'true',
        is_retired: 'false'
      },
      {
        id: 'PrasidhKrishna',
        label: 'Prasidh Krishna',
        period: '2021 - Present',
        role: 'Bowler',
        is_ipl: 'true',
        is_retired: 'false'
      },
      {
        id: 'IshanKishan',
        label: 'Ishan Kishan',
        period: '2020 - Present',
        role: 'Wicketkeeper-Batsman',
        is_ipl: 'true',
        is_retired: 'false'
      },
      {
        id: 'SuryakumarYadav',
        label: 'Suryakumar Yadav',
        period: '2021 - Present',
        role: 'Batsman',
        is_ipl: 'true',
        is_retired: 'false'
      },
      {
        id: 'RahulChahar',
        label: 'Rahul Chahar',
        period: '2019 - Present',
        role: 'Bowler',
        is_ipl: 'true',
        is_retired: 'false'
      },
      {
        id: 'KrishnappaGowtham',
        label: 'Krishnappa Gowtham',
        period: '2017 - Present',
        role: 'All-Rounder',
        is_ipl: 'true',
        is_retired: 'false'
      },
      {
        id: 'NitishRana',
        label: 'Nitish Rana',
        period: '2016 - Present',
        role: 'Batsman',
        is_ipl: 'true',
        is_retired: 'false'
      },
      {
        id: 'ChetanSakariya',
        label: 'Chetan Sakariya',
        period: '2021 - Present',
        role: 'Bowler',
        is_ipl: 'true',
        is_retired: 'false'
      },
      {
        id: 'SanjuSamson',
        label: 'Sanju Samson',
        period: '2015 - Present',
        role: 'Wicketkeeper-Batsman',
        is_ipl: 'true',
        is_retired: 'false'
      },
      {
        id: 'VenkateshIyer',
        label: 'Venkatesh Iyer',
        period: '2021 - Present',
        role: 'All-Rounder',
        is_ipl: 'true',
        is_retired: 'false'
      },
      {
        id: 'DeepakHooda',
        label: 'Deepak Hooda',
        period: '2016 - present',
        role: 'All-Rounder',
        is_ipl: 'true',
        is_retired: 'false'
      },
      {
        id: 'AveshKhan',
        label: 'Avesh Khan',
        period: '2021 - Present',
        role: 'Bowler',
        is_ipl: 'true',
        is_retired: 'false'
      },
      {
        id: 'RuturajGaikwad',
        label: 'Ruturaj Gaikwad',
        period: '2020 - Present',
        role: 'Batsman',
        is_ipl: 'true',
        is_retired: 'false'
      },
      // {
      //   id: 'RaviBishnoi',
      //   label: 'Ravi Bishnoi',
      //   period: '2020 - Present',
      //   role: 'Bowler',
      //   is_ipl: 'true',
      //   is_retired: 'false'
      // },
      {
        id: 'ShahbazAhmed',
        label: 'Shahbaz Ahmed',
        period: '2021 - Present',
        role: 'All-Rounder',
        is_ipl: 'true',
        is_retired: 'false'
      },
      {
        id: 'ArshdeepSingh',
        label: 'Arshdeep Singh',
        period: '2019 - Present',
        role: 'Bowler',
        is_ipl: 'true',
        is_retired: 'false'
      },
      {
        id: 'UmranMalik',
        label: 'Umran Malik',
        period: '2021 - Present',
        role: 'Bowler',
        is_ipl: 'true',
        is_retired: 'false'
      },
      {
        id: 'RaviBishnoi',
        label: 'ravi Bishnoi',
        period: '2023-present',
        role: 'Bowler',
        is_ipl: 'true',
        is_retired: 'false'
      },
      {
        id: 'KuldeepSen',
        label: 'Kuldeep Sen',
        period: '2022-present',
        role: 'Bowler',
        is_ipl: 'true',
        is_retired: 'false'
      }
    ],
    links: [
      // cap1 AnilKumble
      { source: 'AnilKumble', target: 'HarbhajanSingh' },
      { source: 'AnilKumble', target: 'JavagalSrinath' },
      { source: 'AnilKumble', target: 'VirenderSehwag' },
      { source: 'AnilKumble', target: 'VVSLaxman' },
      { source: 'AnilKumble', target: 'DevangGandhi' },
      { source: 'AnilKumble', target: 'SameerDighe' },
      { source: 'AnilKumble', target: 'SridharanSriram' },
      { source: 'AnilKumble', target: 'HemangBadani' },
      { source: 'AnilKumble', target: 'AmitBhandari' },
      { source: 'AnilKumble', target: 'VijayDahiya' },
      { source: 'AnilKumble', target: 'ZaheerKhan' },
      { source: 'AnilKumble', target: 'ReetinderSinghSodhi' },
      { source: 'AnilKumble', target: 'DineshMongia' },
      { source: 'AnilKumble', target: 'ShivSunderDas' },
      { source: 'AnilKumble', target: 'DeepDasgupta' },
      { source: 'AnilKumble', target: 'AjayRatra' },
      { source: 'AnilKumble', target: 'MohammadKaif' },
      { source: 'AnilKumble', target: 'SarandeepSingh' },
      { source: 'AnilKumble', target: 'MSDhoni' },

      // Cap2 RahulDravid
      { source: 'RahulDravid', target: 'MSDhoni' },
      { source: 'RahulDravid', target: 'SouravGanguly' },
      { source: 'RahulDravid', target: 'DineshKarthik' },
      { source: 'RahulDravid', target: 'VirenderSehwag' },
      { source: 'RahulDravid', target: 'RobinUthappa' },
      { source: 'RahulDravid', target: 'YuvrajSingh' },
      { source: 'RahulDravid', target: 'IrfanPathan' },
      { source: 'RahulDravid', target: 'AjitAgarkar' },
      { source: 'RahulDravid', target: 'HarbhajanSingh' },
      { source: 'RahulDravid', target: 'ZaheerKhan' },
      { source: 'RahulDravid', target: 'AnilKumble' },
      { source: 'RahulDravid', target: 'MunafPatel' },
      { source: 'RahulDravid', target: 'SSreesanth' },
      { source: 'RahulDravid', target: 'SachinTendulkar' },

      // Cap3 MSDhoni
      { source: 'MSDhoni', target: 'VirenderSehwag' },
      { source: 'MSDhoni', target: 'ShikharDhawan' },
      { source: 'MSDhoni', target: 'SridharanSriram' },
      { source: 'MSDhoni', target: 'ZaheerKhan' },
      { source: 'MSDhoni', target: 'YuvrajSingh' },
      { source: 'MSDhoni', target: 'AshishNehra' },
      { source: 'MSDhoni', target: 'MohammadKaif' },
      { source: 'MSDhoni', target: 'SarandeepSingh' },
      { source: 'MSDhoni', target: 'MuraliKartik' },
      { source: 'MSDhoni', target: 'JaiPrakashYadav' },
      { source: 'MSDhoni', target: 'LakshmipathyBalaji' },
      { source: 'MSDhoni', target: 'ParthivPatel' },
      { source: 'MSDhoni', target: 'AmitMishra' },
      { source: 'MSDhoni', target: 'AbhijitKale' },
      { source: 'MSDhoni', target: 'IrfanPathan' },
      { source: 'MSDhoni', target: 'RohanGavaskar' },
      { source: 'MSDhoni', target: 'RameshPowar' },
      { source: 'MSDhoni', target: 'DineshKarthik' },
      { source: 'MSDhoni', target: 'JoginderSharma' },
      { source: 'MSDhoni', target: 'YalakaVenugopalRao' },
      { source: 'MSDhoni', target: 'RPSingh' },
      { source: 'MSDhoni', target: 'SSreesanth' },
      { source: 'MSDhoni', target: 'MunafPatel' },
      { source: 'MSDhoni', target: 'VRVSingh' },
      { source: 'MSDhoni', target: 'RobinUthappa' },
      { source: 'MSDhoni', target: 'WasimJaffer' },
      { source: 'MSDhoni', target: 'PiyushChawla' },
      { source: 'MSDhoni', target: 'IshantSharma' },
      { source: 'MSDhoni', target: 'PraveenKumar' },
      { source: 'MSDhoni', target: 'ManojTiwary' },
      { source: 'MSDhoni', target: 'YusufPathan' },
      { source: 'MSDhoni', target: 'ManpreetGony' },
      { source: 'MSDhoni', target: 'PragyanOjha' },
      { source: 'MSDhoni', target: 'SubramaniamBadrinath' },
      { source: 'MSDhoni', target: 'RavindraJadeja' },
      { source: 'MSDhoni', target: 'AjitAgarkar' },
      { source: 'MSDhoni', target: 'HanumaVihari' },
      { source: 'MSDhoni', target: 'AbhishekNayar' },
      { source: 'MSDhoni', target: 'SudeepTyagi' },
      { source: 'MSDhoni', target: 'AbhimanyuMithun' },
      { source: 'MSDhoni', target: 'MuraliVijay' },
      { source: 'MSDhoni', target: 'AshokDinda' },
      { source: 'MSDhoni', target: 'VinayKumar' },
      { source: 'MSDhoni', target: 'UmeshYadav' },
      { source: 'MSDhoni', target: 'RavichandranAshwin' },
      { source: 'MSDhoni', target: 'NamanOjha' },
      { source: 'MSDhoni', target: 'PankajSingh' },
      { source: 'MSDhoni', target: 'SaurabhTiwary' },
      { source: 'MSDhoni', target: 'WriddhimanSaha' },
      { source: 'MSDhoni', target: 'VarunAaron' },
      { source: 'MSDhoni', target: 'RahulSharma' },
      { source: 'MSDhoni', target: 'BhuvneshwarKumar' },
      { source: 'MSDhoni', target: 'MohammedShami' },
      { source: 'MSDhoni', target: 'AmbatiRayudu' },
      { source: 'MSDhoni', target: 'JaydevUnadkat' },
      { source: 'MSDhoni', target: 'CheteshwarPujara' },
      { source: 'MSDhoni', target: 'MohitSharma' },
      { source: 'MSDhoni', target: 'StuartBinny' },
      { source: 'MSDhoni', target: 'ParvezRasool' },
      { source: 'MSDhoni', target: 'AxarPatel' },
      { source: 'MSDhoni', target: 'DhawalKulkarni' },
      { source: 'MSDhoni', target: 'KarnSharma' },
      { source: 'MSDhoni', target: 'KedarJadhav' },
      { source: 'MSDhoni', target: 'ManishPandey' },
      { source: 'MSDhoni', target: 'BarinderSran' },
      { source: 'MSDhoni', target: 'RishiDhawan' },
      { source: 'MSDhoni', target: 'GurkeeratSingh' },
      { source: 'MSDhoni', target: 'JaspritBumrah' },
      { source: 'MSDhoni', target: 'YuzvendraChahal' },
      { source: 'MSDhoni', target: 'KarunNair' },
      { source: 'MSDhoni', target: 'FaizFazal' },
      { source: 'MSDhoni', target: 'JayantYadav' },
      { source: 'MSDhoni', target: 'KuldeepYadav' },
      { source: 'MSDhoni', target: 'ShardulThakur' },
      { source: 'MSDhoni', target: 'ShreyasIyer' },
      { source: 'MSDhoni', target: 'SiddarthKaul' },
      { source: 'MSDhoni', target: 'KhaleelAhmed' },
      { source: 'MSDhoni', target: 'DeepakChahar' },
      { source: 'MSDhoni', target: 'RishabhPant' },
      { source: 'MSDhoni', target: 'MohammedSiraj' },
      { source: 'MSDhoni', target: 'VijayShankar' },
      { source: 'MSDhoni', target: 'ShubmanGill' },
      { source: 'MSDhoni', target: 'ShivamDube' },
      { source: 'MSDhoni', target: 'NavdeepSaini' },
      { source: 'MSDhoni', target: 'MayankAgarwal' },
      { source: 'MSDhoni', target: 'PrithviShaw' },
      { source: 'MSDhoni', target: 'TNatarajan' },
      { source: 'MSDhoni', target: 'KrunalPandya' },
      { source: 'MSDhoni', target: 'PrasidhKrishna' },
      { source: 'MSDhoni', target: 'IshanKishan' },
      { source: 'MSDhoni', target: 'SuryakumarYadav' },
      { source: 'MSDhoni', target: 'RahulChahar' },
      { source: 'MSDhoni', target: 'KrishnappaGowtham' },
      { source: 'MSDhoni', target: 'NitishRana' },
      { source: 'MSDhoni', target: 'SanjuSamson' },
      { source: 'MSDhoni', target: 'DeepakHooda' },
      { source: 'MSDhoni', target: 'RuturajGaikwad' },
      { source: 'MSDhoni', target: 'RaviBishnoi' },
      { source: 'MSDhoni', target: 'ArshdeepSingh' },
      { source: 'MSDhoni', target: 'HarbhajanSingh' },

      // Cap4 SureshRaina
      { source: 'SureshRaina', target: 'HarbhajanSingh' },
      { source: 'SureshRaina', target: 'VirenderSehwag' },
      { source: 'SureshRaina', target: 'ShikharDhawan' },
      { source: 'SureshRaina', target: 'ZaheerKhan' },
      { source: 'SureshRaina', target: 'YuvrajSingh' },
      { source: 'SureshRaina', target: 'AshishNehra' },
      { source: 'SureshRaina', target: 'MuraliKartik' },
      { source: 'SureshRaina', target: 'LakshmipathyBalaji' },
      { source: 'SureshRaina', target: 'ParthivPatel' },
      { source: 'SureshRaina', target: 'AmitMishra' },
      { source: 'SureshRaina', target: 'IrfanPathan' },
      { source: 'SureshRaina', target: 'RameshPowar' },
      { source: 'SureshRaina', target: 'DineshKarthik' },
      { source: 'SureshRaina', target: 'JoginderSharma' },
      { source: 'SureshRaina', target: 'YalakaVenugopalRao' },
      { source: 'SureshRaina', target: 'RPSingh' },
      { source: 'SureshRaina', target: 'SSreesanth' },
      { source: 'SureshRaina', target: 'MunafPatel' },
      { source: 'SureshRaina', target: 'RobinUthappa' },
      { source: 'SureshRaina', target: 'WasimJaffer' },
      { source: 'SureshRaina', target: 'PiyushChawla' },
      { source: 'SureshRaina', target: 'IshantSharma' },
      { source: 'SureshRaina', target: 'PraveenKumar' },
      { source: 'SureshRaina', target: 'ManojTiwary' },
      { source: 'SureshRaina', target: 'YusufPathan' },
      { source: 'SureshRaina', target: 'ManpreetGony' },
      { source: 'SureshRaina', target: 'PragyanOjha' },
      { source: 'SureshRaina', target: 'SubramaniamBadrinath' },
      { source: 'SureshRaina', target: 'RavindraJadeja' },
      { source: 'SureshRaina', target: 'AjitAgarkar' },
      { source: 'SureshRaina', target: 'AbhishekNayar' },
      { source: 'SureshRaina', target: 'SudeepTyagi' },
      { source: 'SureshRaina', target: 'MuraliVijay' },
      { source: 'SureshRaina', target: 'AshokDinda' },
      { source: 'SureshRaina', target: 'VinayKumar' },
      { source: 'SureshRaina', target: 'UmeshYadav' },
      { source: 'SureshRaina', target: 'RavichandranAshwin' },
      { source: 'SureshRaina', target: 'NamanOjha' },
      { source: 'SureshRaina', target: 'PankajSingh' },
      { source: 'SureshRaina', target: 'WriddhimanSaha' },
      { source: 'SureshRaina', target: 'BhuvneshwarKumar' },
      { source: 'SureshRaina', target: 'MohammedShami' },
      { source: 'SureshRaina', target: 'AmbatiRayudu' },
      { source: 'SureshRaina', target: 'JaydevUnadkat' },
      { source: 'SureshRaina', target: 'CheteshwarPujara' },
      { source: 'SureshRaina', target: 'StuartBinny' },
      { source: 'SureshRaina', target: 'ParvezRasool' },
      { source: 'SureshRaina', target: 'AxarPatel' },
      { source: 'SureshRaina', target: 'KedarJadhav' },
      { source: 'SureshRaina', target: 'ManishPandey' },
      { source: 'SureshRaina', target: 'JaspritBumrah' },
      { source: 'SureshRaina', target: 'YuzvendraChahal' },
      { source: 'SureshRaina', target: 'DeepakChahar' },
      { source: 'SureshRaina', target: 'MohammedSiraj' },
      { source: 'SureshRaina', target: 'VijayShankar' },
      { source: 'SureshRaina', target: 'RahulChahar' },
      { source: 'SureshRaina', target: 'DeepakHooda' },
      // Cap5 GautamGambhir

      { source: 'GautamGambhir', target: 'HarbhajanSingh' },
      { source: 'GautamGambhir', target: 'JavagalSrinath' },
      { source: 'GautamGambhir', target: 'VirenderSehwag' },
      { source: 'GautamGambhir', target: 'VVSLaxman' },
      { source: 'GautamGambhir', target: 'ShikharDhawan' },
      { source: 'GautamGambhir', target: 'SridharanSriram' },
      { source: 'GautamGambhir', target: 'HemangBadani' },
      { source: 'GautamGambhir', target: 'ZaheerKhan' },
      { source: 'GautamGambhir', target: 'YuvrajSingh' },
      { source: 'GautamGambhir', target: 'DineshMongia' },
      { source: 'GautamGambhir', target: 'AshishNehra' },
      { source: 'GautamGambhir', target: 'SanjayBangar' },
      { source: 'GautamGambhir', target: 'MohammadKaif' },
      { source: 'GautamGambhir', target: 'MuraliKartik' },
      { source: 'GautamGambhir', target: 'LakshmipathyBalaji' },
      { source: 'GautamGambhir', target: 'ParthivPatel' },
      { source: 'GautamGambhir', target: 'AmitMishra' },
      { source: 'GautamGambhir', target: 'IrfanPathan' },
      { source: 'GautamGambhir', target: 'RameshPowar' },
      { source: 'GautamGambhir', target: 'DineshKarthik' },
      { source: 'GautamGambhir', target: 'JoginderSharma' },
      { source: 'GautamGambhir', target: 'YalakaVenugopalRao' },
      { source: 'GautamGambhir', target: 'RPSingh' },
      { source: 'GautamGambhir', target: 'SSreesanth' },
      { source: 'GautamGambhir', target: 'MunafPatel' },
      { source: 'GautamGambhir', target: 'VRVSingh' },
      { source: 'GautamGambhir', target: 'RobinUthappa' },
      { source: 'GautamGambhir', target: 'WasimJaffer' },
      { source: 'GautamGambhir', target: 'PiyushChawla' },
      { source: 'GautamGambhir', target: 'IshantSharma' },
      { source: 'GautamGambhir', target: 'PraveenKumar' },
      { source: 'GautamGambhir', target: 'ManojTiwary' },
      { source: 'GautamGambhir', target: 'YusufPathan' },
      { source: 'GautamGambhir', target: 'ManpreetGony' },
      { source: 'GautamGambhir', target: 'PragyanOjha' },
      { source: 'GautamGambhir', target: 'SubramaniamBadrinath' },
      { source: 'GautamGambhir', target: 'RavindraJadeja' },
      { source: 'GautamGambhir', target: 'AjitAgarkar' },
      { source: 'GautamGambhir', target: 'AbhishekNayar' },
      { source: 'GautamGambhir', target: 'AbhimanyuMithun' },
      { source: 'GautamGambhir', target: 'MuraliVijay' },
      { source: 'GautamGambhir', target: 'AshokDinda' },
      { source: 'GautamGambhir', target: 'VinayKumar' },
      { source: 'GautamGambhir', target: 'UmeshYadav' },
      { source: 'GautamGambhir', target: 'RavichandranAshwin' },
      { source: 'GautamGambhir', target: 'NamanOjha' },
      { source: 'GautamGambhir', target: 'PankajSingh' },
      { source: 'GautamGambhir', target: 'WriddhimanSaha' },
      { source: 'GautamGambhir', target: 'CheteshwarPujara' },

      // Cap6 ViratKohli
      { source: 'ViratKohli', target: 'HarbhajanSingh' },
      { source: 'ViratKohli', target: 'VirenderSehwag' },
      { source: 'ViratKohli', target: 'ShikharDhawan' },
      { source: 'ViratKohli', target: 'ZaheerKhan' },
      { source: 'ViratKohli', target: 'YuvrajSingh' },
      { source: 'ViratKohli', target: 'AshishNehra' },
      { source: 'ViratKohli', target: 'MuraliKartik' },
      { source: 'ViratKohli', target: 'LakshmipathyBalaji' },
      { source: 'ViratKohli', target: 'ParthivPatel' },
      { source: 'ViratKohli', target: 'AmitMishra' },
      { source: 'ViratKohli', target: 'IrfanPathan' },
      { source: 'ViratKohli', target: 'DineshKarthik' },
      { source: 'ViratKohli', target: 'RPSingh' },
      { source: 'ViratKohli', target: 'SSreesanth' },
      { source: 'ViratKohli', target: 'MunafPatel' },
      { source: 'ViratKohli', target: 'RobinUthappa' },
      { source: 'ViratKohli', target: 'WasimJaffer' },
      { source: 'ViratKohli', target: 'PiyushChawla' },
      { source: 'ViratKohli', target: 'IshantSharma' },
      { source: 'ViratKohli', target: 'PraveenKumar' },
      { source: 'ViratKohli', target: 'ManojTiwary' },
      { source: 'ViratKohli', target: 'YusufPathan' },
      { source: 'ViratKohli', target: 'ManpreetGony' },
      { source: 'ViratKohli', target: 'PragyanOjha' },
      { source: 'ViratKohli', target: 'SubramaniamBadrinath' },
      { source: 'ViratKohli', target: 'RavindraJadeja' },
      { source: 'ViratKohli', target: 'AbhishekNayar' },
      { source: 'ViratKohli', target: 'MuraliVijay' },
      { source: 'ViratKohli', target: 'AshokDinda' },
      { source: 'ViratKohli', target: 'VinayKumar' },
      { source: 'ViratKohli', target: 'UmeshYadav' },
      { source: 'ViratKohli', target: 'RavichandranAshwin' },
      { source: 'ViratKohli', target: 'NamanOjha' },
      { source: 'ViratKohli', target: 'SaurabhTiwary' },
      { source: 'ViratKohli', target: 'WriddhimanSaha' },
      { source: 'ViratKohli', target: 'VarunAaron' },
      { source: 'ViratKohli', target: 'RahulSharma' },
      { source: 'ViratKohli', target: 'BhuvneshwarKumar' },
      { source: 'ViratKohli', target: 'MohammedShami' },
      { source: 'ViratKohli', target: 'AmbatiRayudu' },
      { source: 'ViratKohli', target: 'JaydevUnadkat' },
      { source: 'ViratKohli', target: 'CheteshwarPujara' },
      { source: 'ViratKohli', target: 'StuartBinny' },
      { source: 'ViratKohli', target: 'AxarPatel' },
      { source: 'ViratKohli', target: 'DhawalKulkarni' },
      { source: 'ViratKohli', target: 'KarnSharma' },
      { source: 'ViratKohli', target: 'KedarJadhav' },
      { source: 'ViratKohli', target: 'ManishPandey' },
      { source: 'ViratKohli', target: 'GurkeeratSingh' },
      { source: 'ViratKohli', target: 'JaspritBumrah' },
      { source: 'ViratKohli', target: 'YuzvendraChahal' },
      { source: 'ViratKohli', target: 'KarunNair' },
      { source: 'ViratKohli', target: 'FaizFazal' },
      { source: 'ViratKohli', target: 'JayantYadav' },
      { source: 'ViratKohli', target: 'KuldeepYadav' },
      { source: 'ViratKohli', target: 'ShardulThakur' },
      { source: 'ViratKohli', target: 'ShreyasIyer' },
      { source: 'ViratKohli', target: 'SiddarthKaul' },
      { source: 'ViratKohli', target: 'KhaleelAhmed' },
      { source: 'ViratKohli', target: 'DeepakChahar' },
      { source: 'ViratKohli', target: 'RishabhPant' },
      { source: 'ViratKohli', target: 'MohammedSiraj' },
      { source: 'ViratKohli', target: 'VijayShankar' },
      { source: 'ViratKohli', target: 'ShubmanGill' },
      { source: 'ViratKohli', target: 'ShivamDube' },
      { source: 'ViratKohli', target: 'NavdeepSaini' },
      { source: 'ViratKohli', target: 'MayankAgarwal' },
      { source: 'ViratKohli', target: 'PrithviShaw' },
      { source: 'ViratKohli', target: 'TNatarajan' },
      { source: 'ViratKohli', target: 'KrunalPandya' },
      { source: 'ViratKohli', target: 'PrasidhKrishna' },
      { source: 'ViratKohli', target: 'IshanKishan' },
      { source: 'ViratKohli', target: 'SuryakumarYadav' },
      { source: 'ViratKohli', target: 'RahulChahar' },
      { source: 'ViratKohli', target: 'KrishnappaGowtham' },
      { source: 'ViratKohli', target: 'NitishRana' },
      { source: 'ViratKohli', target: 'ChetanSakariya' },
      { source: 'ViratKohli', target: 'SanjuSamson' },
      { source: 'ViratKohli', target: 'VenkateshIyer' },
      { source: 'ViratKohli', target: 'DeepakHooda' },
      { source: 'ViratKohli', target: 'AveshKhan' },
      { source: 'ViratKohli', target: 'RuturajGaikwad' },
      { source: 'ViratKohli', target: 'RaviBishnoi' },
      { source: 'ViratKohli', target: 'ShahbazAhmed' },
      { source: 'ViratKohli', target: 'ArshdeepSingh' },
      { source: 'ViratKohli', target: 'UmranMalik' },
      { source: 'ViratKohli', target: 'KuldeepSen' },

      // Cap7 AjinkyaRahane
      { source: 'AjinkyaRahane', target: 'HarbhajanSingh' },
      { source: 'AjinkyaRahane', target: 'VirenderSehwag' },
      { source: 'AjinkyaRahane', target: 'ShikharDhawan' },
      { source: 'AjinkyaRahane', target: 'ZaheerKhan' },
      { source: 'AjinkyaRahane', target: 'YuvrajSingh' },
      { source: 'AjinkyaRahane', target: 'AshishNehra' },
      { source: 'AjinkyaRahane', target: 'MohammadKaif' },
      { source: 'AjinkyaRahane', target: 'MuraliKartik' },
      { source: 'AjinkyaRahane', target: 'LakshmipathyBalaji' },
      { source: 'AjinkyaRahane', target: 'ParthivPatel' },
      { source: 'AjinkyaRahane', target: 'AmitMishra' },
      { source: 'AjinkyaRahane', target: 'IrfanPathan' },
      { source: 'AjinkyaRahane', target: 'DineshKarthik' },
      { source: 'AjinkyaRahane', target: 'RPSingh' },
      { source: 'AjinkyaRahane', target: 'SSreesanth' },
      { source: 'AjinkyaRahane', target: 'MunafPatel' },
      { source: 'AjinkyaRahane', target: 'RobinUthappa' },
      { source: 'AjinkyaRahane', target: 'WasimJaffer' },
      { source: 'AjinkyaRahane', target: 'PiyushChawla' },
      { source: 'AjinkyaRahane', target: 'IshantSharma' },
      { source: 'AjinkyaRahane', target: 'PraveenKumar' },
      { source: 'AjinkyaRahane', target: 'ManojTiwary' },
      { source: 'AjinkyaRahane', target: 'YusufPathan' },
      { source: 'AjinkyaRahane', target: 'PragyanOjha' },
      { source: 'AjinkyaRahane', target: 'RavindraJadeja' },
      { source: 'AjinkyaRahane', target: 'HanumaVihari' },
      { source: 'AjinkyaRahane', target: 'MuraliVijay' },
      { source: 'AjinkyaRahane', target: 'AshokDinda' },
      { source: 'AjinkyaRahane', target: 'VinayKumar' },
      { source: 'AjinkyaRahane', target: 'UmeshYadav' },
      { source: 'AjinkyaRahane', target: 'RavichandranAshwin' },
      { source: 'AjinkyaRahane', target: 'NamanOjha' },
      { source: 'AjinkyaRahane', target: 'SaurabhTiwary' },
      { source: 'AjinkyaRahane', target: 'WriddhimanSaha' },
      { source: 'AjinkyaRahane', target: 'VarunAaron' },
      { source: 'AjinkyaRahane', target: 'RahulSharma' },
      { source: 'AjinkyaRahane', target: 'BhuvneshwarKumar' },
      { source: 'AjinkyaRahane', target: 'MohammedShami' },
      { source: 'AjinkyaRahane', target: 'AmbatiRayudu' },
      { source: 'AjinkyaRahane', target: 'JaydevUnadkat' },
      { source: 'AjinkyaRahane', target: 'CheteshwarPujara' },
      { source: 'AjinkyaRahane', target: 'MohitSharma' },
      { source: 'AjinkyaRahane', target: 'StuartBinny' },
      { source: 'AjinkyaRahane', target: 'AxarPatel' },
      { source: 'AjinkyaRahane', target: 'DhawalKulkarni' },
      { source: 'AjinkyaRahane', target: 'KarnSharma' },
      { source: 'AjinkyaRahane', target: 'KedarJadhav' },
      { source: 'AjinkyaRahane', target: 'ManishPandey' },
      { source: 'AjinkyaRahane', target: 'BarinderSran' },
      { source: 'AjinkyaRahane', target: 'RishiDhawan' },
      { source: 'AjinkyaRahane', target: 'GurkeeratSingh' },
      { source: 'AjinkyaRahane', target: 'JaspritBumrah' },
      { source: 'AjinkyaRahane', target: 'YuzvendraChahal' },
      { source: 'AjinkyaRahane', target: 'KarunNair' },
      { source: 'AjinkyaRahane', target: 'FaizFazal' },
      { source: 'AjinkyaRahane', target: 'JayantYadav' },
      { source: 'AjinkyaRahane', target: 'KuldeepYadav' },
      { source: 'AjinkyaRahane', target: 'ShardulThakur' },
      { source: 'AjinkyaRahane', target: 'ShreyasIyer' },
      { source: 'AjinkyaRahane', target: 'SiddarthKaul' },
      { source: 'AjinkyaRahane', target: 'KhaleelAhmed' },
      { source: 'AjinkyaRahane', target: 'DeepakChahar' },
      { source: 'AjinkyaRahane', target: 'RishabhPant' },
      { source: 'AjinkyaRahane', target: 'MohammedSiraj' },
      { source: 'AjinkyaRahane', target: 'VijayShankar' },
      { source: 'AjinkyaRahane', target: 'ShubmanGill' },
      { source: 'AjinkyaRahane', target: 'ShivamDube' },
      { source: 'AjinkyaRahane', target: 'NavdeepSaini' },
      { source: 'AjinkyaRahane', target: 'MayankAgarwal' },
      { source: 'AjinkyaRahane', target: 'PrithviShaw' },
      { source: 'AjinkyaRahane', target: 'TNatarajan' },
      { source: 'AjinkyaRahane', target: 'KrunalPandya' },
      { source: 'AjinkyaRahane', target: 'PrasidhKrishna' },
      { source: 'AjinkyaRahane', target: 'IshanKishan' },
      { source: 'AjinkyaRahane', target: 'SuryakumarYadav' },
      { source: 'AjinkyaRahane', target: 'RahulChahar' },
      { source: 'AjinkyaRahane', target: 'KrishnappaGowtham' },
      { source: 'AjinkyaRahane', target: 'NitishRana' },
      { source: 'AjinkyaRahane', target: 'ChetanSakariya' },
      { source: 'AjinkyaRahane', target: 'SanjuSamson' },
      { source: 'AjinkyaRahane', target: 'VenkateshIyer' },
      { source: 'AjinkyaRahane', target: 'DeepakHooda' },
      { source: 'AjinkyaRahane', target: 'AveshKhan' },
      { source: 'AjinkyaRahane', target: 'RuturajGaikwad' },
      { source: 'AjinkyaRahane', target: 'RaviBishnoi' },
      { source: 'AjinkyaRahane', target: 'ShahbazAhmed' },
      { source: 'AjinkyaRahane', target: 'ArshdeepSingh' },
      { source: 'AjinkyaRahane', target: 'UmranMalik' },
      { source: 'AjinkyaRahane', target: 'KuldeepSen' },

      // Cap8 RohitSharma
      { source: 'RohitSharma', target: 'HarbhajanSingh' },
      { source: 'RohitSharma', target: 'VirenderSehwag' },
      { source: 'RohitSharma', target: 'ShikharDhawan' },
      { source: 'RohitSharma', target: 'ZaheerKhan' },
      { source: 'RohitSharma', target: 'YuvrajSingh' },
      { source: 'RohitSharma', target: 'AshishNehra' },
      { source: 'RohitSharma', target: 'MohammadKaif' },
      { source: 'RohitSharma', target: 'MuraliKartik' },
      { source: 'RohitSharma', target: 'ParthivPatel' },
      { source: 'RohitSharma', target: 'AmitMishra' },
      { source: 'RohitSharma', target: 'IrfanPathan' },
      { source: 'RohitSharma', target: 'DineshKarthik' },
      { source: 'RohitSharma', target: 'RPSingh' },
      { source: 'RohitSharma', target: 'SSreesanth' },
      { source: 'RohitSharma', target: 'MunafPatel' },
      { source: 'RohitSharma', target: 'RobinUthappa' },
      { source: 'RohitSharma', target: 'WasimJaffer' },
      { source: 'RohitSharma', target: 'IshantSharma' },
      { source: 'RohitSharma', target: 'PraveenKumar' },
      { source: 'RohitSharma', target: 'ManojTiwary' },
      { source: 'RohitSharma', target: 'RavindraJadeja' },
      { source: 'RohitSharma', target: 'HanumaVihari' },
      { source: 'RohitSharma', target: 'MuraliVijay' },
      { source: 'RohitSharma', target: 'UmeshYadav' },
      { source: 'RohitSharma', target: 'RavichandranAshwin' },
      { source: 'RohitSharma', target: 'NamanOjha' },
      { source: 'RohitSharma', target: 'SaurabhTiwary' },
      { source: 'RohitSharma', target: 'WriddhimanSaha' },
      { source: 'RohitSharma', target: 'VarunAaron' },
      { source: 'RohitSharma', target: 'RahulSharma' },
      { source: 'RohitSharma', target: 'BhuvneshwarKumar' },
      { source: 'RohitSharma', target: 'MohammedShami' },
      { source: 'RohitSharma', target: 'AmbatiRayudu' },
      { source: 'RohitSharma', target: 'JaydevUnadkat' },
      { source: 'RohitSharma', target: 'CheteshwarPujara' },
      { source: 'RohitSharma', target: 'MohitSharma' },
      { source: 'RohitSharma', target: 'StuartBinny' },
      { source: 'RohitSharma', target: 'ParvezRasool' },
      { source: 'RohitSharma', target: 'AxarPatel' },
      { source: 'RohitSharma', target: 'DhawalKulkarni' },
      { source: 'RohitSharma', target: 'KarnSharma' },
      { source: 'RohitSharma', target: 'KedarJadhav' },
      { source: 'RohitSharma', target: 'ManishPandey' },
      { source: 'RohitSharma', target: 'BarinderSran' },
      { source: 'RohitSharma', target: 'RishiDhawan' },
      { source: 'RohitSharma', target: 'GurkeeratSingh' },
      { source: 'RohitSharma', target: 'JaspritBumrah' },
      { source: 'RohitSharma', target: 'YuzvendraChahal' },
      { source: 'RohitSharma', target: 'KarunNair' },
      { source: 'RohitSharma', target: 'FaizFazal' },
      { source: 'RohitSharma', target: 'JayantYadav' },
      { source: 'RohitSharma', target: 'KuldeepYadav' },
      { source: 'RohitSharma', target: 'ShardulThakur' },
      { source: 'RohitSharma', target: 'ShreyasIyer' },
      { source: 'RohitSharma', target: 'SiddarthKaul' },
      { source: 'RohitSharma', target: 'KhaleelAhmed' },
      { source: 'RohitSharma', target: 'DeepakChahar' },
      { source: 'RohitSharma', target: 'RishabhPant' },
      { source: 'RohitSharma', target: 'MohammedSiraj' },
      { source: 'RohitSharma', target: 'VijayShankar' },
      { source: 'RohitSharma', target: 'ShubmanGill' },
      { source: 'RohitSharma', target: 'ShivamDube' },
      { source: 'RohitSharma', target: 'NavdeepSaini' },
      { source: 'RohitSharma', target: 'MayankAgarwal' },
      { source: 'RohitSharma', target: 'PrithviShaw' },
      { source: 'RohitSharma', target: 'TNatarajan' },
      { source: 'RohitSharma', target: 'KrunalPandya' },
      { source: 'RohitSharma', target: 'PrasidhKrishna' },
      { source: 'RohitSharma', target: 'IshanKishan' },
      { source: 'RohitSharma', target: 'SuryakumarYadav' },
      { source: 'RohitSharma', target: 'RahulChahar' },
      { source: 'RohitSharma', target: 'KrishnappaGowtham' },
      { source: 'RohitSharma', target: 'NitishRana' },
      { source: 'RohitSharma', target: 'ChetanSakariya' },
      { source: 'RohitSharma', target: 'SanjuSamson' },
      { source: 'RohitSharma', target: 'VenkateshIyer' },
      { source: 'RohitSharma', target: 'DeepakHooda' },
      { source: 'RohitSharma', target: 'AveshKhan' },
      { source: 'RohitSharma', target: 'RuturajGaikwad' },
      { source: 'RohitSharma', target: 'RaviBishnoi' },
      { source: 'RohitSharma', target: 'ShahbazAhmed' },
      { source: 'RohitSharma', target: 'ArshdeepSingh' },
      { source: 'RohitSharma', target: 'UmranMalik' },
      { source: 'RohitSharma', target: 'RaviBishnoi' },
      { source: 'RohitSharma', target: 'KuldeepSen' },

      // Cap9 ShikharDhawan
      { source: 'ShikharDhawan', target: 'HarbhajanSingh' },
      { source: 'ShikharDhawan', target: 'VirenderSehwag' },
      { source: 'ShikharDhawan', target: 'ZaheerKhan' },
      { source: 'ShikharDhawan', target: 'YuvrajSingh' },
      { source: 'ShikharDhawan', target: 'AshishNehra' },
      { source: 'ShikharDhawan', target: 'AmitMishra' },
      { source: 'ShikharDhawan', target: 'DineshKarthik' },
      { source: 'ShikharDhawan', target: 'RobinUthappa' },
      { source: 'ShikharDhawan', target: 'IshantSharma' },
      { source: 'ShikharDhawan', target: 'RavindraJadeja' },
      { source: 'ShikharDhawan', target: 'HanumaVihari' },
      { source: 'ShikharDhawan', target: 'MuraliVijay' },
      { source: 'ShikharDhawan', target: 'UmeshYadav' },
      { source: 'ShikharDhawan', target: 'RavichandranAshwin' },
      { source: 'ShikharDhawan', target: 'NamanOjha' },
      { source: 'ShikharDhawan', target: 'SaurabhTiwary' },
      { source: 'ShikharDhawan', target: 'WriddhimanSaha' },
      { source: 'ShikharDhawan', target: 'BhuvneshwarKumar' },
      { source: 'ShikharDhawan', target: 'MohammedShami' },
      { source: 'ShikharDhawan', target: 'AmbatiRayudu' },
      { source: 'ShikharDhawan', target: 'JaydevUnadkat' },
      { source: 'ShikharDhawan', target: 'CheteshwarPujara' },
      { source: 'ShikharDhawan', target: 'MohitSharma' },
      { source: 'ShikharDhawan', target: 'StuartBinny' },
      { source: 'ShikharDhawan', target: 'ParvezRasool' },
      { source: 'ShikharDhawan', target: 'AxarPatel' },
      { source: 'ShikharDhawan', target: 'DhawalKulkarni' },
      { source: 'ShikharDhawan', target: 'KarnSharma' },
      { source: 'ShikharDhawan', target: 'KedarJadhav' },
      { source: 'ShikharDhawan', target: 'ManishPandey' },
      { source: 'ShikharDhawan', target: 'RishiDhawan' },
      { source: 'ShikharDhawan', target: 'GurkeeratSingh' },
      { source: 'ShikharDhawan', target: 'JaspritBumrah' },
      { source: 'ShikharDhawan', target: 'YuzvendraChahal' },
      { source: 'ShikharDhawan', target: 'KarunNair' },
      { source: 'ShikharDhawan', target: 'JayantYadav' },
      { source: 'ShikharDhawan', target: 'KuldeepYadav' },
      { source: 'ShikharDhawan', target: 'ShardulThakur' },
      { source: 'ShikharDhawan', target: 'ShreyasIyer' },
      { source: 'ShikharDhawan', target: 'KhaleelAhmed' },
      { source: 'ShikharDhawan', target: 'DeepakChahar' },
      { source: 'ShikharDhawan', target: 'RishabhPant' },
      { source: 'ShikharDhawan', target: 'MohammedSiraj' },
      { source: 'ShikharDhawan', target: 'VijayShankar' },
      { source: 'ShikharDhawan', target: 'ShivamDube' },
      { source: 'ShikharDhawan', target: 'NavdeepSaini' },
      { source: 'ShikharDhawan', target: 'MayankAgarwal' },
      { source: 'ShikharDhawan', target: 'PrithviShaw' },
      { source: 'ShikharDhawan', target: 'TNatarajan' },
      { source: 'ShikharDhawan', target: 'KrunalPandya' },
      { source: 'ShikharDhawan', target: 'PrasidhKrishna' },
      { source: 'ShikharDhawan', target: 'IshanKishan' },
      { source: 'ShikharDhawan', target: 'SuryakumarYadav' },
      { source: 'ShikharDhawan', target: 'RahulChahar' },
      { source: 'ShikharDhawan', target: 'KrishnappaGowtham' },
      { source: 'ShikharDhawan', target: 'NitishRana' },
      { source: 'ShikharDhawan', target: 'ChetanSakariya' },
      { source: 'ShikharDhawan', target: 'SanjuSamson' },
      { source: 'ShikharDhawan', target: 'VenkateshIyer' },
      { source: 'ShikharDhawan', target: 'DeepakHooda' },
      { source: 'ShikharDhawan', target: 'AveshKhan' },
      { source: 'ShikharDhawan', target: 'RuturajGaikwad' },
      { source: 'ShikharDhawan', target: 'RaviBishnoi' },
      { source: 'ShikharDhawan', target: 'ArshdeepSingh' },
      { source: 'ShikharDhawan', target: 'UmranMalik' },
      { source: 'ShikharDhawan', target: 'RaviBishnoi' },
      { source: 'ShikharDhawan', target: 'KuldeepSen' },
      // Cap10 KL_Rahul
      { source: 'KL_Rahul', target: 'HarbhajanSingh' },
      { source: 'KL_Rahul', target: 'VirenderSehwag' },
      { source: 'KL_Rahul', target: 'ShikharDhawan' },
      { source: 'KL_Rahul', target: 'AmitMishra' },
      { source: 'KL_Rahul', target: 'DineshKarthik' },
      { source: 'KL_Rahul', target: 'IshantSharma' },
      { source: 'KL_Rahul', target: 'RavindraJadeja' },
      { source: 'KL_Rahul', target: 'HanumaVihari' },
      { source: 'KL_Rahul', target: 'MuraliVijay' },
      { source: 'KL_Rahul', target: 'UmeshYadav' },
      { source: 'KL_Rahul', target: 'RavichandranAshwin' },
      { source: 'KL_Rahul', target: 'SaurabhTiwary' },
      { source: 'KL_Rahul', target: 'BhuvneshwarKumar' },
      { source: 'KL_Rahul', target: 'MohammedShami' },
      { source: 'KL_Rahul', target: 'AmbatiRayudu' },
      { source: 'KL_Rahul', target: 'JaydevUnadkat' },
      { source: 'KL_Rahul', target: 'CheteshwarPujara' },
      { source: 'KL_Rahul', target: 'AxarPatel' },
      { source: 'KL_Rahul', target: 'DhawalKulkarni' },
      { source: 'KL_Rahul', target: 'KedarJadhav' },
      { source: 'KL_Rahul', target: 'ManishPandey' },
      { source: 'KL_Rahul', target: 'GurkeeratSingh' },
      { source: 'KL_Rahul', target: 'JaspritBumrah' },
      { source: 'KL_Rahul', target: 'YuzvendraChahal' },
      { source: 'KL_Rahul', target: 'JayantYadav' },
      { source: 'KL_Rahul', target: 'KuldeepYadav' },
      { source: 'KL_Rahul', target: 'ShardulThakur' },
      { source: 'KL_Rahul', target: 'ShreyasIyer' },
      { source: 'KL_Rahul', target: 'KhaleelAhmed' },
      { source: 'KL_Rahul', target: 'DeepakChahar' },
      { source: 'KL_Rahul', target: 'RishabhPant' },
      { source: 'KL_Rahul', target: 'MohammedSiraj' },
      { source: 'KL_Rahul', target: 'VijayShankar' },
      { source: 'KL_Rahul', target: 'ShubmanGill' },
      { source: 'KL_Rahul', target: 'ShivamDube' },
      { source: 'KL_Rahul', target: 'NavdeepSaini' },
      { source: 'KL_Rahul', target: 'MayankAgarwal' },
      { source: 'KL_Rahul', target: 'PrithviShaw' },
      { source: 'KL_Rahul', target: 'TNatarajan' },
      { source: 'KL_Rahul', target: 'KrunalPandya' },
      { source: 'KL_Rahul', target: 'PrasidhKrishna' },
      { source: 'KL_Rahul', target: 'IshanKishan' },
      { source: 'KL_Rahul', target: 'SuryakumarYadav' },
      { source: 'KL_Rahul', target: 'RahulChahar' },
      { source: 'KL_Rahul', target: 'KrishnappaGowtham' },
      { source: 'KL_Rahul', target: 'NitishRana' },
      { source: 'KL_Rahul', target: 'ChetanSakariya' },
      { source: 'KL_Rahul', target: 'SanjuSamson' },
      { source: 'KL_Rahul', target: 'VenkateshIyer' },
      { source: 'KL_Rahul', target: 'DeepakHooda' },
      { source: 'KL_Rahul', target: 'AveshKhan' },
      { source: 'KL_Rahul', target: 'RuturajGaikwad' },
      { source: 'KL_Rahul', target: 'RaviBishnoi' },
      { source: 'KL_Rahul', target: 'ArshdeepSingh' },
      { source: 'KL_Rahul', target: 'UmranMalik' },
      { source: 'KL_Rahul', target: 'RaviBishnoi' },
      { source: 'KL_Rahul', target: 'KuldeepSen' },

      // Cap11 HardikPandya
      { source: 'HardikPandya', target: 'HarbhajanSingh' },
      { source: 'HardikPandya', target: 'ShikharDhawan' },
      { source: 'HardikPandya', target: 'AmitMishra' },
      { source: 'HardikPandya', target: 'DineshKarthik' },
      { source: 'HardikPandya', target: 'IshantSharma' },
      { source: 'HardikPandya', target: 'RavindraJadeja' },
      { source: 'HardikPandya', target: 'HanumaVihari' },
      { source: 'HardikPandya', target: 'MuraliVijay' },
      { source: 'HardikPandya', target: 'UmeshYadav' },
      { source: 'HardikPandya', target: 'RavichandranAshwin' },
      { source: 'HardikPandya', target: 'SaurabhTiwary' },
      { source: 'HardikPandya', target: 'WriddhimanSaha' },
      { source: 'HardikPandya', target: 'BhuvneshwarKumar' },
      { source: 'HardikPandya', target: 'MohammedShami' },
      { source: 'HardikPandya', target: 'AmbatiRayudu' },
      { source: 'HardikPandya', target: 'JaydevUnadkat' },
      { source: 'HardikPandya', target: 'CheteshwarPujara' },
      { source: 'HardikPandya', target: 'AxarPatel' },
      { source: 'HardikPandya', target: 'DhawalKulkarni' },
      { source: 'HardikPandya', target: 'KedarJadhav' },
      { source: 'HardikPandya', target: 'ManishPandey' },
      { source: 'HardikPandya', target: 'GurkeeratSingh' },
      { source: 'HardikPandya', target: 'JaspritBumrah' },
      { source: 'HardikPandya', target: 'YuzvendraChahal' },
      { source: 'HardikPandya', target: 'KarunNair' },
      { source: 'HardikPandya', target: 'JayantYadav' },
      { source: 'HardikPandya', target: 'KuldeepYadav' },
      { source: 'HardikPandya', target: 'ShardulThakur' },
      { source: 'HardikPandya', target: 'ShreyasIyer' },
      { source: 'HardikPandya', target: 'SiddarthKaul' },
      { source: 'HardikPandya', target: 'KhaleelAhmed' },
      { source: 'HardikPandya', target: 'DeepakChahar' },
      { source: 'HardikPandya', target: 'RishabhPant' },
      { source: 'HardikPandya', target: 'MohammedSiraj' },
      { source: 'HardikPandya', target: 'VijayShankar' },
      { source: 'HardikPandya', target: 'ShubmanGill' },
      { source: 'HardikPandya', target: 'ShivamDube' },
      { source: 'HardikPandya', target: 'NavdeepSaini' },
      { source: 'HardikPandya', target: 'MayankAgarwal' },
      { source: 'HardikPandya', target: 'PrithviShaw' },
      { source: 'HardikPandya', target: 'TNatarajan' },
      { source: 'HardikPandya', target: 'KrunalPandya' },
      { source: 'HardikPandya', target: 'PrasidhKrishna' },
      { source: 'HardikPandya', target: 'IshanKishan' },
      { source: 'HardikPandya', target: 'SuryakumarYadav' },
      { source: 'HardikPandya', target: 'RahulChahar' },
      { source: 'HardikPandya', target: 'KrishnappaGowtham' },
      { source: 'HardikPandya', target: 'NitishRana' },
      { source: 'HardikPandya', target: 'ChetanSakariya' },
      { source: 'HardikPandya', target: 'SanjuSamson' },
      { source: 'HardikPandya', target: 'VenkateshIyer' },
      { source: 'HardikPandya', target: 'DeepakHooda' },
      { source: 'HardikPandya', target: 'AveshKhan' },
      { source: 'HardikPandya', target: 'RuturajGaikwad' },
      { source: 'HardikPandya', target: 'RaviBishnoi' },
      { source: 'HardikPandya', target: 'ShahbazAhmed' },
      { source: 'HardikPandya', target: 'ArshdeepSingh' },
      { source: 'HardikPandya', target: 'UmranMalik' },
      { source: 'HardikPandya', target: 'RaviBishnoi' },
      { source: 'HardikPandya', target: 'KuldeepSen' },

      // Cap12 SouravGanguly

      { source: 'SouravGanguly', target: 'RahulDravid' },
      { source: 'SouravGanguly', target: 'VirenderSehwag' },
      { source: 'SouravGanguly', target: 'VVSLaxman' },
      { source: 'SouravGanguly', target: 'AnilKumble' },
      { source: 'SouravGanguly', target: 'HarbhajanSingh' },
      { source: 'SouravGanguly', target: 'ZaheerKhan' },
      { source: 'SouravGanguly', target: 'YuvrajSingh' },
      { source: 'SouravGanguly', target: 'AshishNehra' },
      { source: 'SouravGanguly', target: 'AjitAgarkar' },
      { source: 'SouravGanguly', target: 'DineshMongia' },
      { source: 'SouravGanguly', target: 'ParthivPatel' },
      { source: 'SouravGanguly', target: 'IrfanPathan' },
      { source: 'SouravGanguly', target: 'MohammadKaif' },
      { source: 'SouravGanguly', target: 'RahulSanghvi' },
      { source: 'SouravGanguly', target: 'HemangBadani' },
      { source: 'SouravGanguly', target: 'SachinTendulkar' },

      // Cap 13
      { source: 'SachinTendulkar', target: 'HarbhajanSingh' },
      { source: 'SachinTendulkar', target: 'JavagalSrinath' },
      { source: 'SachinTendulkar', target: 'VirenderSehwag' },
      { source: 'SachinTendulkar', target: 'VVSLaxman' },
      { source: 'SachinTendulkar', target: 'ShikharDhawan' },
      { source: 'SachinTendulkar', target: 'SridharanSriram' },
      { source: 'SachinTendulkar', target: 'HemangBadani' },
      { source: 'SachinTendulkar', target: 'AmitBhandari' },
      { source: 'SachinTendulkar', target: 'VijayDahiya' },
      { source: 'SachinTendulkar', target: 'ZaheerKhan' },
      { source: 'SachinTendulkar', target: 'YuvrajSingh' },
      { source: 'SachinTendulkar', target: 'ReetinderSinghSodhi' },
      { source: 'SachinTendulkar', target: 'DineshMongia' },
      { source: 'SachinTendulkar', target: 'AshishNehra' },
      { source: 'SachinTendulkar', target: 'ShivSunderDas' },
      { source: 'SachinTendulkar', target: 'DeepDasgupta' },
      { source: 'SachinTendulkar', target: 'AjayRatra' },
      { source: 'SachinTendulkar', target: 'SanjayBangar' },
      { source: 'SachinTendulkar', target: 'MohammadKaif' },
      { source: 'SachinTendulkar', target: 'SarandeepSingh' },
      { source: 'SachinTendulkar', target: 'MuraliKartik' },
      { source: 'SachinTendulkar', target: 'TinuYohannan' },
      { source: 'SachinTendulkar', target: 'LakshmipathyBalaji' },
      { source: 'SachinTendulkar', target: 'ParthivPatel' },
      { source: 'SachinTendulkar', target: 'AavishkarSalvi' },
      { source: 'SachinTendulkar', target: 'AmitMishra' },
      { source: 'SachinTendulkar', target: 'AbhijitKale' },
      { source: 'SachinTendulkar', target: 'IrfanPathan' },
      { source: 'SachinTendulkar', target: 'RohanGavaskar' },
      { source: 'SachinTendulkar', target: 'RameshPowar' },
      { source: 'SachinTendulkar', target: 'DineshKarthik' },
      { source: 'SachinTendulkar', target: 'JoginderSharma' },
      { source: 'SachinTendulkar', target: 'YalakaVenugopalRao' },
      { source: 'SachinTendulkar', target: 'RPSingh' },
      { source: 'SachinTendulkar', target: 'SSreesanth' },
      { source: 'SachinTendulkar', target: 'MunafPatel' },
      { source: 'SachinTendulkar', target: 'VRVSingh' },
      { source: 'SachinTendulkar', target: 'RobinUthappa' },
      { source: 'SachinTendulkar', target: 'WasimJaffer' },
      { source: 'SachinTendulkar', target: 'PiyushChawla' },
      { source: 'SachinTendulkar', target: 'IshantSharma' },
      { source: 'SachinTendulkar', target: 'PraveenKumar' },
      { source: 'SachinTendulkar', target: 'ManojTiwary' },
      { source: 'SachinTendulkar', target: 'YusufPathan' },
      { source: 'SachinTendulkar', target: 'ManpreetGony' },
      { source: 'SachinTendulkar', target: 'PragyanOjha' },
      { source: 'SachinTendulkar', target: 'SubramaniamBadrinath' },
      { source: 'SachinTendulkar', target: 'RavindraJadeja' },
      { source: 'SachinTendulkar', target: 'AjitAgarkar' },
      { source: 'SachinTendulkar', target: 'RahulSanghvi' },
      { source: 'SachinTendulkar', target: 'AbhishekNayar' },
      { source: 'SachinTendulkar', target: 'SudeepTyagi' },
      { source: 'SachinTendulkar', target: 'AbhimanyuMithun' },
      { source: 'SachinTendulkar', target: 'MuraliVijay' },
      { source: 'SachinTendulkar', target: 'AshokDinda' },
      { source: 'SachinTendulkar', target: 'VinayKumar' },
      { source: 'SachinTendulkar', target: 'UmeshYadav' },
      { source: 'SachinTendulkar', target: 'RavichandranAshwin' },
      { source: 'SachinTendulkar', target: 'NamanOjha' },
      { source: 'SachinTendulkar', target: 'PankajSingh' },
      { source: 'SachinTendulkar', target: 'WriddhimanSaha' },

      // Cap14
      { source: 'VirenderSehwag', target: 'HarbhajanSingh' },
      { source: 'VirenderSehwag', target: 'JavagalSrinath' },
      { source: 'VirenderSehwag', target: 'VVSLaxman' },
      { source: 'VirenderSehwag', target: 'ShikharDhawan' },
      { source: 'VirenderSehwag', target: 'SridharanSriram' },
      { source: 'VirenderSehwag', target: 'HemangBadani' },
      { source: 'VirenderSehwag', target: 'ZaheerKhan' },
      { source: 'VirenderSehwag', target: 'YuvrajSingh' },
      { source: 'VirenderSehwag', target: 'ReetinderSinghSodhi' },
      { source: 'VirenderSehwag', target: 'DineshMongia' },
      { source: 'VirenderSehwag', target: 'AshishNehra' },
      { source: 'VirenderSehwag', target: 'DeepDasgupta' },
      { source: 'VirenderSehwag', target: 'AjayRatra' },
      { source: 'VirenderSehwag', target: 'SanjayBangar' },
      { source: 'VirenderSehwag', target: 'MohammadKaif' },
      { source: 'VirenderSehwag', target: 'SarandeepSingh' },
      { source: 'VirenderSehwag', target: 'MuraliKartik' },
      { source: 'VirenderSehwag', target: 'JaiPrakashYadav' },
      { source: 'VirenderSehwag', target: 'LakshmipathyBalaji' },
      { source: 'VirenderSehwag', target: 'ParthivPatel' },
      { source: 'VirenderSehwag', target: 'AmitMishra' },
      { source: 'VirenderSehwag', target: 'AbhijitKale' },
      { source: 'VirenderSehwag', target: 'IrfanPathan' },
      { source: 'VirenderSehwag', target: 'RohanGavaskar' },
      { source: 'VirenderSehwag', target: 'RameshPowar' },
      { source: 'VirenderSehwag', target: 'DineshKarthik' },
      { source: 'VirenderSehwag', target: 'JoginderSharma' },
      { source: 'VirenderSehwag', target: 'YalakaVenugopalRao' },
      { source: 'VirenderSehwag', target: 'RPSingh' },
      { source: 'VirenderSehwag', target: 'SSreesanth' },
      { source: 'VirenderSehwag', target: 'MunafPatel' },
      { source: 'VirenderSehwag', target: 'VRVSingh' },
      { source: 'VirenderSehwag', target: 'RobinUthappa' },
      { source: 'VirenderSehwag', target: 'WasimJaffer' },
      { source: 'VirenderSehwag', target: 'PiyushChawla' },
      { source: 'VirenderSehwag', target: 'IshantSharma' },
      { source: 'VirenderSehwag', target: 'PraveenKumar' },
      { source: 'VirenderSehwag', target: 'ManojTiwary' },
      { source: 'VirenderSehwag', target: 'YusufPathan' },
      { source: 'VirenderSehwag', target: 'ManpreetGony' },
      { source: 'VirenderSehwag', target: 'PragyanOjha' },
      { source: 'VirenderSehwag', target: 'SubramaniamBadrinath' },
      { source: 'VirenderSehwag', target: 'RavindraJadeja' },
      { source: 'VirenderSehwag', target: 'AjitAgarkar' },
      { source: 'VirenderSehwag', target: 'RahulSanghvi' },
      { source: 'VirenderSehwag', target: 'AbhishekNayar' },
      { source: 'VirenderSehwag', target: 'SudeepTyagi' },
      { source: 'VirenderSehwag', target: 'AbhimanyuMithun' },
      { source: 'VirenderSehwag', target: 'MuraliVijay' },
      { source: 'VirenderSehwag', target: 'AshokDinda' },
      { source: 'VirenderSehwag', target: 'VinayKumar' },
      { source: 'VirenderSehwag', target: 'UmeshYadav' },
      { source: 'VirenderSehwag', target: 'RavichandranAshwin' },
      { source: 'VirenderSehwag', target: 'NamanOjha' },
      { source: 'VirenderSehwag', target: 'PankajSingh' },
      { source: 'VirenderSehwag', target: 'WriddhimanSaha' },
      { source: 'VirenderSehwag', target: 'CheteshwarPujara' }
    ]
  }
  const [highlightedNode, setHighlightedNode] = useState(null)
  const [clickedNode, setClickedNode] = useState(null)
  const [isolatedNode, setIsolatedNode] = useState(null)
  const [clickedNodeInfo, setClickedNodeInfo] = useState(null)
  const [connectingNodes, setConnectingNodes] = useState([])
  const [cameraPosition, setCameraPosition] = useState({ x: 0, y: 0, z: 1000 })
  const [filterRole, setFilterRole] = useState([]);
  const [filteredNode, setFilteredNode] = useState([]);
  const [clickedFilteredNode, setClickedFilteredNode] = useState([]);
  const [selectedNode1Size, setSelectedNode1Size] = useState(3);
  const [selectedNode2Size, setSelectedNode2Size] = useState(3);
  const [selectedNode3Size, setSelectedNode3Size] = useState(3);
  const [selectedNode4Size, setSelectedNode4Size] = useState(10);
  const [filteredNodesByRole, setFilteredNodesByRole] = useState({
    'Batsman': [],
    'Bowler': [],
    'All-Rounder': [],
    'Wicketkeeper': [],
    'IPL Player': [],
    'Retired': [],
    'Not IPL Player': [],
    'Not Retired': [],
  });


  useEffect(() => {
    console.log(clickedNodeInfo, "clickedNodeIfo")
  }, [clickedNodeInfo]);


  const handleSliderChange1 = (event) => {
    const newValue = event.target.value; // Get the new value from the input element
    setSelectedNode1Size(newValue); // Update the state variable with the new value
  };
  const handleSliderChange2 = (event) => {
    const newValue = event.target.value; // Get the new value from the input element
    setSelectedNode2Size(newValue); // Update the state variable with the new value
  };
  const handleSliderChange3 = (event) => {
    console.log("^^ EVENT ^^ ", event)
    const newValue = event.target.value; // Get the new value from the input element
    setSelectedNode3Size(newValue); // Update the state variable with the new value
  };


  const handleFilterChangeOld = (selectedOptions) => {
    setFilterRole(selectedOptions);
    if (selectedOptions.length && updatedGraphData.nodes.length) {
      const filteredNodes = updatedGraphData.nodes.filter((node) =>
        selectedOptions.some((selected) => {
          if (selected.value === 'is_ipl') {
            return node.is_ipl === 'true';
          }
          if (selected.value === 'is_retired') {
            return node.is_retired === 'true';
          }
          return node.role.includes(selected.value);
        })
      );
  
      setFilteredNode(filteredNodes);
  
      if (clickedNode && connectingNodes.length) {
        const clickedFilteredNodes = connectingNodes.filter((node) =>
          selectedOptions.some((selected) => {
            if (selected.value === 'is_ipl') {
              return node.is_ipl === 'true';
            }
            if (selected.value === 'is_retired') {
              return node.is_retired === 'true';
            }
            return node.role.includes(selected.value);
          })
        );
        setClickedFilteredNode(clickedFilteredNodes);
      } else {
        setClickedFilteredNode([]);
      }
    } else {
      setFilteredNode([]);
      setClickedFilteredNode([]);
    }
  };
  
  // const handleFilterChangeOld = (selectedOptions) => {
  //   setFilterRole(selectedOptions);
  //   if (selectedOptions.length && updatedGraphData.nodes.length) {
  //     const filteredNodes = updatedGraphData.nodes.filter((node) =>
  //       selectedOptions.some((selected) => node.role.includes(selected.value))
  //     );
  //     setFilteredNode(filteredNodes);
  //     if (clickedNode && connectingNodes.length) {
  //       const clickedFilteredNodes = connectingNodes.filter((node) =>
  //         selectedOptions.some((selected) => node.role.includes(selected.value))
  //       );
  //       setClickedFilteredNode(clickedFilteredNodes)
  //     } else {
  //       setClickedFilteredNode([])
  //     }
  //   } else {
  //     setFilteredNode([])
  //     setClickedFilteredNode([])
  //   }
  // };
  // handleFilterChangeOld(selectedOptions);
  const handleFilterChange = (selectedOptions) => {
    setFilterRole(selectedOptions);
    handleFilterChangeOld(selectedOptions);
    if (selectedOptions.length && updatedGraphData.nodes.length) {
      const newFilteredNodesByRole = {
        'Batsman': [],
        'Bowler': [],
        'All-Rounder': [],
        'Wicketkeeper': [],
        'IPL Player': [],
        'Retired': [],
        'Not IPL Player': [],
        'Not Retired': [],
      };
      // const nodeColor = roleColors[node.role];

      const filteredNodes = updatedGraphData.nodes.filter((node) =>
        selectedOptions.some((selected) => {
          if (selected.value === 'is_ipl') {
            return node.is_ipl === 'true';
          }
          if (selected.value === 'is_retired') {
            return node.is_retired === 'true';
          }
          if (selected.value === 'not_ipl') {
            return node.is_ipl == 'false';
          }
          if (selected.value === 'not_retired') {
            return node.is_retired == 'false';
          }
          return node.role.includes(selected.value);
        })
      );

      console.log('Filtered Nodes:', filteredNodes);
      console.log('New Filtered Nodes By Role:', newFilteredNodesByRole);

      // Store data by role
      filteredNodes.forEach((node) => {
        selectedOptions.forEach((selected) => {
          if (node.role.includes(selected.value)) {
            newFilteredNodesByRole[selected.value].push(node);
          }
        });
      });

      // Separate handling for "IPL Player" and "Retired" data
      if (selectedOptions.some((selected) => selected.value === 'is_ipl')) {
        newFilteredNodesByRole['IPL Player'] = filteredNodes.filter(
          (node) => node.is_ipl === 'true'
        );
      }

      if (selectedOptions.some((selected) => selected.value === 'is_retired')) {
        newFilteredNodesByRole['Retired'] = filteredNodes.filter(
          (node) => node.is_retired === 'true'
        );
      }

      setFilteredNode(filteredNodes);
      setFilteredNodesByRole(newFilteredNodesByRole);
    } else {
      setFilteredNode([]);
      setFilteredNodesByRole({
        'Batsman': [],
        'Bowler': [],
        'All-Rounder': [],
        'Wicketkeeper': [],
        'IPL Player': [],
        'Retired': [],
        'Not IPL Player': [],
        'Not Retired': [],
      });
    }
  };


  const allRounderNodes = filteredNodesByRole['All-Rounder'];
  const iplTrue = filteredNodesByRole['IPL Player'];
  const retiredTrue = filteredNodesByRole['Retired'];

  // console.log("^^  DATA IN OBJECT FORM ^^ ", filteredNodesByRole)
  // console.log("^^ clickedFilteredNode ^^ ",clickedFilteredNode)


  const getLinkedNodeColor = (node, highlightedNode, filteredNodes, links, filteredNodesByRole) => {

    // console.log("^^ NODE ^^ ",node)
    // console.log("^^ highlightedNode ^^ ",highlightedNode)
    console.log("^^ filteredNodes ^^ ", filteredNodesByRole)
    // console.log("^^ links ^^ ",links)
    if (
      node.id === highlightedNode ||
      links.some(
        link => link.source === highlightedNode && link.target === node.id
      )
    ) {
      if (filteredNodes && filteredNodes.some(filter_node => filter_node.id === node.id)) {
        return 'green'
      }
      return 'red' // Linked node color
    }
    else if (filteredNodes && filteredNodes.some(filter_node => filter_node.id === node.id)) {
      if (filteredNodesByRole['Batsman'].length > 0) {
        // Change the color for all nodes belonging to the 'Batsman' role
        if (node.role.includes('Batsman')) {
          return 'OrangeRed';
        }
      }

      if (filteredNodesByRole['Bowler'].length > 0) {
        // Change the color for all nodes belonging to the 'Bowler' role
        if (node.role.includes('Bowler')) {
          return 'Aqua';
        }
      }

      if (filteredNodesByRole['Wicketkeeper'].length > 0) {
        // Change the color for all nodes belonging to the 'Wicketkeeper' role
        if (node.role.includes('Wicketkeeper')) {
          return 'blue';
        }
      }

      if (filteredNodesByRole['All-Rounder'].length > 0) {
        // Change the color for all nodes belonging to the 'All-Rounder' role
        if (node.role.includes('All-Rounder')) {
          return 'pink';
        }
      }

      if (filteredNodesByRole['IPL Player'].length > 0) {
        // Change the color for all nodes belonging to the 'IPL Player' role
        if (node.is_ipl === 'true') {
          return 'brown'; // Change color for nodes that meet the 'is_ipl' condition
        }
      }

      if (filteredNodesByRole['Retired'].length > 0) {
        // Change the color for all nodes belonging to the 'Retired' role
        if (node.is_retired === 'true') {
          return 'black'; // Change color for nodes that meet the 'is_ipl' condition
        }
      }
      return 'purple'; // Default color for filtered nodes
    }
    return '#3F3F3F' // Non-linked node color
  }

  const getLinkedNodeSize = (node, highlightedNode, filteredNodes, links,isolatedNode) => {
    if (
      node.id === highlightedNode ||
      links.some(
        link => link.source === highlightedNode && link.target === node.id
      )
    ) {
      if (filteredNodes && filteredNodes.some(filter_node => filter_node.id === node.id)) {
        return selectedNode2Size
      }
      return selectedNode1Size // Linked node color
    }
    else if (filteredNodes && filteredNodes.some(filter_node => filter_node.id === node.id)) {
      return selectedNode3Size
    }
    // else if(node.id === isolatedNode){
    //   return selectedNode4Size
    // }
    return 1 // Non-linked node color
  }


  const handleNodeClick = node => {
    console.log("^^ HANDLE NODE CLICK ^^ ", node)
    if (node.id === isolatedNode) {
      setIsolatedNode(null)
      setHighlightedNode(null)
      setClickedNodeInfo(null)
      setClickedNode(null)
      setConnectingNodes([])
      // setFilteredNode(null);
    } else {
      setClickedNode(node)
      setHighlightedNode(node.id)
      setIsolatedNode(node.id)
      autoMoveCamera(node)

      const linkedNodes = updatedGraphData.links
        .filter(link => link.source.id === node.id || link.target.id === node.id)
        .map(link => (link.source.id === node.id ? link.target : link.source))


      if (filterRole.length > 0 && linkedNodes.length) {
        const clickedFilteredNodes = linkedNodes.filter((node) =>
          filterRole.some((selected) => node.role.includes(selected.value))
        );

        setClickedFilteredNode(clickedFilteredNodes);
      } else {
        setClickedFilteredNode([])
      }
      const connectingNodes = linkedNodes.map(nodeId =>
        updatedGraphData.nodes.find(node => node.id === nodeId)
      )

      setClickedNodeInfo({ node, linkedNodes })
      setConnectingNodes(linkedNodes)
    }
  }

  const handleNodeHover = node => {
    // Handle node hover if needed
  }

  const handleLinkHover = link => {
    // Handle link hover if needed
  }

  const getNodeLabel = node => {
    return `${node.label}\n(${node.period})`
  }

  const getLinkLabel = link => {
    return 'Link Label'
  }

  const nodeSize = node => {
    const labelLength = node.label.length
    return Math.max(1)
  }



  const getNodeColor = (node, highlightedNode, links) => {
    if (
      node.id === highlightedNode ||
      links.some(
        link => link.source === highlightedNode && link.target === node.id
      )
    ) {
      return 'red' // Linked node color
    }
    return '#3F3F3F' // Non-linked node color
  }

  const getNodeStyle = (node, highlightedNode, links) => {
    const color = getNodeColor(node, highlightedNode, links)

    const style = {
      // display: color === 'red' ? 'block' : 'none',
      color: 'black',
      padding: '4px 0',
      listStyle: 'decimal inside', // Use 'decimal' for numbers
      // marginLeft: '10px', // Add some left margin for better alignment
      fontSize: '12px'
    }

    return style
  }


  const autoMoveCamera = node => {
    const { x, y, z } = node
    setCameraPosition({ x, y, z: z + 500 })
  }


  // const updatedGraphData = filterGraphDataByRole(graphData, filterRole);
  const updatedGraphData = {
    nodes: [...graphDatas.nodes],
    links: [...graphDatas.links]
  }
  const roleOptions = [
    { value: 'Batsman', label: 'Batsman' },
    { value: 'Bowler', label: 'Bowler' },
    { value: 'All-Rounder', label: 'All-Rounder' },
    { value: 'Wicketkeeper', label: 'Wicketkeeper' },
    { value: 'is_ipl', label: 'IPL Player' },
    { value: 'is_retired', label: 'Retired' },
  ];
  const labelData = [
    { label: 'Team Mate', count: connectingNodes.length, color: 'TeamMate' },
    { label: 'Filtered Team', count: clickedFilteredNode.length, color: 'FilteredTeamMate' },
    { label: 'Filtered Players', count: filteredNode.length, color: 'filterCount' },
    { label: 'Bowler', count: filteredNodesByRole.Bowler.length, color: 'filterCountBol' },
    { label: 'All Rounder', count: allRounderNodes.length, color: 'filterCountAll' },
    { label: 'Batsman', count: filteredNodesByRole.Batsman.length, color: 'filterCountBat' },
    { label: 'Wicketkeeper', count: filteredNodesByRole.Wicketkeeper.length, color: 'filterCountWik' },
    { label: 'IPL Player', count: iplTrue.length, color: 'filterCountIpl' },
    { label: 'Retired Player', count: retiredTrue.length, color: 'filterCountRet' },
  ];



  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      borderRadius: '8px',
      borderColor: state.isFocused ? '#007BFF' : '#ced4da',
      boxShadow: state.isFocused ? '0 0 0 0.2rem rgba(0, 123, 255, 0.25)' : 'none',
    }),
    menu: (provided) => ({
      ...provided,
      borderRadius: '8px',
      marginTop: '4px',
    }),
  };

  return (
    <div className='App'>
      <header className="header">
        <div className="logo"></div>
      </header>
      <ForceGraph3D
        graphData={updatedGraphData}
        nodeColor={node =>
          node.id === isolatedNode
            ? 'Purple' // Isolated node color
            : getLinkedNodeColor(node, highlightedNode, filteredNode, updatedGraphData.links, filteredNodesByRole)}
        nodeVal={node =>
          node.id === isolatedNode
            ? 15 // Isolated node color
            : getLinkedNodeSize(node, highlightedNode, filteredNode, updatedGraphData.links,isolatedNode)}
        nodeLabel={getNodeLabel}
        linkLabel={getLinkLabel}
        // nodeVal={nodeSize}
        onNodeClick={handleNodeClick}
        onNodeHover={handleNodeHover}
        onLinkHover={handleLinkHover}
        backgroundColor='white'
        linkColor={() => 'blue'}
      />
      {
        <div className='node-info'>
          <div className='' style={{ "height": "43vw", "marginTop": "40px" }}>
            <div className='filter-container'>
              <label className='filter-label'>Filter by Role:</label>
              <Select
                isMulti
                classNamePrefix='filter-select'
                options={roleOptions}
                value={filterRole}
                onChange={handleFilterChange}
                style={customStyles}
              />
            </div>
            {clickedNodeInfo &&
              <div className='node-info-content'>
                <h2>Clicked Node: ( Captian )</h2>
                <p style={{ color: 'blue', fontSize: '20px' }}>{clickedNodeInfo.node.label}</p>

                <h3>Lined Nodes: ( Players )
                  <div className="range-input-container">
                    <input
                      type="range"
                      min="0"
                      max="10"
                      step="1"
                      className="custom-range-input"
                      value={selectedNode1Size} // Set the input value to the state variable
                      onChange={handleSliderChange1} // Call the event handler when the input changes
                    />
                  </div>
                </h3>
                <ul className='all-nodes-list' style={{ "overflow-y": "scroll", "height": "12vw", 'background': '#e3e3e3' }}>
                  {updatedGraphData.nodes.map(node =>
                    <li
                      key={node.id}
                      style={getNodeStyle(
                        node,
                        highlightedNode,
                        updatedGraphData.links
                      )}
                    >
                      {node.label}
                      {`  ( ${node.role} )`}
                    </li>
                  )}
                </ul>
              </div>
            }
            {clickedNodeInfo && filterRole.length > 0 && clickedFilteredNode.length && (
              <>
                <div className='node-info-content'>
                  <h3>Filtered Nodes: ( Players )
                    <div className="range-input-container">
                      <input
                        type="range"
                        min="0"
                        max="10"
                        step="1"
                        className="custom-range-input"
                        value={selectedNode2Size} // Set the input value to the state variable
                        onChange={handleSliderChange2} // Call the event handler when the input changes
                      />
                    </div>
                  </h3>
                  <ul className='all-nodes-list' style={{ "overflow-y": "scroll", "height": "12vw", 'background': '#e3e3e3' }}>
                    {clickedFilteredNode.map(node =>
                      <li
                        key={node.id}
                        style={getNodeStyle(
                          node,
                          highlightedNode,
                          updatedGraphData.links
                        )}
                      >
                        {node.label}
                        {`  ( ${node.role} )`}
                      </li>
                    )}
                  </ul>
                </div>
              </>
            )}
            {filterRole.length > 0 && filteredNode.length && (
              <>
                <div className='node-info-content'>
                  <h3>Filtered List: ( All Players)
                    <div className="range-input-container">
                      <input
                        type="range"
                        min="0"
                        max="10"
                        step="1"
                        className="custom-range-input"
                        value={selectedNode3Size} // Set the input value to the state variable
                        onChange={handleSliderChange3} // Call the event handler when the input changes
                      />
                    </div>
                  </h3>
                  <ul className='all-nodes-list filtered-list' style={{ "overflow-y": "scroll", "height": "12vw", 'background': '#e3e3e3' }}>
                    {filteredNode.map(node =>
                      <li
                        key={node.id}
                      >
                        {node.label}
                        {`  ( ${node.role} )`}
                      </li>
                    )}
                  </ul>
                </div>
              </>
            )}

            {filteredNodesByRole.Bowler.length > 0 && filteredNodesByRole.Bowler.length && (
              <>
                <div className='node-info-content'>
                  <h3>Bowler

                  </h3>
                  <ul className='all-nodes-list filtered-list' style={{ "overflow-y": "scroll", "height": "12vw", 'background': '#e3e3e3' }}>
                    {filteredNodesByRole.Bowler.map(node =>
                      <li
                        key={node.id}
                      >
                        {node.label}
                        {`  ( ${node.role} )`}
                      </li>
                    )}
                  </ul>
                </div>
              </>
            )}


            {allRounderNodes.length > 0 && allRounderNodes.length && (
              <>
                <div className='node-info-content'>
                  <h3>All Rounder

                  </h3>
                  <ul className='all-nodes-list filtered-list' style={{ "overflow-y": "scroll", "height": "12vw", 'background': '#e3e3e3' }}>
                    {allRounderNodes.map(node =>
                      <li
                        key={node.id}
                      >
                        {node.label}
                        {`  ( ${node.role} )`}
                      </li>
                    )}
                  </ul>
                </div>
              </>
            )}

            {filteredNodesByRole.Batsman.length > 0 && filteredNodesByRole.Batsman.length && (
              <>
                <div className='node-info-content'>
                  <h3>Batsman

                  </h3>
                  <ul className='all-nodes-list filtered-list' style={{ "overflow-y": "scroll", "height": "12vw", 'background': '#e3e3e3' }}>
                    {filteredNodesByRole.Batsman.map(node =>
                      <li
                        key={node.id}
                      >
                        {node.label}
                        {`  ( ${node.role} )`}
                      </li>
                    )}
                  </ul>
                </div>
              </>
            )}

            {filteredNodesByRole.Wicketkeeper.length > 0 && filteredNodesByRole.Wicketkeeper.length && (
              <>
                <div className='node-info-content'>
                  <h3>Wicketkeeper

                  </h3>
                  <ul className='all-nodes-list filtered-list' style={{ "overflow-y": "scroll", "height": "12vw", 'background': '#e3e3e3' }}>
                    {filteredNodesByRole.Wicketkeeper.map(node =>
                      <li
                        key={node.id}
                      >
                        {node.label}
                        {`  ( ${node.role} )`}
                      </li>
                    )}
                  </ul>
                </div>
              </>
            )}

            {/* Extra */}

            {iplTrue.length > 0 && iplTrue.length && (
              <>
                <div className='node-info-content'>
                  <h3>IPL Player

                  </h3>
                  <ul className='all-nodes-list filtered-list' style={{ "overflow-y": "scroll", "height": "12vw", 'background': '#e3e3e3' }}>
                    {iplTrue.map(node =>
                      <li
                        key={node.id}
                      >
                        {node.label}
                        {`  ( ${node.role} )`}
                      </li>
                    )}
                  </ul>
                </div>
              </>
            )}

            {retiredTrue.length > 0 && retiredTrue.length && (
              <>
                <div className='node-info-content'>
                  <h3>Retired Player

                  </h3>
                  <ul className='all-nodes-list filtered-list' style={{ "overflow-y": "scroll", "height": "12vw", 'background': '#e3e3e3' }}>
                    {retiredTrue.map(node =>
                      <li
                        key={node.id}
                      >
                        {node.label}
                        {`  ( ${node.role} )`}
                      </li>
                    )}
                  </ul>
                </div>
              </>
            )}

          </div>
        </div>
      }
      <div className="graph-labels">
        <div className="graph-labels">
          {labelData.map((data) => (
            data.count > 0 && (
              <p className={data.color} key={data.label}>
                {data.count} {data.label}
              </p>
            )
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
