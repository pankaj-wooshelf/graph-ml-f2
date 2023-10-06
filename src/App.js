import React, { useState, useEffect } from "react";
import { ForceGraph3D } from "react-force-graph";
import "./App.css";
import "./Header.css";
import Select from "react-select";
// import { graphDatas } from './Data/testData'
import { graphDatas } from "./Data/testData";

const App = () => {
  const [tooltip, setTooltip] = useState({
    visible: false,
    x: 0,
    y: 0,
    description: "",
  });
  useEffect(() => {
    console.log(graphDatas,"pankajjj");
  }, []);
  const handleMouseEnter = (e) => {
    const description = e.currentTarget.getAttribute("data-description");
    const totalMatchPlayed = e.currentTarget.getAttribute("data-total-match-played");
    const totalWicket = e.currentTarget.getAttribute("data-total-wicket");
    if (description) {
      const x = e.clientX + 10;
      const y = e.clientY - 10 + window.scrollY; 
      setTooltip({ visible: true, x, y, description,totalMatchPlayed, totalWicket });
    }
    e.currentTarget.style.color = "blue";
  };

  const handleMouseLeave = (e) => {
    setTooltip({ ...tooltip, visible: false });
    e.currentTarget.style.color = "";
  };

  const graphDatas = {
    nodes: [
      {
        id: "AnilKumble",
        label: "Anil Kumble",
        period: "1990 - 2008",
        role: "Bowler",
        is_ipl: " true",
        is_retired: "true",
        totalWicket: "956",
        totalMatchPlayed: "1027",
        description:
          "Anil Kumble is an Indian former cricket captain, coach and commentator who played Test and One Day International cricket for his national team over an international career of 18 years.",
      },
      {
        id: "VVSLaxman",
        label: "VVS Laxman",
        period: "2000 - 2005",
        role: "Batsman",
        is_retired: "true",
        totalWicket: "2",
        totalMatchPlayed: "220",
        description:
          "Vangipurapu Venkata Sai Laxman is a former Indian international cricketer and a former cricket commentator and pundit. A right-hand batsman known for his elegant stroke play, Laxman played as a middle-order batsman in Test cricket.",
      },
      {
        id: "SachinTendulkar",
        label: "sachin tendulkar",
        period: "1989-2013",
        role: "All-Rounder",
        is_ipl: "true",
        is_retired: "true",
        totalWicket: "200",
        totalMatchPlayed: "663",
        description:
          "Sachin Ramesh Tendulkar, is an Indian former international cricketer who captained the Indian national team. He is widely regarded as one of the greatest batsmen in the history of cricket. He is the all-time highest run-scorer in both ODI and Test cricket with more than 18,000 runs and 15,000 runs, respectively.",
      },
      {
        id: "SouravGanguly",
        label: "Sourav Ganguly",
        period: "1992-2008",
        role: "All-Rounder",
        is_ipl: "true",
        is_retired: "true",
        totalWicket: "132",
        totalMatchPlayed: "424",
        description:
          "Sourav Chandra Ganguly, also known as Dada, is an Indian cricket commentator and former cricketer. He is popularly called as Maharaja of Indian Cricket. He was captain of the Indian national cricket team and known as one of India's most successful cricket captains.",
      },
      {
        id: "RahulDravid",
        label: "Rahul Dravid",
        period: "1996-2012",
        role: "Wicketkeeper",
        is_ipl: "true",
        is_retired: "true",
        totalWicket: "5",
        totalMatchPlayed: "508",
        description:
          "Rahul Sharad Dravid is an Indian cricket coach and former captain of the Indian national team, currently serving as its head coach. Prior to his appointment to the senior men's national team, Dravid was the Head of Cricket at the National Cricket Academy, and the head coach of the India Under-19 and India A teams",
      },
      {
        id: "HarbhajanSingh",
        label: "Harbhajan Singh",
        period: "1998-2016",
        role: "Bowler",
        is_ipl: "true",
        is_retired: "true",
        totalWicket: "686",
        totalMatchPlayed: "339",
        description:
          "Harbhajan Singh is an Indian politician, film actor, Television Celebrity and former cricketer. He serves as a member of parliament in Rajya Sabha, and is a retired cricketer and a cricket commentator. Harbhajan played for the Indian national cricket team from 1998 - 2016 in a career spanning nearly two decades.",
      },

      {
        id: "JavagalSrinath",
        label: "javagal srinath",
        period: "1991-2003",
        role: "Bowler",
        is_ipl: "true",
        is_retired: "true",
        totalWicket: "551",
        totalMatchPlayed: "406",
        description:
          "Javagal Srinath, is a former Indian cricketer and currently an ICC match referee. He is considered among India's finest fast bowlers, and was the first Indian fast bowler to take more than 300 wickets in One Day Internationals.",
      },
      {
        id: "VirenderSehwag",
        label: "Virender Sehwag",
        period: "1999 - 2013",
        role: "Batsman",
        is_ipl: "true",
        is_retired: "true",
        totalWicket: "136",
        totalMatchPlayed: "355",
        description:
          "Virender Sehwag is a former Indian cricketer who represented India from 1999 to 2013. Widely regarded as one of the most destructive openers, he played for Delhi Capitals in IPL and Delhi and Haryana in Indian domestic cricket.",
      },
      {
        id: "MSDhoni",
        label: "M.S. Dhoni",
        period: "2004 - 2020",
        role: "Wicketkeeper",
        is_ipl: "true",
        is_retired: "true",
        totalWicket: "1",
        totalMatchPlayed: "440",
        description:
          "Mahendra Singh Dhoni is a former Indian cricketer who played as a wicket-keeper-batsman. He was the captain of the Indian national team in limited-overs formats from 2007 to 2017 and in Test cricket from 2008 to 2014. He currently plays for and captains Chennai Super Kings in the Indian Premier League.",
      },
      {
        id: "SureshRaina",
        label: "Suresh Raina",
        period: "2005 - 2020",
        role: "Batsman",
        is_ipl: "true",
        is_retired: "true",
        totalWicket: "49",
        totalMatchPlayed: "244",
        description:
          "Suresh Raina is an Indian former international cricketer. He occasionally served as stand-in captain for Indian men's national cricket team as well as in IPL for Chennai Super Kings during the absence of the main captain. He played for Uttar Pradesh in domestic cricket circuit.",
      },
      {
        id: "GautamGambhir",
        label: "Gautam Gambhir",
        period: "2003 - 2016",
        role: "Batsman",
        is_ipl: "true",
        is_retired: "true",
        totalWicket: "0",
        totalMatchPlayed: "205",
        description:
          "Gautam Gambhir is an Indian politician, philanthropist and former cricketer, who has played all formats of the game. He played an integral role in India's win in two ICC Knock-outs. He is a current member of the Lok Sabha since 2019. ",
      },
      {
        id: "ViratKohli",
        label: "Virat Kohli",
        period: "2008 - Present",
        role: "Batsman",
        is_ipl: "true",
        is_retired: "false",
        totalWicket: "4",
        totalMatchPlayed: "390",
        description:
          "virat Kohli is an Indian international cricketer and the former captain of the Indian national cricket team who plays for Royal Challengers Bangalore in the IPL and Delhi in domestic cricket.",
      },
      {
        id: "AjinkyaRahane",
        label: "Ajinkya Rahane",
        period: "2011 - Present",
        role: "Batsman",
        is_ipl: "true",
        is_retired: "false",
        totalWicket: "0",
        totalMatchPlayed: "173",
        description:
          "Ajinkya Madhukar Rahane is an Indian international cricketer and former captain and current vice-captain of Indian team in test format, who has played for Indian cricket team in all formats as a batsman. He currently captains Mumbai in Ranji trophy. He is also currently playing for Chennai Super Kings in the IPL.",
      },
      {
        id: "RohitSharma",
        label: "Rohit Sharma",
        period: "2007 - Present",
        role: "Batsman",
        is_ipl: "true",
        is_retired: "false",
        totalWicket: "10",
        totalMatchPlayed: "300",
        description:
          "Rohit Gurunath Sharma, is an Indian international cricketer and the current captain of India men’s cricket team in all formats. Considered one of the best batsmen of his generation and one of greatest opening batters of all time, Sharma is known for his timing, elegance, six-hitting abilities and leadership skills.",
      },
      {
        id: "ShikharDhawan",
        label: "Shikhar Dhawan",
        period: "2010 - Present",
        role: "Batsman",
        is_ipl: "true",
        is_retired: "false",
        totalWicket: "0",
        totalMatchPlayed: "221",
        description:
          "Shikhar Dhawan is an Indian cricketer. A left-handed opening batsman, he captains Punjab Kings in the Indian Premier League and plays for Delhi in first-class cricket. At the 2013 Champions Trophy, 2015 World Cup, and 2017 Champions Trophy, Dhawan was the leading run-scorer for India.",
      },
      {
        id: "KL_Rahul",
        label: "KL Rahul",
        period: "2014 - Present",
        role: "Batsman",
        is_ipl: "true",
        is_retired: "false",
        totalWicket: "0",
        totalMatchPlayed: "105",
        description:
          "Kananur Lokesh Rahul is an Indian international cricketer who plays as a right-handed Wicketkeeper-Batsman for Karnataka at the domestic level and is the captain for Lucknow Super Giants in the Indian Premier League. He is a former vice-captain of the Indian Cricket Team",
      },
      {
        id: "HardikPandya",
        label: "Hardik Pandya",
        period: "2016 - Present",
        role: "All-Rounder",
        is_ipl: "true",
        is_retired: "false",
        totalWicket: "93",
        totalMatchPlayed: "92",
        description:
          "Hardik Himanshu Pandya is an Indian cricketer who is the current vice-captain of the Indian cricket team in limited overs format. A batting all-rounder who can also bowl right-arm fast-medium deliveries, Pandya has represented India in all 3 formats.",
      },
      // player
      {
        id: "DevangGandhi",
        label: "Devang Gandhi",
        period: "1999-2000",
        role: "Batsman",
        is_ipl: "false",
        is_retired: "true",
        totalWicket: "0",
        totalMatchPlayed: "7",
        description:
          "Devang Jayant Gandhi is a former Indian cricketer. He was a right-handed opening batsman and a very occasional right-arm medium-pace bowler. He played for Bengal, Hadleigh and Thundersley Cricket Club, Essex. ",
      },
      {
        id: "SameerDighe",
        label: "Sameer Dighe",
        period: "2000-2001",
        role: "Wicketkeeper",
        is_ipl: "false",
        is_retired: "true",
        totalWicket: "0",
        totalMatchPlayed: "29",
        description:
          "Sameer Dighe is a former Indian cricketer, cricket coach & entrepreneur. He was a right-handed batsman and a wicket-keeper. His main chance at international cricket did not come until the 1999–2000 season, at which time he was 31 years of age. ",
      },
      {
        id: "SridharanSriram",
        label: "Sridharan Sriram",
        period: "2000-2004",
        role: "Batsman",
        is_ipl: "true",
        is_retired: "true",
        totalWicket: "88",
        totalMatchPlayed: "141",
        description:
          "Sridharan Sriram is an Indian cricket coach and former cricketer. He is a left-handed batsman and a left-arm orthodox spin bowler. ",
      },
      {
        id: "HemangBadani",
        label: "Hemang Badani",
        period: "2001-2004",
        role: "Batsman",
        is_ipl: "false",
        is_retired: "true",
        totalWicket: "3",
        totalMatchPlayed: "44",
        description:
          "Hemang Kamal Badani is a former Indian Cricketer, who played for the Tamil Nadu and Vidarbha cricket teams. He also captained the Tamil Nadu cricket team.",
      },
      {
        id: "AmitBhandari",
        label: "Amit Bhandari",
        period: "2000-2004",
        role: "Bowler",
        is_ipl: "false",
        is_retired: "true",
        totalWicket: "12",
        totalMatchPlayed: "56",
        description:
          "Amit Bhandari is an Indian cricketer. Having made an forgettable debut in 2000, his performances in the 2001–02 season kept him within striking distance of being re-selected. ",
      },
      {
        id: "VijayDahiya",
        label: "Vijay Dahiya",
        period: "2000-2001",
        role: "Wicketkeeper",
        is_ipl: "false",
        is_retired: "true",
        totalWicket: "0",
        totalMatchPlayed: "21",
        description:
          "Vijay Dahiya is a former Indian wicketkeeper. He is currently coach of the Uttar Pradesh cricket team and assistant coach of Lucknow Super Giants in Indian Premier League.",
      },
      {
        id: "ZaheerKhan",
        label: "Zaheer Khan",
        period: "2000 - 2014",
        role: "Bowler",
        is_ipl: "true",
        is_retired: "true",
        totalWicket: "593",
        totalMatchPlayed: "292",
        description:
          "Zaheer Khan is an Indian former professional cricketer who played all forms of the game for the Indian national team from 2000 till 2014. He is a fast-medium left-arm bowler. He was the second-most successful Indian pace bowler in Test cricket, behind Kapil Dev.",
      },
      {
        id: "YuvrajSingh",
        label: "Yuvraj Singh",
        period: "2000 - 2017",
        role: "All-Rounder",
        is_ipl: "true",
        is_retired: "true",
        totalWicket: "121",
        totalMatchPlayed: "344",
        description:
          "Yuvraj Singh is a former Indian international cricketer who played in all formats of the game. He is an all-rounder who batted left-handed in the middle order and bowled slow left-arm orthodox.",
      },
      {
        id: "ReetinderSinghSodhi",
        label: "Reetinder Singh Sodhi",
        period: "2000-2002",
        role: "All-Rounder",
        is_ipl: "true",
        is_retired: "true",
        totalWicket: "",
        totalMatchPlayed: "",
        description:
          "Reetinder Singh Sodhi pronunciation is a former Indian cricketer. He was an all-rounder from Punjab and was one of the options that Indian selectors had while looking for an allrounder. ",
      },
      {
        id: "DineshMongia",
        label: "Dinesh Mongia",
        period: "2001-2007",
        role: "All-Rounder",
        is_ipl: "false",
        is_retired: "true",
        totalWicket: "14",
        totalMatchPlayed: "58",
        description:
          "Dinesh Mongia pronunciation is a former Indian cricketer and politician. Mongia has appeared in limited over internationals for India. ",
      },
      {
        id: "AshishNehra",
        label: "Ashish Nehra",
        period: "1999 - 2012",
        role: "Bowler",
        is_ipl: "true",
        is_retired: "true",
        totalWicket: "201",
        totalMatchPlayed: "137",
        description:
          "Ashish Nehra is a cricket coach and former cricketer who played in all formats of the game. Nehra announced his retirement from all forms of cricket in late 2017, with the Twenty20 International match against New Zealand on 1 November 2017 at Feroz Shah Kotla Ground his last appearance.",
      },
      {
        id: "ShivSunderDas",
        label: "Shiv Sunder Das",
        period: "2000-2002",
        role: "Batsman",
        is_ipl: "false",
        is_retired: "true",
        totalWicket: "4",
        totalMatchPlayed: "27",
        description:
          "Shiv Sunder Das is an Indian cricketer and 3rd player from Odisha to represent India. He is a right-handed opening batsman. In first-class cricket he played for Odisha. Das was selected in 2000 for the first intake of the National Cricket Academy in Bangalore. He proceeded to make his Test debut later that year. ",
      },
      {
        id: "DeepDasgupta",
        label: "Deep Dasgupta",
        period: "2001-2002",
        role: "Batsman",
        is_ipl: "false",
        is_retired: "true",
        totalWicket: "0",
        totalMatchPlayed: "13",
        description:
          "Deep Dasgupta is a former Indian cricketer who played in eight Test matches and five One Day Internationals between 2001 and 2006 as the national wicketkeeper and was later replaced by Ajay Ratra. He is now a Hindi and English commentator.",
      },
      {
        id: "AjayRatra",
        label: "Ajay Ratra",
        period: "2001-2002",
        role: "Wicketkeeper",
        is_ipl: "false",
        is_retired: "true",
        totalWicket: "0",
        totalMatchPlayed: "20",
        description:
          "Ajay Ratra is a former Indian cricketer. He is a right-handed batsman and wicketkeeper. He made his ODI debut on Jan 19, 2002 against England. Ratra was selected in 2000 for the first intake of the National Cricket Academy in Bangalore. ",
      },
      {
        id: "SanjayBangar",
        label: "Sanjay Bangar",
        period: "2001-2004",
        role: "All-Rounder",
        is_ipl: "true",
        is_retired: "true",
        totalWicket: "14",
        totalMatchPlayed: "27",
        description:
          "Sanjay Bapusaheb Bangar is an Indian cricket commentator and the head coach of the IPL franchise Royal Challengers Bangalore. He is a former Indian international cricketer. He played as an all-rounder and represented the India national cricket team in Tests and ODIs.",
      },
      {
        id: "MohammadKaif",
        label: "Mohammad Kaif",
        period: "2000 - 2006",
        role: "Batsman",
        is_ipl: "true",
        is_retired: "true",
        totalWicket: "0",
        totalMatchPlayed: "138",
        description:
          "Mohammad Kaif is a former Indian cricketer, who played Tests and ODIs. He made it to the national team on the strength of his performances at the Under-19 level, where he captained the India national under-19 cricket team to victory in the Under-19 World Cup in 2000.",
      },
      {
        id: "SarandeepSingh",
        label: "Sarandeep Singh",
        period: "2000-2003",
        role: "All-Rounder",
        is_ipl: "false",
        is_retired: "true",
        totalWicket: "13",
        totalMatchPlayed: "8",
        description:
          "Sarandeep Singh is an Indian cricketer. He is a right-handed batsman and a right-arm offbreak bowler. In his debut Test match he took six wickets in Nagpur. Singh started his career in Amritsar in 1998–1999, playing for Punjab and before the end of the year, he was playing for the Under-19 squad.",
      },
      {
        id: "MuraliKartik",
        label: "Murali Kartik",
        period: "2000-2007",
        role: "Bowler",
        is_ipl: "true",
        is_retired: "true",
        totalWicket: "61",
        totalMatchPlayed: "45",
        description:
          "Murali Kartik is an Indian cricket commentator and former cricketer who sporadically represented the national team from 2000 to 2007.",
      },
      {
        id: "TinuYohannan",
        label: "Tinu Yohannan",
        period: "2001-2002",
        role: "Bowler",
        is_ipl: "false",
        is_retired: "true",
        totalWicket: "10",
        totalMatchPlayed: "6",
        description:
          "Tinu Yohannan pronunciation is a former Indian cricketer. He is a right-handed fast medium bowler. He played first class cricket for Kerala and was the first Kerala player to play Test and one day cricket for India. He is the current coach of Kerala cricket team. ",
      },
      {
        id: "JaiPrakashYadav",
        label: "Jai Yadav",
        period: "2000-2004",
        role: "All-Rounder",
        is_ipl: "false",
        is_retired: "true",
        totalWicket: "302",
        totalMatchPlayed: "142",
        description:
          "Jai Prakash Yadav is an Indian cricketer. He is a right-handed batsman and a right-arm medium-pace bowler. Yadav was a member of the Indian team that was one of the joint-winners of the 2002 ICC Champions Trophy, which the title was also shared with Sri Lanka.",
      },
      {
        id: "LakshmipathyBalaji",
        label: "Lakshmipathy Balaji",
        period: "2003-2012",
        role: "Bowler",
        is_ipl: "true",
        is_retired: "true",
        totalWicket: "61",
        totalMatchPlayed: "38",
        description:
          "Lakshmipathy Balaji is an Indian cricket coach and former cricketer. He is a right arm fast medium bowler. He announced his retirement from first-class and List A cricket in November, 2016. He was the bowling coach for Chennai Super Kings, his former side in the Indian Premier League.",
      },
      {
        id: "ParthivPatel",
        label: "Parthiv Patel",
        period: "2002-2011",
        role: "Wicketkeeper",
        is_ipl: "true",
        is_retired: "true",
        totalWicket: "0",
        totalMatchPlayed: "63",
        description:
          "Parthiv Ajay Patel is a former Indian professional cricketer, wicketkeeper-batsman, and was a member of the Indian national cricket team. He is a left-handed batsman and played for Gujarat in domestic cricket. ",
      },
      {
        id: "AavishkarSalvi",
        label: "Aavishkar Salvi",
        period: "2001-2003",
        role: "Bowler",
        is_ipl: "true",
        is_retired: "true",
        totalWicket: "173",
        totalMatchPlayed: "66",
        description:
          "Aavishkar Madhav Salvi is an Indian cricketer. He is a right-arm medium-pace bowler and right-handed batsman. In first class cricket, he played for Mumbai. His last match for Mumbai was in 2013. He was also part of the Delhi Daredevils setup in the IPL. Salvi is currently the fast bowling coach for Oman. ",
      },
      {
        id: "AmitMishra",
        label: "Amit Mishra",
        period: "2008-2017",
        role: "Bowler",
        is_ipl: "true",
        is_retired: "true",
        totalWicket: "164",
        totalMatchPlayed: "58",
        description:
          "Amit Mishra is an Indian cricketer. He is an right-arm leg-break bowler and right-handed tail-ender batsman. He plays for Haryana in the domestic Ranji Trophy and currently appears for the T20 franchise Lucknow Super Giants in the Indian Premier League. In addition, he has represented India in Test, ODIs and T20s.",
      },
      {
        id: "AbhijitKale",
        label: "Abhijit Kale",
        period: "2003",
        role: "Batsman",
        is_ipl: "false",
        is_retired: "false",
        totalWicket: "3",
        totalMatchPlayed: "94",
        description:
          "Abhijit Vasant Kale is a former Indian cricketer. He was a right-handed batsman and a right-arm offbreak bowler who played 1 ODI match without ever appearing in Tests.",
      },
      {
        id: "IrfanPathan",
        label: "Irfan Pathan",
        period: "2003 - 2012",
        role: "All-Rounder",
        is_ipl: "true",
        is_retired: "true",
        totalWicket: "273",
        totalMatchPlayed: "149",
        description:
          "Irfan Pathan is a former Indian cricketer turned Commentator, Cricket Analyst, Actor and Dancer. He was a bowling all rounder and a member of the Indian cricket team that won the inaugural 2007 ICC Twenty20 World Cup and 2013 ICC Champions Trophy. ",
      },
      {
        id: "RohanGavaskar",
        label: "Rohan Gavaskar",
        period: "2004",
        role: "Batsman",
        is_ipl: "true",
        is_retired: "true",
        totalWicket: "39",
        totalMatchPlayed: "128",
        description:
          "Rohan Sunil Gavaskar is a former Indian cricketer. He played in 11 One Day Internationals. He was a middle-order left-handed batsman and an occasional slow left arm orthodox bowler. Rohan is the son of great Indian cricketer Sunil Gavaskar.",
      },
      {
        id: "RameshPowar",
        label: "Ramesh Powar",
        period: "2004-2007",
        role: "Bowler",
        is_ipl: "true",
        is_retired: "true",
        totalWicket: "40",
        totalMatchPlayed: "33",
        description:
          "Ramesh Rajaram Powar pronunciation is a former Indian cricketer. Powar was selected in 2000 for the first intake of the National Cricket Academy in Bangalore. and again he was named as India women's cricket team coach in 2021 month of June. ",
      },
      {
        id: "DineshKarthik",
        label: "Dinesh Karthik",
        period: "2004 - Present",
        role: "Wicketkeeper",
        is_ipl: "true",
        is_retired: "false",
        totalWicket: "0",
        totalMatchPlayed: "120",
        description:
          "Krishnakumar Dinesh Karthik is an Indian professional cricketer and commentator who nationally plays for the Indian Cricket Team and currently in Indian Premier League playing for Royal Challengers Bangalore. He is also the current captain of the Tamil Nadu cricket team in domestic cricket.",
      },
      {
        id: "JoginderSharma",
        label: "Joginder Sharma",
        period: "2004-2007",
        role: "All-Rounder",
        is_ipl: "true",
        is_retired: "true",
        totalWicket: "5",
        totalMatchPlayed: "8",
        description:
          "Joginder Sharma is an Indian former professional cricketer who currently serves as a Deputy superintendent of police in the Haryana Police. He has made sporadic appearances for the Indian cricket team. He also played for Chennai Super Kings from 2008 to 2012.",
      },
      {
        id: "YalakaVenugopalRao",
        label: "Yalaka Venugopal Rao",
        period: "2005-2006",
        role: "Batsman",
        is_ipl: "true",
        is_retired: "true",
        totalWicket: "66",
        totalMatchPlayed: "137",
        description:
          "Yalaka Venugopal Rao is an Indian former cricketer. He played as a right-handed middle-order batsman and right arm off-break bowler. He was the first Indian super in One Day International cricket",
      },
      {
        id: "RPSingh",
        label: "R. P. Singh",
        period: "2005-2011",
        role: "Bowler",
        is_ipl: "true",
        is_retired: "true",
        totalWicket: "109",
        totalMatchPlayed: "72",
        description:
          "Rudra Pratap Singh is an Indian former cricketer, who played for the India national cricket team in Test, One Day International and Twenty20 International cricket as a left arm fast-medium bowler. In September 2018, he announced his retirement from all forms of cricket. ",
      },
      {
        id: "SSreesanth",
        label: "S. Sreesanth",
        period: "2005-2011",
        role: "Bowler",
        is_ipl: "true",
        is_retired: "true",
        totalWicket: "187",
        totalMatchPlayed: "57",
        description:
          "Arvind Sreenath is a former Indian cricketer who played for Karnataka and the Royal Challengers Bangalore. He made his Twenty20 International debut for India against South Africa on 2 October 2015.",
      },
      {
        id: "MunafPatel",
        label: "Munaf Patel",
        period: "2006-2011",
        role: "Bowler",
        is_ipl: "true",
        is_retired: "true",
        totalWicket: "121",
        totalMatchPlayed: "83",
        description:
          "Munaf Patel is a former Indian cricketer who played all formats of the game. He has also played for the West Zone in the Duleep Trophy and Gujarat, Mumbai cricket team and Maharashtra cricket team in domestic arena. In November 2018, he announced his retirement from cricket. He was born in Ikhar, Gujarat, India.",
      },
      {
        id: "VRVSingh",
        label: "V. R. V. Singh",
        period: "2006-2007",
        role: "Bowler",
        is_ipl: "true",
        is_retired: "true",
        totalWicket: "8",
        totalMatchPlayed: "7",
        description:
          "Vikram Raj Vir Singh, commonly known as VRV Singh, is a former Indian cricketer who was a member of the Indian cricket team. He is a right-arm fast-medium bowler. He is considered one of the few genuine fast bowlers India has produced over the last decade.",
      },
      {
        id: "RobinUthappa",
        label: "Robin Uthappa",
        period: "2006-2015",
        role: "Wicketkeeper",
        is_ipl: "true",
        is_retired: "trur",
        totalWicket: "0",
        totalMatchPlayed: "59",
        description:
          "Robin Venu Uthappa is a former Indian cricketer, who last played for Kerala in domestic cricket & Chennai Super Kings in IPL. He has represented team India in ODIs and T20Is. Uthappa made his One Day International debut in the seventh and final match of the English tour of India in April 2006.",
      },
      {
        id: "WasimJaffer",
        label: "Wasim Jaffer",
        period: "2000-2008",
        role: "Batsman",
        is_ipl: "true",
        is_retired: "true",
        totalWicket: "2",
        totalMatchPlayed: "33",
        description:
          "Wasim Jaffer is an Indian retired professional cricketer. He was a right-handed opening batsman and an occasional right arm off-break bowler. He is currently the highest run-scorer in Ranji Trophy cricket, surpassing Amol Muzumdar. In November 2018, he became the first batsman to score 11,000 runs in the competition. ",
      },
      {
        id: "PiyushChawla",
        label: "Piyush Chawla",
        period: "2006-2012",
        role: "Bowler",
        is_ipl: "true",
        is_retired: "true",
        totalWicket: "39",
        totalMatchPlayed: "28",
        description:
          "Piyush Chawla is an Indian cricketer who has played for the India national cricket team. He has also played for the India under-19 team and the Central Zone. He is seen as a leg-spinning all-rounder in domestic cricket. ",
      },
      {
        id: "IshantSharma",
        label: "Ishant Sharma",
        period: "2007 - Present",
        role: "Bowler",
        is_ipl: "true",
        is_retired: "false",
        totalWicket: "426",
        totalMatchPlayed: "185",
        description:
          "Ishant Sharma is an Indian cricketer who has represented India in Tests, ODIs and T20Is. He is a 6 ft 4 in tall right-arm fast-medium bowler. At the age of 18, Sharma was called to join the Indian squad for the tour of South Africa in 2006–07.",
      },
      {
        id: "PraveenKumar",
        label: "Praveen Kumar",
        period: "2007 - 2012",
        role: "Bowler",
        is_ipl: "true",
        is_retired: "true",
        totalWicket: "104",
        totalMatchPlayed: "74",
        description:
          "Praveen Kumar is a former Indian cricketer who bowled right-arm medium-pace. In first-class cricket, he played for Uttar Pradesh cricket team. He relied on his ability to swing the ball both ways along with line and length. In October 2018, he announced his retirement from all forms of cricket. ",
      },
      {
        id: "ManojTiwary",
        label: "Manoj Tiwary",
        period: "2008 - 2015",
        role: "Batsman",
        is_ipl: "true",
        is_retired: "true",
        totalWicket: "5",
        totalMatchPlayed: "15",
        description:
          "Manoj Kumar Tiwary is an Indian cricketer and politician. He is a right-handed batsman who bowls occasional leg break. Tiwary represents Bengal in domestic cricket and played for Delhi Daredevils, Kolkata Knight Riders, Kings XI Punjab and Rising Pune Supergiants in the Indian Premier League.",
      },
      {
        id: "YusufPathan",
        label: "Yusuf Pathan",
        period: "2007 - 2012",
        role: "All-Rounder",
        is_ipl: "true",
        is_retired: "true",
        totalWicket: "46",
        totalMatchPlayed: "79",
        description:
          "Yusuf Pathan is an Indian former cricketer. Pathan made his debut in first-class cricket in 2001/02. He was a right-handed batsman and a right-arm off-break bowler. His younger brother, Irfan Pathan was also an Indian cricketer. Pathan retired from all forms of cricket in February 2021. ",
      },
      {
        id: "ManpreetGony",
        label: "Manpreet Gony",
        period: "2008 - 2013",
        role: "Bowler",
        is_ipl: "true",
        is_retired: "true",
        totalWicket: "198",
        totalMatchPlayed: "63",
        description:
          "Manpreet Singh Gony is an Indian cricketer. He is a right-arm medium pace bowler and right-hand middle order batsman. In June 2019, Gony announced his retirement from all forms of cricket, except for short-format leagues played overseas. ",
      },
      {
        id: "PragyanOjha",
        label: "Pragyan Ojha",
        period: "2008 - 2013",
        role: "Bowler",
        is_ipl: "true",
        is_retired: "true",
        totalWicket: "134",
        totalMatchPlayed: "42",
        description:
          "Pragyan Ojha is an Indian former cricketer, who represented India. He played as an attacking slow left arm orthodox bowler and left-handed tail-ender batsman for Hyderabad. He is one of the very few players who have taken more wickets than the runs they have scored in Test cricket.",
      },
      {
        id: "SubramaniamBadrinath",
        label: "Subramaniam Badrinath",
        period: "2008 - 2012",
        role: "Batsman",
        is_ipl: "true",
        is_retired: "true",
        totalWicket: "0",
        totalMatchPlayed: "9",
        description:
          "Subramaniam Badrinath is a former Indian cricketer. He is a right-handed middle order batsman. Badrinath has represented India in One Day International and test matches. In first class cricket, he captains Vidarbha and was captain of Tamil Nadu earlier. ",
      },
      {
        id: "RavindraJadeja",
        label: "Ravindra Jadeja",
        period: "2008 - Present",
        role: "All-Rounder",
        is_ipl: "true",
        is_retired: "false",
        totalWicket: "474",
        totalMatchPlayed: "248",
        description:
          "Ravindrasinh Anirudhsinh Jadeja, commonly known as Ravindra Jadeja, is an Indian international cricketer who represents the Indian national cricket team in all formats. He is an all-rounder, who bats left-handed and bowls left-arm orthodox spin.",
      },
      {
        id: "AjitAgarkar",
        label: "Ajit Agarkar",
        period: "2000 - 2005",
        role: "All-Rounder",
        is_ipl: "true",
        is_retired: "false",
        totalWicket: "346",
        totalMatchPlayed: "217",
        description:
          "Ajit Bhalchandra Agarkar pronunciation is a former Indian cricketer and a commentator. He is and has been the chairman of the BCCI selection committee since July 4, 2023. He has represented India in more than 200 international matches across all three formats of the game. ",
      },
      {
        id: "HanumaVihari",
        label: "Hanuma Vihari",
        period: "2018 - Present",
        role: "Batsman",
        is_ipl: "true",
        is_retired: "false",
        totalWicket: "32",
        totalMatchPlayed: "118",
        description:
          "Gade Hanuma Vihari is an Indian international cricketer who has played for Indian cricket team. He currently plays for Andhra and captains them in Ranji Trophy. Vihari was a member of India that won test series in Australia in 2018–19 and 2020–21 season.",
      },
      {
        id: "RahulSanghvi",
        label: "Rahul Sanghvi",
        period: "2000 - 2001",
        role: "Bowler",
        description:
          "Rahul Sanghvi is an Indian cricketer, specialising in left arm orthodox spin. He played for the Delhi state team. He played one Test match, which was the first Test between Australia and India in 2001 but was dropped after Australia claimed a 10 wicket victory. He played in 10 One Day Internationals.",
      },
      {
        id: "AbhishekNayar",
        label: "Abhishek Nayar",
        period: "2009 - 2012",
        role: "All-Rounder",
        is_ipl: "true",
        is_retired: "true",
        totalWicket: "173",
        totalMatchPlayed: "106",
        description:
          "Abhishek Mohan Nair is a former Indian international cricketer. He is an all-rounder who bats left-handed and bowls right-arm medium pace. He played first class cricket for Mumbai and also represented Mumbai Indians, Kings XI Punjab, Pune Warriors India and Rajasthan Royals in the Indian Premier League.",
      },
      {
        id: "SudeepTyagi",
        label: "Sudeep Tyagi",
        period: "2009 - 2010",
        role: "Bowler",
        is_ipl: "true",
        is_retired: "true",
        totalWicket: "112",
        totalMatchPlayed: "45",
        description:
          "Sudeep Tyagi is an Indian former international cricketer. He is a right arm fast-medium bowler and a right-handed lower order batsman. In first class cricket, he plays for Uttar Pradesh. In the Indian Premier League, he represented Chennai Super Kings.",
      },
      {
        id: "AbhimanyuMithun",
        label: "Abhimanyu Mithun",
        period: "2010 - 2011",
        role: "Bowler",
        is_ipl: "true",
        is_retired: "true",
        totalWicket: "12",
        totalMatchPlayed: "9",
        description:
          "Abhimanyu Mithun is an Indian cricketer. A right-arm fast-medium bowler, Mithun was called up to the India squad for the first Test against South Africa in 2009–10, only ten weeks after making his first-class debut. He has also played in the IPL for Royal Challengers Bangalore.",
      },
      {
        id: "MuraliVijay",
        label: "Murali Vijay",
        period: "2008 - 2018",
        role: "Batsman",
        is_ipl: "true",
        is_retired: "true",
        totalWicket: "2",
        totalMatchPlayed: "78",
        description:
          "Murali Vijay is a former Indian international cricketer who plays as a right-handed opening batsman. He was a regular member of the Indian Test team until 2018 and plays for Tamil Nadu in domestic first-class cricket. Vijay was a member of the Indian team that won the 2013 ICC Champions Trophy.",
      },
      {
        id: "AshokDinda",
        label: "Ashok Dinda",
        period: "2010 - 2013",
        role: "Bowler",
        is_ipl: "true",
        is_retired: "true",
        totalWicket: "29",
        totalMatchPlayed: "27",
        description:
          "Ashok Dinda is a former Indian cricketer and as of 2021 a Member of the Legislative Assembly. Dinda is a member of the Bharatiya Janata Party and represents the Moyna constituency. He played cricket for Bengal and Goa in the Ranji Trophy and for a variety of Indian Premier League sides.",
      },
      {
        id: "VinayKumar",
        label: "Vinay Kumar",
        period: "2010 - 2013",
        role: "Bowler",
        is_ipl: "true",
        is_retired: "true",
        totalWicket: "49",
        totalMatchPlayed: "32",
        description:
          "Ranganath Vinay Kumar is a former cricketer who has represented India at Test, One Day International and Twenty20 levels. He is a right-arm medium fast bowler who played domestic cricket for Karnataka and also in the Indian Premier League for Royal Challengers Bangalore, Mumbai Indians and Kolkata Knight Riders. ",
      },
      {
        id: "UmeshYadav",
        label: "Umesh Yadav",
        period: "2010 - Present",
        role: "Bowler",
        is_ipl: "true",
        is_retired: "false",
        totalWicket: "276",
        totalMatchPlayed: "132",
        description:
          "Umeshkumar Tilak Yadav is an Indian cricketer who currently plays for Vidarbha cricket team, Indian national team, Essex and Kolkata Knight Riders in the Indian Premier League. Yadav was a member of the team that won the 2013 ICC Champions Trophy.",
      },
      {
        id: "RavichandranAshwin",
        label: "Ravichandran Ashwin",
        period: "2010 - Present",
        role: "Bowler",
        is_ipl: "true",
        is_retired: "false",
        totalWicket: "641",
        totalMatchPlayed: "208",
        description:
          "Ravichandran Ashwin is an Indian international cricketer from Chennai, who plays for the India cricket team. In Indian domestic cricket he plays for Tamil Nadu and Rajasthan Royals. Ashwin is right-arm off-spin bowler.",
      },
      {
        id: "NamanOjha",
        label: "Naman Ojha",
        period: "2010 - 2015",
        role: "Wicketkeeper",
        is_ipl: "true",
        is_retired: "true",
        totalWicket: "0",
        totalMatchPlayed: "2",
        description:
          "Naman Vinaykumar Ojha is an Indian former cricketer. He represented India in International cricket. He made his Test debut for India against Sri Lanka on 28 August 2015. He retired from all formats of cricket on 15 February 2021.",
      },
      {
        id: "PankajSingh",
        label: "Pankaj Singh",
        period: "2010 - 2014",
        role: "Bowler",
        is_ipl: "true",
        is_retired: "true",
        totalWicket: "2",
        totalMatchPlayed: "3",
        description:
          "Pankaj Singh is an Indian former cricketer. In December 2018, he became the first seam bowler to take 400 wickets in the Ranji Trophy. He retired from all forms of cricket in July 2021. ",
      },
      {
        id: "SaurabhTiwary",
        label: "Saurabh Tiwary",
        period: "2010 - 2017",
        role: "Batsman",
        is_ipl: "true",
        is_retired: "true",
        totalWicket: "",
        totalMatchPlayed: "",
        description:
          "Saurabh Sunil Tiwary is an Indian cricketer who plays as a left-handed middle order batsman. He was one of the key batsmen in the Indian team that won the 2008 Under-19 World Cup in Malaysia. ",
      },
      {
        id: "WriddhimanSaha",
        label: "Wriddhiman Saha",
        period: "2010 - Present",
        role: "Wicketkeeper",
        is_ipl: "true",
        is_retired: "false",
        totalWicket: "0",
        totalMatchPlayed: "49",
        description:
          "Wriddhiman Saha is an Indian cricketer who plays for the Indian national cricket team. He is a right-handed wicket-keeper batsman. He is the current first class captain of Tripura Cricket Team in domestic cricket and wicket keeper for Gujarat Titans in the Indian Premier League.",
      },
      {
        id: "VarunAaron",
        label: "Varun Aaron",
        period: "2011 - 2015",
        role: "Bowler",
        is_ipl: "true",
        is_retired: "true",
        totalWicket: "29",
        totalMatchPlayed: "18",
        description:
          "Varun Raymond Aaron is an Indian cricketer from Jamshedpur. A right-arm fast bowler, he first played for Jharkhand U-19 followed by Jharkhand Ranji team. He played his first One Day International for India in October 2011 and made his Test debut the following month.",
      },
      {
        id: "RahulSharma",
        label: "Rahul Sharma",
        period: "2011 - 2014",
        role: "Bowler",
        is_ipl: "true",
        is_retired: "true",
        totalWicket: "9",
        totalMatchPlayed: "6",
        description:
          "Rahul Sharma is an Indian cricketer. He is primarily a right-handed legbreak and googly bowler. He has been a member of the Punjab cricket team since 2006. He came into the limelight due to his impressive bowling performances in IPL 2011 for Pune Warriors.",
      },
      {
        id: "BhuvneshwarKumar",
        label: "Bhuvneshwar Kumar",
        period: "2012 - Present",
        role: "Bowler",
        is_ipl: "true",
        is_retired: "false",
        totalWicket: "204",
        totalMatchPlayed: "142",
        description:
          "Bhuvneshwar Kumar Singh is an Indian international cricketer who is playing for the Indian cricket team. He currently plays for Sunrisers Hyderabad in the Indian Premier League and Uttar Pradesh in domestic cricket. He is considered to be one of the best and most consistent swing bowlers in the world.",
      },
      {
        id: "MohammedShami",
        label: "Mohammed Shami",
        period: "2013 - Present",
        role: "Bowler",
        is_ipl: "true",
        is_retired: "false",
        totalWicket: "387",
        totalMatchPlayed: "153",
        description:
          "Mohammed Shami Ahmed is an Indian international cricketer who plays for the Indian national cricket team in all formats of the game as a right-arm fast bowler. He plays domestically for Bengal and, in the Indian Premier League, for Gujarat Titans.",
      },
      {
        id: "AmbatiRayudu",
        label: "Ambati Rayudu",
        period: "2013 - 2019",
        role: "Batsman",
        is_ipl: "true",
        is_retired: "true",
        totalWicket: "3",
        totalMatchPlayed: "61",
        description:
          "Ambati Thirupathi Rayudu is an Indian former international cricketer. He played 61 limited overs matches for the India national cricket team between 2013 and 2019 and is a right-handed middle-order batsman, who occasionally keeps wicket and bowls right-arm off breaks.",
      },
      {
        id: "JaydevUnadkat",
        label: "Jaydev Unadkat",
        period: "2010 - Present",
        role: "Bowler",
        is_ipl: "true",
        is_retired: "false",
        totalWicket: "11",
        totalMatchPlayed: "9",
        description:
          "Jaydev Dipakbhai Unadkat is an Indian professional cricketer who has played for the Indian national team. He plays for Saurashtra in domestic cricket. He represented India in the Under-19 Cricket World Cup in 2010. ",
      },
      {
        id: "CheteshwarPujara",
        label: "Cheteshwar Pujara",
        period: "2010 - Present",
        role: "Batsman",
        is_ipl: "true",
        is_retired: "false",
        totalWicket: "0",
        totalMatchPlayed: "108",
        description:
          "Cheteshwar Arvind Pujara is an Indian cricketer and is the captain of Sussex County Cricket Club in County Championship. He plays for Saurashtra in Indian domestic cricket. Pujara is known for his disciplined batting style which made him an integral part of the Indian Test team for over a decade.",
      },
      {
        id: "MohitSharma",
        label: "Mohit Sharma",
        period: "2013 - 2015",
        role: "Bowler",
        is_ipl: "true",
        is_retired: "true",
        totalWicket: "37",
        totalMatchPlayed: "30",
        description:
          "Mohit Mahipal Sharma is an Indian international cricketer. He also plays for Haryana. He is a right-arm fast bowler. ",
      },
      {
        id: "StuartBinny",
        label: "Stuart Binny",
        period: "2014 - 2016",
        role: "All-Rounder",
        is_ipl: "true",
        is_retired: "true",
        totalWicket: "23",
        totalMatchPlayed: "20",
        description:
          "Stuart Terence Roger Binny is an Indian former international cricketer, who had played One Day Internationals, Twenty20 Internationals, and Tests. He played for the Rajasthan Royals in the Indian Premier League. On 30 August 2021, Binny announced his retirement from all formats of cricket.",
      },
      {
        id: "ParvezRasool",
        label: "Parvez Rasool",
        period: "2014 - 2014",
        role: "All-Rounder",
        is_ipl: "true",
        is_retired: "true",
        totalWicket: "3",
        totalMatchPlayed: "2",
        description:
          "Parvez Ghulam Rasool Zargar is an Indian cricketer who plays as an all-rounder for Jammu and Kashmir. A right-hand batsman and offbreak bowler, Rasool is the captain of the Jammu and Kashmir team and a regular member of India A. He was bought for ₹95 lakh by the Sunrisers Hyderabad in the 2014 IPL auction.",
      },
      {
        id: "AxarPatel",
        label: "Axar Patel",
        period: "2014 - Present",
        role: "All-Rounder",
        is_ipl: "true",
        is_retired: "false",
        totalWicket: "108",
        totalMatchPlayed: "65",
        description:
          "Akshar Rajeshbhai Patel, also spelled as Axar Patel, is an Indian international cricketer who plays for the Indian cricket team in all formats of the game as a bowling All-rounder. He also plays for Gujarat in domestic cricket and for the Delhi Capitals in the Indian Premier League. ",
      },
      {
        id: "DhawalKulkarni",
        label: "Dhawal Kulkarni",
        period: "2014 - 2017",
        role: "Bowler",
        is_ipl: "true",
        is_retired: "true",
        totalWicket: "22",
        totalMatchPlayed: "14",
        description:
          "Dhawal Sunil Kulkarni is an Indian cricketer as well as first class cricketer. He is a right arm medium-pace bowler and right-handed lower order batsman. ",
      },
      {
        id: "KarnSharma",
        label: "Karn Sharma",
        period: "2014 - 2018",
        role: "Bowler",
        is_ipl: "true",
        is_retired: "true",
        totalWicket: "",
        totalMatchPlayed: "",
        description:
          "Karan Sharma is an Indian cricketer. He made his Twenty20 debut on 10 January 2021, for Uttar Pradesh in the 2020–21 Syed Mushtaq Ali Trophy. He made his List A debut on 20 February 2021, for Uttar Pradesh in the 2020–21 Vijay Hazare Trophy.",
      },
      {
        id: "KedarJadhav",
        label: "Kedar Jadhav",
        period: "2014 - 2021",
        role: "All-Rounder",
        is_ipl: "true",
        is_retired: "true",
        totalWicket: "27",
        totalMatchPlayed: "82",
        description:
          "Kedar Mahadev Jadhav is an Indian cricketer who plays for Maharashtra, Kolhapur Tuskers and Royal Challengers Bangalore in domestic cricket. He has also played for the Indian national cricket team. He is a right hand batter, who occasionally keeps wickets and bowls right-arm-offspin",
      },
      {
        id: "ManishPandey",
        label: "Manish Pandey",
        period: "2015 - Present",
        role: "Batsman",
        is_ipl: "true",
        is_retired: "false",
        totalWicket: "0",
        totalMatchPlayed: "68",
        description:
          "Manish Krishnanand Pandey is an Indian international cricketer. He is primarily a right-handed middle-order batsman representing Karnataka in domestic cricket and Delhi Capitals in the Indian Premier League.",
      },
      {
        id: "BarinderSran",
        label: "Barinder Sran",
        period: "2016 - 2016",
        role: "Bowler",
        is_ipl: "true",
        is_retired: "true",
        totalWicket: "39",
        totalMatchPlayed: "17",
        description:
          "Barinder Sran is an Indian international cricketer. He is a left-arm medium-fast bowler who plays for Chandigarh in domestic cricket and Mumbai Indians in the IPL. He was a member of the Rajasthan Royals squad in the 2015 Indian Premier League.",
      },
      {
        id: "RishiDhawan",
        label: "Rishi Dhawan",
        period: "2016 - 2016",
        role: "All-Rounder",
        is_ipl: "true",
        is_retired: "false",
        totalWicket: "2",
        totalMatchPlayed: "4",
        description:
          "Rishi Dhawan is an Indian cricketer who plays first-class and List A cricket for Himachal Pradesh. Dhawan is primarily a medium-fast bowling all-rounder who bats in the middle-order. Dhawan has played for Kings XI Punjab in the 2008 IPL. He was signed-up by the Mumbai Indians in 2013.",
      },
      {
        id: "GurkeeratSingh",
        label: "Gurkeerat Singh",
        period: "2015 - 2019",
        role: "All-Rounder",
        is_ipl: "true",
        is_retired: "false",
        totalWicket: "41",
        totalMatchPlayed: "52",
        description:
          "Gurkeerat Singh Mann is an Indian professional cricketer who plays for Punjab in domestic cricket. A right-handed batsman and off break bowler, he is a member of the Gujarat Titans in IPL and a regular in India A team. Singh had a maiden call for the official Indian squad for the South Africa series in 2015.",
      },
      {
        id: "JaspritBumrah",
        label: "Jasprit Bumrah",
        period: "2016 - Present",
        role: "Bowler",
        is_ipl: "true",
        is_retired: "false",
        totalWicket: "271",
        totalMatchPlayed: "108",
        description:
          "Jasprit Jasbirsingh Bumrah is an Indian international cricketer who plays for the Indian cricket team in all formats of the game. A right-arm fast bowler with a unique bowling action, Bumrah is considered one of the best bowlers in the world.",
      },
      {
        id: "YuzvendraChahal",
        label: "Yuzvendra Chahal",
        period: "2016 - Present",
        role: "Bowler",
        is_ipl: "true",
        is_retired: "false",
        totalWicket: "212",
        totalMatchPlayed: "147",
        description:
          "Yuzvendra Chahal is an Indian international cricketer who plays for the Indian cricket team in white ball cricket as a leg spin bowler. He also currently plays for Haryana in domestic cricket and Rajasthan Royals in the Indian Premier League. He is a Right-arm leg break bowler.",
      },
      {
        id: "KarunNair",
        label: "Karun Nair",
        period: "2016 - 2018",
        role: "Batsman",
        is_ipl: "true",
        is_retired: "false",
        totalWicket: "0",
        totalMatchPlayed: "8",
        description:
          "Karun Kaladharan Nair is an Indian international cricketer who plays for Karnataka in domestic cricket and Lucknow Super Giants in Indian Premier League. He is a right-handed top order batter and occasional off break bowler. He is only the second Indian batter to score a triple century in Test cricket.",
      },
      {
        id: "FaizFazal",
        label: "Faiz Fazal",
        period: "2016 - 2016",
        role: "Batsman",
        is_ipl: "true",
        is_retired: "true",
        totalWicket: "23",
        totalMatchPlayed: "113",
        description:
          "Faiz Yakub Fazal is an Indian cricketer who plays for the Vidarbha cricket team and Lisburn Cricket Club, Northern Ireland, having previously played for Central Zone, India Red, India Under-19s, Railways, and Rajasthan Royals. He is a left-handed opening batsman. ",
      },
      {
        id: "JayantYadav",
        label: "Jayant Yadav",
        period: "2016 - Present",
        role: "All-Rounder",
        is_ipl: "true",
        is_retired: "false",
        totalWicket: "16",
        totalMatchPlayed: "8",
        description:
          "Jayant Yadav is an Indian cricketer from Delhi who plays for Haryana and Middlesex in domestic cricket. He is an off spin bowler who bats right-handed. He made his international debut in October 2016.",
      },
      {
        id: "KuldeepYadav",
        label: "Kuldeep Yadav",
        period: "2017 - Present",
        role: "Bowler",
        is_ipl: "true",
        is_retired: "false",
        totalWicket: "184",
        totalMatchPlayed: "96",
        description:
          "Kuldeep Yadav is an Indian international cricketer. He is a bowling all-rounder who bowls Left-arm Unorthodox spin bowler is and a capable Lower order batter who plays for India and for Uttar Pradesh in domestic cricket. He was signed by the Delhi Capitals for the Indian Premier League.",
      },
      {
        id: "ShardulThakur",
        label: "Shardul Thakur",
        period: "2016 - Present",
        role: "Bowler",
        is_ipl: "true",
        is_retired: "false",
        totalWicket: "79",
        totalMatchPlayed: "43",
        description:
          "Shardul Narendra Thakur is an Indian international cricketer. He is a bowler who bats right-handed and bowls right arm medium pace. ",
      },
      {
        id: "ShreyasIyer",
        label: "Shreyas Iyer",
        period: "2017 - Present",
        role: "Batsman",
        is_ipl: "true",
        is_retired: "false",
        totalWicket: "0",
        totalMatchPlayed: "54",
        description:
          "Shreyas Santosh Iyer is an Indian international cricketer who plays for the Indian cricket team as a right-handed batter. He has played in all formats for the Indian team.",
      },
      {
        id: "SiddarthKaul",
        label: "Siddarth Kaul",
        period: "2018 - Present",
        role: "Bowler",
        is_ipl: "true",
        is_retired: "false",
        totalWicket: "3",
        totalMatchPlayed: "5",
        description:
          "Siddarth Kaul, also spelled Siddharth Kaul, is an Indian professional cricketer. A fast bowler who bowls at about 130 km/h, he made his first-class debut for Punjab in 2007. ",
      },
      {
        id: "KhaleelAhmed",
        label: "Khaleel Ahmed",
        period: "2018 - Present",
        role: "Bowler",
        is_ipl: "true",
        is_retired: "false",
        totalWicket: "28",
        totalMatchPlayed: "25",
        description:
          "Khaleel Ahmed is an Indian international cricketer. He made his debut for Indian cricket team in September 2018.",
      },
      {
        id: "DeepakChahar",
        label: "Deepak Chahar",
        period: "2018 - Present",
        role: "Bowler",
        is_ipl: "true",
        is_retired: "false",
        totalWicket: "39",
        totalMatchPlayed: "31",
        description:
          "Deepak Chahar is an Indian international cricketer. He is a right-arm medium pace swing bowler, who plays for Rajasthan in domestic cricket and Chennai Super Kings in the Indian Premier League. In 2019, he became the first Indian male cricketer to take a hat-trick in a Twenty20 International match.",
      },
      {
        id: "RishabhPant",
        label: "Rishabh Pant",
        period: "2017 - Present",
        role: "Wicketkeeper",
        is_ipl: "true",
        is_retired: "false",
        totalWicket: "0",
        totalMatchPlayed: "63",
        description:
          "Rishabh Rajendra Pant is an Indian international cricketer who plays for the Indian cricket team as a wicket-keeper batter. Having played all formats for India, he is best known for his consistency to score runs in Test cricket.",
      },
      {
        id: "MohammedSiraj",
        label: "Mohammed Siraj",
        period: "2017 - Present",
        role: "Bowler",
        is_ipl: "true",
        is_retired: "false",
        totalWicket: "112",
        totalMatchPlayed: "50",
        description:
          "Mohammed Siraj is an Indian international cricketer joined Indian national cricket team in 2018 as a Right-arm fast bowler. He plays for Royal Challengers Bangalore in the Indian Premier League and Hyderabad in domestic cricket.",
      },
      {
        id: "VijayShankar",
        label: "Vijay Shankar",
        period: "2018 - Present",
        role: "All-Rounder",
        is_ipl: "true",
        is_retired: "false",
        totalWicket: "9",
        totalMatchPlayed: "21",
        description:
          "Vijay Shankar is an Indian cricketer who plays for the Tamil Nadu state cricket team. He is an all-rounder who bats right-handed and bowls right-arm medium pace. He played for India in 2019 Cricket World Cup, where he became the first Indian to pick up a wicket on the very first ball of his World Cup debut.",
      },
      {
        id: "ShubmanGill",
        label: "Shubman Gill",
        period: "2019 - Present",
        role: "Batsman",
        is_ipl: "true",
        is_retired: "false",
        totalWicket: "0",
        totalMatchPlayed: "52",
        description:
          "Shubman Gill is an Indian cricketer. Representing Indian cricket team at the international level, he also plays for Gujarat Titans in the Indian Premier League and Punjab in domestic cricket.",
      },
      {
        id: "ShivamDube",
        label: "Shivam Dube",
        period: "2019 - present",
        role: "All-Rounder",
        is_ipl: "true",
        is_retired: "false",
        totalWicket: "46",
        totalMatchPlayed: "123",
        description:
          "Shivam Dube is an Indian cricketer who plays for Mumbai in domestic cricket and the Chennai Super Kings in the Indian Premier League. He is an all-rounder who bats left-handed and bowls right-arm at medium pace. He made his international debut for the India cricket team in November 2019.",
      },
      {
        id: "NavdeepSaini",
        label: "Navdeep Saini",
        period: "2019 - Present",
        role: "Bowler",
        is_ipl: "true",
        is_retired: "false",
        totalWicket: "",
        totalMatchPlayed: "",
        description:
          "Navdeep Amarjeet Saini is an Indian cricketer, born in Karnal, Haryana. He has played for Delhi since 2013. He made his international debut for the India cricket team in August 2019.",
      },
      {
        id: "MayankAgarwal",
        label: "Mayank Agarwal",
        period: "2018 - Present",
        role: "Batsman",
        is_ipl: "true",
        is_retired: "false",
        totalWicket: "0",
        totalMatchPlayed: "24",
        description:
          "Mayank Anurag Agarwal is an Indian international cricketer who plays as a right-handed top-order batter. He plays for Karnataka cricket team in domestic cricket. He made his international debut for the India cricket team on 26 December 2018 against Australia at the MCG",
      },
      {
        id: "PrithviShaw",
        label: "Prithvi Shaw",
        period: "2018 - Present",
        role: "Batsman",
        is_ipl: "true",
        is_retired: "false",
        totalWicket: "0",
        totalMatchPlayed: "11",
        description:
          "Prithvi Pankaj Shaw is an Indian cricketer who has played for the Indian cricket team in all formats. In domestic cricket, he plays for Mumbai and Delhi Capitals. Under his captaincy, the Indian team won the 2018 Under-19 World Cup. ",
      },
      {
        id: "TNatarajan",
        label: "T. Natarajan",
        period: "2020 - Present",
        role: "Bowler",
        is_ipl: "true",
        is_retired: "false",
        totalWicket: "13",
        totalMatchPlayed: "7",
        description:
          "Thangarasu Natarajan is an Indian international cricketer. He made his debut for the India cricket team in December 2020. Currently he plays for Sunrisers Hyderabad in the Indian Premier League and for Tamil Nadu in domestic cricket. ",
      },
      {
        id: "KrunalPandya",
        label: "Krunal Pandya",
        period: "2018 - Present",
        role: "All-Rounder",
        is_ipl: "true",
        is_retired: "false",
        totalWicket: "126",
        totalMatchPlayed: "179",
        description:
          "Krunal Himanshu Pandya is an Indian international cricketer also he is the elder brother of Hardik Pandya who has played for Indian cricket team but currently plays for Baroda in domestic cricket and Lucknow Super Giants in the IPL. He is an all-rounder who bats left-handed and bowls slow left-arm orthodox.",
      },
      {
        id: "PrasidhKrishna",
        label: "Prasidh Krishna",
        period: "2021 - Present",
        role: "Bowler",
        is_ipl: "true",
        is_retired: "false",
        totalWicket: "29",
        totalMatchPlayed: "16",
        description:
          "Muralikrishna Prasidh Krishna is an Indian international cricketer who plays for Indian national cricket team. He also plays for Karnataka in domestic cricket and Rajasthan Royals in the Indian Premier League. He is a right-arm fast bowler who bowls consistently at speeds above 145kmph.",
      },
      {
        id: "IshanKishan",
        label: "Ishan Kishan",
        period: "2020 - Present",
        role: "Wicketkeeper",
        is_ipl: "true",
        is_retired: "false",
        totalWicket: "0",
        totalMatchPlayed: "20",
        description:
          "Ishan Kishan is an Indian international cricketer who plays for the Indian national cricket team as a wicket-keeper batsman. He made his international debut in March 2021 against England. He plays for Mumbai Indians in the Indian Premier League and for Jharkhand in domestic cricket.",
      },
      {
        id: "SuryakumarYadav",
        label: "Suryakumar Yadav",
        period: "2021 - Present",
        role: "Batsman",
        is_ipl: "true",
        is_retired: "false",
        totalWicket: "0",
        totalMatchPlayed: "81",
        description:
          "Suryakumar Ashok Yadav is an Indian international cricketer who represents the Indian cricket team in ODI & T20I Formats. For his exceptional batting performances in T20 cricket, he is widely considered as one of the best in this format in the current times.",
      },
      {
        id: "RahulChahar",
        label: "Rahul Chahar",
        period: "2019 - Present",
        role: "Bowler",
        is_ipl: "true",
        is_retired: "false",
        totalWicket: "10",
        totalMatchPlayed: "7",
        description:
          "Rahul Desraj Chahar is an Indian cricketer who plays for Rajasthan in domestic cricket and Punjab Kings in the Indian Premier League. He made his international debut for India in August 2019.",
      },
      {
        id: "KrishnappaGowtham",
        label: "Krishnappa Gowtham",
        period: "2017 - Present",
        role: "All-Rounder",
        is_ipl: "true",
        is_retired: "false",
        totalWicket: "32",
        totalMatchPlayed: "49",
        description:
          "Krishnappa Gowtham is an Indian cricketer who plays for Karnataka. He made his international debut for India in July 2021. His father M. Krishnappa represented Karnataka in kabaddi.",
      },
      {
        id: "NitishRana",
        label: "Nitish Rana",
        period: "2016 - Present",
        role: "Batsman",
        is_ipl: "true",
        is_retired: "false",
        totalWicket: "29",
        totalMatchPlayed: "153",
        description:
          "Nitish Rana is an Indian cricketer who is the captain of Delhi in domestic cricket and Kolkata Knight Riders in the Indian Premier League. He is an attacking left-handed batsman and an effective off spin bowler. ",
      },
      {
        id: "ChetanSakariya",
        label: "Chetan Sakariya",
        period: "2021 - Present",
        role: "Bowler",
        is_ipl: "true",
        is_retired: "false",
        totalWicket: "",
        totalMatchPlayed: "",
        description:
          "Chetan Sakariya is an Indian international cricketer who has played for Indian cricket team but currently plays for Saurashtra in domestic cricket. He made his international debut for the India cricket team in July 2021.",
      },
      {
        id: "SanjuSamson",
        label: "Sanju Samson",
        period: "2015 - Present",
        role: "Wicketkeeper",
        is_ipl: "true",
        is_retired: "false",
        totalWicket: "0",
        totalMatchPlayed: "254",
        description:
          "Sanju Viswanath Samson is an Indian international cricketer, who captains Kerala in domestic cricket, Kerala Tigers in Kerala Premier League T20 and Rajasthan Royals in the Indian Premier League.",
      },
      {
        id: "VenkateshIyer",
        label: "Venkatesh Iyer",
        period: "2021 - Present",
        role: "All-Rounder",
        is_ipl: "true",
        is_retired: "false",
        totalWicket: "5",
        totalMatchPlayed: "11",
        description:
          "Venkatesh Iyer is an Indian cricketer who plays for Madhya Pradesh in domestic cricket and Kolkata Knight Riders in the Indian Premier League.",
      },
      {
        id: "DeepakHooda",
        label: "Deepak Hooda",
        period: "2016 - present",
        role: "All-Rounder",
        is_ipl: "true",
        is_retired: "false",
        totalWicket: "8",
        totalMatchPlayed: "14",
        description:
          "Deepak Jagbir Hooda is an Indian International cricketer who plays for the Indian cricket team. He also plays in the Indian Premier League for Lucknow Super Giants and Rajasthan in the domestic cricket. He is an all-rounder who bats right-handed and bowls right-arm off break.",
      },
      {
        id: "AveshKhan",
        label: "Avesh Khan",
        period: "2021 - Present",
        role: "Bowler",
        is_ipl: "true",
        is_retired: "false",
        totalWicket: "97",
        totalMatchPlayed: "77",
        description:
          "Avesh Khan is an Indian international cricketer. In December 2015 he was named in India's squad for the 2016 Under-19 Cricket World Cup. He made his international debut for the Indian cricket team in February 2022. ",
      },
      {
        id: "RuturajGaikwad",
        label: "Ruturaj Gaikwad",
        period: "2020 - Present",
        role: "Batsman",
        is_ipl: "true",
        is_retired: "false",
        totalWicket: "0",
        totalMatchPlayed: "14",
        description:
          "Ruturaj Dashrat Gaikwad is an Indian international cricketer who plays for Maharashtra team in domestic cricket and for the Chennai Super Kings in the Indian Premier League. He made his international debut for the India cricket team in July 2021 against Sri Lanka. He was the leading run-scorer in the 2021 IPL season. ",
      },
      {
        id: "ShahbazAhmed",
        label: "Shahbaz Ahmed",
        period: "2021 - Present",
        role: "All-Rounder",
        is_ipl: "true",
        is_retired: "false",
        totalWicket: "49",
        totalMatchPlayed: "65",
        description:
          "Shahbaz Ahmed is an Indian international cricketer who plays for the Indian cricket team. He made his international debut on 9 October, 2022. He plays for Royal Challengers Bangalore in the Indian Premier League and Bengal in domestic cricket. He is a bowling all-rounder who bats left-handed. ",
      },
      {
        id: "ArshdeepSingh",
        label: "Arshdeep Singh",
        period: "2019 - Present",
        role: "Bowler",
        is_ipl: "true",
        is_retired: "false",
        totalWicket: "41",
        totalMatchPlayed: "29",
        description:
          "Arshdeep Singh is an Indian professional cricketer who plays for the India national cricket team. In Indian domestic cricket, he plays for Punjab and for Punjab Kings in the Indian Premier League. Arshdeep is a left-arm medium-fast bowler and left-handed lower order batter. ",
      },
      {
        id: "UmranMalik",
        label: "Umran Malik",
        period: "2021 - Present",
        role: "Bowler",
        is_ipl: "true",
        is_retired: "false",
        totalWicket: "24",
        totalMatchPlayed: "18",
        description:
          "Umran Malik is an Indian international cricketer who plays for the Indian cricket team in limited-overs cricket as a right-arm fast bowler. He debuted for India in June 2022 against Ireland. He plays for Sunrisers Hyderabad in Indian Premier League and Jammu and Kashmir in domestic cricket",
      },
      {
        id: "RaviBishnoi",
        label: "ravi Bishnoi",
        period: "2023-present",
        role: "Bowler",
        is_ipl: "true",
        is_retired: "false",
        totalWicket: "17",
        totalMatchPlayed: "11",
        description:
          "Ravi Bishnoi is an Indian international cricketer. He plays for the Indian cricket team in white ball cricket. He is a Right-arm leg-break bowler. He made his International debut in February 2022. He plays for Lucknow Super Giants in the Indian Premier League and Rajasthan in domestic cricket.",
      },
      {
        id: "KuldeepSen",
        label: "Kuldeep Sen",
        period: "2022-present",
        role: "Bowler",
        is_ipl: "true",
        is_retired: "false",
        totalWicket: "",
        totalMatchPlayed: "",
        description:
          "Kuldeep Rampal Sen is an Indian international cricketer who plays for Madhya Pradesh in domestic cricket and Rajasthan Royals in Indian Premier League. He is a Right-Arm Fast Bowler bowler who regularly bowls speeds above 145kmph. ",
      },
    ],

    links: [
      // cap1 AnilKumble
      { source: "AnilKumble", target: "HarbhajanSingh" },
      { source: "AnilKumble", target: "JavagalSrinath" },
      { source: "AnilKumble", target: "VirenderSehwag" },
      { source: "AnilKumble", target: "VVSLaxman" },
      { source: "AnilKumble", target: "DevangGandhi" },
      { source: "AnilKumble", target: "SameerDighe" },
      { source: "AnilKumble", target: "SridharanSriram" },
      { source: "AnilKumble", target: "HemangBadani" },
      { source: "AnilKumble", target: "AmitBhandari" },
      { source: "AnilKumble", target: "VijayDahiya" },
      { source: "AnilKumble", target: "ZaheerKhan" },
      { source: "AnilKumble", target: "ReetinderSinghSodhi" },
      { source: "AnilKumble", target: "DineshMongia" },
      { source: "AnilKumble", target: "ShivSunderDas" },
      { source: "AnilKumble", target: "DeepDasgupta" },
      { source: "AnilKumble", target: "AjayRatra" },
      { source: "AnilKumble", target: "MohammadKaif" },
      { source: "AnilKumble", target: "SarandeepSingh" },
      { source: "AnilKumble", target: "MSDhoni" },

      // Cap2 RahulDravid
      { source: "RahulDravid", target: "MSDhoni" },
      { source: "RahulDravid", target: "SouravGanguly" },
      { source: "RahulDravid", target: "DineshKarthik" },
      { source: "RahulDravid", target: "VirenderSehwag" },
      { source: "RahulDravid", target: "RobinUthappa" },
      { source: "RahulDravid", target: "YuvrajSingh" },
      { source: "RahulDravid", target: "IrfanPathan" },
      { source: "RahulDravid", target: "AjitAgarkar" },
      { source: "RahulDravid", target: "HarbhajanSingh" },
      { source: "RahulDravid", target: "ZaheerKhan" },
      { source: "RahulDravid", target: "AnilKumble" },
      { source: "RahulDravid", target: "MunafPatel" },
      { source: "RahulDravid", target: "SSreesanth" },
      { source: "RahulDravid", target: "SachinTendulkar" },

      // Cap3 MSDhoni
      { source: "MSDhoni", target: "VirenderSehwag" },
      { source: "MSDhoni", target: "ShikharDhawan" },
      { source: "MSDhoni", target: "SridharanSriram" },
      { source: "MSDhoni", target: "ZaheerKhan" },
      { source: "MSDhoni", target: "YuvrajSingh" },
      { source: "MSDhoni", target: "AshishNehra" },
      { source: "MSDhoni", target: "MohammadKaif" },
      { source: "MSDhoni", target: "SarandeepSingh" },
      { source: "MSDhoni", target: "MuraliKartik" },
      { source: "MSDhoni", target: "JaiPrakashYadav" },
      { source: "MSDhoni", target: "LakshmipathyBalaji" },
      { source: "MSDhoni", target: "ParthivPatel" },
      { source: "MSDhoni", target: "AmitMishra" },
      { source: "MSDhoni", target: "AbhijitKale" },
      { source: "MSDhoni", target: "IrfanPathan" },
      { source: "MSDhoni", target: "RohanGavaskar" },
      { source: "MSDhoni", target: "RameshPowar" },
      { source: "MSDhoni", target: "DineshKarthik" },
      { source: "MSDhoni", target: "JoginderSharma" },
      { source: "MSDhoni", target: "YalakaVenugopalRao" },
      { source: "MSDhoni", target: "RPSingh" },
      { source: "MSDhoni", target: "SSreesanth" },
      { source: "MSDhoni", target: "MunafPatel" },
      { source: "MSDhoni", target: "VRVSingh" },
      { source: "MSDhoni", target: "RobinUthappa" },
      { source: "MSDhoni", target: "WasimJaffer" },
      { source: "MSDhoni", target: "PiyushChawla" },
      { source: "MSDhoni", target: "IshantSharma" },
      { source: "MSDhoni", target: "PraveenKumar" },
      { source: "MSDhoni", target: "ManojTiwary" },
      { source: "MSDhoni", target: "YusufPathan" },
      { source: "MSDhoni", target: "ManpreetGony" },
      { source: "MSDhoni", target: "PragyanOjha" },
      { source: "MSDhoni", target: "SubramaniamBadrinath" },
      { source: "MSDhoni", target: "RavindraJadeja" },
      { source: "MSDhoni", target: "AjitAgarkar" },
      { source: "MSDhoni", target: "HanumaVihari" },
      { source: "MSDhoni", target: "AbhishekNayar" },
      { source: "MSDhoni", target: "SudeepTyagi" },
      { source: "MSDhoni", target: "AbhimanyuMithun" },
      { source: "MSDhoni", target: "MuraliVijay" },
      { source: "MSDhoni", target: "AshokDinda" },
      { source: "MSDhoni", target: "VinayKumar" },
      { source: "MSDhoni", target: "UmeshYadav" },
      { source: "MSDhoni", target: "RavichandranAshwin" },
      { source: "MSDhoni", target: "NamanOjha" },
      { source: "MSDhoni", target: "PankajSingh" },
      { source: "MSDhoni", target: "SaurabhTiwary" },
      { source: "MSDhoni", target: "WriddhimanSaha" },
      { source: "MSDhoni", target: "VarunAaron" },
      { source: "MSDhoni", target: "RahulSharma" },
      { source: "MSDhoni", target: "BhuvneshwarKumar" },
      { source: "MSDhoni", target: "MohammedShami" },
      { source: "MSDhoni", target: "AmbatiRayudu" },
      { source: "MSDhoni", target: "JaydevUnadkat" },
      { source: "MSDhoni", target: "CheteshwarPujara" },
      { source: "MSDhoni", target: "MohitSharma" },
      { source: "MSDhoni", target: "StuartBinny" },
      { source: "MSDhoni", target: "ParvezRasool" },
      { source: "MSDhoni", target: "AxarPatel" },
      { source: "MSDhoni", target: "DhawalKulkarni" },
      { source: "MSDhoni", target: "KarnSharma" },
      { source: "MSDhoni", target: "KedarJadhav" },
      { source: "MSDhoni", target: "ManishPandey" },
      { source: "MSDhoni", target: "BarinderSran" },
      { source: "MSDhoni", target: "RishiDhawan" },
      { source: "MSDhoni", target: "GurkeeratSingh" },
      { source: "MSDhoni", target: "JaspritBumrah" },
      { source: "MSDhoni", target: "YuzvendraChahal" },
      { source: "MSDhoni", target: "KarunNair" },
      { source: "MSDhoni", target: "FaizFazal" },
      { source: "MSDhoni", target: "JayantYadav" },
      { source: "MSDhoni", target: "KuldeepYadav" },
      { source: "MSDhoni", target: "ShardulThakur" },
      { source: "MSDhoni", target: "ShreyasIyer" },
      { source: "MSDhoni", target: "SiddarthKaul" },
      { source: "MSDhoni", target: "KhaleelAhmed" },
      { source: "MSDhoni", target: "DeepakChahar" },
      { source: "MSDhoni", target: "RishabhPant" },
      { source: "MSDhoni", target: "MohammedSiraj" },
      { source: "MSDhoni", target: "VijayShankar" },
      { source: "MSDhoni", target: "ShubmanGill" },
      { source: "MSDhoni", target: "ShivamDube" },
      { source: "MSDhoni", target: "NavdeepSaini" },
      { source: "MSDhoni", target: "MayankAgarwal" },
      { source: "MSDhoni", target: "PrithviShaw" },
      { source: "MSDhoni", target: "TNatarajan" },
      { source: "MSDhoni", target: "KrunalPandya" },
      { source: "MSDhoni", target: "PrasidhKrishna" },
      { source: "MSDhoni", target: "IshanKishan" },
      { source: "MSDhoni", target: "SuryakumarYadav" },
      { source: "MSDhoni", target: "RahulChahar" },
      { source: "MSDhoni", target: "KrishnappaGowtham" },
      { source: "MSDhoni", target: "NitishRana" },
      { source: "MSDhoni", target: "SanjuSamson" },
      { source: "MSDhoni", target: "DeepakHooda" },
      { source: "MSDhoni", target: "RuturajGaikwad" },
      { source: "MSDhoni", target: "RaviBishnoi" },
      { source: "MSDhoni", target: "ArshdeepSingh" },
      { source: "MSDhoni", target: "HarbhajanSingh" },

      // Cap4 SureshRaina
      { source: "SureshRaina", target: "HarbhajanSingh" },
      { source: "SureshRaina", target: "VirenderSehwag" },
      { source: "SureshRaina", target: "ShikharDhawan" },
      { source: "SureshRaina", target: "ZaheerKhan" },
      { source: "SureshRaina", target: "YuvrajSingh" },
      { source: "SureshRaina", target: "AshishNehra" },
      { source: "SureshRaina", target: "MuraliKartik" },
      { source: "SureshRaina", target: "LakshmipathyBalaji" },
      { source: "SureshRaina", target: "ParthivPatel" },
      { source: "SureshRaina", target: "AmitMishra" },
      { source: "SureshRaina", target: "IrfanPathan" },
      { source: "SureshRaina", target: "RameshPowar" },
      { source: "SureshRaina", target: "DineshKarthik" },
      { source: "SureshRaina", target: "JoginderSharma" },
      { source: "SureshRaina", target: "YalakaVenugopalRao" },
      { source: "SureshRaina", target: "RPSingh" },
      { source: "SureshRaina", target: "SSreesanth" },
      { source: "SureshRaina", target: "MunafPatel" },
      { source: "SureshRaina", target: "RobinUthappa" },
      { source: "SureshRaina", target: "WasimJaffer" },
      { source: "SureshRaina", target: "PiyushChawla" },
      { source: "SureshRaina", target: "IshantSharma" },
      { source: "SureshRaina", target: "PraveenKumar" },
      { source: "SureshRaina", target: "ManojTiwary" },
      { source: "SureshRaina", target: "YusufPathan" },
      { source: "SureshRaina", target: "ManpreetGony" },
      { source: "SureshRaina", target: "PragyanOjha" },
      { source: "SureshRaina", target: "SubramaniamBadrinath" },
      { source: "SureshRaina", target: "RavindraJadeja" },
      { source: "SureshRaina", target: "AjitAgarkar" },
      { source: "SureshRaina", target: "AbhishekNayar" },
      { source: "SureshRaina", target: "SudeepTyagi" },
      { source: "SureshRaina", target: "MuraliVijay" },
      { source: "SureshRaina", target: "AshokDinda" },
      { source: "SureshRaina", target: "VinayKumar" },
      { source: "SureshRaina", target: "UmeshYadav" },
      { source: "SureshRaina", target: "RavichandranAshwin" },
      { source: "SureshRaina", target: "NamanOjha" },
      { source: "SureshRaina", target: "PankajSingh" },
      { source: "SureshRaina", target: "WriddhimanSaha" },
      { source: "SureshRaina", target: "BhuvneshwarKumar" },
      { source: "SureshRaina", target: "MohammedShami" },
      { source: "SureshRaina", target: "AmbatiRayudu" },
      { source: "SureshRaina", target: "JaydevUnadkat" },
      { source: "SureshRaina", target: "CheteshwarPujara" },
      { source: "SureshRaina", target: "StuartBinny" },
      { source: "SureshRaina", target: "ParvezRasool" },
      { source: "SureshRaina", target: "AxarPatel" },
      { source: "SureshRaina", target: "KedarJadhav" },
      { source: "SureshRaina", target: "ManishPandey" },
      { source: "SureshRaina", target: "JaspritBumrah" },
      { source: "SureshRaina", target: "YuzvendraChahal" },
      { source: "SureshRaina", target: "DeepakChahar" },
      { source: "SureshRaina", target: "MohammedSiraj" },
      { source: "SureshRaina", target: "VijayShankar" },
      { source: "SureshRaina", target: "RahulChahar" },
      { source: "SureshRaina", target: "DeepakHooda" },
      // Cap5 GautamGambhir

      { source: "GautamGambhir", target: "HarbhajanSingh" },
      { source: "GautamGambhir", target: "JavagalSrinath" },
      { source: "GautamGambhir", target: "VirenderSehwag" },
      { source: "GautamGambhir", target: "VVSLaxman" },
      { source: "GautamGambhir", target: "ShikharDhawan" },
      { source: "GautamGambhir", target: "SridharanSriram" },
      { source: "GautamGambhir", target: "HemangBadani" },
      { source: "GautamGambhir", target: "ZaheerKhan" },
      { source: "GautamGambhir", target: "YuvrajSingh" },
      { source: "GautamGambhir", target: "DineshMongia" },
      { source: "GautamGambhir", target: "AshishNehra" },
      { source: "GautamGambhir", target: "SanjayBangar" },
      { source: "GautamGambhir", target: "MohammadKaif" },
      { source: "GautamGambhir", target: "MuraliKartik" },
      { source: "GautamGambhir", target: "LakshmipathyBalaji" },
      { source: "GautamGambhir", target: "ParthivPatel" },
      { source: "GautamGambhir", target: "AmitMishra" },
      { source: "GautamGambhir", target: "IrfanPathan" },
      { source: "GautamGambhir", target: "RameshPowar" },
      { source: "GautamGambhir", target: "DineshKarthik" },
      { source: "GautamGambhir", target: "JoginderSharma" },
      { source: "GautamGambhir", target: "YalakaVenugopalRao" },
      { source: "GautamGambhir", target: "RPSingh" },
      { source: "GautamGambhir", target: "SSreesanth" },
      { source: "GautamGambhir", target: "MunafPatel" },
      { source: "GautamGambhir", target: "VRVSingh" },
      { source: "GautamGambhir", target: "RobinUthappa" },
      { source: "GautamGambhir", target: "WasimJaffer" },
      { source: "GautamGambhir", target: "PiyushChawla" },
      { source: "GautamGambhir", target: "IshantSharma" },
      { source: "GautamGambhir", target: "PraveenKumar" },
      { source: "GautamGambhir", target: "ManojTiwary" },
      { source: "GautamGambhir", target: "YusufPathan" },
      { source: "GautamGambhir", target: "ManpreetGony" },
      { source: "GautamGambhir", target: "PragyanOjha" },
      { source: "GautamGambhir", target: "SubramaniamBadrinath" },
      { source: "GautamGambhir", target: "RavindraJadeja" },
      { source: "GautamGambhir", target: "AjitAgarkar" },
      { source: "GautamGambhir", target: "AbhishekNayar" },
      { source: "GautamGambhir", target: "AbhimanyuMithun" },
      { source: "GautamGambhir", target: "MuraliVijay" },
      { source: "GautamGambhir", target: "AshokDinda" },
      { source: "GautamGambhir", target: "VinayKumar" },
      { source: "GautamGambhir", target: "UmeshYadav" },
      { source: "GautamGambhir", target: "RavichandranAshwin" },
      { source: "GautamGambhir", target: "NamanOjha" },
      { source: "GautamGambhir", target: "PankajSingh" },
      { source: "GautamGambhir", target: "WriddhimanSaha" },
      { source: "GautamGambhir", target: "CheteshwarPujara" },

      // Cap6 ViratKohli
      { source: "ViratKohli", target: "HarbhajanSingh" },
      { source: "ViratKohli", target: "VirenderSehwag" },
      { source: "ViratKohli", target: "ShikharDhawan" },
      { source: "ViratKohli", target: "ZaheerKhan" },
      { source: "ViratKohli", target: "YuvrajSingh" },
      { source: "ViratKohli", target: "AshishNehra" },
      { source: "ViratKohli", target: "MuraliKartik" },
      { source: "ViratKohli", target: "LakshmipathyBalaji" },
      { source: "ViratKohli", target: "ParthivPatel" },
      { source: "ViratKohli", target: "AmitMishra" },
      { source: "ViratKohli", target: "IrfanPathan" },
      { source: "ViratKohli", target: "DineshKarthik" },
      { source: "ViratKohli", target: "RPSingh" },
      { source: "ViratKohli", target: "SSreesanth" },
      { source: "ViratKohli", target: "MunafPatel" },
      { source: "ViratKohli", target: "RobinUthappa" },
      { source: "ViratKohli", target: "WasimJaffer" },
      { source: "ViratKohli", target: "PiyushChawla" },
      { source: "ViratKohli", target: "IshantSharma" },
      { source: "ViratKohli", target: "PraveenKumar" },
      { source: "ViratKohli", target: "ManojTiwary" },
      { source: "ViratKohli", target: "YusufPathan" },
      { source: "ViratKohli", target: "ManpreetGony" },
      { source: "ViratKohli", target: "PragyanOjha" },
      { source: "ViratKohli", target: "SubramaniamBadrinath" },
      { source: "ViratKohli", target: "RavindraJadeja" },
      { source: "ViratKohli", target: "AbhishekNayar" },
      { source: "ViratKohli", target: "MuraliVijay" },
      { source: "ViratKohli", target: "AshokDinda" },
      { source: "ViratKohli", target: "VinayKumar" },
      { source: "ViratKohli", target: "UmeshYadav" },
      { source: "ViratKohli", target: "RavichandranAshwin" },
      { source: "ViratKohli", target: "NamanOjha" },
      { source: "ViratKohli", target: "SaurabhTiwary" },
      { source: "ViratKohli", target: "WriddhimanSaha" },
      { source: "ViratKohli", target: "VarunAaron" },
      { source: "ViratKohli", target: "RahulSharma" },
      { source: "ViratKohli", target: "BhuvneshwarKumar" },
      { source: "ViratKohli", target: "MohammedShami" },
      { source: "ViratKohli", target: "AmbatiRayudu" },
      { source: "ViratKohli", target: "JaydevUnadkat" },
      { source: "ViratKohli", target: "CheteshwarPujara" },
      { source: "ViratKohli", target: "StuartBinny" },
      { source: "ViratKohli", target: "AxarPatel" },
      { source: "ViratKohli", target: "DhawalKulkarni" },
      { source: "ViratKohli", target: "KarnSharma" },
      { source: "ViratKohli", target: "KedarJadhav" },
      { source: "ViratKohli", target: "ManishPandey" },
      { source: "ViratKohli", target: "GurkeeratSingh" },
      { source: "ViratKohli", target: "JaspritBumrah" },
      { source: "ViratKohli", target: "YuzvendraChahal" },
      { source: "ViratKohli", target: "KarunNair" },
      { source: "ViratKohli", target: "FaizFazal" },
      { source: "ViratKohli", target: "JayantYadav" },
      { source: "ViratKohli", target: "KuldeepYadav" },
      { source: "ViratKohli", target: "ShardulThakur" },
      { source: "ViratKohli", target: "ShreyasIyer" },
      { source: "ViratKohli", target: "SiddarthKaul" },
      { source: "ViratKohli", target: "KhaleelAhmed" },
      { source: "ViratKohli", target: "DeepakChahar" },
      { source: "ViratKohli", target: "RishabhPant" },
      { source: "ViratKohli", target: "MohammedSiraj" },
      { source: "ViratKohli", target: "VijayShankar" },
      { source: "ViratKohli", target: "ShubmanGill" },
      { source: "ViratKohli", target: "ShivamDube" },
      { source: "ViratKohli", target: "NavdeepSaini" },
      { source: "ViratKohli", target: "MayankAgarwal" },
      { source: "ViratKohli", target: "PrithviShaw" },
      { source: "ViratKohli", target: "TNatarajan" },
      { source: "ViratKohli", target: "KrunalPandya" },
      { source: "ViratKohli", target: "PrasidhKrishna" },
      { source: "ViratKohli", target: "IshanKishan" },
      { source: "ViratKohli", target: "SuryakumarYadav" },
      { source: "ViratKohli", target: "RahulChahar" },
      { source: "ViratKohli", target: "KrishnappaGowtham" },
      { source: "ViratKohli", target: "NitishRana" },
      { source: "ViratKohli", target: "ChetanSakariya" },
      { source: "ViratKohli", target: "SanjuSamson" },
      { source: "ViratKohli", target: "VenkateshIyer" },
      { source: "ViratKohli", target: "DeepakHooda" },
      { source: "ViratKohli", target: "AveshKhan" },
      { source: "ViratKohli", target: "RuturajGaikwad" },
      { source: "ViratKohli", target: "RaviBishnoi" },
      { source: "ViratKohli", target: "ShahbazAhmed" },
      { source: "ViratKohli", target: "ArshdeepSingh" },
      { source: "ViratKohli", target: "UmranMalik" },
      { source: "ViratKohli", target: "KuldeepSen" },

      // Cap7 AjinkyaRahane
      { source: "AjinkyaRahane", target: "HarbhajanSingh" },
      { source: "AjinkyaRahane", target: "VirenderSehwag" },
      { source: "AjinkyaRahane", target: "ShikharDhawan" },
      { source: "AjinkyaRahane", target: "ZaheerKhan" },
      { source: "AjinkyaRahane", target: "YuvrajSingh" },
      { source: "AjinkyaRahane", target: "AshishNehra" },
      { source: "AjinkyaRahane", target: "MohammadKaif" },
      { source: "AjinkyaRahane", target: "MuraliKartik" },
      { source: "AjinkyaRahane", target: "LakshmipathyBalaji" },
      { source: "AjinkyaRahane", target: "ParthivPatel" },
      { source: "AjinkyaRahane", target: "AmitMishra" },
      { source: "AjinkyaRahane", target: "IrfanPathan" },
      { source: "AjinkyaRahane", target: "DineshKarthik" },
      { source: "AjinkyaRahane", target: "RPSingh" },
      { source: "AjinkyaRahane", target: "SSreesanth" },
      { source: "AjinkyaRahane", target: "MunafPatel" },
      { source: "AjinkyaRahane", target: "RobinUthappa" },
      { source: "AjinkyaRahane", target: "WasimJaffer" },
      { source: "AjinkyaRahane", target: "PiyushChawla" },
      { source: "AjinkyaRahane", target: "IshantSharma" },
      { source: "AjinkyaRahane", target: "PraveenKumar" },
      { source: "AjinkyaRahane", target: "ManojTiwary" },
      { source: "AjinkyaRahane", target: "YusufPathan" },
      { source: "AjinkyaRahane", target: "PragyanOjha" },
      { source: "AjinkyaRahane", target: "RavindraJadeja" },
      { source: "AjinkyaRahane", target: "HanumaVihari" },
      { source: "AjinkyaRahane", target: "MuraliVijay" },
      { source: "AjinkyaRahane", target: "AshokDinda" },
      { source: "AjinkyaRahane", target: "VinayKumar" },
      { source: "AjinkyaRahane", target: "UmeshYadav" },
      { source: "AjinkyaRahane", target: "RavichandranAshwin" },
      { source: "AjinkyaRahane", target: "NamanOjha" },
      { source: "AjinkyaRahane", target: "SaurabhTiwary" },
      { source: "AjinkyaRahane", target: "WriddhimanSaha" },
      { source: "AjinkyaRahane", target: "VarunAaron" },
      { source: "AjinkyaRahane", target: "RahulSharma" },
      { source: "AjinkyaRahane", target: "BhuvneshwarKumar" },
      { source: "AjinkyaRahane", target: "MohammedShami" },
      { source: "AjinkyaRahane", target: "AmbatiRayudu" },
      { source: "AjinkyaRahane", target: "JaydevUnadkat" },
      { source: "AjinkyaRahane", target: "CheteshwarPujara" },
      { source: "AjinkyaRahane", target: "MohitSharma" },
      { source: "AjinkyaRahane", target: "StuartBinny" },
      { source: "AjinkyaRahane", target: "AxarPatel" },
      { source: "AjinkyaRahane", target: "DhawalKulkarni" },
      { source: "AjinkyaRahane", target: "KarnSharma" },
      { source: "AjinkyaRahane", target: "KedarJadhav" },
      { source: "AjinkyaRahane", target: "ManishPandey" },
      { source: "AjinkyaRahane", target: "BarinderSran" },
      { source: "AjinkyaRahane", target: "RishiDhawan" },
      { source: "AjinkyaRahane", target: "GurkeeratSingh" },
      { source: "AjinkyaRahane", target: "JaspritBumrah" },
      { source: "AjinkyaRahane", target: "YuzvendraChahal" },
      { source: "AjinkyaRahane", target: "KarunNair" },
      { source: "AjinkyaRahane", target: "FaizFazal" },
      { source: "AjinkyaRahane", target: "JayantYadav" },
      { source: "AjinkyaRahane", target: "KuldeepYadav" },
      { source: "AjinkyaRahane", target: "ShardulThakur" },
      { source: "AjinkyaRahane", target: "ShreyasIyer" },
      { source: "AjinkyaRahane", target: "SiddarthKaul" },
      { source: "AjinkyaRahane", target: "KhaleelAhmed" },
      { source: "AjinkyaRahane", target: "DeepakChahar" },
      { source: "AjinkyaRahane", target: "RishabhPant" },
      { source: "AjinkyaRahane", target: "MohammedSiraj" },
      { source: "AjinkyaRahane", target: "VijayShankar" },
      { source: "AjinkyaRahane", target: "ShubmanGill" },
      { source: "AjinkyaRahane", target: "ShivamDube" },
      { source: "AjinkyaRahane", target: "NavdeepSaini" },
      { source: "AjinkyaRahane", target: "MayankAgarwal" },
      { source: "AjinkyaRahane", target: "PrithviShaw" },
      { source: "AjinkyaRahane", target: "TNatarajan" },
      { source: "AjinkyaRahane", target: "KrunalPandya" },
      { source: "AjinkyaRahane", target: "PrasidhKrishna" },
      { source: "AjinkyaRahane", target: "IshanKishan" },
      { source: "AjinkyaRahane", target: "SuryakumarYadav" },
      { source: "AjinkyaRahane", target: "RahulChahar" },
      { source: "AjinkyaRahane", target: "KrishnappaGowtham" },
      { source: "AjinkyaRahane", target: "NitishRana" },
      { source: "AjinkyaRahane", target: "ChetanSakariya" },
      { source: "AjinkyaRahane", target: "SanjuSamson" },
      { source: "AjinkyaRahane", target: "VenkateshIyer" },
      { source: "AjinkyaRahane", target: "DeepakHooda" },
      { source: "AjinkyaRahane", target: "AveshKhan" },
      { source: "AjinkyaRahane", target: "RuturajGaikwad" },
      { source: "AjinkyaRahane", target: "RaviBishnoi" },
      { source: "AjinkyaRahane", target: "ShahbazAhmed" },
      { source: "AjinkyaRahane", target: "ArshdeepSingh" },
      { source: "AjinkyaRahane", target: "UmranMalik" },
      { source: "AjinkyaRahane", target: "KuldeepSen" },

      // Cap8 RohitSharma
      { source: "RohitSharma", target: "HarbhajanSingh" },
      { source: "RohitSharma", target: "VirenderSehwag" },
      { source: "RohitSharma", target: "ShikharDhawan" },
      { source: "RohitSharma", target: "ZaheerKhan" },
      { source: "RohitSharma", target: "YuvrajSingh" },
      { source: "RohitSharma", target: "AshishNehra" },
      { source: "RohitSharma", target: "MohammadKaif" },
      { source: "RohitSharma", target: "MuraliKartik" },
      { source: "RohitSharma", target: "ParthivPatel" },
      { source: "RohitSharma", target: "AmitMishra" },
      { source: "RohitSharma", target: "IrfanPathan" },
      { source: "RohitSharma", target: "DineshKarthik" },
      { source: "RohitSharma", target: "RPSingh" },
      { source: "RohitSharma", target: "SSreesanth" },
      { source: "RohitSharma", target: "MunafPatel" },
      { source: "RohitSharma", target: "RobinUthappa" },
      { source: "RohitSharma", target: "WasimJaffer" },
      { source: "RohitSharma", target: "IshantSharma" },
      { source: "RohitSharma", target: "PraveenKumar" },
      { source: "RohitSharma", target: "ManojTiwary" },
      { source: "RohitSharma", target: "RavindraJadeja" },
      { source: "RohitSharma", target: "HanumaVihari" },
      { source: "RohitSharma", target: "MuraliVijay" },
      { source: "RohitSharma", target: "UmeshYadav" },
      { source: "RohitSharma", target: "RavichandranAshwin" },
      { source: "RohitSharma", target: "NamanOjha" },
      { source: "RohitSharma", target: "SaurabhTiwary" },
      { source: "RohitSharma", target: "WriddhimanSaha" },
      { source: "RohitSharma", target: "VarunAaron" },
      { source: "RohitSharma", target: "RahulSharma" },
      { source: "RohitSharma", target: "BhuvneshwarKumar" },
      { source: "RohitSharma", target: "MohammedShami" },
      { source: "RohitSharma", target: "AmbatiRayudu" },
      { source: "RohitSharma", target: "JaydevUnadkat" },
      { source: "RohitSharma", target: "CheteshwarPujara" },
      { source: "RohitSharma", target: "MohitSharma" },
      { source: "RohitSharma", target: "StuartBinny" },
      { source: "RohitSharma", target: "ParvezRasool" },
      { source: "RohitSharma", target: "AxarPatel" },
      { source: "RohitSharma", target: "DhawalKulkarni" },
      { source: "RohitSharma", target: "KarnSharma" },
      { source: "RohitSharma", target: "KedarJadhav" },
      { source: "RohitSharma", target: "ManishPandey" },
      { source: "RohitSharma", target: "BarinderSran" },
      { source: "RohitSharma", target: "RishiDhawan" },
      { source: "RohitSharma", target: "GurkeeratSingh" },
      { source: "RohitSharma", target: "JaspritBumrah" },
      { source: "RohitSharma", target: "YuzvendraChahal" },
      { source: "RohitSharma", target: "KarunNair" },
      { source: "RohitSharma", target: "FaizFazal" },
      { source: "RohitSharma", target: "JayantYadav" },
      { source: "RohitSharma", target: "KuldeepYadav" },
      { source: "RohitSharma", target: "ShardulThakur" },
      { source: "RohitSharma", target: "ShreyasIyer" },
      { source: "RohitSharma", target: "SiddarthKaul" },
      { source: "RohitSharma", target: "KhaleelAhmed" },
      { source: "RohitSharma", target: "DeepakChahar" },
      { source: "RohitSharma", target: "RishabhPant" },
      { source: "RohitSharma", target: "MohammedSiraj" },
      { source: "RohitSharma", target: "VijayShankar" },
      { source: "RohitSharma", target: "ShubmanGill" },
      { source: "RohitSharma", target: "ShivamDube" },
      { source: "RohitSharma", target: "NavdeepSaini" },
      { source: "RohitSharma", target: "MayankAgarwal" },
      { source: "RohitSharma", target: "PrithviShaw" },
      { source: "RohitSharma", target: "TNatarajan" },
      { source: "RohitSharma", target: "KrunalPandya" },
      { source: "RohitSharma", target: "PrasidhKrishna" },
      { source: "RohitSharma", target: "IshanKishan" },
      { source: "RohitSharma", target: "SuryakumarYadav" },
      { source: "RohitSharma", target: "RahulChahar" },
      { source: "RohitSharma", target: "KrishnappaGowtham" },
      { source: "RohitSharma", target: "NitishRana" },
      { source: "RohitSharma", target: "ChetanSakariya" },
      { source: "RohitSharma", target: "SanjuSamson" },
      { source: "RohitSharma", target: "VenkateshIyer" },
      { source: "RohitSharma", target: "DeepakHooda" },
      { source: "RohitSharma", target: "AveshKhan" },
      { source: "RohitSharma", target: "RuturajGaikwad" },
      { source: "RohitSharma", target: "RaviBishnoi" },
      { source: "RohitSharma", target: "ShahbazAhmed" },
      { source: "RohitSharma", target: "ArshdeepSingh" },
      { source: "RohitSharma", target: "UmranMalik" },
      { source: "RohitSharma", target: "RaviBishnoi" },
      { source: "RohitSharma", target: "KuldeepSen" },

      // Cap9 ShikharDhawan
      { source: "ShikharDhawan", target: "HarbhajanSingh" },
      { source: "ShikharDhawan", target: "VirenderSehwag" },
      { source: "ShikharDhawan", target: "ZaheerKhan" },
      { source: "ShikharDhawan", target: "YuvrajSingh" },
      { source: "ShikharDhawan", target: "AshishNehra" },
      { source: "ShikharDhawan", target: "AmitMishra" },
      { source: "ShikharDhawan", target: "DineshKarthik" },
      { source: "ShikharDhawan", target: "RobinUthappa" },
      { source: "ShikharDhawan", target: "IshantSharma" },
      { source: "ShikharDhawan", target: "RavindraJadeja" },
      { source: "ShikharDhawan", target: "HanumaVihari" },
      { source: "ShikharDhawan", target: "MuraliVijay" },
      { source: "ShikharDhawan", target: "UmeshYadav" },
      { source: "ShikharDhawan", target: "RavichandranAshwin" },
      { source: "ShikharDhawan", target: "NamanOjha" },
      { source: "ShikharDhawan", target: "SaurabhTiwary" },
      { source: "ShikharDhawan", target: "WriddhimanSaha" },
      { source: "ShikharDhawan", target: "BhuvneshwarKumar" },
      { source: "ShikharDhawan", target: "MohammedShami" },
      { source: "ShikharDhawan", target: "AmbatiRayudu" },
      { source: "ShikharDhawan", target: "JaydevUnadkat" },
      { source: "ShikharDhawan", target: "CheteshwarPujara" },
      { source: "ShikharDhawan", target: "MohitSharma" },
      { source: "ShikharDhawan", target: "StuartBinny" },
      { source: "ShikharDhawan", target: "ParvezRasool" },
      { source: "ShikharDhawan", target: "AxarPatel" },
      { source: "ShikharDhawan", target: "DhawalKulkarni" },
      { source: "ShikharDhawan", target: "KarnSharma" },
      { source: "ShikharDhawan", target: "KedarJadhav" },
      { source: "ShikharDhawan", target: "ManishPandey" },
      { source: "ShikharDhawan", target: "RishiDhawan" },
      { source: "ShikharDhawan", target: "GurkeeratSingh" },
      { source: "ShikharDhawan", target: "JaspritBumrah" },
      { source: "ShikharDhawan", target: "YuzvendraChahal" },
      { source: "ShikharDhawan", target: "KarunNair" },
      { source: "ShikharDhawan", target: "JayantYadav" },
      { source: "ShikharDhawan", target: "KuldeepYadav" },
      { source: "ShikharDhawan", target: "ShardulThakur" },
      { source: "ShikharDhawan", target: "ShreyasIyer" },
      { source: "ShikharDhawan", target: "KhaleelAhmed" },
      { source: "ShikharDhawan", target: "DeepakChahar" },
      { source: "ShikharDhawan", target: "RishabhPant" },
      { source: "ShikharDhawan", target: "MohammedSiraj" },
      { source: "ShikharDhawan", target: "VijayShankar" },
      { source: "ShikharDhawan", target: "ShivamDube" },
      { source: "ShikharDhawan", target: "NavdeepSaini" },
      { source: "ShikharDhawan", target: "MayankAgarwal" },
      { source: "ShikharDhawan", target: "PrithviShaw" },
      { source: "ShikharDhawan", target: "TNatarajan" },
      { source: "ShikharDhawan", target: "KrunalPandya" },
      { source: "ShikharDhawan", target: "PrasidhKrishna" },
      { source: "ShikharDhawan", target: "IshanKishan" },
      { source: "ShikharDhawan", target: "SuryakumarYadav" },
      { source: "ShikharDhawan", target: "RahulChahar" },
      { source: "ShikharDhawan", target: "KrishnappaGowtham" },
      { source: "ShikharDhawan", target: "NitishRana" },
      { source: "ShikharDhawan", target: "ChetanSakariya" },
      { source: "ShikharDhawan", target: "SanjuSamson" },
      { source: "ShikharDhawan", target: "VenkateshIyer" },
      { source: "ShikharDhawan", target: "DeepakHooda" },
      { source: "ShikharDhawan", target: "AveshKhan" },
      { source: "ShikharDhawan", target: "RuturajGaikwad" },
      { source: "ShikharDhawan", target: "RaviBishnoi" },
      { source: "ShikharDhawan", target: "ArshdeepSingh" },
      { source: "ShikharDhawan", target: "UmranMalik" },
      { source: "ShikharDhawan", target: "RaviBishnoi" },
      { source: "ShikharDhawan", target: "KuldeepSen" },
      // Cap10 KL_Rahul
      { source: "KL_Rahul", target: "HarbhajanSingh" },
      { source: "KL_Rahul", target: "VirenderSehwag" },
      { source: "KL_Rahul", target: "ShikharDhawan" },
      { source: "KL_Rahul", target: "AmitMishra" },
      { source: "KL_Rahul", target: "DineshKarthik" },
      { source: "KL_Rahul", target: "IshantSharma" },
      { source: "KL_Rahul", target: "RavindraJadeja" },
      { source: "KL_Rahul", target: "HanumaVihari" },
      { source: "KL_Rahul", target: "MuraliVijay" },
      { source: "KL_Rahul", target: "UmeshYadav" },
      { source: "KL_Rahul", target: "RavichandranAshwin" },
      { source: "KL_Rahul", target: "SaurabhTiwary" },
      { source: "KL_Rahul", target: "BhuvneshwarKumar" },
      { source: "KL_Rahul", target: "MohammedShami" },
      { source: "KL_Rahul", target: "AmbatiRayudu" },
      { source: "KL_Rahul", target: "JaydevUnadkat" },
      { source: "KL_Rahul", target: "CheteshwarPujara" },
      { source: "KL_Rahul", target: "AxarPatel" },
      { source: "KL_Rahul", target: "DhawalKulkarni" },
      { source: "KL_Rahul", target: "KedarJadhav" },
      { source: "KL_Rahul", target: "ManishPandey" },
      { source: "KL_Rahul", target: "GurkeeratSingh" },
      { source: "KL_Rahul", target: "JaspritBumrah" },
      { source: "KL_Rahul", target: "YuzvendraChahal" },
      { source: "KL_Rahul", target: "JayantYadav" },
      { source: "KL_Rahul", target: "KuldeepYadav" },
      { source: "KL_Rahul", target: "ShardulThakur" },
      { source: "KL_Rahul", target: "ShreyasIyer" },
      { source: "KL_Rahul", target: "KhaleelAhmed" },
      { source: "KL_Rahul", target: "DeepakChahar" },
      { source: "KL_Rahul", target: "RishabhPant" },
      { source: "KL_Rahul", target: "MohammedSiraj" },
      { source: "KL_Rahul", target: "VijayShankar" },
      { source: "KL_Rahul", target: "ShubmanGill" },
      { source: "KL_Rahul", target: "ShivamDube" },
      { source: "KL_Rahul", target: "NavdeepSaini" },
      { source: "KL_Rahul", target: "MayankAgarwal" },
      { source: "KL_Rahul", target: "PrithviShaw" },
      { source: "KL_Rahul", target: "TNatarajan" },
      { source: "KL_Rahul", target: "KrunalPandya" },
      { source: "KL_Rahul", target: "PrasidhKrishna" },
      { source: "KL_Rahul", target: "IshanKishan" },
      { source: "KL_Rahul", target: "SuryakumarYadav" },
      { source: "KL_Rahul", target: "RahulChahar" },
      { source: "KL_Rahul", target: "KrishnappaGowtham" },
      { source: "KL_Rahul", target: "NitishRana" },
      { source: "KL_Rahul", target: "ChetanSakariya" },
      { source: "KL_Rahul", target: "SanjuSamson" },
      { source: "KL_Rahul", target: "VenkateshIyer" },
      { source: "KL_Rahul", target: "DeepakHooda" },
      { source: "KL_Rahul", target: "AveshKhan" },
      { source: "KL_Rahul", target: "RuturajGaikwad" },
      { source: "KL_Rahul", target: "RaviBishnoi" },
      { source: "KL_Rahul", target: "ArshdeepSingh" },
      { source: "KL_Rahul", target: "UmranMalik" },
      { source: "KL_Rahul", target: "RaviBishnoi" },
      { source: "KL_Rahul", target: "KuldeepSen" },

      // Cap11 HardikPandya
      { source: "HardikPandya", target: "HarbhajanSingh" },
      { source: "HardikPandya", target: "ShikharDhawan" },
      { source: "HardikPandya", target: "AmitMishra" },
      { source: "HardikPandya", target: "DineshKarthik" },
      { source: "HardikPandya", target: "IshantSharma" },
      { source: "HardikPandya", target: "RavindraJadeja" },
      { source: "HardikPandya", target: "HanumaVihari" },
      { source: "HardikPandya", target: "MuraliVijay" },
      { source: "HardikPandya", target: "UmeshYadav" },
      { source: "HardikPandya", target: "RavichandranAshwin" },
      { source: "HardikPandya", target: "SaurabhTiwary" },
      { source: "HardikPandya", target: "WriddhimanSaha" },
      { source: "HardikPandya", target: "BhuvneshwarKumar" },
      { source: "HardikPandya", target: "MohammedShami" },
      { source: "HardikPandya", target: "AmbatiRayudu" },
      { source: "HardikPandya", target: "JaydevUnadkat" },
      { source: "HardikPandya", target: "CheteshwarPujara" },
      { source: "HardikPandya", target: "AxarPatel" },
      { source: "HardikPandya", target: "DhawalKulkarni" },
      { source: "HardikPandya", target: "KedarJadhav" },
      { source: "HardikPandya", target: "ManishPandey" },
      { source: "HardikPandya", target: "GurkeeratSingh" },
      { source: "HardikPandya", target: "JaspritBumrah" },
      { source: "HardikPandya", target: "YuzvendraChahal" },
      { source: "HardikPandya", target: "KarunNair" },
      { source: "HardikPandya", target: "JayantYadav" },
      { source: "HardikPandya", target: "KuldeepYadav" },
      { source: "HardikPandya", target: "ShardulThakur" },
      { source: "HardikPandya", target: "ShreyasIyer" },
      { source: "HardikPandya", target: "SiddarthKaul" },
      { source: "HardikPandya", target: "KhaleelAhmed" },
      { source: "HardikPandya", target: "DeepakChahar" },
      { source: "HardikPandya", target: "RishabhPant" },
      { source: "HardikPandya", target: "MohammedSiraj" },
      { source: "HardikPandya", target: "VijayShankar" },
      { source: "HardikPandya", target: "ShubmanGill" },
      { source: "HardikPandya", target: "ShivamDube" },
      { source: "HardikPandya", target: "NavdeepSaini" },
      { source: "HardikPandya", target: "MayankAgarwal" },
      { source: "HardikPandya", target: "PrithviShaw" },
      { source: "HardikPandya", target: "TNatarajan" },
      { source: "HardikPandya", target: "KrunalPandya" },
      { source: "HardikPandya", target: "PrasidhKrishna" },
      { source: "HardikPandya", target: "IshanKishan" },
      { source: "HardikPandya", target: "SuryakumarYadav" },
      { source: "HardikPandya", target: "RahulChahar" },
      { source: "HardikPandya", target: "KrishnappaGowtham" },
      { source: "HardikPandya", target: "NitishRana" },
      { source: "HardikPandya", target: "ChetanSakariya" },
      { source: "HardikPandya", target: "SanjuSamson" },
      { source: "HardikPandya", target: "VenkateshIyer" },
      { source: "HardikPandya", target: "DeepakHooda" },
      { source: "HardikPandya", target: "AveshKhan" },
      { source: "HardikPandya", target: "RuturajGaikwad" },
      { source: "HardikPandya", target: "RaviBishnoi" },
      { source: "HardikPandya", target: "ShahbazAhmed" },
      { source: "HardikPandya", target: "ArshdeepSingh" },
      { source: "HardikPandya", target: "UmranMalik" },
      { source: "HardikPandya", target: "RaviBishnoi" },
      { source: "HardikPandya", target: "KuldeepSen" },

      // Cap12 SouravGanguly

      { source: "SouravGanguly", target: "RahulDravid" },
      { source: "SouravGanguly", target: "VirenderSehwag" },
      { source: "SouravGanguly", target: "VVSLaxman" },
      { source: "SouravGanguly", target: "AnilKumble" },
      { source: "SouravGanguly", target: "HarbhajanSingh" },
      { source: "SouravGanguly", target: "ZaheerKhan" },
      { source: "SouravGanguly", target: "YuvrajSingh" },
      { source: "SouravGanguly", target: "AshishNehra" },
      { source: "SouravGanguly", target: "AjitAgarkar" },
      { source: "SouravGanguly", target: "DineshMongia" },
      { source: "SouravGanguly", target: "ParthivPatel" },
      { source: "SouravGanguly", target: "IrfanPathan" },
      { source: "SouravGanguly", target: "MohammadKaif" },
      { source: "SouravGanguly", target: "RahulSanghvi" },
      { source: "SouravGanguly", target: "HemangBadani" },
      { source: "SouravGanguly", target: "SachinTendulkar" },

      // Cap 13
      { source: "SachinTendulkar", target: "HarbhajanSingh" },
      { source: "SachinTendulkar", target: "JavagalSrinath" },
      { source: "SachinTendulkar", target: "VirenderSehwag" },
      { source: "SachinTendulkar", target: "VVSLaxman" },
      { source: "SachinTendulkar", target: "ShikharDhawan" },
      { source: "SachinTendulkar", target: "SridharanSriram" },
      { source: "SachinTendulkar", target: "HemangBadani" },
      { source: "SachinTendulkar", target: "AmitBhandari" },
      { source: "SachinTendulkar", target: "VijayDahiya" },
      { source: "SachinTendulkar", target: "ZaheerKhan" },
      { source: "SachinTendulkar", target: "YuvrajSingh" },
      { source: "SachinTendulkar", target: "ReetinderSinghSodhi" },
      { source: "SachinTendulkar", target: "DineshMongia" },
      { source: "SachinTendulkar", target: "AshishNehra" },
      { source: "SachinTendulkar", target: "ShivSunderDas" },
      { source: "SachinTendulkar", target: "DeepDasgupta" },
      { source: "SachinTendulkar", target: "AjayRatra" },
      { source: "SachinTendulkar", target: "SanjayBangar" },
      { source: "SachinTendulkar", target: "MohammadKaif" },
      { source: "SachinTendulkar", target: "SarandeepSingh" },
      { source: "SachinTendulkar", target: "MuraliKartik" },
      { source: "SachinTendulkar", target: "TinuYohannan" },
      { source: "SachinTendulkar", target: "LakshmipathyBalaji" },
      { source: "SachinTendulkar", target: "ParthivPatel" },
      { source: "SachinTendulkar", target: "AavishkarSalvi" },
      { source: "SachinTendulkar", target: "AmitMishra" },
      { source: "SachinTendulkar", target: "AbhijitKale" },
      { source: "SachinTendulkar", target: "IrfanPathan" },
      { source: "SachinTendulkar", target: "RohanGavaskar" },
      { source: "SachinTendulkar", target: "RameshPowar" },
      { source: "SachinTendulkar", target: "DineshKarthik" },
      { source: "SachinTendulkar", target: "JoginderSharma" },
      { source: "SachinTendulkar", target: "YalakaVenugopalRao" },
      { source: "SachinTendulkar", target: "RPSingh" },
      { source: "SachinTendulkar", target: "SSreesanth" },
      { source: "SachinTendulkar", target: "MunafPatel" },
      { source: "SachinTendulkar", target: "VRVSingh" },
      { source: "SachinTendulkar", target: "RobinUthappa" },
      { source: "SachinTendulkar", target: "WasimJaffer" },
      { source: "SachinTendulkar", target: "PiyushChawla" },
      { source: "SachinTendulkar", target: "IshantSharma" },
      { source: "SachinTendulkar", target: "PraveenKumar" },
      { source: "SachinTendulkar", target: "ManojTiwary" },
      { source: "SachinTendulkar", target: "YusufPathan" },
      { source: "SachinTendulkar", target: "ManpreetGony" },
      { source: "SachinTendulkar", target: "PragyanOjha" },
      { source: "SachinTendulkar", target: "SubramaniamBadrinath" },
      { source: "SachinTendulkar", target: "RavindraJadeja" },
      { source: "SachinTendulkar", target: "AjitAgarkar" },
      { source: "SachinTendulkar", target: "RahulSanghvi" },
      { source: "SachinTendulkar", target: "AbhishekNayar" },
      { source: "SachinTendulkar", target: "SudeepTyagi" },
      { source: "SachinTendulkar", target: "AbhimanyuMithun" },
      { source: "SachinTendulkar", target: "MuraliVijay" },
      { source: "SachinTendulkar", target: "AshokDinda" },
      { source: "SachinTendulkar", target: "VinayKumar" },
      { source: "SachinTendulkar", target: "UmeshYadav" },
      { source: "SachinTendulkar", target: "RavichandranAshwin" },
      { source: "SachinTendulkar", target: "NamanOjha" },
      { source: "SachinTendulkar", target: "PankajSingh" },
      { source: "SachinTendulkar", target: "WriddhimanSaha" },

      // Cap14
      { source: "VirenderSehwag", target: "HarbhajanSingh" },
      { source: "VirenderSehwag", target: "JavagalSrinath" },
      { source: "VirenderSehwag", target: "VVSLaxman" },
      { source: "VirenderSehwag", target: "ShikharDhawan" },
      { source: "VirenderSehwag", target: "SridharanSriram" },
      { source: "VirenderSehwag", target: "HemangBadani" },
      { source: "VirenderSehwag", target: "ZaheerKhan" },
      { source: "VirenderSehwag", target: "YuvrajSingh" },
      { source: "VirenderSehwag", target: "ReetinderSinghSodhi" },
      { source: "VirenderSehwag", target: "DineshMongia" },
      { source: "VirenderSehwag", target: "AshishNehra" },
      { source: "VirenderSehwag", target: "DeepDasgupta" },
      { source: "VirenderSehwag", target: "AjayRatra" },
      { source: "VirenderSehwag", target: "SanjayBangar" },
      { source: "VirenderSehwag", target: "MohammadKaif" },
      { source: "VirenderSehwag", target: "SarandeepSingh" },
      { source: "VirenderSehwag", target: "MuraliKartik" },
      { source: "VirenderSehwag", target: "JaiPrakashYadav" },
      { source: "VirenderSehwag", target: "LakshmipathyBalaji" },
      { source: "VirenderSehwag", target: "ParthivPatel" },
      { source: "VirenderSehwag", target: "AmitMishra" },
      { source: "VirenderSehwag", target: "AbhijitKale" },
      { source: "VirenderSehwag", target: "IrfanPathan" },
      { source: "VirenderSehwag", target: "RohanGavaskar" },
      { source: "VirenderSehwag", target: "RameshPowar" },
      { source: "VirenderSehwag", target: "DineshKarthik" },
      { source: "VirenderSehwag", target: "JoginderSharma" },
      { source: "VirenderSehwag", target: "YalakaVenugopalRao" },
      { source: "VirenderSehwag", target: "RPSingh" },
      { source: "VirenderSehwag", target: "SSreesanth" },
      { source: "VirenderSehwag", target: "MunafPatel" },
      { source: "VirenderSehwag", target: "VRVSingh" },
      { source: "VirenderSehwag", target: "RobinUthappa" },
      { source: "VirenderSehwag", target: "WasimJaffer" },
      { source: "VirenderSehwag", target: "PiyushChawla" },
      { source: "VirenderSehwag", target: "IshantSharma" },
      { source: "VirenderSehwag", target: "PraveenKumar" },
      { source: "VirenderSehwag", target: "ManojTiwary" },
      { source: "VirenderSehwag", target: "YusufPathan" },
      { source: "VirenderSehwag", target: "ManpreetGony" },
      { source: "VirenderSehwag", target: "PragyanOjha" },
      { source: "VirenderSehwag", target: "SubramaniamBadrinath" },
      { source: "VirenderSehwag", target: "RavindraJadeja" },
      { source: "VirenderSehwag", target: "AjitAgarkar" },
      { source: "VirenderSehwag", target: "RahulSanghvi" },
      { source: "VirenderSehwag", target: "AbhishekNayar" },
      { source: "VirenderSehwag", target: "SudeepTyagi" },
      { source: "VirenderSehwag", target: "AbhimanyuMithun" },
      { source: "VirenderSehwag", target: "MuraliVijay" },
      { source: "VirenderSehwag", target: "AshokDinda" },
      { source: "VirenderSehwag", target: "VinayKumar" },
      { source: "VirenderSehwag", target: "UmeshYadav" },
      { source: "VirenderSehwag", target: "RavichandranAshwin" },
      { source: "VirenderSehwag", target: "NamanOjha" },
      { source: "VirenderSehwag", target: "PankajSingh" },
      { source: "VirenderSehwag", target: "WriddhimanSaha" },
      { source: "VirenderSehwag", target: "CheteshwarPujara" },
    ],
  };
  const [highlightedNode, setHighlightedNode] = useState(null);
  const [clickedNode, setClickedNode] = useState(null);
  const [isolatedNode, setIsolatedNode] = useState(null);
  const [clickedNodeInfo, setClickedNodeInfo] = useState(null);
  const [connectingNodes, setConnectingNodes] = useState([]);
  const [cameraPosition, setCameraPosition] = useState({ x: 0, y: 0, z: 1000 });
  const [filterRole, setFilterRole] = useState([]);
  const [filteredNode, setFilteredNode] = useState([]);
  const [clickedFilteredNode, setClickedFilteredNode] = useState([]);
  const [selectedNode1Size, setSelectedNode1Size] = useState(3);
  const [selectedNode2Size, setSelectedNode2Size] = useState(3);
  const [selectedNode3Size, setSelectedNode3Size] = useState(3);
  const [selectedNode4Size, setSelectedNode4Size] = useState(10);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [filteredNodesByRole, setFilteredNodesByRole] = useState({
    Batsman: [],
    Bowler: [],
    "All-Rounder": [],
    Wicketkeeper: [],
    "IPL Player": [],
    Retired: [],
    "Not IPL Player": [],
    "Not Retired": [],
  });

  useEffect(() => {
    console.log(clickedNodeInfo, "clickedNodeIfo");
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
    console.log("^^ EVENT ^^ ", event);
    const newValue = event.target.value; // Get the new value from the input element
    setSelectedNode3Size(newValue); // Update the state variable with the new value
  };

  const handleFilterChangeOld = (selectedOptions) => {
    setFilterRole(selectedOptions);
    if (selectedOptions.length && updatedGraphData.nodes.length) {
      const filteredNodes = updatedGraphData.nodes.filter((node) =>
        selectedOptions.some((selected) => {
          if (selected.value === "is_ipl") {
            return node.is_ipl === "true";
          }
          if (selected.value === "is_retired") {
            return node.is_retired === "true";
          }
          return node.role.includes(selected.value);
        })
      );

      setFilteredNode(filteredNodes);

      if (clickedNode && connectingNodes.length) {
        const clickedFilteredNodes = connectingNodes.filter((node) =>
          selectedOptions.some((selected) => {
            if (selected.value === "is_ipl") {
              return node.is_ipl === "true";
            }
            if (selected.value === "is_retired") {
              return node.is_retired === "true";
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
        Batsman: [],
        Bowler: [],
        "All-Rounder": [],
        Wicketkeeper: [],
        "IPL Player": [],
        Retired: [],
        "Not IPL Player": [],
        "Not Retired": [],
      };
      // const nodeColor = roleColors[node.role];

      const filteredNodes = updatedGraphData.nodes.filter((node) =>
        selectedOptions.some((selected) => {
          if (selected.value === "is_ipl") {
            return node.is_ipl === "true";
          }
          if (selected.value === "is_retired") {
            return node.is_retired === "true";
          }
          if (selected.value === "not_ipl") {
            return node.is_ipl == "false";
          }
          if (selected.value === "not_retired") {
            return node.is_retired == "false";
          }
          return node.role.includes(selected.value);
        })
      );

      console.log("Filtered Nodes:", filteredNodes);
      console.log("New Filtered Nodes By Role:", newFilteredNodesByRole);

      // Store data by role
      filteredNodes.forEach((node) => {
        selectedOptions.forEach((selected) => {
          if (node.role.includes(selected.value)) {
            newFilteredNodesByRole[selected.value].push(node);
          }
        });
      });

      // Separate handling for "IPL Player" and "Retired" data
      if (selectedOptions.some((selected) => selected.value === "is_ipl")) {
        newFilteredNodesByRole["IPL Player"] = filteredNodes.filter(
          (node) => node.is_ipl === "true"
        );
      }

      if (selectedOptions.some((selected) => selected.value === "is_retired")) {
        newFilteredNodesByRole["Retired"] = filteredNodes.filter(
          (node) => node.is_retired === "true"
        );
      }

      setFilteredNode(filteredNodes);
      setFilteredNodesByRole(newFilteredNodesByRole);
    } else {
      setFilteredNode([]);
      setFilteredNodesByRole({
        Batsman: [],
        Bowler: [],
        "All-Rounder": [],
        Wicketkeeper: [],
        "IPL Player": [],
        Retired: [],
        "Not IPL Player": [],
        "Not Retired": [],
      });
    }
  };

  const allRounderNodes = filteredNodesByRole["All-Rounder"];
  const iplTrue = filteredNodesByRole["IPL Player"];
  const retiredTrue = filteredNodesByRole["Retired"];

  // console.log("^^  DATA IN OBJECT FORM ^^ ", filteredNodesByRole)
  // console.log("^^ clickedFilteredNode ^^ ",clickedFilteredNode)

  const getLinkedNodeColor = (
    node,
    highlightedNode,
    filteredNodes,
    links,
    filteredNodesByRole
  ) => {
    // console.log("^^ NODE ^^ ",node)
    // console.log("^^ highlightedNode ^^ ",highlightedNode)
    console.log("^^ filteredNodes ^^ ", filteredNodesByRole);
    // console.log("^^ links ^^ ",links)
    if (
      node.id === highlightedNode ||
      links.some(
        (link) => link.source === highlightedNode && link.target === node.id
      )
    ) {
      if (
        filteredNodes &&
        filteredNodes.some((filter_node) => filter_node.id === node.id)
      ) {
        return "green";
      }
      return "red"; // Linked node color
    } else if (
      filteredNodes &&
      filteredNodes.some((filter_node) => filter_node.id === node.id)
    ) {
      if (filteredNodesByRole["Batsman"].length > 0) {
        // Change the color for all nodes belonging to the 'Batsman' role
        if (node.role.includes("Batsman")) {
          return "OrangeRed";
        }
      }

      if (filteredNodesByRole["Bowler"].length > 0) {
        // Change the color for all nodes belonging to the 'Bowler' role
        if (node.role.includes("Bowler")) {
          return "Aqua";
        }
      }

      if (filteredNodesByRole["Wicketkeeper"].length > 0) {
        // Change the color for all nodes belonging to the 'Wicketkeeper' role
        if (node.role.includes("Wicketkeeper")) {
          return "blue";
        }
      }

      if (filteredNodesByRole["All-Rounder"].length > 0) {
        // Change the color for all nodes belonging to the 'All-Rounder' role
        if (node.role.includes("All-Rounder")) {
          return "pink";
        }
      }

      if (filteredNodesByRole["IPL Player"].length > 0) {
        // Change the color for all nodes belonging to the 'IPL Player' role
        if (node.is_ipl === "true") {
          return "brown"; // Change color for nodes that meet the 'is_ipl' condition
        }
      }

      if (filteredNodesByRole["Retired"].length > 0) {
        // Change the color for all nodes belonging to the 'Retired' role
        if (node.is_retired === "true") {
          return "black"; // Change color for nodes that meet the 'is_ipl' condition
        }
      }
      return "purple"; // Default color for filtered nodes
    }
    return "#3F3F3F"; // Non-linked node color
  };

  const getLinkedNodeSize = (
    node,
    highlightedNode,
    filteredNodes,
    links,
    isolatedNode
  ) => {
    if (
      node.id === highlightedNode ||
      links.some(
        (link) => link.source === highlightedNode && link.target === node.id
      )
    ) {
      if (
        filteredNodes &&
        filteredNodes.some((filter_node) => filter_node.id === node.id)
      ) {
        return selectedNode2Size;
      }
      return selectedNode1Size; // Linked node color
    } else if (
      filteredNodes &&
      filteredNodes.some((filter_node) => filter_node.id === node.id)
    ) {
      return selectedNode3Size;
    }
    // else if(node.id === isolatedNode){
    //   return selectedNode4Size
    // }
    return 1; // Non-linked node color
  };

  const handleNodeClick = (node) => {
    console.log("^^ HANDLE NODE CLICK ^^ ", node);
    if (node.id === isolatedNode) {
      setIsolatedNode(null);
      setHighlightedNode(null);
      setClickedNodeInfo(null);
      setClickedNode(null);
      setConnectingNodes([]);
      // setFilteredNode(null);
    } else {
      setClickedNode(node);
      setHighlightedNode(node.id);
      setIsolatedNode(node.id);
      autoMoveCamera(node);

      const linkedNodes = updatedGraphData.links
        .filter(
          (link) => link.source.id === node.id || link.target.id === node.id
        )
        .map((link) =>
          link.source.id === node.id ? link.target : link.source
        );

      if (filterRole.length > 0 && linkedNodes.length) {
        const clickedFilteredNodes = linkedNodes.filter((node) =>
          filterRole.some((selected) => node.role.includes(selected.value))
        );

        setClickedFilteredNode(clickedFilteredNodes);
      } else {
        setClickedFilteredNode([]);
      }
      const connectingNodes = linkedNodes.map((nodeId) =>
        updatedGraphData.nodes.find((node) => node.id === nodeId)
      );

      setClickedNodeInfo({ node, linkedNodes });
      setConnectingNodes(linkedNodes);
    }
  };

  const handleNodeHover = (node) => {
    // Handle node hover if needed
  };

  const handleLinkHover = (link) => {
    // Handle link hover if needed
  };

  const getNodeLabel = (node) => {
    return `${node.label}\n(${node.period})`;
  };

  const getLinkLabel = (link) => {
    return "Link Label";
  };

  const nodeSize = (node) => {
    const labelLength = node.label.length;
    return Math.max(1);
  };

  const getNodeColor = (node, highlightedNode, links) => {
    if (
      node.id === highlightedNode ||
      links.some(
        (link) => link.source === highlightedNode && link.target === node.id
      )
    ) {
      return "red"; // Linked node color
    }
    return "#3F3F3F"; // Non-linked node color
  };

  const getNodeStyle = (node, highlightedNode, links) => {
    const color = getNodeColor(node, highlightedNode, links);

    const style = {
      // display: color === 'red' ? 'block' : 'none',
      color: "black",
      padding: "4px 0",
      listStyle: "decimal inside", // Use 'decimal' for numbers
      // marginLeft: '10px', // Add some left margin for better alignment
      fontSize: "12px",
    };

    return style;
  };

  const autoMoveCamera = (node) => {
    const { x, y, z } = node;
    setCameraPosition({ x, y, z: z + 500 });
  };

  // const updatedGraphData = filterGraphDataByRole(graphData, filterRole);
  const updatedGraphData = {
    nodes: [...graphDatas.nodes],
    links: [...graphDatas.links],
  };
  const roleOptions = [
    { value: "Batsman", label: "Batsman" },
    { value: "Bowler", label: "Bowler" },
    { value: "All-Rounder", label: "All-Rounder" },
    { value: "Wicketkeeper", label: "Wicketkeeper" },
    { value: "is_ipl", label: "IPL Player" },
    { value: "is_retired", label: "Retired" },
  ];
  const labelData = [
    { label: "Team Mate", count: connectingNodes.length, color: "TeamMate" },
    {
      label: "Filtered Team",
      count: clickedFilteredNode.length,
      color: "FilteredTeamMate",
    },
    {
      label: "Filtered Players",
      count: filteredNode.length,
      color: "filterCount",
    },
    {
      label: "Bowler",
      count: filteredNodesByRole.Bowler.length,
      color: "filterCountBol",
    },
    {
      label: "All Rounder",
      count: allRounderNodes.length,
      color: "filterCountAll",
    },
    {
      label: "Batsman",
      count: filteredNodesByRole.Batsman.length,
      color: "filterCountBat",
    },
    {
      label: "Wicketkeeper",
      count: filteredNodesByRole.Wicketkeeper.length,
      color: "filterCountWik",
    },
    { label: "IPL Player", count: iplTrue.length, color: "filterCountIpl" },
    {
      label: "Retired Player",
      count: retiredTrue.length,
      color: "filterCountRet",
    },
  ];

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      borderRadius: "8px",
      borderColor: state.isFocused ? "#007BFF" : "#ced4da",
      boxShadow: state.isFocused
        ? "0 0 0 0.2rem rgba(0, 123, 255, 0.25)"
        : "none",
    }),
    menu: (provided) => ({
      ...provided,
      borderRadius: "8px",
      marginTop: "4px",
    }),
  };

  return (
    <div className="App">
      <header className="header">
        <div className="logo"></div>
      </header>
      <ForceGraph3D
        graphData={updatedGraphData}
        nodeColor={(node) =>
          node.id === isolatedNode
            ? "Purple" // Isolated node color
            : getLinkedNodeColor(
                node,
                highlightedNode,
                filteredNode,
                updatedGraphData.links,
                filteredNodesByRole
              )
        }
        nodeVal={(node) =>
          node.id === isolatedNode
            ? 15 // Isolated node color
            : getLinkedNodeSize(
                node,
                highlightedNode,
                filteredNode,
                updatedGraphData.links,
                isolatedNode
              )
        }
        nodeLabel={getNodeLabel}
        linkLabel={getLinkLabel}
        // nodeVal={nodeSize}
        onNodeClick={handleNodeClick}
        onNodeHover={handleNodeHover}
        onLinkHover={handleLinkHover}
        backgroundColor="white"
        linkColor={() => "blue"}
        linkWidth={0.2}
      />
      {
        <div className="node-info">
          <div className="" style={{ height: "43vw", marginTop: "40px" }}>
            <div className="filter-container">
              <label className="filter-label">Filter by Role:</label>
              <Select
                isMulti
                classNamePrefix="filter-select"
                options={roleOptions}
                value={filterRole}
                onChange={handleFilterChange}
                style={customStyles}
              />
            </div>
            {clickedNodeInfo && (
              <div className="node-info-content">
                <h2>Clicked Node: ( Captian )</h2>
                <p style={{ color: "blue", fontSize: "20px" }}>
                  {clickedNodeInfo.node.label}
                </p>
                <p style={{ color: "#000", fontSize: "14px" }}>
                  {clickedNodeInfo.node.description}
                </p>
                <p
                  style={{ color: "#000", fontSize: "14px", fontWeight: "500" }}
                >
                  Total Wicket {clickedNodeInfo.node.totalWicket}
                </p>
                <p
                  style={{ color: "#000", fontSize: "14px", fontWeight: "500" }}
                >
                  Total Match Played {clickedNodeInfo.node.totalMatchPlayed}
                </p>

                <h3>
                  Lined Nodes: ( Players )
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
                <ul
                  className="all-nodes-list"
                  style={{
                    "overflow-y": "scroll",
                    height: "12vw",
                    background: "#e3e3e3",
                  }}
                >
                  {updatedGraphData.nodes.map((node) => (
                    <li
                      key={node.id}
                      style={getNodeStyle(
                        node,
                        highlightedNode,
                        updatedGraphData.links
                      )
                    }
                      data-description={node.description}
                      data-total-match-played={node.totalMatchPlayed} 
                      data-total-wicket={node.totalWicket} 
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      // style={{ cursor: "pointer" }}
                    >
                      {node.label}
                      {`  ( ${node.role} )`}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {clickedNodeInfo &&
              filterRole.length > 0 &&
              clickedFilteredNode.length && (
                <>
                  <div className="node-info-content">
                    <h3>
                      Filtered Nodes: ( Players )
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
                    <ul
                      className="all-nodes-list"
                      style={{
                        "overflow-y": "scroll",
                        height: "12vw",
                        background: "#e3e3e3",
                      }}
                    >
                      {clickedFilteredNode.map((node) => (
                        <li
                          key={node.id}
                          style={getNodeStyle(
                            node,
                            highlightedNode,
                            updatedGraphData.links
                          )}
                          data-description={node.description}
                          data-total-match-played={node.totalMatchPlayed} 
                          data-total-wicket={node.totalWicket} 
                          onMouseEnter={handleMouseEnter}
                          onMouseLeave={handleMouseLeave}
                          // style={{ cursor: "pointer" }}
                        >
                          {node.label}
                          {`  ( ${node.role} )`}
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
            {filterRole.length > 0 && filteredNode.length && (
              <div className="node-info-content">
                <h3>
                  Filtered List: (All Players)
                  <div className="range-input-container">
                    <input
                      type="range"
                      min="0"
                      max="10"
                      step="1"
                      className="custom-range-input"
                      value={selectedNode3Size}
                      onChange={handleSliderChange3}
                    />
                  </div>
                </h3>
                <ul
                  className="all-nodes-list filtered-list"
                  style={{
                    overflowY: "scroll",
                    height: "12vw",
                    background: "#e3e3e3",
                  }}
                >
                  {filteredNode.map((node) => (
                    <li
                      key={node.id}
                      data-description={node.description}
                      data-total-match-played={node.totalMatchPlayed} 
                      data-total-wicket={node.totalWicket} 
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      style={{ cursor: "pointer" }}
                    >
                      {node.label}
                      {`  ( ${node.role} )`}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {tooltip.visible && (
              <div
                className="custom-tooltip"
                style={{
                  left: `${tooltip.x}px`,
                  top: `${tooltip.y}px`,
                  width: "100%",
                  background: "white",
                  border: "2px solid hsl(0, 0%, 80%)",
                  position: "absolute",
                  padding: "10px",
                  zIndex: 9999,
                  borderRadius: "5px",
                  fontFamily:
                    'source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace',
                }}
              >
                {tooltip.description}
                <p
                  style={{ color: "#000", fontSize: "14px", fontWeight: "500" }}
                >
                  Total Wicket :{tooltip.totalWicket}
                </p>
                <p
                  style={{ color: "#000", fontSize: "14px", fontWeight: "500" }}
                >
                  Total Match Played : {tooltip.totalMatchPlayed}
                </p>
              </div>
            )}

            {filteredNodesByRole.Bowler.length > 0 &&
              filteredNodesByRole.Bowler.length && (
                <>
                  <div className="node-info-content">
                    <h3>Bowler</h3>
                    <ul
                      className="all-nodes-list filtered-list"
                      style={{
                        "overflow-y": "scroll",
                        height: "12vw",
                        background: "#e3e3e3",
                      }}
                    >
                      {filteredNodesByRole.Bowler.map((node) => (
                        <li
                          key={node.id}
                          data-description={node.description}
                          data-total-match-played={node.totalMatchPlayed} 
                          data-total-wicket={node.totalWicket} 
                          onMouseEnter={handleMouseEnter}
                          onMouseLeave={handleMouseLeave}
                          style={{ cursor: "pointer" }}
                        >
                          {node.label}
                          {`  ( ${node.role} )`}
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}

            {allRounderNodes.length > 0 && allRounderNodes.length && (
              <>
                <div className="node-info-content">
                  <h3>All Rounder</h3>
                  <ul
                    className="all-nodes-list filtered-list"
                    style={{
                      "overflow-y": "scroll",
                      height: "12vw",
                      background: "#e3e3e3",
                    }}
                  >
                    {allRounderNodes.map((node) => (
                      <li
                        key={node.id}
                        data-description={node.description}
                        data-total-match-played={node.totalMatchPlayed} 
                        data-total-wicket={node.totalWicket} 
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        style={{ cursor: "pointer" }}
                      >
                        {node.label}
                        {`  ( ${node.role} )`}
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}

            {filteredNodesByRole.Batsman.length > 0 &&
              filteredNodesByRole.Batsman.length && (
                <div className="node-info-content">
                  <h3>Batsman</h3>
                  <ul
                    className="all-nodes-list filtered-list"
                    style={{
                      overflowY: "scroll",
                      height: "12vw",
                      background: "#e3e3e3",
                    }}
                  >
                    {filteredNodesByRole.Batsman.map((node) => (
                      <li
                        key={node.id}
                        data-description={node.description}
                        data-total-match-played={node.totalMatchPlayed} 
                        data-total-wicket={node.totalWicket} 
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        style={{ cursor: "pointer" }}
                      >
                        {node.label}
                        {`  ( ${node.role} )`}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            {filteredNodesByRole.Wicketkeeper.length > 0 &&
              filteredNodesByRole.Wicketkeeper.length && (
                <>
                  <div className="node-info-content">
                    <h3>Wicketkeeper</h3>
                    <ul
                      className="all-nodes-list filtered-list"
                      style={{
                        "overflow-y": "scroll",
                        height: "12vw",
                        background: "#e3e3e3",
                      }}
                    >
                      {filteredNodesByRole.Wicketkeeper.map((node) => (
                        <li
                          key={node.id}
                          data-description={node.description}
                          data-total-match-played={node.totalMatchPlayed} 
                          data-total-wicket={node.totalWicket} 
                          onMouseEnter={handleMouseEnter}
                          onMouseLeave={handleMouseLeave}
                          style={{ cursor: "pointer" }}
                        >
                          {node.label}
                          {`  ( ${node.role} )`}
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}

            {/* Extra */}

            {iplTrue.length > 0 && iplTrue.length && (
              <>
                <div className="node-info-content">
                  <h3>IPL Player</h3>
                  <ul
                    className="all-nodes-list filtered-list"
                    style={{
                      "overflow-y": "scroll",
                      height: "12vw",
                      background: "#e3e3e3",
                    }}
                  >
                    {iplTrue.map((node) => (
                      <li
                        key={node.id}
                        data-description={node.description}
                        data-total-match-played={node.totalMatchPlayed} 
                        data-total-wicket={node.totalWicket} 
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        style={{ cursor: "pointer" }}
                      >
                        {node.label}
                        {`  ( ${node.role} )`}
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}

            {retiredTrue.length > 0 && retiredTrue.length && (
              <>
                <div className="node-info-content">
                  <h3>Retired Player</h3>
                  <ul
                    className="all-nodes-list filtered-list"
                    style={{
                      "overflow-y": "scroll",
                      height: "12vw",
                      background: "#e3e3e3",
                    }}
                  >
                    {retiredTrue.map((node) => (
                      <li
                        key={node.id}
                        data-description={node.description}
                        data-total-match-played={node.totalMatchPlayed} 
                        data-total-wicket={node.totalWicket} 
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        style={{ cursor: "pointer" }}
                      >
                        {node.label}
                        {`  ( ${node.role} )`}
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>
      }
      <div className="graph-labels">
        <div className="graph-labels">
          {labelData.map(
            (data) =>
              data.count > 0 && (
                <p className={data.color} key={data.label}>
                  {data.count} {data.label}
                </p>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
