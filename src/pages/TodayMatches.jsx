import React, { useEffect, useState } from "react";

const leagues = [
  {
    name: "الدوري الإنجليزي",
    url: "https://raw.githubusercontent.com/openfootball/football.json/master/2025-26/en.1.json",
  },
  {
    name: "الدوري الألماني",
    url: "https://raw.githubusercontent.com/openfootball/football.json/master/2025-26/de.1.json",
  },
  {
    name: "الدوري الإسباني",
    url: "https://raw.githubusercontent.com/openfootball/football.json/master/2025-26/es.1.json",
  },
  {
    name: "الدوري الإيطالي",
    url: "https://raw.githubusercontent.com/openfootball/football.json/master/2025-26/it.1.json",
  },
  {
    name: "الدوري الفرنسي",
    url: "https://raw.githubusercontent.com/openfootball/football.json/master/2025-26/fr.1.json",
  },
];

function TodayMatches() {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMatches = async () => {
      const allMatches = [];
      const fixedToday = "2025-09-13"; // التاريخ الثابت

      for (const league of leagues) {
        try {
          const response = await fetch(league.url);
          const data = await response.json();

          const todaysMatches = (data.matches || []).filter(
            (match) => match.date === fixedToday
          );

          allMatches.push(
            ...todaysMatches.map((match) => ({
              league: league.name,
              homeTeam: match.team1,
              awayTeam: match.team2,
              date: match.date,
              time: match.time || "TBD",
            }))
          );
        } catch (error) {
          console.error(`Error fetching ${league.name}:`, error);
        }
      }

      setMatches(allMatches);
      setLoading(false);
    };

    fetchMatches();
  }, []);

  if (loading) return <p>⏳ جاري تحميل مباريات اليوم...</p>;

  return (
    <section>
      <h2>مباريات اليوم (13-09-2025)</h2>
      <table border="1" style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead style={{ background: "#f2f2f2" }}>
          <tr>
            <th>🏆 البطولة</th>
            <th>🏠 الفريق المستضيف</th>
            <th>⚽ الفريق الضيف</th>
            <th>📅 التاريخ</th>
            <th>⏰ الوقت</th>
          </tr>
        </thead>
        <tbody>
          {matches.length > 0 ? (
            matches.map((match, index) => (
              <tr key={index}>
                <td>{match.league}</td>
                <td>{match.homeTeam}</td>
                <td>{match.awayTeam}</td>
                <td>{match.date}</td>
                <td>{match.time}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">⚠️ لا توجد مباريات اليوم</td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
  );
}

export default TodayMatches;
